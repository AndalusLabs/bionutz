import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <div className="card__media">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 700px) 100vw, 25vw"
          style={{ objectFit: 'cover', objectPosition: product.imagePosition ?? '50% 50%' }}
        />
        <span className={product.badgeTone === 'tan' ? 'card__num card__num--tan' : 'card__num'}>
          {product.number}
        </span>
      </div>
      <div className="card__body">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <Link href={product.href} className="btn btn--dark btn--sm">BEKIJK PRODUCT</Link>
      </div>
    </article>
  );
}
