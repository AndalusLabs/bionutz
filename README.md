# BIONUTZ — Next.js storefront

Homepage-ontwerp omgezet naar Next.js (App Router, React 19, TypeScript).

## Starten

    npm install
    npm run dev

Open http://localhost:3000

## Structuur

    src/app/layout.tsx      fonts, metadata, globale CSS
    src/app/page.tsx        homepage, zet de secties samen
    src/app/globals.css     design tokens + alle component-stijlen
    src/components/         Header, Hero, Marquee, ProductGrid, ...
    src/lib/products.ts     productdata (nu lokaal, later Shopify)
    src/lib/shopify.ts      Storefront API client (stub, klaar om te vullen)
    public/images/          foto's
    public/brand/           logo's

## Shopify koppelen

1. Kopieer `.env.example` naar `.env.local` en vul store domain + Storefront access token in.
2. `src/lib/shopify.ts` bevat de fetch-helper met `storefront()`.
3. Vervang de statische array in `src/lib/products.ts` door een Storefront-query
   (`products(first: 8)`) en map het resultaat naar hetzelfde `Product` type —
   de componenten hoeven dan niet te veranderen.
4. Cart: maak `cartCreate` / `cartLinesAdd` mutations aan en vervang de
   cart-teller in `Header.tsx`.

## Design tokens

Alle kleuren staan als CSS-variabelen in `globals.css` onder `:root`.
