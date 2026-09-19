export type Product = {
  id: string;
  handle: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  compareAtPrice?: number;
  size: string;
  image: string;
  imagePosition?: string;
  alt: string;
  href: string;
  badgeTone?: 'dark' | 'tan';
  ingredients: string;
  allergens: string;
  storage: string;
};

export const products: Product[] = [
  {
    id: 'hele-pindas',
    handle: 'hele-pindas',
    number: '01',
    title: "HELE PINDA'S",
    description: "Pure pinda's, vol van smaak. De basis van BIONUTZ.",
    longDescription:
      "Onze hele pinda's zijn de basis van alles wat BIONUTZ maakt. Geselecteerd in Gambia, met een volle, nootachtige smaak. Perfect om zo te snacken, te roosteren of te verwerken in je eigen keuken.",
    price: 5.95,
    size: '200 g',
    image: '/images/BIONUTZ Whole Peanuts.png',
    alt: "Hele pinda's",
    href: '/producten/hele-pindas',
    ingredients: "100% pinda's.",
    allergens: "Bevat pinda's. Kan sporen van andere noten bevatten.",
    storage: 'Koel, droog en donker bewaren.',
  },
  {
    id: 'creamy-pindakaas',
    handle: 'creamy-pindakaas',
    number: '02',
    title: 'CREAMY PINDAKAAS',
    description: 'Zacht, romig en gemaakt met de pinda in de hoofdrol.',
    longDescription:
      'Zachte, romige pindakaas waarin de pinda centraal staat. Geen onnodige toevoegingen — alleen een volle, warme smaak die blijft hangen. Ideaal op brood, in smoothies of gewoon van de lepel.',
    price: 7.95,
    size: '350 g',
    image: '/images/BIONUTZ Creamy Peanut Butter.png',
    alt: 'Creamy pindakaas',
    href: '/producten/creamy-pindakaas',
    ingredients: "100% geroosterde pinda's.",
    allergens: "Bevat pinda's.",
    storage: 'Koel en droog bewaren. Na openen omdraaien of roeren indien nodig.',
  },
  {
    id: 'crunchy-pindakaas',
    handle: 'crunchy-pindakaas',
    number: '03',
    title: 'CRUNCHY PINDAKAAS',
    description: 'Vol en romig, met stukjes pinda voor extra bite.',
    longDescription:
      'Dezelfde rijke pindakaas als onze creamy variant, maar met stukjes pinda voor extra bite. Voor wie tekstuur net zo belangrijk vindt als smaak.',
    price: 7.95,
    size: '350 g',
    image: '/images/BIONUTZ Crunchy Peanut Butter.png',
    alt: 'Crunchy pindakaas',
    href: '/producten/crunchy-pindakaas',
    ingredients: "100% geroosterde pinda's.",
    allergens: "Bevat pinda's.",
    storage: 'Koel en droog bewaren. Na openen omdraaien of roeren indien nodig.',
  },
  {
    id: 'peanut-bars',
    handle: 'peanut-bars',
    number: '04',
    title: 'PEANUT BARS',
    description: 'Pinda in barvorm. Voor onderweg, in de tas of naast de koffie.',
    longDescription:
      'Compacte peanut bars voor onderweg. Vol van pinda, makkelijk mee te nemen en precies genoeg voor tussen de bedrijven door — of naast je koffie.',
    price: 8.5,
    size: '3 × 40 g',
    image: '/images/BIONUTZ Peanut Bars.png',
    alt: 'Peanut bars',
    href: '/producten/peanut-bars',
    badgeTone: 'tan',
    ingredients: "Pinda's, rijststroop. (Definitieve samenstelling volgt.)",
    allergens: "Bevat pinda's.",
    storage: 'Koel en droog bewaren.',
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}
