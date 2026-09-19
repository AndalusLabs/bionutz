import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <Link href={product.href} className="card__media">
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
      </Link>
      <div className="card__body">
        <Link href={product.href}>
          <h3>{product.title}</h3>
        </Link>
        <p>{product.description}</p>
        <div className="card__price">{formatPrice(product.price)}</div>
        <Link href={product.href} className="btn btn--dark btn--sm">
          BEKIJK PRODUCT
        </Link>
      </div>
    </article>
  );
}
