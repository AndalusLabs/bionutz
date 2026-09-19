'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { formatPrice, products } from '@/lib/products';
import { useCart } from '@/lib/cart';

export default function ProductView({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const others = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="pdp">
      <div className="shell pdp__inner">
        <nav className="pdp__crumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#shop">Shop</Link>
          <span>/</span>
          <span>{product.title}</span>
        </nav>

        <div className="pdp__grid">
          <div className="pdp__media">
            <Image
              src={product.image}
              alt={product.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: product.imagePosition ?? '50% 50%' }}
            />
          </div>

          <div className="pdp__info">
            <span className="eyebrow">{product.number} — {product.size}</span>
            <h1 className="display pdp__title">{product.title}</h1>
            <p className="pdp__price">{formatPrice(product.price)}</p>
            <p className="pdp__lead">{product.longDescription}</p>

            <div className="pdp__buy">
              <div className="qty qty--lg">
                <button type="button" aria-label="Minder" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <span>{qty}</span>
                <button type="button" aria-label="Meer" onClick={() => setQty((q) => q + 1)}>
                  +
                </button>
              </div>
              <button type="button" className="btn btn--dark btn--lg" onClick={() => addItem(product, qty)}>
                IN WINKELWAGEN
              </button>
            </div>

            <div className="pdp__details">
              <div>
                <h3>Ingrediënten</h3>
                <p>{product.ingredients}</p>
              </div>
              <div>
                <h3>Allergenen</h3>
                <p>{product.allergens}</p>
              </div>
              <div>
                <h3>Bewaren</h3>
                <p>{product.storage}</p>
              </div>
            </div>
          </div>
        </div>

        {others.length > 0 && (
          <section className="pdp__more">
            <h2 className="display">Ook lekker</h2>
            <div className="pdp__more-grid">
              {others.map((p) => (
                <Link key={p.id} href={p.href} className="pdp__more-card">
                  <div className="pdp__more-media">
                    <Image src={p.image} alt={p.alt} fill sizes="200px" style={{ objectFit: 'cover' }} />
                  </div>
                  <strong>{p.title}</strong>
                  <span>{formatPrice(p.price)}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
