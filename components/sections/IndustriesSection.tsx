'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionViewAllLink } from '@/components/ui/SectionViewAllLink';
import { IndustriesGroupedView } from '@/components/sections/IndustriesGroupedView';

export function IndustriesSection() {
  return (
    <section
      className="bg-[#F5F5F5] section-pad border-t border-black/[0.05]"
      aria-labelledby="industries-heading"
    >
      <div className="container-site">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-5">
                <span className="w-4 h-px bg-[#0000FF]" />
                <span
                  className="font-body font-light uppercase text-ink-meta"
                  style={{ fontSize: '0.62rem', letterSpacing: '0.35em' }}
                >
                  Industries We Serve
                </span>
              </div>
              <h2
                id="industries-heading"
                className="font-display font-semibold uppercase text-[var(--color-cream)]"
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                }}
              >
                Built for Every<br />
                <span className="text-accent">MEA Vertical.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 lg:gap-6 shrink-0">
              <p
                className="font-body font-light text-ink-meta max-w-sm leading-relaxed"
                style={{ fontSize: '0.88rem' }}
              >
                Organised by sector — from finance and infrastructure to healthcare and hospitality across MEA.
              </p>
              <SectionViewAllLink href="/industries" label="All Industries" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <IndustriesGroupedView variant="compact" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-16 md:mt-20 bg-[#F0F0F0] border border-black/[0.07] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0000FF]" />
              <p className="font-body font-light text-ink-body" style={{ fontSize: '0.88rem' }}>
                <span className="text-ink font-normal">Don&apos;t see your industry?</span>
                {' '}We work across 18+ sectors — let&apos;s discuss your market.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center gap-3 min-h-[44px] px-5 py-2 font-body font-light uppercase text-white bg-[#0000FF] border border-[#0000FF] hover:bg-[#111] hover:border-[#111] transition-all duration-300 text-eyebrow"
              style={{ letterSpacing: '0.28em' }}
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
