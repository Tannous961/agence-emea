import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies, getCaseStudyBySlug } from '@/lib/data/work';
import { BRAND } from '@/lib/constants/brand';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaSection } from '@/components/sections/CtaSection';
import { JsonLd, caseStudySchema } from '@/components/seo/JsonLd';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.title} — ${study.client}`,
    description: study.description,
    alternates: { canonical: `${BRAND.url}/work/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <JsonLd data={caseStudySchema(study)} />
      {/* Cinematic hero */}
      <section className="relative bg-[#F5F5F5] flex flex-col justify-end overflow-hidden"
        style={{ minHeight: '75vh' }}>
        <div className="absolute inset-0 z-0">
          <Image src={study.coverImage} alt={study.title} fill priority
            className="object-cover object-center"
            sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/90" />
        </div>
        <div className="relative z-10 container-site pb-16 pt-48">
          <ScrollReveal>
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Work', href: '/work' },
              { label: study.title },
            ]} />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-5">
              {study.tags.map((t) => (
                <span key={t}
                  className="font-body font-light text-ink-meta border border-black/[0.15] px-3 py-1"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                  {t}
                </span>
              ))}
            </div>
            <h1 className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 6rem)', lineHeight: 0.92, letterSpacing: '-0.025em', maxWidth: '14ch' }}>
              {study.title}
            </h1>
            <p className="mt-3 font-body font-light text-ink-meta"
              style={{ fontSize: '0.94rem', letterSpacing: '0.1em' }}>
              {study.client} — {study.category}, {study.year}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="bg-[#0000FF] py-12" aria-label="Key results">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-8">
          {study.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <span className="block font-display font-semibold text-white"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                {m.value}
              </span>
              <span className="block font-body font-light text-white/65 uppercase mt-1.5"
                style={{ fontSize: '0.66rem', letterSpacing: '0.22em' }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-[#F5F5F5] section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:gap-24">
            {/* Main copy */}
            <div className="lg:col-span-2 space-y-16">
              {[
                { label: 'The Challenge', body: study.challenge },
                { label: 'Our Approach',  body: study.approach },
                { label: 'The Result',    body: study.result },
              ].map(({ label, body }, i) => (
                <ScrollReveal key={label} delay={i * 0.1}>
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <span className="w-4 h-px bg-[#0000FF]" />
                      <span className="font-body font-light uppercase text-blue-link"
                        style={{ fontSize: '0.72rem', letterSpacing: '0.3em' }}>
                        {label}
                      </span>
                    </div>
                    <p className="font-body font-light text-ink-body leading-relaxed"
                      style={{ fontSize: '1.1rem' }}>
                      {body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Sidebar */}
            <aside>
              <ScrollReveal delay={0.2}>
                <div className="sticky top-28 border border-black/[0.07] p-8">
                  <span className="block font-body font-light uppercase text-ink-meta mb-7"
                    style={{ fontSize: '0.72rem', letterSpacing: '0.3em' }}>
                    Project Details
                  </span>
                  <dl className="space-y-5">
                    {[
                      { term: 'Client',   detail: study.client },
                      { term: 'Category', detail: study.category },
                      { term: 'Year',     detail: study.year },
                    ].map(({ term, detail }) => (
                      <div key={term}>
                        <dt className="font-body font-light uppercase text-ink-meta mb-1"
                          style={{ fontSize: '0.7rem', letterSpacing: '0.22em' }}>
                          {term}
                        </dt>
                        <dd className="font-body font-light text-ink-body"
                          style={{ fontSize: '1rem' }}>
                          {detail}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Link href="/contact"
                    className="mt-8 w-full flex items-center justify-center gap-3 border border-black/[0.12] hover:border-[#0000FF]/50 font-body font-light uppercase text-ink-body hover:text-[#0000FF] transition-all duration-300 py-3.5"
                    style={{ fontSize: '0.74rem', letterSpacing: '0.28em' }}>
                    Start a Project
                  </Link>
                </div>
              </ScrollReveal>
            </aside>
          </div>

          {/* Gallery */}
          {study.images.length > 0 && (
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.images.map((src, i) => (
                <ScrollReveal key={src} delay={i * 0.08}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={src} alt={`${study.title} — detail ${i + 1}`} fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
