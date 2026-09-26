'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CartIcon from './CartIcon';
import { useCart } from '@/lib/cart';

const NAV = [
  { label: 'HOME', href: '/' },
  { label: 'SHOP', href: '/#shop' },
  { label: 'ONS VERHAAL', href: '/ons-verhaal' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'CONTACT', href: '/#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalQuantity, openCart } = useCart();
  const close = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__bar">
        <Link href="/" className="header__logo" aria-label="BIONUTZ Home" onClick={close}>
          <Image
            src="/images/bionutz_logo_original-removebg-hq.png"
            alt="BIONUTZ"
            width={360}
            height={196}
            className="header__logo-img"
            priority
          />
        </Link>

        <nav className="header__nav">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button type="button" className="header__cart" onClick={openCart} aria-label="Winkelwagen openen">
          <CartIcon />
          <span>WINKELWAGEN ({totalQuantity})</span>
        </button>

        <div className="header__mobile">
          <button type="button" aria-label="Winkelwagen" className="header__icon-btn" onClick={openCart}>
            <CartIcon size={17} />
            {totalQuantity > 0 && <span className="header__badge">{totalQuantity}</span>}
          </button>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="header__burger"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="header__drawer">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
          <button type="button" className="btn btn--dark" onClick={() => { close(); openCart(); }}>
            WINKELWAGEN ({totalQuantity})
          </button>
        </nav>
      )}
    </header>
  );
}
