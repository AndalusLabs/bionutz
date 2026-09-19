import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ProductGrid from '@/components/ProductGrid';
import FeaturePindapasta from '@/components/FeaturePindapasta';
import Statement from '@/components/Statement';
import Story from '@/components/Story';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ProductGrid />
        <FeaturePindapasta />
        <Statement />
        <Story />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
