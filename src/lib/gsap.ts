import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollToPlugin, ScrollTrigger, SplitText);
gsap.defaults({ ease: 'power3.out' });
ScrollTrigger.clearScrollMemory('manual');
history.scrollRestoration = 'manual';

export { gsap, ScrollToPlugin, ScrollTrigger, SplitText, useGSAP };

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function pinNode(section: HTMLElement) {
  return section.parentElement?.classList.contains('pin-spacer') ? section.parentElement : section;
}

export function viewportPin(section: HTMLElement, extraScroll: number, refreshPriority: number) {
  return {
    trigger: section,
    start: () => pinNode(section).offsetTop,
    end: () => pinNode(section).offsetTop + extraScroll,
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    refreshPriority,
  };
}
