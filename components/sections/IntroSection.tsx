import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function IntroSection() {
  return (
    <section
      className="bg-[#F5F5F5] section-pad border-t border-black/[0.05]"
      aria-label="Agency introduction"
    >
      <div className="container-site">
        {/* Large editorial statement */}
        <div className="max-w-5xl">
          <ScrollReveal>
            <p
              className="font-display font-semibold uppercase"
              style={{
                fontSize:      'clamp(2.2rem, 5.2vw, 5.2rem)',
                lineHeight:    0.94,
                letterSpacing: '-0.02em',
                color:         'var(--color-cream)',
              }}
            >
              The partner of choice for brands that{' '}
              <span
                style={{
                  WebkitTextStroke: '1px rgba(17,17,17,0.4)',
                  color:             'rgba(0, 0, 255, 1)',
                }}
              >
                refuse to be ordinary
              </span>{' '}
              — and operations that refuse to be slow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p
              className="font-body font-light text-[var(--color-cream)]/40 mt-8 max-w-2xl leading-relaxed"
              style={{ fontSize: '1.06rem' }}
            >
              From UX design that eliminates friction at every touchpoint, to cloud infrastructure that turns deployment into a daily routine — we engineer operational excellence into everything we build.
            </p>
          </ScrollReveal>
        </div>

        {/* Rule + stats */}
        <div className="mt-24 md:mt-32 border-t border-black/[0.07]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { value: '10+',  unit: 'Years',    sub: 'Operating in MEA markets'     },
              { value: '140+', unit: 'Clients',  sub: 'Across 25 countries'          },
              { value: '5',    unit: 'Offices',  sub: 'Dubai · Riyadh · Cairo · Nairobi · Casablanca' },
            ].map(({ value, unit, sub }, i) => (
              <ScrollReveal key={value} delay={0.1 + i * 0.1}>
                <div className="border-t md:border-t-0 md:border-r border-black/[0.07] last:border-r-0 pt-12 md:pt-14 pb-2 md:px-10 first:md:pl-0 last:md:pr-0">
                  <div className="flex items-end gap-2 mb-3">
                    <span
                      className="font-display font-semibold leading-none"
                      style={{
                        fontSize:      'clamp(3.5rem, 6vw, 5.5rem)',
                        letterSpacing: '-0.04em',
                        WebkitTextStroke: '1px rgba(17,17,17,0.5)',
                        color:            'rgba(0, 0, 255, 1)',
                      }}
                    >
                      {value}
                    </span>
                    <span
                      className="font-body font-light text-[var(--color-cream)]/50 uppercase pb-2"
                      style={{ fontSize: '0.75rem', letterSpacing: '0.3em' }}
                    >
                      {unit}
                    </span>
                  </div>
                  <p
                    className="font-body font-light text-[var(--color-cream)]/35"
                    style={{ fontSize: '0.9rem', letterSpacing: '0.08em' }}
                  >
                    {sub}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
