import { useCopy } from '../i18n/locale';

export function NameMarquee() {
  const t = useCopy();
  const loop = [...t.marqueeNames, ...t.marqueeNames];

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
