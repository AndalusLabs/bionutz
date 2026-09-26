import NewsletterForm from './NewsletterForm';

export default function SignupSection() {
  return (
    <section id="inschrijven" className="signup" aria-labelledby="signup-heading">
      <div className="shell signup__inner">
        <div className="signup__panel">
          <p className="signup__eyebrow">WAITLIST</p>
          <h2 id="signup-heading" className="display signup__title">
            Als eerste BIONUTZ proeven?
          </h2>
          <p className="signup__lead">
            Schrijf je in en ontvang 10% korting wanneer BIONUTZ live gaat. We houden je als eerste
            op de hoogte van onze lancering, nieuwe producten en voorraad.
          </p>

          <NewsletterForm variant="section" autoFocusOnHash />

          <p className="signup__legal">
            Door je in te schrijven ga je akkoord met het ontvangen van e-mails van BIONUTZ.
            Uitschrijven kan altijd.
          </p>
        </div>
      </div>
    </section>
  );
}
