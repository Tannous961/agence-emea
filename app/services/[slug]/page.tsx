import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getServiceBySlug, getRelatedServices } from '@/lib/data/services';
import { getServiceHeroTheme } from '@/lib/data/hero-themes';
import { BRAND } from '@/lib/constants/brand';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { DetailPageHero } from '@/components/sections/DetailPageHero';
import { CtaSection } from '@/components/sections/CtaSection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `${BRAND.url}/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);
  const theme = getServiceHeroTheme(slug);

  return (
    <>
      <DetailPageHero
        eyebrow="Service"
        title={service.title}
        tagline={service.tagline}
        description={service.description}
        theme={theme}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <section className="bg-[#F5F5F5] section-pad border-b border-black/[0.05]">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <ScrollReveal>
            <div>
              <span
                className="block font-body font-light uppercase text-ink-meta mb-6"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
              >
                How We Deliver
              </span>
              <ul className="space-y-5">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0000FF] mt-2" />
                    <p className="font-body font-light text-ink-body leading-relaxed" style={{ fontSize: '1rem' }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div>
              <span
                className="block font-body font-light uppercase text-ink-meta mb-6"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
              >
                What&apos;s Included
              </span>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="font-body font-light text-ink-meta border border-black/[0.07] px-3 py-1.5"
                    style={{ fontSize: '0.74rem', letterSpacing: '0.12em' }}
                  >
                    {f}
                  </span>
                ))}
              </div>
              <Link
                href="/work"
                className="mt-10 inline-flex items-center gap-3 font-body font-light uppercase text-ink-body hover:text-[#0000FF] transition-colors duration-300 min-h-[44px]"
                style={{ fontSize: '0.72rem', letterSpacing: '0.28em' }}
              >
                See Our Work
                <span className="w-5 h-px bg-current" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F0F0F0] py-24 border-b border-black/[0.05]" aria-label="Related services">
        <div className="container-site">
          <ScrollReveal>
            <h2
              className="font-display font-semibold uppercase text-[var(--color-cream)] mb-12"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}
            >
              Related Services
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.05]">
            {related.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${item.slug}`}
                  className="block bg-[#F0F0F0] p-8 hover:bg-[#E8E8E8] transition-colors duration-300 group h-full"
                >
                  <p
                    className="font-display font-semibold uppercase text-[var(--color-cream)] group-hover:text-[#0000FF] transition-colors duration-300"
                    style={{ fontSize: '1.1rem', letterSpacing: '-0.01em', lineHeight: 0.95 }}
                  >
                    {item.shortTitle}
                  </p>
                  <p
                    className="mt-3 font-body font-light text-ink-meta leading-relaxed line-clamp-2"
                    style={{ fontSize: '0.88rem' }}
                  >
                    {item.tagline}
                  </p>
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
