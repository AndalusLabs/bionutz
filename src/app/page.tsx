import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ProductGrid from '@/components/ProductGrid';
import FeaturePindapasta from '@/components/FeaturePindapasta';
import Statement from '@/components/Statement';
import Story from '@/components/Story';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import CtaBand from '@/components/CtaBand';
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
        <Statement />
        <Story />
        <CtaBand />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
