import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ProductGrid from '@/components/ProductGrid';
import FeaturePindapasta from '@/components/FeaturePindapasta';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <ProductGrid />
        <FeaturePindapasta />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
