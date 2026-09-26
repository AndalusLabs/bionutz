import { NextResponse } from 'next/server';
import { adminGraphql, hasShopifyAdminConfig, PRELAUNCH_TAG } from '@/lib/shopify-admin';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type UserError = { field?: string[] | null; message: string };

type CreateResult = {
  customerCreate: {
    customer: { id: string; email: string | null } | null;
    userErrors: UserError[];
  };
};

type SearchResult = {
  customers: {
    nodes: {
      id: string;
      email: string | null;
      tags: string[];
      emailMarketingConsent: { marketingState: string | null } | null;
    }[];
  };
};

type TagResult = {
  tagsAdd: {
    node: { id: string } | null;
    userErrors: UserError[];
  };
};

type ConsentResult = {
  customerEmailMarketingConsentUpdate: {
    customer: { id: string } | null;
    userErrors: UserError[];
  };
};

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function alreadyExistsError(errors: UserError[]) {
  return errors.some((e) => /already|taken|exists|in use/i.test(e.message));
}

async function findCustomerByEmail(email: string) {
  const data = await adminGraphql<SearchResult>(
    /* GraphQL */ `
      query FindCustomer($q: String!) {
        customers(first: 1, query: $q) {
          nodes {
            id
            email
            tags
            emailMarketingConsent {
              marketingState
            }
          }
        }
      }
    `,
    { q: `email:${email}` }
  );
  return data.customers.nodes[0] ?? null;
}

async function ensureTagAndConsent(customerId: string) {
  const tagRes = await adminGraphql<TagResult>(
    /* GraphQL */ `
      mutation AddTag($id: ID!, $tags: [String!]!) {
        tagsAdd(id: $id, tags: $tags) {
          node { id }
          userErrors { field message }
        }
      }
    `,
    { id: customerId, tags: [PRELAUNCH_TAG] }
  );

  if (tagRes.tagsAdd.userErrors.length) {
    throw new Error(tagRes.tagsAdd.userErrors[0].message);
  }

  const consentRes = await adminGraphql<ConsentResult>(
    /* GraphQL */ `
      mutation SetEmailConsent($input: CustomerEmailMarketingConsentUpdateInput!) {
        customerEmailMarketingConsentUpdate(input: $input) {
          customer { id }
          userErrors { field message }
        }
      }
    `,
    {
      input: {
        customerId,
        emailMarketingConsent: {
          marketingState: 'SUBSCRIBED',
          marketingOptInLevel: 'SINGLE_OPT_IN',
          consentUpdatedAt: new Date().toISOString(),
        },
      },
    }
  );

  if (consentRes.customerEmailMarketingConsentUpdate.userErrors.length) {
    throw new Error(consentRes.customerEmailMarketingConsentUpdate.userErrors[0].message);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Ongeldig verzoek.' }, { status: 400 });
  }

  const emailRaw =
    typeof body === 'object' && body && 'email' in body
      ? String((body as { email: unknown }).email ?? '')
      : '';
  const email = normalizeEmail(emailRaw);

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Vul een geldig e-mailadres in.' },
      { status: 400 }
    );
  }

  if (!hasShopifyAdminConfig()) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Inschrijving is tijdelijk niet beschikbaar. Probeer het later opnieuw.',
      },
      { status: 503 }
    );
  }

  try {
    const existing = await findCustomerByEmail(email);

    if (existing) {
      const hasTag = existing.tags.includes(PRELAUNCH_TAG);
      const isSubscribed =
        existing.emailMarketingConsent?.marketingState === 'SUBSCRIBED';

      if (!hasTag || !isSubscribed) {
        await ensureTagAndConsent(existing.id);
      }

      return NextResponse.json({
        ok: true,
        alreadySubscribed: true,
        message: 'Je staat al op de wachtlijst',
      });
    }

    const created = await adminGraphql<CreateResult>(
      /* GraphQL */ `
        mutation CreateSubscriber($input: CustomerInput!) {
          customerCreate(input: $input) {
            customer { id email }
            userErrors { field message }
          }
        }
      `,
      {
        input: {
          email,
          tags: [PRELAUNCH_TAG],
          emailMarketingConsent: {
            marketingState: 'SUBSCRIBED',
            marketingOptInLevel: 'SINGLE_OPT_IN',
            consentUpdatedAt: new Date().toISOString(),
          },
        },
      }
    );

    const { customer, userErrors } = created.customerCreate;

    if (customer) {
      return NextResponse.json({
        ok: true,
        alreadySubscribed: false,
        message: 'Bedankt! Je hoort als eerste wanneer BIONUTZ live gaat.',
      });
    }

    // Race: created between search and create
    if (alreadyExistsError(userErrors)) {
      const raced = await findCustomerByEmail(email);
      if (raced) {
        await ensureTagAndConsent(raced.id);
        return NextResponse.json({
          ok: true,
          alreadySubscribed: true,
          message: 'Je staat al op de wachtlijst',
        });
      }
    }

    const msg = userErrors[0]?.message || 'Inschrijven mislukt. Probeer het later opnieuw.';
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  } catch (err) {
    console.error('[newsletter]', err);
    return NextResponse.json(
      { ok: false, error: 'Er ging iets mis. Probeer het later opnieuw.' },
      { status: 502 }
    );
  }
}
