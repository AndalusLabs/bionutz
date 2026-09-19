import Image from 'next/image';
import Link from 'next/link';

export default function FeaturePindapasta() {
  return (
    <section className="feature">
      <div className="feature__grid">
        <div className="feature__media">
          <Image
            src="/images/peanut-butter.avif"
            alt="Pindapasta wordt in de pot geschept"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
          <span className="feature__tag">&Eacute;&Eacute;N VAN DE PRODUCTEN</span>
        </div>

        <div className="feature__copy">
          <span className="eyebrow">PINDAPASTA</span>
          <h2 className="display">
            NIETS INGEWIKKELDS.
            <br />
            ALLEEN DE <span>PINDA</span>.
          </h2>
          <p>
            Dezelfde geselecteerde pinda, gemalen tot pasta. Romig, rijk en zo pindaachtig als het
            hoort &mdash; &eacute;&eacute;n van de vormen waarin BIONUTZ de pinda laat zien.
          </p>
          <p className="serif feature__quote">
            &ldquo;Een goede pinda heeft weinig hulp nodig.&rdquo;
          </p>
          <Link href="/producten/pindapasta" className="btn btn--tan">BEKIJK PINDAPASTA</Link>
        </div>
      </div>
    </section>
  );
}
