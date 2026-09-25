'use client';

import { useState, type FormEvent } from 'react';

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
        <div className="contact__layout">
          <div className="contact__intro">
            <span className="eyebrow">CONTACT</span>
            <h2 className="display">
              LATEN WE HET OVER{' '}
              <span className="serif" style={{ color: 'var(--rust)' }}>pinda&rsquo;s</span>{' '}
              HEBBEN.
            </h2>
            <p>
              Vragen over producten, bestellingen of een zakelijke samenwerking?
              Stuur een bericht — we reageren zo snel mogelijk.
            </p>
            <div className="contact__meta-row">
              <a href="mailto:hallo@bionutz.nl">hallo@bionutz.nl</a>
              <span aria-hidden>·</span>
              <span>@bionutz</span>
              <span aria-hidden>·</span>
              <a href="mailto:zakelijk@bionutz.nl">zakelijk@bionutz.nl</a>
            </div>
          </div>

          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <div className="contact__fields">
              <label>
                Naam
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" required autoComplete="email" />
              </label>
            </div>
            <label>
              Onderwerp
              <input name="subject" type="text" required />
            </label>
            <label>
              Bericht
              <textarea name="message" rows={5} required />
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
    </section>
  );
}
