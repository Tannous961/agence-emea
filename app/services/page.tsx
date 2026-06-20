import type { Metadata } from 'next';
import { services } from '@/lib/data/services';
import { BRAND } from '@/lib/constants/brand';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ServicesShowcase } from '@/components/sections/ServicesShowcase';
import { CtaSection } from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Services — Brand, Web, Mobile, AI & Digital Marketing',
  description:
    'AI automation, brand strategy, web development, mobile apps, and digital marketing — five integrated practice areas engineered for operational excellence in MEA.',
  alternates: { canonical: `${BRAND.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-[#F5F5F5] pt-44 pb-20 md:pb-28 border-b border-[#0000FF]/10 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,80vw)] h-[min(600px,80vw)] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative container-site text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span
                className="font-body font-light uppercase text-blue-link"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
              >
                Our Services
              </span>
              <span className="w-4 h-px bg-[#0000FF]" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}
            >
              Five Practices.<br />
              <span className="text-accent">One Team.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p
              className="mt-8 font-body font-light text-ink-body mx-auto leading-relaxed"
              style={{ fontSize: '1.06rem' }}
            >
              From AI and brand strategy to web, mobile, and growth — every capability under one roof,
              built for ambitious brands across the Middle East and Africa.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              className="mt-6 font-body font-light text-blue-link"
              style={{ fontSize: '0.88rem', letterSpacing: '0.12em' }}
            >
              {services.length} integrated services
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ServicesShowcase />

      <CtaSection />
    </>
  );
}
