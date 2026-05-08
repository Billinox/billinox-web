import { signal } from '@angular/core';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const isMobile = signal(false);

  if (typeof window !== 'undefined') {
    const mql = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    );

    const update = () => {
      isMobile.set(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener('change', update);

    update();
  }

  return isMobile;
}
