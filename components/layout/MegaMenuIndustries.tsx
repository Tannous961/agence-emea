'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getGroupedIndustries } from '@/lib/data/industries';
import { ArrowLinkIcon } from '@/components/ui/ArrowLinkIcon';

interface Props {
  id: string;
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const stats = [
  { v: '18', l: 'Industries' },
  { v: '54', l: 'Countries in Scope' },
  { v: '10+', l: 'Years Delivering' },
];

export function MegaMenuIndustries({ id, isVisible, onMouseEnter, onMouseLeave }: Props) {
  const groups = getGroupedIndustries();

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
              {groups.map((col, ci) => (
                <div key={col.id} className="flex-1 py-8 px-8 first:pl-0 last:pr-0">
                  <Link
                    href={`/industries#${col.id}`}
                    className="block text-eyebrow text-blue-link mb-2 hover:text-[var(--color-cream)] transition-colors duration-200"
                  >
                    {col.label}
                  </Link>
                  <p className="font-body font-light text-ink-meta mb-5 leading-relaxed" style={{ fontSize: '0.78rem' }}>
                    {col.summary}
                  </p>
                  <ul className="space-y-0">
                    {col.industries.map((ind, ii) => (
                      <motion.li
                        key={ind.slug}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: ci * 0.04 + ii * 0.03, duration: 0.2 }}
                      >
                        <Link
                          href={`/industries/${ind.slug}`}
                          className="group flex items-center justify-between py-2.5 border-b border-black/[0.04] hover:border-black/[0.08] transition-colors duration-200 gap-3"
                        >
                          <span
                            className="font-body font-light text-ink-body group-hover:text-[var(--color-cream)] transition-colors duration-200 min-w-0"
                            style={{ fontSize: '0.92rem' }}
                          >
                            {ind.name}
                          </span>
                          <ArrowLinkIcon className="w-7 h-7 group-hover:border-[#0000FF] group-hover:text-[#0000FF]" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="w-56 shrink-0 py-8 pl-8">
                <span className="block text-eyebrow text-ink-meta mb-5">Our Reach</span>
                <div className="space-y-6 mb-8">
                  {stats.map(({ v, l }) => (
                    <div key={l}>
                      <span
                        className="block font-display font-semibold text-[var(--color-cream)]"
                        style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
                      >
                        {v}
                      </span>
                      <span className="block text-eyebrow text-ink-meta mt-0.5">{l}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-black/[0.06] pt-5">
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-3 text-eyebrow text-ink-meta hover:text-blue-link transition-all duration-300 hover:gap-5 min-h-[44px]"
                  >
                    All Industries
                    <span className="w-5 h-px bg-current" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black/[0.05] py-3.5 px-8 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0000FF]" />
              <p className="font-body font-light text-ink-body" style={{ fontSize: '0.9rem' }}>
                <span className="text-ink-body">Don&apos;t see your industry?</span>
                {' '}We have delivered across 18+ sectors — chances are we know your market.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-3 font-body font-light uppercase text-ink-meta hover:text-[#0000FF] transition-all duration-300 min-h-[44px]"
              style={{ fontSize: '0.7rem', letterSpacing: '0.26em' }}
            >
              Get in Touch
              <span className="w-4 h-px bg-current" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
