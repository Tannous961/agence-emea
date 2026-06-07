import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { articles, getArticleBySlug } from '@/lib/data/insights';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { formatDate } from '@/lib/utils';
import { CtaSection } from '@/components/sections/CtaSection';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Agence EMEA Insights`,
    description: article.excerpt,
    openGraph: { type: 'article', images: [{ url: article.image }] },
    alternates: { canonical: `https://agence-emea.com/insights/${slug}` },
  };
}

const PLACEHOLDER_BODY = `The digital landscape across the Middle East and Africa is undergoing a profound transformation. Organisations that move decisively today will define their category for the next decade; those that wait will find themselves playing an expensive game of catch-up.

We have spent the past several years embedded in these markets — running campaigns, building products, and advising leadership teams from Casablanca to Nairobi. What follows is an honest assessment of where the opportunity lies and what it will take to capture it.

**The shift is structural, not cyclical**

It would be convenient to dismiss the current wave of digital adoption as a temporary correction. The data suggests otherwise. Mobile internet penetration across the GCC hit 98% in 2024. Smartphone commerce in Sub-Saharan Africa grew at 47% year-on-year. Arabic-language search volume doubled between 2021 and 2024. These are structural changes in how people discover, evaluate, and buy.

**What this means for brands**

The organisations winning right now share three characteristics: they have invested in owning their first-party data, they have built digital experiences that are actually good (not just functional), and they treat content as a strategic asset rather than an afterthought.

**Where to focus**

For most organisations in the MEA region, the highest-leverage investment is still getting the fundamentals right: a fast, well-designed website, a coherent content and SEO programme in the primary language of your customer, and a measurement framework that connects digital activity to business outcomes.

The window of differentiation through digital excellence remains open. It will not stay open forever.`;

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const bodyParagraphs = PLACEHOLDER_BODY.trim().split('\n\n');

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-44 pb-16 border-b border-black/[0.05]">
        <div className="container-site max-w-4xl">
          <ScrollReveal>
            <Link href="/insights"
              className="inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/30 hover:text-[#0000FF] mb-10 transition-colors duration-300"
              style={{ fontSize: '0.72rem', letterSpacing: '0.3em' }}>
              <span className="w-4 h-px bg-current" /> All Insights
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <span className="inline-block font-body font-light uppercase text-[#0000FF]/70 mb-6"
              style={{ fontSize: '0.72rem', letterSpacing: '0.3em' }}>
              {article.category}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}>
              {article.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-7 flex flex-wrap items-center gap-4 font-body font-light text-[var(--color-cream)]/25 uppercase"
              style={{ fontSize: '0.7rem', letterSpacing: '0.22em' }}>
              <span>{article.author.name}</span>
              <span className="w-3 h-px bg-current" />
              <span>{article.author.role}</span>
              <span className="w-3 h-px bg-current" />
              <span>{formatDate(article.publishedAt)}</span>
              <span className="w-3 h-px bg-current" />
              <span>{article.readTime} min read</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cover image */}
      <div className="bg-[#F5F5F5]">
        <div className="container-site max-w-4xl py-12">
          <ScrollReveal>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover grayscale"
                sizes="(max-width: 1280px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Article body */}
      <article className="bg-[#F5F5F5] pb-24">
        <div className="container-site max-w-3xl">
          <ScrollReveal>
            {/* Pull quote */}
            <p className="font-body font-light italic text-[var(--color-cream)]/55 border-l border-[#0000FF]/60 pl-6 mb-12 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
              {article.excerpt}
            </p>

            {/* Body paragraphs */}
            <div className="space-y-6">
              {bodyParagraphs.map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**')) {
                  const text = para.slice(2, -2);
                  return (
                    <h2 key={i} className="font-display font-semibold uppercase text-[var(--color-cream)] mt-12 mb-2"
                      style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', letterSpacing: '-0.01em' }}>
                      {text}
                    </h2>
                  );
                }
                const cleaned = para.replace(/\*\*(.*?)\*\*/g, '$1');
                return (
                  <p key={i} className="font-body font-light text-[var(--color-cream)]/50 leading-relaxed"
                    style={{ fontSize: '1.06rem' }}>
                    {cleaned}
                  </p>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Author card */}
          <ScrollReveal delay={0.1}>
            <div className="mt-14 pt-8 border-t border-black/[0.06] flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-[#0000FF]/20 flex items-center justify-center shrink-0">
                <span className="font-display font-semibold text-[#0000FF] text-xs">
                  {article.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-body font-light text-[var(--color-cream)]/80" style={{ fontSize: '1rem' }}>
                  {article.author.name}
                </p>
                <p className="font-body font-light text-[var(--color-cream)]/30 mt-0.5"
                  style={{ fontSize: '0.78rem', letterSpacing: '0.1em' }}>
                  {article.author.role}, Agence EMEA
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
