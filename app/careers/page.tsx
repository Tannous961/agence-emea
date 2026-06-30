import type { Metadata } from 'next';
import Link from 'next/link';
import { openings } from '@/lib/data/careers';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaSection } from '@/components/sections/CtaSection';
import { BRAND } from '@/lib/constants/brand';

export const metadata: Metadata = {
  title: 'Careers — Join Our Team',
  description:
    `Build premium digital experiences for the Middle East and Africa. Explore open roles at ${BRAND.name} in Dubai, Beirut, Riyadh, and Lagos.`,
  alternates: { canonical: `${BRAND.url}/careers` },
};

const perks = [
  {
    title: 'Regional Impact',
    body: 'Work on brands and products that shape markets from Casablanca to Nairobi — not side projects on a global backlog.',
  },
  {
    title: 'Craft Culture',
    body: 'We invest in quality execution. Design systems, code review, and strategic rigour are part of the job, not extras.',
  },
  {
    title: 'Four Hubs',
    body: 'Collaborate across Beirut, Lagos, Dubai, and Riyadh with teams who understand local context and global standards.',
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-[#F5F5F5] pt-44 pb-24 border-b border-black/[0.05]">
        <div className="container-site">
          <ScrollReveal>
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Careers' },
            ]} />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span
                className="font-body font-light uppercase text-ink-meta"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
              >
                Careers
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}
            >
              Build What<br />
              <span className="text-accent">Matters.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p
              className="mt-8 font-body font-light text-ink-body max-w-2xl leading-relaxed"
              style={{ fontSize: '1.06rem' }}
            >
              We hire people who care about the region, obsess over quality, and want to do the best work of their careers — alongside teammates who push them to be better.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F5F5F5] section-pad border-b border-black/[0.05]" aria-labelledby="perks-heading">
        <div className="container-site">
          <ScrollReveal>
            <h2 id="perks-heading" className="sr-only">Why join us</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.05]">
            {perks.map((perk, i) => (
              <ScrollReveal key={perk.title} delay={i * 0.08}>
                <div className="bg-[#F5F5F5] p-10 md:p-12">
                  <h3
                    className="font-display font-semibold uppercase text-[var(--color-cream)] mb-4"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', letterSpacing: '-0.015em' }}
                  >
                    {perk.title}
                  </h3>
                  <p className="font-body font-light text-ink-meta leading-relaxed" style={{ fontSize: '1rem' }}>
                    {perk.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] section-pad" aria-labelledby="openings-heading">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="w-4 h-px bg-[#0000FF]" />
              <h2
                id="openings-heading"
                className="font-body font-light uppercase text-ink-meta"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
              >
                Open Roles
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-px bg-black/[0.05]">
            {openings.map((role, i) => (
              <ScrollReveal key={role.slug} delay={i * 0.06}>
                <article className="bg-[#F5F5F5] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:bg-[#EDEDED] transition-colors duration-300">
                  <div>
                    <h3
                      className="font-display font-semibold uppercase text-[var(--color-cream)]"
                      style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', letterSpacing: '-0.015em' }}
                    >
                      {role.title}
                    </h3>
                    <p
                      className="mt-2 font-body font-light text-ink-meta"
                      style={{ fontSize: '0.82rem', letterSpacing: '0.1em' }}
                    >
                      {role.department} · {role.location} · {role.type}
                    </p>
                    <p className="mt-4 font-body font-light text-ink-body leading-relaxed max-w-2xl" style={{ fontSize: '1rem' }}>
                      {role.description}
                    </p>
                  </div>
                  <Link
                    href={`/contact?role=${role.slug}`}
                    className="shrink-0 inline-flex items-center justify-center px-6 py-3 border border-black/15 font-body font-light uppercase text-[var(--color-cream)] hover:border-[#0000FF] hover:text-[#0000FF] transition-colors min-h-[44px]"
                    style={{ fontSize: '0.72rem', letterSpacing: '0.25em' }}
                  >
                    Apply
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mt-12 font-body font-light text-ink-meta leading-relaxed max-w-xl" style={{ fontSize: '1rem' }}>
              Don&apos;t see your role?{' '}
              <Link href="/contact" className="text-blue-link hover:underline">
                Send us your profile
              </Link>{' '}
              — we are always meeting exceptional people across MEA.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
