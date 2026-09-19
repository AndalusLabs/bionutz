const WORDS = ['PURE PINDA', 'PURE SMAAK', "PINDA'S UIT GAMBIA", 'VAN PINDA TOT PRODUCT'];

export default function Marquee() {
  const loop = [...WORDS, ...WORDS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((word, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span>{word}</span>
            <span className="star">&#10039;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
