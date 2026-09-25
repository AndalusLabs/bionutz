'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FAQ_ITEMS = [
  {
    q: 'Wat maakt BIONUTZ anders?',
    a: 'We beginnen bij de pinda. Ons assortiment — hele pinda\'s, creamy en crunchy pindakaas, peanut bars — vertrekt vanuit één ingrediënt dat alle aandacht verdient.',
  },
  {
    q: 'Wanneer kan ik bestellen?',
    a: 'De eerste BIONUTZ komt eraan vanaf 1 december. Schrijf je in via de nieuwsbrief of het contactformulier en proef als eerste.',
  },
  {
    q: 'Welke ingrediënten zitten erin?',
    a: 'Onze pindakaas is gemaakt van 100% geroosterde pinda\'s. Exacte labels volgen bij lancering; we houden het bewust eenvoudig.',
  },
  {
    q: 'Bevat BIONUTZ allergenen?',
    a: 'Ja — alles bevat pinda\'s. Producten kunnen sporen van andere noten bevatten. Check altijd het etiket bij aankoop.',
  },
  {
    q: 'Waar bezorgen jullie?',
    a: 'We starten met verzending in Nederland en België. Exacte zones en tarieven volgen bij de officiële launch.',
  },
  {
    q: 'Hoe lang duurt verzending?',
    a: 'Na lancering streven we naar 1–3 werkdagen binnen NL/BE. Definitieve levertijden communiceren we bij checkout.',
  },
  {
    q: 'Kan ik retourneren?',
    a: 'Voor voedselproducten gelden specifieke regels. Ons retourbeleid publiceren we vóór 1 december op de website.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="faq">
      <div className="shell faq__inner">
        <div className="faq__layout">
          <div className="faq__copy">
            <div className="faq__head">
              <span className="eyebrow">FAQ</span>
              <h2 className="display">
                VRAGEN?
                <br />
                <span className="serif" style={{ color: 'var(--rust)' }}>Wij hebben antwoorden.</span>
              </h2>
              <p>
                Alles over BIONUTZ, onze pinda&rsquo;s en bestellen.
                Staat jouw vraag er niet bij?{' '}
                <Link href="/#contact">Neem contact op</Link>.
              </p>
            </div>

            <div className="faq__list">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="faq__q"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span>{item.q}</span>
                      <span className="faq__icon" aria-hidden>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && <p className="faq__a">{item.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="faq__media">
            <Image
              src="/images/bionutz-peanut-kernels.avif"
              alt="Gepelde pinda's"
              fill
              sizes="(max-width: 900px) 100vw, 34vw"
              style={{ objectFit: 'cover', objectPosition: '50% 45%' }}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
