import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/#shop' },
  { label: 'Ons verhaal', href: '/ons-verhaal' },
  { label: 'FAQ', href: '/#faq' },
];

const SERVICE = [
  { label: 'Contact', href: '/#contact' },
  { label: 'Verzending & retour', href: '/#faq' },
  { label: 'Privacy', href: '/#contact' },
  { label: 'Voorwaarden', href: '/#contact' },
];

const SOCIAL = ['INSTAGRAM', 'TIKTOK', 'LINKEDIN'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <Image
                src="/images/bionutz-favicon-square.png"
                alt="BIONUTZ"
                width={56}
                height={56}
                className="footer__logo-img"
              />
            </div>
            <p style={{ maxWidth: '30ch' }}>
              Premium pinda&rsquo;s uit Gambia. En alles wat we daarvan maken.
            </p>
          </div>

          <div className="footer__col">
            <p className="footer__label">NAVIGATIE</p>
            {NAV.map((item) => (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ))}
          </div>

          <div className="footer__col">
            <p className="footer__label">SERVICE</p>
            {SERVICE.map((item) => (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ))}
          </div>

          <div className="footer__col">
            <p className="footer__label">WAITLIST</p>
            <p style={{ marginBottom: 14 }}>
              Vanaf 1 december. Schrijf je in en ontvang 10% korting.
            </p>
            <NewsletterForm variant="footer" />
            <div className="footer__social">
              {SOCIAL.map((item) => (
                <Link key={item} href="#contact">{item}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} BIONUTZ</span>
          <span>GAMBIA &middot; NEDERLAND</span>
        </div>
      </div>
    </footer>
  );
}
