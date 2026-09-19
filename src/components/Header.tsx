'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import CartIcon from './CartIcon';

const NAV = [
  { label: 'HOME', href: '#top' },
  { label: 'SHOP', href: '#shop' },
  { label: 'ONS VERHAAL', href: '#verhaal' },
  { label: 'FAQ', href: '#faq' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Header({ cartCount = 0 }: { cartCount?: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__bar">
        <Link href="#top" className="header__logo">
          <Logo size={42} />
          <span className="header__wordmark">BIONUTZ</span>
        </Link>

        <nav className="header__nav">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#shop" className="header__cart">
          <CartIcon />
          <span>CART ({cartCount})</span>
        </Link>

        <div className="header__mobile">
          <Link href="#shop" aria-label="Cart" className="header__icon-btn">
            <CartIcon size={17} />
          </Link>
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
          <Link href="#shop" onClick={close} className="btn btn--dark">
            SHOP BIONUTZ
          </Link>
        </nav>
      )}
    </header>
  );
}
