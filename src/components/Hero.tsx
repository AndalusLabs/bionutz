import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <div className="hero__inner">
            <div className="hero__badge">PREMIUM PINDA&rsquo;S UIT GAMBIA</div>
            <h1 className="display hero__title">
              PURE PINDA.
              <span>PURE SMAAK.</span>
            </h1>
            <p className="hero__lead">
              Premium pinda&rsquo;s uit Gambia. Puur van oorsprong, eindeloos in mogelijkheden.
            </p>
            <div className="hero__actions">
              <Link href="/#shop" className="btn btn--tan">SHOP BIONUTZ</Link>
              <Link href="/ons-verhaal" className="btn btn--outline-light">ONS VERHAAL</Link>
            </div>
            <div className="hero__meta">
              <span>HELE PINDA&rsquo;S</span><i>&mdash;</i>
              <span>GEROOSTERD</span><i>&mdash;</i>
              <span>PINDAKAAS</span><i>&mdash;</i>
              <span>PEANUT BARS</span>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <Image
            src="/images/hero-peanuts.avif"
            alt="Gepelde pinda's, close-up"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: '62% 45%' }}
          />
          <div className="hero__fade" />
        </div>
      </div>
    </section>
  );
}
