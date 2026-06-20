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

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const acceptRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(dialogRef, visible);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.documentElement.style.setProperty('--cookie-banner-height', '0px');
      return;
    }
    const height = window.innerWidth < 768 ? '88px' : '72px';
    document.documentElement.style.setProperty('--cookie-banner-height', height);

    const canAutoFocus = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (canAutoFocus) acceptRef.current?.focus();
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
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-0 left-0 right-0 z-30 border-t border-black/[0.08] bg-white/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
    >
      <div className="container-site py-3 md:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p
          id="cookie-banner-desc"
          className="font-body text-ink-body leading-snug max-w-2xl text-caption-a11y line-clamp-3 sm:line-clamp-none"
        >
          <span id="cookie-banner-title" className="sr-only">Cookie consent — </span>
          <span className="hidden sm:inline">
            We use essential cookies to run this site and, with your consent, analytics cookies to understand how visitors use {BRAND.name}.{' '}
          </span>
          <span className="sm:hidden">We use cookies to run and improve {BRAND.name}. </span>
          <Link href="/privacy" className="text-blue-link hover:underline underline-offset-2">
            Privacy
          </Link>
          {' · '}
          <Link href="/terms" className="text-blue-link hover:underline underline-offset-2">
            Terms
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={reject}
            className="text-eyebrow border border-black/15 text-ink-body px-4 py-2 hover:border-black/30 transition-colors min-h-[44px] min-w-[44px]"
          >
            Decline
          </button>
          <button
            ref={acceptRef}
            type="button"
            onClick={accept}
            className="text-eyebrow border border-blue-accent bg-blue-accent text-white px-4 py-2 hover:bg-[#111] hover:border-[#111] transition-colors min-h-[44px] min-w-[44px]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
