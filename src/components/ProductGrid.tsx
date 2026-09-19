import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from '@/lib/products';

export default function ProductGrid() {
  return (
    <section id="shop" className="shop">
      <div className="shell shop__inner">
        <div className="shop__head">
          <h2 className="display">
            &Eacute;&Eacute;N PINDA.
            <br />
            VEEL <span className="serif" style={{ color: 'var(--rust)' }}>mogelijkheden</span>.
          </h2>
          <p>
            Het BIONUTZ-assortiment vertrekt altijd vanaf dezelfde pinda. In de schil, gepeld,
            geroosterd, gemalen of gebundeld in een bar.
          </p>
        </div>

        <div className="shop__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          <article className="card--teaser">
            <p className="lede">
              MEER
              <br />
              PINDA.
              <br />
              MEER
              <br />
              VOLGT.
            </p>
            <div className="stack">
              <p>Het assortiment groeit met de pinda mee. Nieuwe BIONUTZ-producten volgen.</p>
              <Link href="#shop" className="btn btn--tan">SHOP NU</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
