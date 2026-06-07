import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '@/lib/data/work';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CtaSection } from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Work — Case Studies & Projects',
  description:
    'A selection of our work across brand strategy, web development, mobile apps, and digital marketing for clients throughout the Middle East and Africa.',
  alternates: { canonical: 'https://agence-emea.com/work' },
};

export default function WorkPage() {
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
                Selected Projects
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}>
              Work That<br />
              <span style={{ WebkitTextStroke: '1px rgba(17,17,17,0.4)', color: 'transparent' }}>
                Moves the Needle.
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 font-body font-light text-[var(--color-cream)]/45 max-w-lg leading-relaxed"
              style={{ fontSize: '1.06rem' }}>
              Every project here has a business result attached. Craft is the baseline — outcomes are the measure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Work grid */}
      <section className="bg-[#F5F5F5] py-24" aria-label="Case studies">
        <div className="container-site">
          {/* First item — hero tile (full width) */}
          <ScrollReveal>
            <Link
              href={`/work/${caseStudies[0].slug}`}
              className="group relative block overflow-hidden mb-4"
              style={{ height: 'clamp(380px, 55vh, 620px)' }}
              aria-label={`${caseStudies[0].title} — ${caseStudies[0].client}`}
            >
              <Image
                src={caseStudies[0].coverImage}
                alt={`${caseStudies[0].client}: ${caseStudies[0].title}`}
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
              <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudies[0].tags.slice(0, 3).map((t) => (
                    <span key={t}
                      className="font-body font-light text-[var(--color-cream)]/40 border border-black/[0.15] px-3 py-1"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-display font-semibold uppercase text-[var(--color-cream)]"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.92, letterSpacing: '-0.02em' }}>
                  {caseStudies[0].title}
                </h2>
                <p className="font-body font-light text-[var(--color-cream)]/45 mt-2"
                  style={{ fontSize: '0.92rem' }}>
                  {caseStudies[0].client} · {caseStudies[0].year}
                </p>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-lg">
                  {caseStudies[0].metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <span className="block font-display font-semibold text-[#0000FF]"
                        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}>
                        {m.value}
                      </span>
                      <span className="block font-body font-light text-[var(--color-cream)]/35 uppercase mt-0.5"
                        style={{ fontSize: '0.66rem', letterSpacing: '0.2em' }}>
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Remaining grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudies.slice(1).map((study, i) => (
              <ScrollReveal key={study.slug} delay={Math.min(i * 0.07, 0.25)}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group relative block overflow-hidden"
                  style={{ height: 'clamp(280px, 40vh, 440px)' }}
                  aria-label={`${study.title} — ${study.client}`}
                >
                  <Image
                    src={study.coverImage}
                    alt={`${study.client}: ${study.title}`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <h2 className="font-display font-semibold uppercase text-[var(--color-cream)]"
                      style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.9rem)', lineHeight: 0.95, letterSpacing: '-0.015em' }}>
                      {study.title}
                    </h2>
                    <p className="font-body font-light text-[var(--color-cream)]/40 mt-1.5"
                      style={{ fontSize: '0.86rem' }}>
                      {study.client} · {study.year}
                    </p>
                    <div className="mt-4 flex gap-5">
                      {study.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <span className="block font-display font-semibold text-[#0000FF]"
                            style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)', letterSpacing: '-0.03em' }}>
                            {m.value}
                          </span>
                          <span className="block font-body font-light text-[var(--color-cream)]/30 uppercase mt-0.5"
                            style={{ fontSize: '0.64rem', letterSpacing: '0.18em' }}>
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
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
