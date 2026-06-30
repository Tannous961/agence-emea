import type { Metadata } from 'next';
import Image from 'next/image';
import { team } from '@/lib/data/team';
import { offices } from '@/lib/data/clients';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CtaSection } from '@/components/sections/CtaSection';
import { BRAND } from '@/lib/constants/brand';

export const metadata: Metadata = {
  title: 'About — Who We Are & How We Work',
  description:
    `${BRAND.name} is a premium digital agency headquartered in Dubai, with offices across the Middle East and Africa. Meet our team and learn our approach.`,
  alternates: { canonical: `${BRAND.url}/about` },
};

const values = [
  {
    n: '01',
    v: 'Craft First',
    d: 'We believe the quality of execution is a strategic differentiator. Excellence is not a premium — it is the baseline from which every project starts.',
  },
  {
    n: '02',
    v: 'Radical Honesty',
    d: 'We tell clients what we actually think, even when it is uncomfortable. Long-term trust is more valuable than short-term approval.',
  },
  {
    n: '03',
    v: 'Regional Roots',
    d: 'We do not apply global templates. Every brief is approached through the lens of the specific market, culture, and consumer we are building for.',
  },
  {
    n: '04',
    v: 'Outcome Obsession',
    d: 'Beautiful work that does not perform is a failure. We measure success in revenue, reach, and retention — not in awards and pixels.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-44 pb-24 border-b border-black/[0.05]">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span className="font-body font-light uppercase text-ink-meta"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                About Us
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}>
              Built for<br />This Region.<br />
              <span className="text-accent">
                Obsessed.
              </span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F5F5F5] section-pad border-b border-black/[0.05]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                  alt={`${BRAND.name} team workspace in Dubai`}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle blue overlay on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0000FF]/10 to-transparent" />
              </div>
            </ScrollReveal>

            <div className="space-y-10">
              <ScrollReveal delay={0.1}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-4 h-px bg-[#0000FF]" />
                  <span className="font-body font-light uppercase text-ink-meta"
                    style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                    Our Story
                  </span>
                </div>
                <h2 className="font-display font-semibold uppercase text-[var(--color-cream)]"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 0.92 }}>
                  A Decade of<br />Digital in MEA.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="font-body font-light text-ink-body leading-relaxed"
                  style={{ fontSize: '1.06rem' }}>
                  {BRAND.name} was founded in 2014 with a simple conviction: the Middle East and Africa deserved a world-class digital agency that understood these markets as deeply as any London or New York shop understood theirs.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-body font-light text-ink-meta leading-relaxed"
                  style={{ fontSize: '1rem' }}>
                  We started in Dubai with four people and a refusal to take on work we could not do brilliantly. A decade later, we have four offices across MEA — Beirut, Lagos, Dubai, and Riyadh — 70 full-time specialists, and a client list that includes some of the region&apos;s most recognised organisations — from sovereign wealth funds to Series A startups.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="font-body font-light text-ink-meta leading-relaxed"
                  style={{ fontSize: '1rem' }}>
                  The mission has not changed: be the most trusted digital partner for ambitious brands across the Middle East and Africa.
                </p>
              </ScrollReveal>

              {/* Stats row */}
              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-3 gap-6 pt-4 border-t border-black/[0.06]">
                  {[
                    { v: '10+', l: 'Years' },
                    { v: '70', l: 'Specialists' },
                    { v: '4', l: 'Offices' },
                  ].map(({ v, l }) => (
                    <div key={l}>
                      <span className="block font-display font-semibold text-[var(--color-cream)]"
                        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                        {v}
                      </span>
                      <span className="block font-body font-light text-ink-meta uppercase mt-1"
                        style={{ fontSize: '0.72rem', letterSpacing: '0.25em' }}>
                        {l}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F5F5] section-pad border-b border-black/[0.05]" aria-labelledby="values-heading">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span className="font-body font-light uppercase text-ink-meta"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                Values
              </span>
            </div>
            <h2 id="values-heading"
              className="font-display font-semibold uppercase text-[var(--color-cream)] mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', letterSpacing: '-0.02em', lineHeight: 0.92 }}>
              How We Work.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.05]">
            {values.map(({ n, v, d }, i) => (
              <ScrollReveal key={v} delay={i * 0.08}>
                <div className="bg-[#F5F5F5] p-10 md:p-12 group hover:bg-[#EDEDED] transition-colors duration-300">
                  <span className="block font-body font-light text-ink-muted mb-5 tabular-nums"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.22em' }}>
                    {n}
                  </span>
                  <h3 className="font-display font-semibold uppercase text-[var(--color-cream)] mb-4"
                    style={{ fontSize: 'clamp(1.2rem, 2vw, 1.7rem)', letterSpacing: '-0.015em' }}>
                    {v}
                  </h3>
                  <p className="font-body font-light text-ink-meta leading-relaxed"
                    style={{ fontSize: '1rem' }}>
                    {d}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F5F5F5] section-pad border-b border-black/[0.05]" aria-labelledby="team-heading">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span className="font-body font-light uppercase text-ink-meta"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                Leadership
              </span>
            </div>
            <h2 id="team-heading"
              className="font-display font-semibold uppercase text-[var(--color-cream)] mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', letterSpacing: '-0.02em', lineHeight: 0.92 }}>
              The Team.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={Math.min(i * 0.08, 0.3)}>
                <div className="group">
                  <div className="relative overflow-hidden aspect-[3/4] mb-5 bg-[#E8E8E8]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="font-display font-semibold uppercase text-[var(--color-cream)]"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', letterSpacing: '-0.01em' }}>
                    {member.name}
                  </h3>
                  <p className="font-body font-light text-blue-link mt-0.5"
                    style={{ fontSize: '0.86rem', letterSpacing: '0.12em' }}>
                    {member.role}
                  </p>
                  <p className="font-body font-light text-ink-meta mt-3 leading-relaxed"
                    style={{ fontSize: '0.94rem' }}>
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-[#F5F5F5] section-pad" aria-labelledby="offices-heading">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span className="font-body font-light uppercase text-ink-meta"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                Presence
              </span>
            </div>
            <h2 id="offices-heading"
              className="font-display font-semibold uppercase text-[var(--color-cream)] mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', letterSpacing: '-0.02em', lineHeight: 0.92 }}>
              Four Cities.<br />
              <span className="text-accent">
                One Region.
              </span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.05]">
            {offices.map((o, i) => (
              <ScrollReveal key={o.city} delay={i * 0.07}>
                <div className="bg-[#F5F5F5] p-8 hover:bg-[#EDEDED] transition-colors duration-300">
                  <span className="block font-body font-light text-ink-muted mb-4 tabular-nums"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-body font-light text-ink"
                    style={{ fontSize: '1.02rem' }}>
                    {o.city}
                  </p>
                  <p className="font-body font-light text-ink-meta mt-0.5"
                    style={{ fontSize: '0.78rem', letterSpacing: '0.06em' }}>
                    {o.country}
                  </p>
                  <p className="font-body font-light text-ink-meta mt-3"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                    {o.timezone}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
