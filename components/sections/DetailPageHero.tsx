import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/ui/Breadcrumbs';
import type { HeroTheme } from '@/lib/data/hero-themes';

interface DetailPageHeroProps {
  eyebrow: string;
  title: string;
  tagline?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  theme: HeroTheme;
  cta?: { label: string; href: string };
}

export function DetailPageHero({
  eyebrow,
  title,
  tagline,
  description,
  breadcrumbs,
  theme,
  cta = { label: 'Discuss Your Project', href: '/contact' },
}: DetailPageHeroProps) {
  return (
    <section className="relative bg-[#F5F5F5] pt-44 pb-24 md:pb-28 overflow-hidden border-b border-black/[0.05]">
      <div className="detail-hero-bg absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F5F5F5] to-[#ECECEC]" />
        <div
          className={`detail-hero-pattern detail-hero-pattern--${theme.pattern} absolute inset-0`}
          style={{ '--hero-tint': theme.tint } as CSSProperties}
        />
        <div
          className="absolute -top-20 -right-16 w-[min(480px,65vw)] h-[min(480px,65vw)] rounded-full blur-3xl"
          style={{ background: theme.glow }}
        />
        <div
          className="absolute bottom-12 right-[6%] hidden md:block w-36 h-36 border rotate-6 opacity-40"
          style={{ borderColor: `${theme.tint}18` }}
        />
        <div
          className="absolute top-[calc(var(--header-height)+2rem)] left-[4%] hidden lg:block font-display font-semibold uppercase opacity-[0.04] select-none"
          style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', letterSpacing: '-0.04em', color: theme.tint }}
        >
          {theme.label}
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />
      </div>

      <div className="relative z-10 container-site">
        <ScrollReveal>
          <Breadcrumbs items={breadcrumbs} />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-4 h-px bg-[#0000FF]" />
            <span
              className="font-body font-light uppercase text-blue-link"
              style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
            >
              {eyebrow}
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1
            className="font-display font-semibold uppercase text-[var(--color-cream)]"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 7rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.025em',
              maxWidth: '16ch',
            }}
          >
            {title}
          </h1>
        </ScrollReveal>
        {tagline && (
          <ScrollReveal delay={0.12}>
            <p
              className="mt-4 font-display font-semibold uppercase text-accent"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)', letterSpacing: '-0.01em' }}
            >
              {tagline}
            </p>
          </ScrollReveal>
        )}
        <ScrollReveal delay={tagline ? 0.18 : 0.12}>
          <p
            className="mt-7 font-body font-light text-ink-body max-w-xl leading-relaxed"
            style={{ fontSize: '1.06rem' }}
          >
            {description}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={tagline ? 0.25 : 0.18}>
          <Link
            href={cta.href}
            className="mt-10 inline-flex items-center gap-4 font-body font-light uppercase text-ink-body hover:text-[#0000FF] transition-all duration-300 hover:gap-6 min-h-[44px]"
            style={{ fontSize: '0.78rem', letterSpacing: '0.3em' }}
          >
            {cta.label}
            <span className="w-8 h-px bg-[#0000FF]" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
