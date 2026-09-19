import Link from 'next/link';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';

const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'Shop', href: '#shop' },
  { label: 'Ons verhaal', href: '#verhaal' },
  { label: 'FAQ', href: '#faq' },
];

const SERVICE = [
  { label: 'Contact', href: '#contact' },
  { label: 'Verzending & retour', href: '#contact' },
  { label: 'Privacy', href: '#contact' },
  { label: 'Voorwaarden', href: '#contact' },
];

const SOCIAL = ['INSTAGRAM', 'TIKTOK', 'LINKEDIN'];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="shell footer__inner">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <Logo size={34} tone="light" />
              <span>BIONUTZ</span>
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

          <div>
            <p className="footer__label">NIEUWSBRIEF</p>
            <p style={{ marginBottom: 14 }}>
              Nieuwe pinda&rsquo;s, nieuwe producten. E&eacute;n mail per maand.
            </p>
            <NewsletterForm />
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
