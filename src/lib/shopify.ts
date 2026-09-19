const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const API_VERSION = '2025-01';

type GraphQLResponse<T> = { data?: T; errors?: { message: string }[] };

/**
 * Minimale Storefront API client. Vul .env.local en gebruik dit vanuit
 * server components of route handlers.
 */
export async function storefront<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  if (!domain || !token) {
    throw new Error('Shopify env vars ontbreken. Zie .env.example');
  }

  const res = await fetch('https://' + domain + '/api/' + API_VERSION + '/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Shopify request mislukt: ' + res.status);

  const json = (await res.json()) as GraphQLResponse<T>;
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
}

export const PRODUCTS_QUERY = /* GraphQL */ `
  query Products($first: Int = 8) {
    products(first: $first) {
      nodes {
        id
        handle
        title
        description
        featuredImage { url altText }
        priceRange { minVariantPrice { amount currencyCode } }
      }
    }
  }
`;
