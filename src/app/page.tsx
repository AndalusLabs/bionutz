import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ProductGrid from '@/components/ProductGrid';
import FeaturePindapasta from '@/components/FeaturePindapasta';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import SignupSection from '@/components/SignupSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export default function HomePage() {
  return (
    <>
      <Marquee />
      <Header />
      <main id="top">
        <Hero />
        <ProductGrid />
        <FeaturePindapasta />
        <Faq />
        <Contact />
        <SignupSection />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
