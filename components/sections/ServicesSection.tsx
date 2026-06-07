'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { services } from '@/lib/data/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ServicesSection() {
  const [active, setActive] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pfx = useReducedMotion();

  // Detect mobile — on mobile always show tagline (no hover)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const isExpanded = (slug: string) => active === slug || isMobile;

  return (
    <section
      className="bg-[#F0F0F0] section-pad border-t border-black/[0.05]"
      aria-labelledby="services-heading"
    >
      <div className="container-site">

        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-20 md:mb-28">
            <div className="flex items-center gap-4">
              <span className="w-4 h-px bg-[#0000FF]" aria-hidden="true" />
              <h2
                id="services-heading"
                className="font-body font-light uppercase text-[var(--color-cream)]/40"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}
              >
                What We Do
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden md:flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/35 hover:text-[var(--color-cream)] focus-visible:text-[#0000FF] transition-colors duration-400 outline-none"
              style={{ fontSize: '0.72rem', letterSpacing: '0.3em' }}
              aria-label="View all services"
            >
              All Services <span className="w-6 h-px bg-current inline-block" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Service list */}
        <div role="list">
          {services.map((service, i) => {
            const on = isExpanded(service.slug);
            return (
              <ScrollReveal key={service.slug} delay={Math.min(i * 0.04, 0.2)}>
                <div role="listitem">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block border-t border-black/[0.06] hover:border-black/20 focus-visible:border-[#0000FF]/50 transition-colors duration-500 outline-none"
                    onMouseEnter={() => !isMobile && setActive(service.slug)}
                    onMouseLeave={() => !isMobile && setActive(null)}
                    onFocus={()   => !isMobile && setActive(service.slug)}
                    onBlur={()    => !isMobile && setActive(null)}
                    aria-label={`${service.title} — ${service.tagline}`}
                  >
                    <div className="flex items-center gap-6 md:gap-10 py-8 md:py-10">

                      {/* Number */}
                      <span
                        className="shrink-0 font-body font-light text-[var(--color-cream)]/20 tabular-nums w-8"
                        style={{ fontSize: '0.84rem', letterSpacing: '0.1em' }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Title + description */}
                      <div className="flex-1 min-w-0">
                        <span
                          className="block font-display font-semibold uppercase transition-colors duration-300"
                          style={{
                            fontSize:      'clamp(1.5rem, 3.2vw, 3.2rem)',
                            lineHeight:    0.92,
                            letterSpacing: '-0.02em',
                            color: on ? 'var(--color-cream)' : 'rgba(17,17,17,0.55)',
                          }}
                        >
                          {service.shortTitle}
                        </span>

                        {/* Mobile: always visible. Desktop: hover-reveal */}
                        <AnimatePresence initial={false}>
                          {on && (
                            <motion.div
                              initial={pfx || isMobile ? {} : { height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={pfx || isMobile ? {} : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                              className="overflow-hidden"
                            >
                              <p
                                className="font-body font-light text-[var(--color-cream)]/40 mt-2.5 max-w-xl leading-relaxed"
                                style={{ fontSize: '1rem' }}
                              >
                                {service.tagline}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Thumbnail — desktop hover only */}
                      <AnimatePresence>
                        {active === service.slug && !pfx && !isMobile && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.28 }}
                            className="hidden lg:block shrink-0 relative overflow-hidden"
                            style={{ width: 100, height: 70 }}
                            aria-hidden="true"
                          >
                            <Image
                              src={service.image}
                              alt=""
                              fill
                              className="object-cover grayscale opacity-60"
                              sizes="100px"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Arrow */}
                      <motion.span
                        className="shrink-0 font-body font-light text-[var(--color-cream)]/25 group-hover:text-[#0000FF] group-focus-visible:text-[#0000FF] transition-colors duration-300"
                        animate={!pfx ? { x: on && !isMobile ? 4 : 0 } : {}}
                        transition={{ duration: 0.2 }}
                        style={{ fontSize: '1rem' }}
                        aria-hidden="true"
                      >
                        ↗
                      </motion.span>
                    </div>
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
          <div className="border-t border-black/[0.06]" role="separator" />
        </div>

        {/* Mobile: link to all services */}
        <div className="mt-8 md:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/35 hover:text-[var(--color-cream)] transition-colors duration-300"
            style={{ fontSize: '0.72rem', letterSpacing: '0.3em' }}
          >
            All Services <span className="w-5 h-px bg-current inline-block" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
