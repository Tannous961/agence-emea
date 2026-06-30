'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/constants/brand';
import { useFocusTrap } from '@/lib/hooks/useFocusTrap';

const STORAGE_KEY = 'cookie-consent';

export type CookieConsent = 'accepted' | 'rejected';

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(STORAGE_KEY);
  return value === 'accepted' || value === 'rejected' ? value : null;
}

export function setStoredConsent(value: CookieConsent) {
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: value }));
}

const inlineLinkCls =
  'text-blue-link underline-offset-2 hover:underline rounded-sm focus:outline-none focus-visible:outline-none focus-visible:underline';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const acceptRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(bannerRef, visible, acceptRef);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!visible || !banner) {
      document.documentElement.style.setProperty('--cookie-banner-height', '0px');
      return;
    }

    const syncHeight = () => {
      document.documentElement.style.setProperty(
        '--cookie-banner-height',
        `${banner.offsetHeight}px`,
      );
    };

    syncHeight();
    acceptRef.current?.focus({ preventScroll: true });

    const observer = new ResizeObserver(syncHeight);
    observer.observe(banner);
    window.addEventListener('resize', syncHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncHeight);
      document.documentElement.style.setProperty('--cookie-banner-height', '0px');
    };
  }, [visible]);

  const accept = () => {
    setStoredConsent('accepted');
    setVisible(false);
  };

  const reject = () => {
    setStoredConsent('rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/[0.08] bg-[#F5F5F5]/98 backdrop-blur-md pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_32px_rgba(0,0,0,0.06)]"
    >
      <div className="container-site py-4 md:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p
          id="cookie-banner-desc"
          className="font-body text-ink-body leading-relaxed max-w-2xl text-caption-a11y"
        >
          <span id="cookie-banner-title" className="sr-only">Cookie consent — </span>
          <span className="hidden sm:inline">
            We use essential cookies to run this site and, with your consent, analytics cookies to understand how visitors use {BRAND.name}.{' '}
          </span>
          <span className="sm:hidden">We use cookies to run and improve {BRAND.name}. </span>
          <Link href="/privacy" className={inlineLinkCls}>
            Privacy
          </Link>
          {' · '}
          <Link href="/terms" className={inlineLinkCls}>
            Terms
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={reject}
            className="flex-1 sm:flex-none text-eyebrow border border-black/15 text-ink-body px-4 py-2.5 hover:border-black/30 transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0000FF] focus-visible:ring-offset-2"
          >
            Decline
          </button>
          <button
            ref={acceptRef}
            type="button"
            onClick={accept}
            className="flex-1 sm:flex-none text-eyebrow border border-[#0000FF] bg-[#0000FF] text-white px-4 py-2.5 hover:bg-[#111] hover:border-[#111] transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0000FF] focus-visible:ring-offset-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
