import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata = {
  title: 'Ons verhaal — BIONUTZ',
  description: 'Van pinda tot product. Het verhaal van BIONUTZ tussen Gambia en Nederland.',
};

export default function OnsVerhaalPage() {
  return (
    <>
      <Header />
      <main>
        <section className="story-page">
          <div className="shell story-page__hero">
            <span className="eyebrow">ONS VERHAAL</span>
            <h1 className="display">
              Ons verhaal begint
              <br />
              met een <span className="serif" style={{ color: 'var(--rust)' }}>pinda</span>.
            </h1>
            <p>
              BIONUTZ verbindt Gambia en Nederland via één ingrediënt dat alle aandacht verdient.
              Geen lange claims — wel een heldere missie: pinda&rsquo;s, puur en met smaak.
            </p>
          </div>

          <div className="story-page__band">
            <div className="story-page__band-media">
              <Image
                src="/images/bionutz-peanuts-harvest.avif"
                alt="Pinda-oogst"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>

          <div className="shell story-page__body">
            <article>
              <h2 className="display">Waarom BIONUTZ?</h2>
              <p>
                We geloven dat een goed product geen eindeloze lijst toevoegingen nodig heeft.
                BIONUTZ draait om de pinda zelf — in de schil, als pasta, of in een bar.
              </p>
            </article>

            <article className="story-page__split">
              <div>
                <h2 className="display">Gambia → Nederland</h2>
                <p>
                  Onze pinda&rsquo;s komen uit Gambia. Het assortiment ontwikkelen en afronden we
                  in Nederland. Twee plekken, één rode draad: respect voor het product.
                </p>
              </div>
              <div className="story-page__split-media">
                <Image
                  src="/images/bionutz-peanut-kernels.avif"
                  alt="Gepelde pinda's"
                  fill
                  sizes="(max-width: 800px) 100vw, 40vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </article>

            <article>
              <h2 className="display">De pinda centraal</h2>
              <p>
                Of je nu kiest voor hele pinda&rsquo;s, creamy of crunchy pindakaas, of peanut bars —
                elk product begint bij dezelfde basis. Smaak eerst. Verhaal daarna.
              </p>
            </article>

            <article>
              <h2 className="display">Waar we naartoe willen</h2>
              <p>
                Vanaf 1 december lanceren we de eerste BIONUTZ. Daarna groeit het assortiment mee
                met de pinda. Wil je als eerste proeven? Schrijf je in of shop straks via onze webshop.
              </p>
              <div className="story-page__actions">
                <Link href="/#shop" className="btn btn--dark">
                  BEKIJK DE SHOP
                </Link>
                <Link href="/#contact" className="btn btn--outline">
                  NEEM CONTACT OP
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
