'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  id: string;
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const columns = [
  {
    group: 'Finance & Commerce',
    items: [
      { name: 'Financial Services',   markets: 'GCC · North Africa' },
      { name: 'Fintech & Payments',   markets: 'Africa · Levant' },
      { name: 'Banking & Insurance',  markets: 'GCC · Morocco · Kenya' },
      { name: 'Luxury & Fashion',     markets: 'UAE · KSA · Morocco' },
      { name: 'Retail & E-commerce',  markets: 'MEA-wide' },
    ],
  },
  {
    group: 'Infrastructure & Industry',
    items: [
      { name: 'Real Estate & PropTech',  markets: 'UAE · KSA · Egypt' },
      { name: 'Energy & Oil & Gas',      markets: 'Gulf · North Africa' },
      { name: 'Logistics & Supply Chain',markets: 'GCC · Kenya · Morocco' },
      { name: 'Construction & Infra',    markets: 'UAE · KSA · Egypt' },
      { name: 'Telecommunications',      markets: 'Africa · Gulf' },
    ],
  },
  {
    group: 'People & Society',
    items: [
      { name: 'Healthcare & MedTech',    markets: 'UAE · KSA · Egypt' },
      { name: 'Education & EdTech',      markets: 'MEA-wide' },
      { name: 'Government & Public',     markets: 'UAE · KSA · Egypt' },
      { name: 'Hospitality & Tourism',   markets: 'GCC · East Africa' },
      { name: 'Media & Entertainment',   markets: 'MENA · Sub-Saharan' },
    ],
  },
];

const stats = [
  { v: '20+', l: 'Industries' },
  { v: '54',  l: 'Countries in Scope' },
  { v: '10+', l: 'Years Delivering' },
];

export function MegaMenuIndustries({ id, isVisible, onMouseEnter, onMouseLeave }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id={id}
          role="region"
          aria-label="Industries menu"
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
            <div className="flex divide-x divide-black/[0.05]" style={{ minHeight: '380px' }}>

              {/* ── Three industry columns ── */}
              {columns.map((col, ci) => (
                <div key={col.group} className="flex-1 py-8 px-8 first:pl-0 last:pr-0">
                  <span className="block font-body font-light uppercase text-[#0000FF]/50 mb-5"
                    style={{ fontSize: '0.63rem', letterSpacing: '0.3em' }}>
                    {col.group}
                  </span>
                  <ul className="space-y-0">
                    {col.items.map((ind, ii) => (
                      <motion.li
                        key={ind.name}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: ci * 0.04 + ii * 0.03, duration: 0.2 }}
                      >
                        <Link href="/industries"
                          className="group flex items-start justify-between py-2.5 border-b border-black/[0.04] hover:border-black/[0.08] transition-colors duration-200">
                          <span className="font-body font-light text-[var(--color-cream)]/55 group-hover:text-[var(--color-cream)] transition-colors duration-200"
                            style={{ fontSize: '0.94rem' }}>
                            {ind.name}
                          </span>
                          <span className="font-body font-light text-[var(--color-cream)]/20 group-hover:text-[#0000FF]/50 transition-colors duration-200 shrink-0 ml-2 mt-0.5"
                            style={{ fontSize: '0.63rem', letterSpacing: '0.12em' }}>
                            {ind.markets}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* ── Right: regional stats card ── */}
              <div className="w-56 shrink-0 py-8 pl-8">
                <span className="block font-body font-light uppercase text-[var(--color-cream)]/22 mb-5"
                  style={{ fontSize: '0.66rem', letterSpacing: '0.32em' }}>
                  Our Reach
                </span>
                <div className="space-y-6 mb-8">
                  {stats.map(({ v, l }) => (
                    <div key={l}>
                      <span className="block font-display font-semibold text-[var(--color-cream)]"
                        style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                        {v}
                      </span>
                      <span className="block font-body font-light text-[var(--color-cream)]/30 uppercase mt-0.5"
                        style={{ fontSize: '0.66rem', letterSpacing: '0.2em' }}>
                        {l}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-black/[0.06] pt-5">
                  <Link href="/industries"
                    className="inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/30 hover:text-[#0000FF] transition-all duration-300 hover:gap-5"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.28em' }}>
                    All Industries
                    <span className="w-5 h-px bg-current" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom CTA bar ── */}
          <div className="border-t border-black/[0.05] py-3.5 px-8 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0000FF]" />
              <p className="font-body font-light text-[var(--color-cream)]/45" style={{ fontSize: '0.9rem' }}>
                <span className="text-[var(--color-cream)]/70">Don&apos;t see your industry?</span>
                {' '}We have delivered across 20+ sectors — chances are we know your market.
              </p>
            </div>
            <Link href="/contact"
              className="shrink-0 inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/35 hover:text-[#0000FF] transition-all duration-300"
              style={{ fontSize: '0.7rem', letterSpacing: '0.26em' }}>
              Get in Touch
              <span className="w-4 h-px bg-current" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
