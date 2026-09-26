import type { Metadata } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk, Instrument_Serif } from 'next/font/google';
import { CartProvider } from '@/lib/cart';
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from '@/lib/site';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} — Pure pinda. Pure smaak.`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Pure pinda. Pure smaak.`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/bionutz_logo_original-removebg-hq.png',
        width: 1408,
        height: 768,
        alt: 'BIONUTZ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Pure pinda. Pure smaak.`,
    description: SITE_DESCRIPTION,
    images: ['/images/bionutz_logo_original-removebg-hq.png'],
  },
  icons: {
    icon: [
      { url: '/images/bionutz-favicon-square.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/bionutz-favicon-square.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/images/bionutz-favicon-square.png', type: 'image/png', sizes: '180x180' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${bricolage.variable} ${hanken.variable} ${instrument.variable}`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
