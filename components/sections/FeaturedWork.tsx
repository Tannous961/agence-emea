'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { CaseStudy } from '@/lib/types';
import { caseStudies } from '@/lib/data/work';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function FeaturedWork() {
  const [hero, second, third] = caseStudies;

  return (
    <section className="bg-[#F5F5F5] section-pad" aria-labelledby="work-heading">
      <div className="container-site">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-16 md:mb-20">
            <div className="flex items-center gap-4">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span
                className="font-body font-light uppercase text-[var(--color-cream)]/40"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
              >
                Selected Work
              </span>
            </div>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/35 hover:text-[var(--color-cream)] transition-colors duration-400"
              style={{ fontSize: '0.72rem', letterSpacing: '0.3em' }}
            >
              View All
              <span className="w-6 h-px bg-current" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Hero tile — full width, cinematic 16:7 */}
        <ScrollReveal className="mb-2">
          <Tile study={hero} height="75vh" index={1} />
        </ScrollReveal>

        {/* Two secondary tiles */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <ScrollReveal className="md:col-span-3" delay={0.1}>
            <Tile study={second} height="55vh" index={2} />
          </ScrollReveal>
          <ScrollReveal className="md:col-span-2" delay={0.2}>
            <Tile study={third} height="55vh" index={3} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Tile({ study, height, index }: { study: CaseStudy; height: string; index: number }) {
  const [hov, setHov] = useState(false);
  const pfx = useReducedMotion();

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative block overflow-hidden bg-[#E8E8E8]"
      style={{ height }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={`${study.title} — ${study.client}`}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0"
        animate={!pfx ? { scale: hov ? 1.05 : 1 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src={study.coverImage}
          alt={`${study.client}: ${study.title}`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </motion.div>

      {/* Cinematic overlay — thickens on hover */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(245,245,245,0.92) 0%, rgba(245,245,245,0.3) 50%, rgba(245,245,245,0.1) 100%)',
        }}
        animate={!pfx ? { opacity: hov ? 1.2 : 1 } : {}}
        transition={{ duration: 0.6 }}
      />

      {/* Index — large decorative backdrop */}
      <span
        className="absolute top-6 right-7 font-display font-semibold text-black/[0.06] leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', letterSpacing: '-0.04em' }}
        aria-hidden="true"
      >
        {String(index).padStart(2, '0')}
      </span>

      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">

        {/* Blue reveal line */}
        <motion.span
          className="block h-px bg-[#0000FF] origin-left mb-5"
          style={{ width: '2.5rem' }}
          animate={!pfx ? { scaleX: hov ? 1 : 0 } : { scaleX: 1 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        {/* Category */}
        <span
          className="block font-body font-light uppercase text-[var(--color-cream)]/40 mb-3"
          style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
        >
          {study.category}
        </span>

        {/* Title */}
        <h3
          className="font-display font-semibold uppercase text-[var(--color-cream)] leading-[0.92]"
          style={{
            fontSize:      'clamp(1.6rem, 3.2vw, 3.2rem)',
            letterSpacing: '-0.02em',
          }}
        >
          {study.title}
        </h3>

        <p
          className="font-body font-light text-[var(--color-cream)]/40 mt-2"
          style={{ fontSize: '0.88rem', letterSpacing: '0.08em' }}
        >
          {study.client} <span className="text-white/20">·</span> {study.year}
        </p>

        {/* Metrics — fade in on hover */}
        <motion.div
          className="flex gap-8 mt-6 overflow-hidden"
          animate={!pfx ? { height: hov ? 'auto' : 0, opacity: hov ? 1 : 0 } : {}}
          initial={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {study.metrics.slice(0, 2).map((m) => (
            <div key={m.label}>
              <span
                className="block font-display font-semibold text-[#0000FF] leading-none"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', letterSpacing: '-0.03em' }}
              >
                {m.value}
              </span>
              <span
                className="block font-body font-light uppercase text-[var(--color-cream)]/35 mt-1"
                style={{ fontSize: '0.72rem', letterSpacing: '0.25em' }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </Link>
  );
}
