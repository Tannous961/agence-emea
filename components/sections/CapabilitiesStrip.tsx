'use client';

import { useReducedMotion } from 'framer-motion';

const caps = [
  'Brand Strategy', 'UX · UI Design', 'Operational Efficiency', 'Web Design',
  'Mobile Apps', 'Digital Marketing', 'Platform Architecture', 'SEO',
  'AI & Automation', 'E-commerce', 'Performance Media', 'Arabic Localisation',
  'Data & Analytics', 'Workflow Automation', 'FinOps',
];

function Row({ reversed = false }: { reversed?: boolean }) {
  const items = [...caps, ...caps];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-10 whitespace-nowrap ${
          reversed ? 'animate-[marquee_48s_linear_infinite_reverse]' : 'animate-marquee'
        }`}
        aria-hidden="true"
      >
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className="font-display font-light uppercase text-ink-muted"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.8rem)', letterSpacing: '-0.01em' }}
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

export function CapabilitiesStrip() {
  const pfx = useReducedMotion();

  if (pfx) {
    return (
      <div className="mt-20 md:mt-28 pt-12 border-t border-black/[0.07]" aria-label="Capabilities">
        <div className="flex flex-wrap gap-3">
          {caps.map((c) => (
            <span key={c} className="font-display font-light uppercase text-ink-meta text-base">
              {c}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 md:mt-28 pt-12 border-t border-black/[0.07] overflow-hidden" aria-label="Capabilities">
      <div className="flex flex-col gap-4">
        <Row />
        <Row reversed />
      </div>
    </div>
  );
}
