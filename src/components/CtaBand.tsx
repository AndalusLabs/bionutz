import Link from 'next/link';

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="shell cta__inner">
        <h2 className="display">
          ZIN IN PINDA&rsquo;S?
          <br />
          <span className="serif">Wij ook.</span>
        </h2>
        <Link href="#shop" className="btn btn--dark btn--lg">SHOP BIONUTZ</Link>
      </div>
    </section>
  );
}
