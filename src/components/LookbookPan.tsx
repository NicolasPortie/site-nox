import { lookbookStories } from '../data/catalog';
import { useLocale, useCopy } from '../i18n/locale';
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from '../lib/gsap';
import { tx } from '../types';
import { useRef } from 'react';

export function LookbookPan() {
  const t = useCopy();
  const { locale } = useLocale();
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track || prefersReducedMotion()) return undefined;

      const media = gsap.matchMedia();
      media.add('(min-width: 901px)', () => {
        const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            pinSpacing: true,
            scrub: true,
            fastScrollEnd: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        });

        const refresh = () => ScrollTrigger.refresh();
        const images = [...track.querySelectorAll('img')];
        images.forEach((image) => {
          if (!image.complete) image.addEventListener('load', refresh, { once: true });
        });
        window.addEventListener('load', refresh);

        return () => {
          images.forEach((image) => image.removeEventListener('load', refresh));
          window.removeEventListener('load', refresh);
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => media.revert();
    },
    { scope: wrapRef, dependencies: [] },
  );

  return (
    <section ref={wrapRef} id="fit" className="lookbook-section nor-ink" aria-labelledby="lookbook-title">
      <div className="lookbook-heading content-frame">
        <h2 id="lookbook-title" className="reveal-text">
          {t.lookbookTitle}
        </h2>
      </div>

      <div ref={trackRef} className="lookbook-track">
        {lookbookStories.map((story, index) => (
          <figure className="lookbook-card" key={story.src}>
            <div className="lookbook-media">
              <img src={story.src} alt={tx(story.alt, locale)} decoding="async" />
            </div>
            <figcaption>{t.lookNumber(index + 1)}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
