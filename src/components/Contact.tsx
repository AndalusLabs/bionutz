'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    window.setTimeout(() => setStatus('success'), 900);
  }

  return (
    <section id="contact" className="contact">
      <div className="shell contact__inner">
        <div className="contact__grid">
          <div className="contact__copy">
            <span className="eyebrow">CONTACT</span>
            <h2 className="display">
              LATEN WE HET OVER
              <br />
              <span className="serif" style={{ color: 'var(--tan)' }}>pinda&rsquo;s</span> HEBBEN.
            </h2>
            <p>
              Vragen over producten, bestellingen of een zakelijke samenwerking?
              Stuur een bericht — we reageren zo snel mogelijk.
            </p>
            <ul className="contact__meta">
              <li>
                <span>E-mail</span>
                <a href="mailto:hallo@bionutz.nl">hallo@bionutz.nl</a>
              </li>
              <li>
                <span>Instagram</span>
                <span>@bionutz</span>
              </li>
              <li>
                <span>Zakelijk</span>
                <a href="mailto:zakelijk@bionutz.nl">zakelijk@bionutz.nl</a>
              </li>
            </ul>
          </div>

          <div className="contact__side">
            <div className="contact__photo">
              <Image
                src="/images/bionutz-peanut-kernels.avif"
                alt="Gepelde pinda's"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <form className="contact__form" onSubmit={onSubmit} noValidate>
              <label>
                Naam
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                Onderwerp
                <input name="subject" type="text" required />
              </label>
              <label>
                Bericht
                <textarea name="message" rows={4} required />
              </label>
              <button
                type="submit"
                className="btn btn--dark"
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'idle' && 'VERSTUREN'}
                {status === 'loading' && 'BEZIG…'}
                {status === 'success' && 'VERZONDEN'}
                {status === 'error' && 'CONTROLEER VELDEN'}
              </button>
              {status === 'success' && (
                <p className="contact__ok">Bedankt! We nemen spoedig contact op.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
