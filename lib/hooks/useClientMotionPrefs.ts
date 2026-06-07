'use client';

import { useEffect, useState } from 'react';

export type ClientMotionPrefs = {
  /** True after mount — safe to run client-only motion. */
  ready: boolean;
  reducedMotion: boolean;
};

/**
 * SSR-safe motion preferences. Returns `ready: false` on server and first paint
 * so markup matches between server and client before hydration completes.
 */
export function useClientMotionPrefs(): ClientMotionPrefs {
  const [prefs, setPrefs] = useState<ClientMotionPrefs>({
    ready: false,
    reducedMotion: false,
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () =>
      setPrefs({ ready: true, reducedMotion: mq.matches });

    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return prefs;
}
