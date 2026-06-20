import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CtaSection } from '@/components/sections/CtaSection';
import { IndustriesGroupedView } from '@/components/sections/IndustriesGroupedView';
import { BRAND } from '@/lib/constants/brand';
import { getGroupedIndustries, INDUSTRY_GROUPS } from '@/lib/data/industries';

export const metadata: Metadata = {
  title: 'Industries — Sectors We Serve Across MEA',
  description:
    `${BRAND.name} delivers digital strategy, web development, mobile apps, and AI solutions across 18 industry verticals in the Middle East and Africa.`,
  alternates: { canonical: `${BRAND.url}/industries` },
};

export default function IndustriesPage() {
  const groups = getGroupedIndustries();

  return (
    <>
      <section className="bg-[#F5F5F5] pt-44 pb-20 border-b border-black/[0.05]">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span
                className="font-body font-light uppercase text-ink-meta"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
              >
                Industries
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}
            >
              Built for Every<br />
              <span className="text-accent">MEA Vertical.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p
              className="mt-8 font-body font-light text-ink-body max-w-2xl leading-relaxed"
              style={{ fontSize: '1.06rem' }}
            >
              Eighteen sectors across three clusters — finance, infrastructure, and society. Each with its own regulatory context, cultural nuance, and user behaviour.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <nav className="mt-12 flex flex-wrap gap-3" aria-label="Industry categories">
              {INDUSTRY_GROUPS.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="inline-flex items-center min-h-[44px] px-4 py-2 border border-black/[0.1] font-body font-light uppercase text-ink-body hover:border-[#0000FF] hover:text-accent transition-colors duration-300 text-eyebrow"
                  style={{ letterSpacing: '0.2em' }}
                >
                  {group.label}
                </a>
              ))}
            </nav>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-24 md:py-32" aria-label="All industries">
        <div className="container-site space-y-20 md:space-y-28">
          {groups.map((group, gi) => (
            <ScrollReveal key={group.id} delay={Math.min(gi * 0.06, 0.18)}>
              <div id={group.id} className="scroll-mt-32">
                <IndustriesGroupedView variant="detailed" group={group} />
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.2}>
            <div className="bg-[#F0F0F0] border border-black/[0.07] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0000FF]" />
                <p className="font-body font-light text-ink-body" style={{ fontSize: '1rem' }}>
                  <span className="text-ink">Don&apos;t see your sector?</span>
                  {' '}We have built for 18+ industries across MEA. Let&apos;s talk.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center justify-center gap-3 min-h-[44px] px-5 py-2 font-body font-light uppercase text-white bg-[#0000FF] border border-[#0000FF] hover:bg-[#111] hover:border-[#111] transition-all duration-300 text-eyebrow"
                style={{ letterSpacing: '0.28em' }}
              >
                Get in Touch
                <span className="w-5 h-px bg-current" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
