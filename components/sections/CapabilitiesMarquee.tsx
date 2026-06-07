'use client';

import { useReducedMotion } from 'framer-motion';

const caps = [
  'Brand Strategy', 'UX · UI Design', 'Operational Efficiency', 'Web Design', 'Cloud & DevOps',
  'Mobile Apps', 'Digital Marketing', 'Platform Architecture', 'SEO', 'AI Automation',
  'UX Engineering', 'E-commerce', 'Performance Media', 'DevOps', 'Arabic Localisation',
  'Data & Analytics', 'Workflow Automation', 'FinOps',
];

function Row({ reversed = false }: { reversed?: boolean }) {
  const items = [...caps, ...caps];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-10 whitespace-nowrap ${
          reversed
            ? 'animate-[marquee_48s_linear_infinite_reverse]'
            : 'animate-marquee'
        }`}
        aria-hidden="true"
      >
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className="font-display font-light uppercase text-[var(--color-cream)]/15"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)', letterSpacing: '-0.01em' }}
            >
              {c}
            </span>
            <span className="text-[#0000FF] font-display" style={{ fontSize: '0.65rem' }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CapabilitiesMarquee() {
  const pfx = useReducedMotion();

  if (pfx) {
    return (
      <section className="bg-[#F5F5F5] py-16 border-y border-black/[0.05]" aria-label="Capabilities">
        <div className="container-site">
          <div className="flex flex-wrap gap-4">
            {caps.map((c) => (
              <span key={c} className="font-display font-light uppercase text-[var(--color-cream)]/20 text-xl">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F5F5] py-14 border-y border-black/[0.05] overflow-hidden" aria-label="Capabilities">
      <div className="flex flex-col gap-5">
        <Row />
        <Row reversed />
      </div>
    </section>
  );
}
