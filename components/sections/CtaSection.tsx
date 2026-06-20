import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function CtaSection() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] md:min-h-[90vh]" aria-label="Final CTA">

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1920&q=85"
          alt="MEA skyline"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom right, rgba(245,245,245,0.88) 0%, rgba(245,245,245,0.60) 100%)' }}
        />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">

        <ScrollReveal delay={0}>
          <span
            className="block font-body font-light uppercase text-ink-meta mb-8"
            style={{ fontSize: '0.74rem', letterSpacing: '0.38em' }}
          >
            Ready to Begin
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="font-display font-semibold uppercase text-[var(--color-cream)] max-w-3xl mx-auto"
            style={{
              fontSize:      'clamp(3rem, 8vw, 8rem)',
              lineHeight:    0.92,
              letterSpacing: '-0.025em',
            }}
          >
            Let&apos;s Build<br />
            <span className="text-accent">
              Something
            </span><br />
            Exceptional.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Link
            href="/contact"
            className="mt-14 inline-flex items-center justify-center gap-3 min-h-[52px] px-10 py-4 font-body font-light uppercase text-white bg-[#0000FF] border border-[#0000FF] hover:bg-[#111] hover:border-[#111] focus-visible:ring-2 focus-visible:ring-[#0000FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F5] transition-all duration-300 outline-none text-eyebrow"
            style={{ letterSpacing: '0.28em' }}
          >
            Start a Conversation
            <span className="w-5 h-px bg-current" aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
