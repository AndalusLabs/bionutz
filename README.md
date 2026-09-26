# BIONUTZ — Next.js storefront

Homepage-ontwerp omgezet naar Next.js (App Router, React 19, TypeScript).

**Productie:** https://www.bionutz.com

## Starten (lokaal)

    npm install
    cp .env.example .env.local   # vul Shopify + site URL in
    npm run dev

Open http://localhost:3000

## Structuur

    src/app/                routes, layout, sitemap, robots, API
    src/components/         UI-secties (Header, Hero, Shop, …)
    src/lib/                products, cart, Shopify helpers, site URL
    public/images/          foto's & logo's

## Omgeving

- Lokaal: `NEXT_PUBLIC_SITE_URL=http://localhost:3000`
- Productie (Vercel): `NEXT_PUBLIC_SITE_URL=https://www.bionutz.com`
- Shopify Admin (waitlist): `SHOPIFY_SHOP_DOMAIN`, `SHOPIFY_CLIENT_ID`, `SHOPIFY_CLIENT_SECRET` — **nooit** `NEXT_PUBLIC_*`

## Shopify

1. Vul `.env.local` volgens `.env.example`.
2. Waitlist: `POST /api/newsletter` → Admin API (tag `BIONUTZ_PRELAUNCH`).
3. Storefront (`src/lib/shopify.ts`) is voorbereid voor catalog/cart later.
