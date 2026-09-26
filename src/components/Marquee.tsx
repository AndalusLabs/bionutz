import Link from 'next/link';

const WORDS = [
  'DE EERSTE BIONUTZ KOMT ERAAN',
  'VANAF 1 DECEMBER',
  'SCHRIJF JE IN EN ONTVANG 10% KORTING',
];

export default function Marquee() {
  const loop = [...WORDS, ...WORDS];

  return (
    <Link
      href="/#inschrijven"
      className="marquee"
      aria-label="Schrijf je in en ontvang 10% korting — vanaf 1 december"
    >
      <div className="marquee__track" aria-hidden="true">
        {loop.map((word, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span>{word}</span>
            <span className="star">&#10039;</span>
          </span>
        ))}
      </div>
    </Link>
  );
}
