import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata = {
  title: 'Ons verhaal — BIONUTZ',
  description: 'Van Bakau naar Nederland. Het familieambacht achter BIONUTZ.',
};

export default function OnsVerhaalPage() {
  return (
    <>
      <Header />
      <main>
        <section className="story-page">
          <div className="shell story-page__hero">
            <div className="story-page__hero-copy">
              <span className="eyebrow">ONS VERHAAL</span>
              <h1 className="display">
                Van Bakau
                <br />
                naar <span className="serif" style={{ color: 'var(--rust)' }}>Nederland</span>.
              </h1>
            </div>
            <p className="story-page__hero-lede">
              Pindakaas met aandacht voor de pinda, de herkomst en het vakmanschap erachter.
            </p>
          </div>

          <div className="story-page__band">
            <div className="story-page__band-media">
              <Image
                src="/images/peanut-white.avif"
                alt="Pinda's op wit"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>

          <div className="shell story-page__body">
            <div className="story-page__row">
              <article className="story-page__prose">
                <p>
                  Mijn naam is Ibrahim en ik ben geboren en opgegroeid in{' '}
                  <strong>Bakau, Gambia</strong>. Al van jongs af aan kwam ik via mijn ouders in
                  aanraking met de pindateelt. Binnen onze familie is het verbouwen, roosteren en
                  verwerken van pinda&rsquo;s een echt ambacht dat al generaties lang wordt
                  doorgegeven.
                </p>
                <p>
                  Vooral van mijn moeder leerde ik hoe je met goede pinda&rsquo;s, geduld en een
                  eenvoudig recept iets bijzonders kunt maken.
                </p>
                <p>
                  Toen ik op 23-jarige leeftijd naar Nederland kwam, merkte ik al snel dat pindakaas
                  hier heel anders smaakte dan wat ik uit Gambia gewend was. Ik miste die pure, volle
                  pindasmaak van thuis.
                </p>
                <p>
                  Zo ontstond het idee voor <strong>Bionutz</strong>: het familieambacht waarmee ik
                  ben opgegroeid naar Nederland brengen. Pindakaas met aandacht voor de pinda, de
                  herkomst en het vakmanschap erachter.
                </p>
              </article>
              <div className="story-page__side-media story-page__side-media--arch">
                <Image
                  src="/images/peanut-crops-field.avif"
                  alt="Pindavelden"
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="story-page__row">
              <article>
                <h2 className="display">
                  Goed voor jou,
                  <br />
                  goed voor <span className="serif" style={{ color: 'var(--rust)' }}>Gambia</span>.
                </h2>
                <div className="story-page__prose">
                  <p>
                    Voor mij draait Bionutz om meer dan alleen goede pindakaas. Achter iedere pinda
                    staan boeren en families die al generaties lang leven van de pindateelt.
                  </p>
                  <p>
                    Onze pinda&rsquo;s komen zo direct mogelijk uit Gambia. Zo blijft de lijn tussen
                    boer en consument kort, en komt er meer waarde terecht bij de mensen aan de bron.
                  </p>
                  <p>
                    Met iedere pot Bionutz proef je daarom niet alleen pindakaas, maar ook een stukje
                    Gambia, familie en traditie.
                  </p>
                </div>
              </article>
              <aside className="story-page__aside">
                <p className="serif story-page__pull">
                  &ldquo;Een stukje Gambia, familie en traditie — in iedere pot.&rdquo;
                </p>
                <div className="story-page__actions">
                  <Link href="/#shop" className="btn btn--dark">
                    BEKIJK DE SHOP
                  </Link>
                  <Link href="/#contact" className="btn btn--outline">
                    NEEM CONTACT OP
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
