'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Service } from '@/lib/types';
import { services } from '@/lib/data/services';
import { getServiceHeroTheme } from '@/lib/data/hero-themes';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function ServicesShowcase() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24" aria-label="All services">
      <div className="container-site flex flex-col items-center gap-20 md:gap-28 lg:gap-32">
        {services.map((service, i) => (
          <ServiceCard key={service.slug} service={service} index={i + 1} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  delay,
}: {
  service: Service;
  index: number;
  delay: number;
}) {
  const [hov, setHov] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const pfx = useReducedMotion();
  const theme = getServiceHeroTheme(service.slug);
  const active = hov || isTouch;

  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (pointer: coarse)');
    setIsTouch(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <motion.article
      className="w-full max-w-3xl mx-auto text-center"
      initial={pfx ? {} : { opacity: 0, y: 48 }}
      whileInView={pfx ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.75, ease, delay }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Index + category */}
      <motion.div
        className="flex flex-col items-center gap-3 mb-8"
        initial={pfx ? {} : { opacity: 0 }}
        whileInView={pfx ? {} : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
      >
        <span
          className="font-display font-semibold text-[#0000FF] tabular-nums leading-none"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em' }}
        >
          {String(index).padStart(2, '0')}
        </span>
        <motion.span
          className="block h-px bg-[#0000FF] origin-center"
          initial={pfx ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={pfx ? {} : { scaleX: 1 }}
          viewport={{ once: true }}
          animate={!pfx && active ? { scaleX: 1.4 } : {}}
          transition={{ duration: 0.55, ease }}
          style={{ width: '2.5rem' }}
        />
        <span className="text-eyebrow text-blue-link" style={{ letterSpacing: '0.32em' }}>
          {theme.label}
        </span>
      </motion.div>

      {/* Image — no white overlay */}
      <Link
        href={`/services/${service.slug}`}
        className="group/img relative block overflow-hidden mx-auto w-full aspect-[4/3] md:aspect-[16/10] bg-[#111] ring-1 ring-black/[0.08] hover:ring-[#0000FF] transition-[box-shadow,ring-color] duration-500 hover:shadow-[0_24px_80px_-20px_rgba(0,0,255,0.35)]"
        aria-label={`View ${service.title}`}
      >
        <motion.div
          className="absolute inset-0"
          animate={!pfx ? { scale: active ? 1.05 : 1 } : {}}
          transition={{ duration: 1, ease }}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 768px"
            priority={index <= 2}
          />
        </motion.div>

        {/* Subtle bottom fade for depth only — dark, not white */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)' }}
          aria-hidden="true"
        />

        {/* Blue corner accent */}
        <motion.span
          className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#0000FF]"
          animate={!pfx ? { opacity: active ? 1 : 0.5, scale: active ? 1 : 0.85 } : {}}
          transition={{ duration: 0.35 }}
          aria-hidden="true"
        />
        <motion.span
          className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#0000FF]"
          animate={!pfx ? { opacity: active ? 1 : 0.5, scale: active ? 1 : 0.85 } : {}}
          transition={{ duration: 0.35 }}
          aria-hidden="true"
        />
      </Link>

      {/* Content */}
      <div className="mt-10 md:mt-12 px-2">
        <motion.p
          className="text-eyebrow text-blue-link mb-3"
          style={{ letterSpacing: '0.28em' }}
          initial={pfx ? {} : { opacity: 0, y: 12 }}
          whileInView={pfx ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: delay + 0.15 }}
        >
          {service.shortTitle}
        </motion.p>

        <motion.h2
          className="font-display font-semibold uppercase text-[var(--color-cream)] mb-3"
          style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
          }}
          initial={pfx ? {} : { opacity: 0, y: 16 }}
          whileInView={pfx ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {service.title}
        </motion.h2>

        <motion.p
          className="font-display font-semibold uppercase text-accent mb-5"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.15rem)', letterSpacing: '-0.01em' }}
          initial={pfx ? {} : { opacity: 0, y: 12 }}
          whileInView={pfx ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: delay + 0.25 }}
        >
          {service.tagline}
        </motion.p>

        <motion.p
          className="font-body font-light text-ink-body leading-relaxed mx-auto max-w-xl mb-8"
          style={{ fontSize: '1.02rem' }}
          initial={pfx ? {} : { opacity: 0, y: 12 }}
          whileInView={pfx ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {service.description}
        </motion.p>

        <motion.ul
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={pfx ? {} : { opacity: 0 }}
          whileInView={pfx ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.35 }}
        >
          {service.features.map((f, fi) => (
            <motion.li
              key={f}
              initial={pfx ? {} : { opacity: 0, scale: 0.92 }}
              whileInView={pfx ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: delay + 0.38 + fi * 0.04 }}
            >
              <span
                className="inline-block font-body font-light text-ink-body border border-[#0000FF]/20 px-3 py-1.5 hover:border-[#0000FF] hover:text-[#0000FF] transition-colors duration-300"
                style={{ fontSize: '0.72rem', letterSpacing: '0.12em' }}
              >
                {f}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={pfx ? {} : { opacity: 0, y: 10 }}
          whileInView={pfx ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: delay + 0.42 }}
        >
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center justify-center gap-4 min-h-[48px] px-8 py-3 font-body font-light uppercase text-white bg-[#0000FF] border border-[#0000FF] hover:bg-[#111] hover:border-[#111] transition-all duration-300 group/btn"
            style={{ fontSize: '0.72rem', letterSpacing: '0.32em' }}
          >
            Explore Service
            <motion.span
              className="inline-block w-5 h-px bg-white"
              animate={!pfx && active ? { scaleX: 1.6 } : { scaleX: 1 }}
              style={{ originX: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      </div>

      {index < services.length && (
        <div className="mt-16 md:mt-20 flex justify-center" aria-hidden="true">
          <motion.span
            className="w-px h-16 bg-gradient-to-b from-[#0000FF] to-transparent"
            initial={pfx ? {} : { scaleY: 0 }}
            whileInView={pfx ? {} : { scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay + 0.5 }}
            style={{ originY: 0 }}
          />
        </div>
      )}
    </motion.article>
  );
}
