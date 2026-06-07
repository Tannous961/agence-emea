import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data/insights';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Insights — Perspectives on Digital in MEA',
  description:
    'Thinking, analysis, and practical guidance on digital marketing, brand strategy, AI, and technology across the Middle East and Africa.',
  alternates: { canonical: 'https://agence-emea.com/insights' },
};

export default function InsightsPage() {
  const [featured, ...rest] = articles;

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
                Insights
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}>
              Perspectives<br />
              <span style={{ WebkitTextStroke: '1px rgba(17,17,17,0.4)', color: 'transparent' }}>
                on Digital.
              </span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured article */}
      <section className="bg-[#F5F5F5] py-20 border-b border-black/[0.05]">
        <div className="container-site">
          <ScrollReveal>
            <Link href={`/insights/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <span className="inline-block font-body font-light uppercase text-[#0000FF]/70 mb-4"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.3em' }}>
                  {featured.category}
                </span>
                <h2 className="font-display font-semibold uppercase text-[var(--color-cream)] group-hover:text-[var(--color-cream)]/70 transition-colors"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: 0.95 }}>
                  {featured.title}
                </h2>
                <p className="mt-5 font-body font-light text-[var(--color-cream)]/45 leading-relaxed"
                  style={{ fontSize: '1rem' }}>
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 font-body font-light text-[var(--color-cream)]/25 uppercase"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.22em' }}>
                  <span>{featured.author.name}</span>
                  <span className="w-3 h-px bg-current" />
                  <span>{formatDate(featured.publishedAt)}</span>
                  <span className="w-3 h-px bg-current" />
                  <span>{featured.readTime} min read</span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-[#F5F5F5] py-20" aria-label="All articles">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.05]">
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.07}>
                <Link href={`/insights/${article.slug}`}
                  className="group block bg-[#F5F5F5] p-8 hover:bg-[#EDEDED] transition-colors duration-300">
                  <div className="relative overflow-hidden aspect-[16/10] mb-6">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="inline-block font-body font-light uppercase text-[#0000FF]/60 mb-3"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.28em' }}>
                    {article.category}
                  </span>
                  <h3 className="font-display font-semibold uppercase text-[var(--color-cream)] group-hover:text-[var(--color-cream)]/70 transition-colors leading-tight"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', letterSpacing: '-0.01em', lineHeight: 0.95 }}>
                    {article.title}
                  </h3>
                  <p className="mt-3 font-body font-light text-[var(--color-cream)]/35 line-clamp-2 leading-relaxed"
                    style={{ fontSize: '0.92rem' }}>
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 font-body font-light text-[var(--color-cream)]/20 uppercase"
                    style={{ fontSize: '0.66rem', letterSpacing: '0.2em' }}>
                    <span>{formatDate(article.publishedAt)}</span>
                    <span className="w-2 h-px bg-current" />
                    <span>{article.readTime} min</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
