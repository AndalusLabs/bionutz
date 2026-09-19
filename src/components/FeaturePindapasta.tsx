import Image from 'next/image';
import Link from 'next/link';

export default function FeaturePindapasta() {
  return (
    <section className="feature">
      <div className="feature__grid">
        <div className="feature__media">
          <Image
            src="/images/bionutz-peanuts-harvest.avif"
            alt="Pinda-oogst — van veld tot pot"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: '50% 40%' }}
          />
          <span className="feature__tag">VAN VELD TOT PRODUCT</span>
        </div>

        <div className="feature__copy">
          <span className="eyebrow">DE PINDA</span>
          <h2 className="display">
            NIETS INGEWIKKELDS.
            <br />
            GEWOON GOEDE <span>PINDAKAAS</span>.
          </h2>
          <p>
            Het begint bij de oogst. Dezelfde geselecteerde pinda, gemalen tot pasta —
            romig, rijk en zo pindaachtig als het hoort.
          </p>
          <p className="serif feature__quote">
            &ldquo;Een goede pinda heeft weinig hulp nodig.&rdquo;
          </p>
          <Link href="/producten/creamy-pindakaas" className="btn btn--tan">
            BEKIJK CREAMY PINDAKAAS
          </Link>
        </div>
      </div>
    </section>
  );
}
