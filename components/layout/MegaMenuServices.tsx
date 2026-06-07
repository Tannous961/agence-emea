'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/data/services';

interface Props {
  id: string;
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const groups = [
  { label: 'Brand & Design', slugs: ['brand-strategy', 'ux-ui-design'] },
  { label: 'Build',          slugs: ['web-development', 'mobile-apps', 'cloud-devops'] },
  { label: 'Grow',           slugs: ['digital-marketing', 'ai-automation'] },
];

export function MegaMenuServices({ id, isVisible, onMouseEnter, onMouseLeave }: Props) {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const active = services.find((s) => s.slug === activeSlug) ?? services[0];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id={id}
          role="region"
          aria-label="Services menu"
          className="fixed left-0 right-0 z-40 bg-white border-b border-black/[0.05] overflow-hidden"
          style={{ top: 'var(--header-height)' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="container-site">
            <div className="flex divide-x divide-black/[0.05]" style={{ minHeight: '400px' }}>

              {/* ── Left sidebar ── */}
              <div className="w-52 shrink-0 py-8 pr-7">
                <span className="block font-body font-light uppercase text-[var(--color-cream)]/22 mb-5"
                  style={{ fontSize: '0.66rem', letterSpacing: '0.32em' }}>
                  Core Services
                </span>
                {groups.map((g) => (
                  <div key={g.label} className="mb-5">
                    <span className="block font-body font-light uppercase text-[#0000FF]/50 mb-2"
                      style={{ fontSize: '0.62rem', letterSpacing: '0.28em' }}>
                      {g.label}
                    </span>
                    {g.slugs.map((slug) => {
                      const svc = services.find((s) => s.slug === slug)!;
                      const isActive = activeSlug === slug;
                      return (
                        <button
                          key={slug}
                          className="w-full text-left flex items-center justify-between py-2 group transition-colors duration-200"
                          onMouseEnter={() => setActiveSlug(slug)}
                        >
                          <span
                            className="font-body font-light transition-colors duration-200"
                            style={{
                              fontSize: '0.94rem',
                              color: isActive
                                ? 'var(--color-cream)'
                                : 'rgba(17,17,17,0.38)',
                            }}
                          >
                            {svc.shortTitle}
                          </span>
                          <motion.span
                            className="w-3 h-px bg-[#0000FF]"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: isActive ? 1 : 0, scaleX: isActive ? 1 : 0 }}
                            transition={{ duration: 0.15 }}
                          />
                        </button>
                      );
                    })}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-black/[0.05]">
                  <Link href="/services"
                    className="font-body font-light uppercase text-[var(--color-cream)]/25 hover:text-[#0000FF] transition-colors duration-300 flex items-center gap-2"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.28em' }}>
                    All Services
                    <span className="w-3 h-px bg-current" />
                  </Link>
                </div>
              </div>

              {/* ── Center: features panel ── */}
              <div className="flex-1 py-8 px-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlug}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                  >
                    {/* Service header */}
                    <div className="mb-7">
                      <p className="font-body font-light uppercase text-[#0000FF]/60 mb-2"
                        style={{ fontSize: '0.66rem', letterSpacing: '0.3em' }}>
                        What&apos;s Included
                      </p>
                      <h3 className="font-display font-semibold uppercase text-[var(--color-cream)]"
                        style={{ fontSize: 'clamp(1.2rem, 2vw, 1.9rem)', letterSpacing: '-0.015em', lineHeight: 0.95 }}>
                        {active.title}
                      </h3>
                      <p className="font-body font-light text-[var(--color-cream)]/35 mt-1.5"
                        style={{ fontSize: '0.9rem' }}>
                        {active.tagline}
                      </p>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-2 gap-x-8">
                      {active.features.map((f) => (
                        <div key={f} className="flex items-start gap-3 py-2.5 border-b border-black/[0.04]">
                          <span className="shrink-0 mt-[7px] w-1 h-1 rounded-full bg-[#0000FF]/70" />
                          <span className="font-body font-light text-[var(--color-cream)]/55 leading-snug"
                            style={{ fontSize: '0.92rem' }}>
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/services/${active.slug}`}
                      className="mt-7 inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/30 hover:text-[#0000FF] transition-all duration-300 hover:gap-5"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.28em' }}>
                      Explore {active.shortTitle}
                      <span className="w-5 h-px bg-current" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ── Right: image + description ── */}
              <div className="w-64 shrink-0 py-8 pl-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${activeSlug}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden mb-5">
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        className="object-cover grayscale"
                        sizes="256px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent" />
                    </div>
                    <p className="font-body font-light text-[var(--color-cream)]/35 leading-relaxed"
                      style={{ fontSize: '0.88rem' }}>
                      {active.description.length > 110
                        ? active.description.slice(0, 110) + '…'
                        : active.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ── Bottom CTA bar ── */}
          <div className="bg-[#0000FF] py-3.5 px-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/50" />
              <p className="font-body font-light text-white/75" style={{ fontSize: '0.9rem' }}>
                <span className="text-white">Got a project idea?</span>
                {' '}We turn ambitions into world-class digital products.
              </p>
            </div>
            <Link href="/contact"
              className="shrink-0 inline-flex items-center gap-3 font-body font-light uppercase text-white/70 hover:text-white border border-white/30 hover:border-white transition-all duration-300 px-5 py-2"
              style={{ fontSize: '0.7rem', letterSpacing: '0.26em' }}>
              Start Building
              <span className="w-3 h-px bg-current" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
