'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/products';

export default function CartDrawer() {
  const { lines, isOpen, closeCart, updateQuantity, removeItem, subtotal, totalQuantity } =
    useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        className={`cart-overlay${isOpen ? ' is-open' : ''}`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={`cart-drawer${isOpen ? ' is-open' : ''}`}
        aria-hidden={!isOpen}
        aria-label="Winkelwagen"
      >
        <div className="cart-drawer__head">
          <h2>Winkelwagen ({totalQuantity})</h2>
          <button type="button" className="cart-drawer__close" onClick={closeCart} aria-label="Sluiten">
            ✕
          </button>
        </div>

        <div className="cart-drawer__body">
          {lines.length === 0 ? (
            <div className="cart-drawer__empty">
              <p>Je winkelwagen is nog leeg.</p>
              <button type="button" className="btn btn--dark btn--sm" onClick={closeCart}>
                VERDER WINKELEN
              </button>
            </div>
          ) : (
            <ul className="cart-drawer__list">
              {lines.map((line) => (
                <li key={line.productId} className="cart-drawer__line">
                  <Link href={`/producten/${line.handle}`} onClick={closeCart} className="cart-drawer__thumb">
                    <Image src={line.image} alt={line.title} fill sizes="80px" style={{ objectFit: 'cover' }} />
                  </Link>
                  <div className="cart-drawer__meta">
                    <div className="cart-drawer__row">
                      <Link href={`/producten/${line.handle}`} onClick={closeCart}>
                        <strong>{line.title}</strong>
                      </Link>
                      <button
                        type="button"
                        className="cart-drawer__remove"
                        onClick={() => removeItem(line.productId)}
                      >
                        Verwijder
                      </button>
                    </div>
                    <span className="cart-drawer__size">{line.size}</span>
                    <div className="cart-drawer__row">
                      <div className="qty">
                        <button
                          type="button"
                          aria-label="Minder"
                          onClick={() => updateQuantity(line.productId, line.quantity - 1)}
                        >
                          −
                        </button>
                        <span>{line.quantity}</span>
                        <button
                          type="button"
                          aria-label="Meer"
                          onClick={() => updateQuantity(line.productId, line.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="cart-drawer__price">
                        {formatPrice(line.price * line.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="cart-drawer__foot">
            <div className="cart-drawer__row">
              <span>Subtotaal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <p className="cart-drawer__note">
              Verzendkosten worden berekend bij het afrekenen. Checkout via Shopify volgt.
            </p>
            <button type="button" className="btn btn--dark" disabled>
              AFREKENEN VIA SHOPIFY
            </button>
            <button type="button" className="btn btn--outline" onClick={closeCart}>
              VERDER WINKELEN
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
