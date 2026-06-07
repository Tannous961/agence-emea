'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useClientMotionPrefs } from '@/lib/hooks/useClientMotionPrefs';

const industries = [
  { name: 'Real Estate & PropTech',     markets: 'UAE · KSA · Egypt'       },
  { name: 'Financial Services',         markets: 'GCC · North Africa'       },
  { name: 'Fintech & Payments',         markets: 'Africa · Levant'          },
  { name: 'Luxury & Fashion',           markets: 'UAE · KSA · Morocco'      },
  { name: 'Retail & E-commerce',        markets: 'MEA-wide'                 },
  { name: 'Hospitality & Tourism',      markets: 'GCC · East Africa'        },
  { name: 'Healthcare & MedTech',       markets: 'UAE · KSA · Egypt'        },
  { name: 'Energy & Oil & Gas',         markets: 'Gulf · North Africa'      },
  { name: 'Logistics & Supply Chain',   markets: 'GCC · Kenya · Morocco'    },
  { name: 'Education & EdTech',         markets: 'MEA-wide'                 },
  { name: 'Government & Public Sector', markets: 'UAE · KSA · Egypt'        },
  { name: 'Media & Entertainment',      markets: 'MENA · Sub-Saharan'       },
  { name: 'Telecommunications',         markets: 'Africa · Gulf'            },
  { name: 'Food & Beverage',            markets: 'GCC · North Africa'       },
  { name: 'Construction & Infra',       markets: 'UAE · KSA · Egypt'        },
  { name: 'Banking & Insurance',        markets: 'GCC · Morocco · Kenya'    },
  { name: 'Agritech & FoodTech',        markets: 'East Africa · Morocco'    },
  { name: 'Travel & Transport',         markets: 'MEA-wide'                 },
];

export function IndustriesSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ready, reducedMotion } = useClientMotionPrefs();
  const motionEnabled = ready && !reducedMotion;

  return (
    <section
      className="bg-[#F5F5F5] section-pad border-t border-black/[0.05]"
      aria-labelledby="industries-heading"
    >
      <div className="container-site">

        {/* Header row */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="w-4 h-px bg-[#0000FF]" />
                <span
                  className="font-body font-light uppercase text-[var(--color-cream)]/40"
                  style={{ fontSize: '0.62rem', letterSpacing: '0.35em' }}
                >
                  Industries We Serve
                </span>
              </div>
              <h2
                id="industries-heading"
                className="font-display font-semibold uppercase text-[var(--color-cream)]"
                style={{
                  fontSize:      'clamp(2rem, 4.5vw, 4.5rem)',
                  lineHeight:    0.92,
                  letterSpacing: '-0.02em',
                }}
              >
                Built for Every<br />
                <span
                  style={{
                    WebkitTextStroke: '1px rgba(17,17,17,0.4)',
                    color: 'rgba(0, 0, 255, 1)',
                  }}
                >
                  MEA Vertical.
                </span>
              </h2>
            </div>
            <p
              className="font-body font-light text-[var(--color-cream)]/40 max-w-xs leading-relaxed"
              style={{ fontSize: '0.82rem' }}
            >
              From sovereign wealth funds to Series A startups — we have delivered across every major sector in the region.
            </p>
          </div>
        </ScrollReveal>

        {/* Industry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.05]">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={Math.min(i * 0.025, 0.3)}>
              <div
                className="relative bg-[#F5F5F5] p-7 group cursor-default overflow-hidden transition-colors duration-300 hover:bg-[#EDEDED]"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Blue left reveal on hover */}
                <motion.span
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#0000FF] origin-top"
                  animate={motionEnabled ? { scaleY: hovered === i ? 1 : 0 } : {}}
                  initial={{ scaleY: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />

                {/* Index */}
                <span
                  className="block font-body font-light text-[var(--color-cream)]/15 mb-4 tabular-nums"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Industry name */}
                <span
                  className="block font-body font-light transition-colors duration-300"
                  style={{
                    fontSize:    '0.88rem',
                    color: hovered === i ? 'var(--color-cream)' : 'rgba(17,17,17,0.6)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {ind.name}
                </span>

                {/* Markets — fade in on hover */}
                <AnimatePresence>
                  {hovered === i && motionEnabled && (
                    <motion.span
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.2 }}
                      className="block font-body font-light text-[#0000FF]/60 mt-1.5"
                      style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
                    >
                      {ind.markets}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA bar — Apptunix-inspired */}
        <ScrollReveal delay={0.2}>
          <div className="mt-px bg-[#F0F0F0] border border-black/[0.07] p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0000FF]" />
              <p className="font-body font-light text-[var(--color-cream)]/55" style={{ fontSize: '0.82rem' }}>
                <span className="text-[var(--color-cream)]/80 font-normal">Don&apos;t see your industry?</span>
                {' '}We have delivered for 20+ sectors across MEA — chances are we have solved your exact problem before.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/50 hover:text-[#0000FF] transition-colors duration-300"
              style={{ fontSize: '0.65rem', letterSpacing: '0.28em' }}
            >
              Let&apos;s Talk
              <span className="w-5 h-px bg-current" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
