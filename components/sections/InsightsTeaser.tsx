import Link from 'next/link';
import Image from 'next/image';
import { getLatestArticles } from '@/lib/data/insights';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionViewAllLink } from '@/components/ui/SectionViewAllLink';
import { formatDate } from '@/lib/utils';

export function InsightsTeaser() {
  const articles = getLatestArticles(3);

  return (
    <section className="bg-[#F0F0F0] section-pad border-t border-black/[0.05]" aria-labelledby="insights-heading">
      <div className="container-site">

        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-16 md:mb-20">
            <div className="flex items-center gap-4">
              <span className="w-4 h-px bg-[#0000FF]" aria-hidden="true" />
              <h2
                id="insights-heading"
                className="font-body font-light uppercase text-ink-meta"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
              >
                Latest Insights
              </h2>
            </div>
            <SectionViewAllLink href="/insights" label="All Articles" />
          </div>
        </ScrollReveal>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {articles.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.1}>
              <Link
                href={`/insights/${article.slug}`}
                className="group block bg-[#E8E8E8] hover:bg-[#EBEBEB] transition-colors duration-400"
                aria-label={article.title}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <span
                    className="block font-body font-light uppercase text-blue-link mb-3"
                    style={{ fontSize: '0.68rem', letterSpacing: '0.3em' }}
                  >
                    {article.category}
                  </span>
                  <h3
                    className="font-display font-semibold uppercase text-ink group-hover:text-[var(--color-cream)] transition-colors duration-300 leading-[0.95] mb-3"
                    style={{ fontSize: 'clamp(1.2rem, 2vw, 1.7rem)', letterSpacing: '-0.015em' }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="font-body font-light text-ink-meta leading-relaxed line-clamp-2 mb-5"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {article.excerpt}
                  </p>
                  <span
                    className="block font-body font-light uppercase text-ink-meta"
                    style={{ fontSize: '0.68rem', letterSpacing: '0.22em' }}
                  >
                    {formatDate(article.publishedAt)} · {article.readTime} min read
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
