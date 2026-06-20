import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BRAND } from '@/lib/constants/brand';

const pillars = [
  { n: '01', title: 'Regional Depth',          body: 'Not a global agency parachuting in. We are embedded in MEA — the markets, the languages, the culture.' },
  { n: '02', title: 'End-to-End Craft',         body: 'Strategy through to code, all in-house. No dilution, no off-shoring. Your project gets our full attention.' },
  { n: '03', title: 'Operational Excellence',   body: 'Beautiful is the baseline. Every interface we design and every pipeline we build is engineered to eliminate friction, reduce operational cost, and compound performance over time.' },
  { n: '04', title: 'Senior Attention',         body: 'Our founders and practice leads are on every engagement — not handed off to juniors.' },
  { n: '05', title: 'Commercial Focus',         body: 'We measure in conversion rates, pipeline velocity, and the efficiency gains that come from systems that actually work at scale.' },
];

export function WhyUsSection() {
  return (
    <section className="bg-[#F5F5F5] section-pad border-t border-black/[0.05]" aria-labelledby="why-heading">
      <div className="container-site">

        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20 md:mb-28">
            <span className="w-4 h-px bg-[#0000FF]" />
            <h2
              id="why-heading"
              className="font-body font-light uppercase text-ink-meta"
              style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
            >
              Why {BRAND.name}
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-col: image left, pillars right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Image */}
          <ScrollReveal>
            <div className="relative overflow-hidden" style={{ height: 'clamp(320px, 55vw, 580px)' }}>
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=85"
                alt={`${BRAND.name} studio`}
                fill
                className="object-cover object-center grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(245,245,245,0.4) 0%, rgba(245,245,245,0) 60%)' }} />
            </div>
          </ScrollReveal>

          {/* Pillars */}
          <div>
            {pillars.map((p, i) => (
              <ScrollReveal key={p.n} delay={0.08 + i * 0.08}>
                <div className="border-t border-black/[0.07] py-9">
                  <div className="flex items-start gap-6">
                    <span
                      className="shrink-0 font-body font-light text-blue-link pt-1 tabular-nums"
                      style={{ fontSize: '0.72rem', letterSpacing: '0.15em' }}
                    >
                      {p.n}
                    </span>
                    <div>
                      <h3
                        className="font-display font-semibold uppercase text-[var(--color-cream)] mb-3"
                        style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2rem)', letterSpacing: '-0.015em' }}
                      >
                        {p.title}
                      </h3>
                      <p
                        className="font-body font-light text-ink-meta leading-relaxed"
                        style={{ fontSize: '1rem' }}
                      >
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-black/[0.07]" />
          </div>
        </div>
      </div>
    </section>
  );
}
