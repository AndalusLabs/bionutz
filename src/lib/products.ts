export type Product = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  alt: string;
  href: string;
  badgeTone?: 'dark' | 'tan';
};

// Tijdelijke data. Vervang door een Shopify Storefront query (zie README).
export const products: Product[] = [
  {
    id: 'pindas',
    number: '01',
    title: "PINDA'S",
    description: 'In de schil of gepeld, naturel of geroosterd. De pinda zoals hij is.',
    image: '/images/peanuts-wood.avif',
    alt: "Pinda's in de schil",
    href: '/producten/pindas',
  },
  {
    id: 'pindapasta',
    number: '02',
    title: 'PINDAPASTA',
    description: 'Dezelfde pinda, gemalen. Pindakaas in 250 g en 500 g.',
    image: '/images/peanut-butter.avif',
    imagePosition: '50% 30%',
    alt: 'Pindapasta in de pot',
    href: '/producten/pindapasta',
  },
  {
    id: 'peanut-bars',
    number: '03',
    title: 'PEANUT BARS',
    description: 'Pinda in barvorm. Voor onderweg, in de tas of naast de koffie.',
    image: '/images/peanuts-texture.avif',
    alt: 'Peanut bars',
    href: '/producten/peanut-bars',
    badgeTone: 'tan',
  },
];
