import { marqueeNames } from '../data/catalog';

export function NameMarquee() {
  const loop = [...marqueeNames, ...marqueeNames];

  return (
    <div className="name-marquee" aria-hidden="true">
      <div className="name-marquee-track">
        {loop.map((name, index) => (
          <span key={`${name}-${index}`}>{name}</span>
        ))}
      </div>
    </div>
  );
}
