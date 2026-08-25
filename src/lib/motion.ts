export function shouldPlayIntro() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !window.location.hash;
}
