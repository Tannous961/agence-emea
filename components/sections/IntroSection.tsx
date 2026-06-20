import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CapabilitiesStrip } from '@/components/sections/CapabilitiesStrip';

export function IntroSection() {
  return (
    <section
      className="bg-[#F5F5F5] section-pad border-t border-black/[0.05]"
      aria-label="Agency introduction"
    >
      <div className="container-site">
        <div className="max-w-5xl">
          <ScrollReveal>
            <p
              className="font-display font-semibold uppercase"
              style={{
                fontSize: 'clamp(2.2rem, 5.2vw, 5.2rem)',
                lineHeight: 0.94,
                letterSpacing: '-0.02em',
                color: 'var(--color-cream)',
              }}
            >
              The partner of choice for brands that{' '}
              <span className="text-accent">
                refuse to be ordinary
              </span>{' '}
              — and operations that refuse to be slow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p
              className="font-body font-light text-ink-meta mt-8 max-w-2xl leading-relaxed"
              style={{ fontSize: '1.06rem' }}
            >
              From UX design that eliminates friction at every touchpoint, to AI automation and platforms that turn deployment into a daily routine — we engineer operational excellence into everything we build.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-24 md:mt-32 border-t border-black/[0.07]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { value: '10+', unit: 'Years', sub: 'Operating in MEA markets' },
              { value: '140+', unit: 'Clients', sub: 'Across 25 countries' },
              { value: '4', unit: 'Offices', sub: 'Beirut · Lagos · Dubai · Riyadh' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.unit} delay={i * 0.06}>
                <div className="py-10 md:py-14 md:px-8 border-b md:border-b-0 md:border-r border-black/[0.07] last:border-r-0 last:border-b-0">
                  <span
                    className="block font-display font-semibold text-[var(--color-cream)]"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="block font-body font-light uppercase text-blue-link mt-2"
                    style={{ fontSize: '0.72rem', letterSpacing: '0.28em' }}
                  >
                    {stat.unit}
                  </span>
                  <span
                    className="block font-body font-light text-ink-meta mt-3 leading-relaxed"
                    style={{ fontSize: '0.88rem' }}
                  >
                    {stat.sub}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <CapabilitiesStrip />
      </div>
    </section>
  );
}
