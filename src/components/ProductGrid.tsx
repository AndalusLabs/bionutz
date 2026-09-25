import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from '@/lib/products';

export default function ProductGrid() {
  return (
    <section id="shop" className="shop">
      <div className="shell shop__inner">
        <div className="shop__head shop__head--solo">
          <h2 className="display">
            &Eacute;&Eacute;N PINDA.
            <br />
            VEEL <span className="serif" style={{ color: 'var(--rust)' }}>mogelijkheden</span>.
          </h2>
        </div>

        <div className="shop__showcase">
          <div className="shop__grid shop__grid--2x2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <aside className="shop__promo">
            <span className="shop__promo-label">DIT IS PAS HET BEGIN</span>
            <h3 className="shop__promo-title">
              ER KOMT
              <br />
              MEER AAN.
            </h3>
            <p className="shop__promo-copy">
              Het BIONUTZ-assortiment vertrekt altijd vanaf dezelfde pinda. In de schil, gepeld,
              geroosterd, gemalen of gebundeld in een bar. Nieuwe producten zijn onderweg.
            </p>
            <Link href="/#contact" className="btn btn--tan btn--sm">
              BLIJF OP DE HOOGTE
            </Link>
            <span className="shop__promo-mark" aria-hidden="true">
              BIONUTZ
            </span>
          </aside>
        </div>
      </div>
    </section>
  );
}
