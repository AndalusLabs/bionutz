import Image from 'next/image';

export default function Statement() {
  return (
    <section className="statement">
      <Image
        src="/images/bionutz-peanut-kernels.avif"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <div className="statement__veil" />
      <div className="shell statement__inner">
        <p className="display statement__line">PINDA&rsquo;S.</p>
        <p className="display statement__line statement__line--tan">DAAR DRAAIT</p>
        <p className="display statement__line">HET OM.</p>
        <p className="note">
          Alles wat BIONUTZ maakt begint bij hetzelfde ingredi&euml;nt. De pinda bepaalt de smaak,
          de vorm en het assortiment.
        </p>
      </div>
    </section>
  );
}
