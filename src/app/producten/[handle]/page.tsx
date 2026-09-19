import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductView from '@/components/ProductView';
import { getProductByHandle, products } from '@/lib/products';

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return { title: 'Product niet gevonden — BIONUTZ' };
  return {
    title: `${product.title} — BIONUTZ`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main>
        <ProductView product={product} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
