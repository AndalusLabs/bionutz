'use client';

import { useEffect, useRef, useState } from 'react';

type Variant = 'section' | 'footer';

type Props = {
  variant?: Variant;
  autoFocusOnHash?: boolean;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterForm({
  variant = 'section',
  autoFocusOnHash = false,
}: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const submittingRef = useRef(false);

  useEffect(() => {
    if (!autoFocusOnHash) return;

    function focusIfTarget() {
      if (window.location.hash !== '#inschrijven') return;
      inputRef.current?.focus({ preventScroll: true });
    }

    focusIfTarget();
    window.addEventListener('hashchange', focusIfTarget);
    return () => window.removeEventListener('hashchange', focusIfTarget);
  }, [autoFocusOnHash]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submittingRef.current || status === 'loading' || status === 'success') return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      setMessage('Vul een geldig e-mailadres in.');
      return;
    }

    submittingRef.current = true;
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
        alreadySubscribed?: boolean;
      };

      if (!res.ok || !data.ok) {
        setStatus('error');
        setMessage(data.error || 'Inschrijven mislukt. Probeer het later opnieuw.');
        return;
      }

      setStatus('success');
      setMessage(
        data.message || 'Bedankt! Je hoort als eerste wanneer BIONUTZ live gaat.'
      );
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Geen verbinding. Controleer je netwerk en probeer opnieuw.');
    } finally {
      submittingRef.current = false;
    }
  }

  const formClass =
    variant === 'footer' ? 'footer__form newsletter-form' : 'newsletter-form newsletter-form--section';
  const isSuccess = status === 'success';
  const isLoading = status === 'loading';

  return (
    <div className={variant === 'section' ? 'newsletter-form__wrap' : undefined}>
      <form className={formClass} onSubmit={onSubmit} noValidate>
        <label className="sr-only" htmlFor={`newsletter-email-${variant}`}>
          E-mailadres
        </label>
        <input
          ref={inputRef}
          id={`newsletter-email-${variant}`}
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="E-mailadres"
          aria-label="E-mailadres"
          aria-invalid={status === 'error'}
          aria-describedby={message ? `newsletter-msg-${variant}` : undefined}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') {
              setStatus('idle');
              setMessage('');
            }
          }}
          disabled={isLoading || isSuccess}
        />
        <button type="submit" disabled={isLoading || isSuccess}>
          {isLoading ? 'BEZIG…' : isSuccess ? 'INGESCHREVEN' : 'SCHRIJF MIJ IN'}
        </button>
      </form>

      {message && (
        <p
          id={`newsletter-msg-${variant}`}
          className={`newsletter-form__msg newsletter-form__msg--${status === 'success' ? 'ok' : 'err'}`}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {message}
        </p>
      )}
    </div>
  );
}
