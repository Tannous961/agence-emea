import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/data/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CtaSection } from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Services — Brand, Web, Mobile, AI & Digital Marketing',
  description:
    'UX/UI design, cloud & DevOps, brand strategy, AI automation — the full spectrum of digital services engineered for operational excellence in MEA.',
  alternates: { canonical: 'https://agence-emea.com/services' },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-44 pb-24 border-b border-black/[0.05]">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span className="font-body font-light uppercase text-[var(--color-cream)]/40"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                Our Services
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}>
              Everything You<br />
              <span style={{ WebkitTextStroke: '1px rgba(17,17,17,0.4)', color: 'transparent' }}>
                Need to Lead.
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 font-body font-light text-[var(--color-cream)]/45 max-w-lg leading-relaxed"
              style={{ fontSize: '1.06rem' }}>
              Seven integrated practice areas — from UX design and cloud infrastructure to AI and brand strategy. One focused team, built around operational excellence in MEA.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-[#F5F5F5] py-0" aria-label="All services">
        <div className="container-site">
          <div className="divide-y divide-black/[0.05]">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={Math.min(i * 0.04, 0.25)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col md:flex-row md:items-center gap-8 py-10 md:py-12 hover:bg-[#F2F2F2] px-2 -mx-2 transition-colors duration-300"
                >
                  <span className="shrink-0 font-display font-semibold text-[var(--color-cream)]/[0.08] group-hover:text-[#0000FF]/20 transition-colors tabular-nums"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1, letterSpacing: '-0.04em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h2 className="font-display font-semibold uppercase text-[var(--color-cream)]"
                      style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)', letterSpacing: '-0.015em', lineHeight: 0.95 }}>
                      {service.title}
                    </h2>
                    <p className="mt-3 font-body font-light text-[var(--color-cream)]/40 max-w-2xl leading-relaxed"
                      style={{ fontSize: '1rem' }}>
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((f) => (
                        <span key={f}
                          className="font-body font-light text-[var(--color-cream)]/25 border border-black/[0.07] px-3 py-1.5 group-hover:border-black/[0.12] transition-colors duration-300"
                          style={{ fontSize: '0.72rem', letterSpacing: '0.14em' }}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span
                    className="shrink-0 inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/30 group-hover:text-[#0000FF] transition-all duration-300 group-hover:gap-5"
                    style={{ fontSize: '0.72rem', letterSpacing: '0.3em' }}
                  >
                    Explore
                    <span className="w-6 h-px bg-current" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
