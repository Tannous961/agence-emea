import Image from 'next/image';
import { offices } from '@/lib/data/clients';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function RegionalSection() {
  return (
    <section className="bg-[#F5F5F5] section-pad border-t border-black/[0.05]" aria-labelledby="regional-heading">
      <div className="container-site">

        {/* Label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20 md:mb-28">
            <span className="w-4 h-px bg-[#0000FF]" />
            <h2
              id="regional-heading"
              className="font-body font-light uppercase text-ink-meta"
              style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
            >
              Regional Presence
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: offices list */}
          <div>
            <ScrollReveal>
              <p
                className="font-display font-semibold uppercase text-[var(--color-cream)] mb-16"
                style={{
                  fontSize:      'clamp(2rem, 4.5vw, 4.5rem)',
                  lineHeight:    0.92,
                  letterSpacing: '-0.02em',
                }}
              >
                Locally Rooted.<br />
                <span className="text-accent">
                  Globally Capable.
                </span>
              </p>
            </ScrollReveal>

            <div>
              {offices.map((o, i) => (
                <ScrollReveal key={o.city} delay={0.06 + i * 0.07}>
                  <div className="border-t border-black/[0.06] py-6 flex items-start gap-6">
                    <span
                      className="shrink-0 font-body font-light text-blue-link tabular-nums pt-px"
                      style={{ fontSize: '0.72rem', letterSpacing: '0.15em' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <span
                        className="block font-body font-light text-ink"
                        style={{ fontSize: '1rem' }}
                      >
                        {o.city}, {o.country}
                      </span>
                      <span
                        className="block font-body font-light text-ink-meta mt-0.5"
                        style={{ fontSize: '0.82rem', letterSpacing: '0.08em' }}
                      >
                        {o.markets.slice(0, 3).join(' · ')}
                      </span>
                    </div>
                    <span
                      className="shrink-0 font-body font-light text-ink-meta pt-px"
                      style={{ fontSize: '0.78rem', letterSpacing: '0.15em' }}
                    >
                      {o.timezone}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
              <div className="border-t border-black/[0.06]" />
            </div>
          </div>

          {/* Right: image */}
          <ScrollReveal delay={0.15} direction="left">
            <div
              className="relative overflow-hidden"
              style={{ height: 'clamp(380px, 60vw, 600px)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=85"
                alt="Dubai skyline"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(245,245,245,0.6) 0%, rgba(245,245,245,0) 50%)' }}
              />
              <div className="absolute bottom-7 left-7 right-7">
                <span
                  className="block font-body font-light uppercase text-ink-meta mb-1"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
                >
                  Coverage
                </span>
                <p
                  className="font-display font-semibold uppercase text-[var(--color-cream)]"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: 0.92 }}
                >
                  25+ Markets<br />Across MEA
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
