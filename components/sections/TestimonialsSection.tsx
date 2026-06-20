'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data/clients';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useClientMotionPrefs } from '@/lib/hooks/useClientMotionPrefs';

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { ready, reducedMotion } = useClientMotionPrefs();
  const motionEnabled = ready && !reducedMotion;
  const t = testimonials[active];

  const quoteContent = (
    <>
      <p
        className="font-display font-light text-ink-body italic"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)', lineHeight: 1.3, letterSpacing: '-0.01em' }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>
      <footer className="mt-10 flex items-center gap-4">
        <span className="w-6 h-px bg-[#0000FF]" />
        <div>
          <cite className="not-italic font-body font-light text-ink-body text-sm">
            {t.author}
          </cite>
          <span
            className="block font-body font-light text-ink-meta mt-0.5"
            style={{ fontSize: '0.84rem', letterSpacing: '0.1em' }}
          >
            {t.role}, {t.company}
          </span>
        </div>
      </footer>
    </>
  );

  return (
    <section className="bg-[#F5F5F5] section-pad border-t border-black/[0.05]" aria-labelledby="testimonials-heading">
      <div className="container-site">

        {/* Label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20 md:mb-28">
            <span className="w-4 h-px bg-[#0000FF]" />
            <h2
              id="testimonials-heading"
              className="font-body font-light uppercase text-ink-meta"
              style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
            >
              Client Perspectives
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

          {/* Quote */}
          <div className="lg:col-span-3">
            {motionEnabled ? (
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {quoteContent}
                </motion.blockquote>
              </AnimatePresence>
            ) : (
              <blockquote>{quoteContent}</blockquote>
            )}
          </div>

          {/* Selector */}
          <ScrollReveal delay={0.15}>
            <div className="flex lg:flex-col gap-3 lg:gap-1">
              {testimonials.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="text-left py-3 border-t border-black/[0.07] group transition-colors duration-300"
                  aria-label={`Quote from ${item.author}`}
                >
                  <span
                    className="block font-body font-light transition-colors duration-300"
                    style={{
                      fontSize: '0.86rem',
                      color: active === i ? 'var(--color-cream)' : 'rgba(17,17,17,0.58)',
                    }}
                  >
                    {item.author}
                  </span>
                  <span
                    className="block font-body font-light mt-0.5 transition-colors duration-300"
                    style={{
                      fontSize: '0.76rem',
                      letterSpacing: '0.08em',
                      color: active === i ? '#0000FF' : 'rgba(17,17,17,0.45)',
                    }}
                  >
                    {item.company}
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
