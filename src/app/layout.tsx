import type { Metadata } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk, Instrument_Serif } from 'next/font/google';
import { CartProvider } from '@/lib/cart';
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

export const metadata: Metadata = {
  title: "BIONUTZ — Pure pinda. Pure smaak.",
  description: "Premium pinda's uit Gambia. Puur van oorsprong, eindeloos in mogelijkheden.",
  icons: {
    icon: [{ url: '/brand/favicon.png', type: 'image/png' }],
    apple: [{ url: '/brand/favicon.png', type: 'image/png' }],
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
