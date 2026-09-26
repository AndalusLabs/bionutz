/**
 * Shopify Admin API helpers — SERVER ONLY.
 * Never import from client components. Never use NEXT_PUBLIC_ for these secrets.
 */

const API_VERSION = process.env.SHOPIFY_ADMIN_API_VERSION || '2026-07';
const PRELAUNCH_TAG = 'BIONUTZ_PRELAUNCH';

type GraphQLResponse<T> = { data?: T; errors?: { message: string }[] };

type TokenCache = {
  accessToken: string;
  expiresAt: number;
};

let tokenCache: TokenCache | null = null;

function getShopDomain(): string | undefined {
  const raw =
    process.env.SHOPIFY_SHOP_DOMAIN ||
    process.env.SHOPIFY_STORE_DOMAIN ||
    '';
  return raw.replace(/^https?:\/\//, '').replace(/\/$/, '') || undefined;
}

export function hasShopifyAdminConfig(): boolean {
  return Boolean(
    getShopDomain() &&
      process.env.SHOPIFY_CLIENT_ID &&
      process.env.SHOPIFY_CLIENT_SECRET
  );
}

export { PRELAUNCH_TAG };

/**
 * Obtain a short-lived Admin API token via client credentials grant.
 * https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/client-credentials-grant
 */
async function getAdminAccessToken(): Promise<string> {
  const domain = getShopDomain();
  const clientId = process.env.SHOPIFY_CLIENT_ID;
  const clientSecret = process.env.SHOPIFY_CLIENT_SECRET;

  if (!domain || !clientId || !clientSecret) {
    throw new Error('Shopify Admin env vars ontbreken. Zie .env.example');
  }

  const now = Date.now();
  // Refresh 60s before expiry
  if (tokenCache && tokenCache.expiresAt > now + 60_000) {
    return tokenCache.accessToken;
  }

  const res = await fetch(`https://${domain}/admin/oauth/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(
      `Shopify token request mislukt (${res.status})${text ? ': ' + text.slice(0, 200) : ''}`
    );
  }

  const json = (await res.json()) as {
    access_token?: string;
    expires_in?: number;
    scope?: string;
  };

  if (!json.access_token) {
    throw new Error('Shopify token response mist access_token');
  }

  const expiresInSec = typeof json.expires_in === 'number' ? json.expires_in : 86399;
  tokenCache = {
    accessToken: json.access_token,
    expiresAt: now + expiresInSec * 1000,
  };

  return json.access_token;
}

export async function adminGraphql<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const domain = getShopDomain();
  if (!domain) {
    throw new Error('SHOPIFY_SHOP_DOMAIN ontbreekt. Zie .env.example');
  }

  const accessToken = await getAdminAccessToken();

  const res = await fetch(`https://${domain}/admin/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': accessToken,
    },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store',
  });

  if (!res.ok) {
    // Token might be stale — clear cache once on 401
    if (res.status === 401) tokenCache = null;
    throw new Error('Shopify Admin request mislukt: ' + res.status);
  }

  const json = (await res.json()) as GraphQLResponse<T>;
  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }
  return json.data as T;
}
