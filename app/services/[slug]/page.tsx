import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services, getServiceBySlug } from '@/lib/data/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
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
    title: `${service.title} — Agence EMEA`,
    description: service.description,
    alternates: { canonical: `https://agence-emea.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#F5F5F5] pt-44 pb-24 overflow-hidden border-b border-black/[0.05]">
        {/* Background image, very dark */}
        <div className="absolute inset-0 z-0">
          <Image src={service.image} alt="" fill className="object-cover opacity-[0.08] grayscale" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/60" />
        </div>
        <div className="relative z-10 container-site">
          <ScrollReveal>
            <Link href="/services"
              className="inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/30 hover:text-[#0000FF] mb-10 transition-colors duration-300"
              style={{ fontSize: '0.72rem', letterSpacing: '0.3em' }}>
              <span className="w-4 h-px bg-current" /> All Services
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span className="font-body font-light uppercase text-[#0000FF]/60"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                Service
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.025em', maxWidth: '14ch' }}>
              {service.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="mt-4 font-display font-semibold uppercase"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)', letterSpacing: '-0.01em', WebkitTextStroke: '1px rgba(0,0,255,0.5)', color: 'transparent' }}>
              {service.tagline}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <p className="mt-7 font-body font-light text-[var(--color-cream)]/45 max-w-xl leading-relaxed"
              style={{ fontSize: '1.06rem' }}>
              {service.description}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <Link href="/contact"
              className="mt-10 inline-flex items-center gap-4 font-body font-light uppercase text-[var(--color-cream)]/50 hover:text-[#0000FF] transition-all duration-300 hover:gap-6"
              style={{ fontSize: '0.78rem', letterSpacing: '0.3em' }}>
              Discuss Your Project
              <span className="w-6 h-px bg-current" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* What is included */}
      <section className="bg-[#F5F5F5] section-pad" aria-label="Service features">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span className="font-body font-light uppercase text-[var(--color-cream)]/40"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                What&apos;s Included
              </span>
            </div>
            <h2 className="font-display font-semibold uppercase text-[var(--color-cream)] mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', letterSpacing: '-0.02em', lineHeight: 0.92 }}>
              The Full Scope.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.05]">
            {service.features.map((feature, i) => (
              <ScrollReveal key={feature} delay={Math.min(i * 0.06, 0.28)}>
                <div className="bg-[#F5F5F5] p-8 md:p-10 flex items-start gap-5 group hover:bg-[#EDEDED] transition-colors duration-300">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0000FF]" />
                  <span className="font-body font-light text-[var(--color-cream)]/60 group-hover:text-[var(--color-cream)]/80 transition-colors leading-relaxed"
                    style={{ fontSize: '1.02rem' }}>
                    {feature}
                  </span>
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
