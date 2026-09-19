'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: koppel aan Shopify customer / Klaviyo / Mailchimp
    setDone(true);
  }

  return (
    <form className="footer__form" onSubmit={onSubmit}>
      <input
        type="email"
        required
        placeholder="jouw@email.nl"
        aria-label="E-mailadres"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{done ? 'BEDANKT' : 'MELD AAN'}</button>
    </form>
  );
}
