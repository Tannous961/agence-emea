'use client';

import { useEffect } from 'react';
import { getStoredConsent } from '@/components/layout/CookieBanner';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!measurementId) return;

    const loadAnalytics = () => {
      if (getStoredConsent() !== 'accepted') return;
      if (document.getElementById('ga-script')) return;

      window.dataLayer = window.dataLayer ?? [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', measurementId, { anonymize_ip: true });

      const script = document.createElement('script');
      script.id = 'ga-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    };

    loadAnalytics();

    const onConsentChange = () => loadAnalytics();
    window.addEventListener('cookie-consent-change', onConsentChange);
    return () => window.removeEventListener('cookie-consent-change', onConsentChange);
  }, [measurementId]);

  return null;
}
