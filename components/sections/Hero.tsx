'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TypewriterText } from '@/components/ui/TypewriterText';

const HEADLINE_SEGMENTS = [
  { text: 'Premium', color: 'var(--color-cream)' },
  { text: 'Digital', color: '#0000FF' },
  { text: 'Agency.', color: 'var(--color-cream)' },
] as const;

const headlineStyle = {
  fontSize: 'clamp(2.5rem, 12vw, 7.5rem)',
  letterSpacing: '-0.025em',
} as const;

type MotionPrefs = {
  reducedMotion: boolean;
  isDesktop: boolean;
};

/** SSR + first client paint — full headline for LCP, no animation delay. */
function HeadlinePlaceholder() {
  return <StaticHeadline />;
}

function StaticHeadline() {
  return (
    <h1 className="mb-12" aria-label="Premium Digital Agency">
      {HEADLINE_SEGMENTS.map((seg) => (
        <div key={seg.text} className="leading-[0.92]">
          <span
            className="block font-body font-bold uppercase"
            style={{ ...headlineStyle, color: seg.color }}
          >
            {seg.text}
          </span>
        </div>
      ))}
    </h1>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const [motionPrefs, setMotionPrefs] = useState<MotionPrefs | null>(null);
  const [headlineDone, setHeadlineDone] = useState(false);

  useEffect(() => {
    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktopMq = window.matchMedia('(min-width: 768px)');
    setMotionPrefs({
      reducedMotion: reducedMq.matches,
      isDesktop: desktopMq.matches,
    });

    const onReducedChange = (e: MediaQueryListEvent) => {
      setMotionPrefs((prev) =>
        prev ? { ...prev, reducedMotion: e.matches } : prev,
      );
    };
    const onDesktopChange = (e: MediaQueryListEvent) => {
      setMotionPrefs((prev) =>
        prev ? { ...prev, isDesktop: e.matches } : prev,
      );
    };

    reducedMq.addEventListener('change', onReducedChange);
    desktopMq.addEventListener('change', onDesktopChange);
    return () => {
      reducedMq.removeEventListener('change', onReducedChange);
      desktopMq.removeEventListener('change', onDesktopChange);
    };
  }, []);

  const shouldAnimateParallax =
    motionPrefs !== null && motionPrefs.isDesktop && !motionPrefs.reducedMotion;

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldAnimateParallax ? ['0%', '22%'] : ['0%', '0%'],
  );
  const fadeOut = useTransform(
    scrollYProgress,
    [0, 0.55],
    shouldAnimateParallax ? [1, 0] : [1, 1],
  );

  const handleHeadlineComplete = useCallback(() => setHeadlineDone(true), []);

  useEffect(() => {
    if (!motionPrefs) return;
    if (motionPrefs.reducedMotion || !motionPrefs.isDesktop) {
      setHeadlineDone(true);
    }
  }, [motionPrefs]);

  const useTypewriter =
    motionPrefs !== null && motionPrefs.isDesktop && !motionPrefs.reducedMotion;

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden bg-[#F5F5F5]"
      aria-label="Hero — Premium Digital Agency for the Middle East and Africa"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-wallpaper.png"
          alt=""
          fill
          priority
          className="object-cover object-[65%_center]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(245,245,245,0.35) 0%, rgba(245,245,245,0.05) 35%, rgba(245,245,245,0.65) 75%, rgba(245,245,245,0.95) 100%)',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 h-full flex flex-col justify-end"
        style={{ y: textY, opacity: fadeOut }}
      >
        <div className="container-site pb-20 md:pb-28">
          {motionPrefs === null ? (
            <HeadlinePlaceholder />
          ) : useTypewriter ? (
            <TypewriterText
              segments={HEADLINE_SEGMENTS}
              className="mb-12"
              style={headlineStyle}
              ariaLabel="Premium Digital Agency"
              onComplete={handleHeadlineComplete}
            />
          ) : (
            <StaticHeadline />
          )}

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-black/[0.08] pt-7">
            <p
              className="font-body font-light text-ink-body max-w-xs leading-relaxed"
              style={{ fontSize: '1rem' }}
            >
              Building brands &amp; digital experiences<br />
              for the Middle East and Africa.
            </p>

            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 sm:gap-8">
              <Link
                href="/work"
                className="group flex items-center gap-3 font-body font-light uppercase text-ink-body hover:text-[var(--color-cream)] focus-visible:text-blue-link transition-colors duration-400 outline-none min-h-[44px] text-eyebrow"
                style={{ letterSpacing: '0.3em' }}
              >
                Explore Work
                <span className="w-7 h-px bg-current transition-all duration-500 group-hover:w-12" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 font-body font-light uppercase text-white bg-[#0000FF] border border-[#0000FF] hover:bg-[#111] hover:border-[#111] focus-visible:ring-2 focus-visible:ring-[#0000FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F5] transition-all duration-300 outline-none text-eyebrow"
                style={{ letterSpacing: '0.3em' }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {motionPrefs && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          aria-hidden="true"
          initial={motionPrefs.reducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: headlineDone ? 1 : 0 }}
          transition={{ delay: motionPrefs.reducedMotion ? 0 : 0.5, duration: 0.8 }}
          style={{ opacity: fadeOut }}
        >
          <motion.span
            className="block w-px bg-[var(--color-cream)]/20"
            style={{ height: 52 }}
            animate={
              motionPrefs.reducedMotion
                ? {}
                : {
                    scaleY: [0, 1, 0],
                    opacity: [0, 0.5, 0],
                  }
            }
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </section>
  );
}
