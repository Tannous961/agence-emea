'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[app error]', error);
  }, [error]);

  return (
    <div className="bg-[#F5F5F5] min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <div className="flex items-center gap-4 mb-8">
        <span className="w-4 h-px bg-[#0000FF]" />
        <span
          className="font-body font-light uppercase text-ink-meta"
          style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
        >
          Something went wrong
        </span>
      </div>
      <h1
        className="font-display font-semibold uppercase text-[var(--color-cream)] max-w-xl"
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}
      >
        Unexpected<br />
        <span className="text-accent">Error.</span>
      </h1>
      <p className="mt-6 font-body font-light text-ink-body max-w-md leading-relaxed" style={{ fontSize: '1.06rem' }}>
        We hit a snag loading this page. Try again, or head back to the homepage.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center px-8 py-4 bg-[#0000FF] text-white font-body font-semibold text-sm uppercase tracking-widest hover:bg-[var(--color-cream)] hover:text-white transition-colors min-h-[44px]"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 border border-black/15 text-[var(--color-cream)] font-body font-semibold text-sm uppercase tracking-widest hover:border-[#0000FF] hover:text-[#0000FF] transition-colors min-h-[44px]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
