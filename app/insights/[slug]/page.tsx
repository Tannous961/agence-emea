import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articles, getArticleBySlug } from '@/lib/data/insights';
import { BRAND } from '@/lib/constants/brand';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { formatDate } from '@/lib/utils';
import { parseArticleBody, renderArticleParagraph } from '@/lib/utils/article-body';
import { CtaSection } from '@/components/sections/CtaSection';
import { JsonLd, articleSchema } from '@/components/seo/JsonLd';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title}`,
    description: article.excerpt,
    openGraph: { type: 'article', images: [{ url: article.image }] },
    alternates: { canonical: `${BRAND.url}/insights/${slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const bodyParagraphs = parseArticleBody(article.content);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-44 pb-16 border-b border-black/[0.05]">
        <div className="container-site max-w-4xl">
          <ScrollReveal>
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Insights', href: '/insights' },
              { label: article.title },
            ]} />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <span className="inline-block font-body font-light uppercase text-blue-link mb-6"
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
            <div className="mt-7 flex flex-wrap items-center gap-4 font-body font-light text-ink-meta uppercase"
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
            <p className="font-body font-light italic text-ink-body border-l border-[#0000FF]/60 pl-6 mb-12 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
              {article.excerpt}
            </p>

            {/* Body paragraphs */}
            <div className="space-y-6">
              {bodyParagraphs.map((para, i) => {
                const block = renderArticleParagraph(para, i);
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={block.key}
                      className="font-display font-semibold uppercase text-[var(--color-cream)] mt-12 mb-2"
                      style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', letterSpacing: '-0.01em' }}
                    >
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p
                    key={block.key}
                    className="font-body font-light text-ink-body leading-relaxed"
                    style={{ fontSize: '1.06rem' }}
                  >
                    {block.text}
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
                <p className="font-body font-light text-ink" style={{ fontSize: '1rem' }}>
                  {article.author.name}
                </p>
                <p className="font-body font-light text-ink-meta mt-0.5"
                  style={{ fontSize: '0.78rem', letterSpacing: '0.1em' }}>
                  {article.author.role}, {BRAND.name}
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
