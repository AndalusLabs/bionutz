import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  const media = (
    <>
      <Image
        src={product.image}
        alt={product.alt}
        fill
        sizes="(max-width: 899px) 45vw, 22vw"
        style={{ objectFit: 'cover', objectPosition: product.imagePosition ?? '50% 50%' }}
      />
      <span className={product.badgeTone === 'tan' ? 'card__num card__num--tan' : 'card__num'}>
        {product.number}
      </span>
      {!product.available && (
        <div className="card__soon">
          <span>BINNENKORT BESCHIKBAAR</span>
        </div>
      )}
    </>
  );

  return (
    <article className={`card${product.available ? '' : ' card--soon'}`}>
      {product.available ? (
        <Link href={product.href} className="card__media">
          {media}
        </Link>
      ) : (
        <div className="card__media">{media}</div>
      )}
      <div className="card__body">
        {product.available ? (
          <Link href={product.href}>
            <h3>{product.title}</h3>
          </Link>
        ) : (
          <h3>{product.title}</h3>
        )}
        <p>{product.description}</p>
        {product.available ? (
          <>
            <div className="card__price">{formatPrice(product.price)}</div>
            <Link href={product.href} className="btn btn--dark btn--sm">
              BEKIJK PRODUCT
            </Link>
          </>
        ) : (
          <span className="card__soon-label">Binnenkort</span>
        )}
      </div>
    </article>
  );
}
