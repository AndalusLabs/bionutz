'use client';

import { useState } from 'react';

const FAQ_GROUPS = [
  {
    title: 'Product',
    items: [
      {
        q: 'Wat maakt BIONUTZ anders?',
        a: 'We beginnen bij de pinda. Ons assortiment — hele pinda\'s, creamy en crunchy pindakaas, peanut bars — vertrekt vanuit één ingrediënt dat alle aandacht verdient.',
      },
      {
        q: 'Wanneer kan ik bestellen?',
        a: 'De eerste BIONUTZ komt eraan vanaf 1 december. Schrijf je in via de nieuwsbrief of het contactformulier en proef als eerste.',
      },
    ],
  },
  {
    title: 'Ingrediënten & allergenen',
    items: [
      {
        q: 'Welke ingrediënten zitten erin?',
        a: 'Onze pindakaas is gemaakt van 100% geroosterde pinda\'s. Exacte labels volgen bij lancering; we houden het bewust eenvoudig.',
      },
      {
        q: 'Bevat BIONUTZ allergenen?',
        a: 'Ja — alles bevat pinda\'s. Producten kunnen sporen van andere noten bevatten. Check altijd het etiket bij aankoop.',
      },
    ],
  },
  {
    title: 'Bestellen & verzenden',
    items: [
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
    ],
  },
];

export default function Faq() {
  const [open, setOpen] = useState<string | null>('0-0');

  return (
    <section id="faq" className="faq">
      <div className="shell faq__inner">
        <div className="faq__head">
          <span className="eyebrow">FAQ</span>
          <h2 className="display">
            VRAGEN?
            <br />
            <span className="serif" style={{ color: 'var(--rust)' }}>Wij hebben antwoorden.</span>
          </h2>
          <p>
            Alles wat je wilt weten over BIONUTZ, onze pinda&rsquo;s en bestellen.
            Staat jouw vraag er niet bij? Mail ons via contact.
          </p>
        </div>

        <div className="faq__groups">
          {FAQ_GROUPS.map((group, gi) => (
            <div key={group.title} className="faq__group">
              <h3>{group.title}</h3>
              {group.items.map((item, ii) => {
                const id = `${gi}-${ii}`;
                const isOpen = open === id;
                return (
                  <div key={id} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="faq__q"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : id)}
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
          ))}
        </div>
      </div>
    </section>
  );
}
