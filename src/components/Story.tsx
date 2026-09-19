import Image from 'next/image';
import Link from 'next/link';

const CHIPS = ['PINDA', 'ROOSTEREN', 'MALEN', 'PRODUCT'];

export default function Story() {
  return (
    <section id="verhaal" className="story">
      <div className="shell story__inner">
        <div className="story__grid">
          <div>
            <span className="eyebrow">ONS VERHAAL</span>
            <h2 className="display">
              VAN PINDA
              <br />
              TOT PRODUCT.
            </h2>
            <p className="lede">
              BIONUTZ begint bij de pinda. Onze pinda&rsquo;s komen uit Gambia, ons assortiment maken we
              in Nederland. Twee plekken, &eacute;&eacute;n ingredi&euml;nt &mdash; en daartussen zo weinig
              stappen als mogelijk.
            </p>
            <div className="story__chips">
              {CHIPS.map((chip, i) => (
                <span key={chip} className={i === CHIPS.length - 1 ? 'is-last' : undefined}>
                  {chip}
                </span>
              ))}
            </div>
            <div>
              <Link href="/ons-verhaal" className="btn btn--outline">LEES ONS VERHAAL</Link>
            </div>
          </div>

          <div className="story__images">
            <div className="story__tall">
              <Image
                src="/images/peanuts-texture.avif"
                alt="Pindavelden in Gambia"
                fill
                sizes="(max-width: 700px) 100vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="story__stack">
              <div>
                <Image src="/images/peanuts-wood.avif" alt="Pinda's op hout" width={600} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <Image src="/images/peanuts-texture.avif" alt="Pindaschillen" width={600} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
