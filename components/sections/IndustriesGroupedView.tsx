import Link from 'next/link';
import type { Industry, IndustryGroup } from '@/lib/types';
import { getGroupedIndustries } from '@/lib/data/industries';

type GroupWithIndustries = IndustryGroup & { industries: Industry[] };

interface IndustriesGroupedViewProps {
  variant?: 'compact' | 'detailed';
  /** When set with variant detailed, renders a single group section only. */
  group?: GroupWithIndustries;
}

function DetailedGroupSection({ group }: { group: GroupWithIndustries }) {
  return (
    <section aria-labelledby={`industry-group-${group.id}`}>
      <div className="mb-10 md:mb-12 border-b border-black/[0.07] pb-8">
        <p className="text-eyebrow text-blue-link mb-3">{group.label}</p>
        <h2
          id={`industry-group-${group.id}`}
          className="font-display font-semibold uppercase text-[var(--color-cream)] max-w-2xl"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', letterSpacing: '-0.02em', lineHeight: 0.95 }}
        >
          {group.summary}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.06]">
        {group.industries.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="group block bg-[#F5F5F5] p-8 md:p-10 hover:bg-[#EDEDED] transition-colors duration-300 focus-visible:bg-[#EDEDED] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-link"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3
                className="font-display font-semibold uppercase text-[var(--color-cream)] group-hover:text-accent transition-colors duration-300"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', letterSpacing: '-0.015em', lineHeight: 0.95 }}
              >
                {ind.name}
              </h3>
              <span
                className="shrink-0 font-body font-light text-ink-meta group-hover:text-accent transition-colors duration-300"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
            <p className="font-body font-light text-ink-meta leading-relaxed line-clamp-2" style={{ fontSize: '0.95rem' }}>
              {ind.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function IndustriesGroupedView({ variant = 'compact', group }: IndustriesGroupedViewProps) {
  const groups = group ? [group] : getGroupedIndustries();

  if (variant === 'detailed') {
    return (
      <div className="space-y-20 md:space-y-28">
        {groups.map((g) => (
          <DetailedGroupSection key={g.id} group={g} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-14">
      {groups.map((g) => (
        <div key={g.id} aria-labelledby={`home-industry-group-${g.id}`}>
          <div className="mb-6 pb-4 border-b border-black/[0.08]">
            <p id={`home-industry-group-${g.id}`} className="text-eyebrow text-blue-link mb-2">
              {g.label}
            </p>
            <p className="font-body font-light text-ink-meta leading-relaxed" style={{ fontSize: '0.82rem' }}>
              {g.summary}
            </p>
          </div>

          <ul className="divide-y divide-black/[0.06]">
            {g.industries.map((ind) => (
              <li key={ind.slug}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex items-start justify-between gap-4 py-4 hover:pl-1 focus-visible:pl-1 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-link focus-visible:ring-offset-2"
                >
                  <span className="min-w-0">
                    <span
                      className="block font-body font-light text-ink-body group-hover:text-[var(--color-cream)] transition-colors duration-300"
                      style={{ fontSize: '0.92rem', letterSpacing: '0.01em' }}
                    >
                      {ind.name}
                    </span>
                  </span>
                  <span
                    className="shrink-0 pt-0.5 font-body text-ink-muted group-hover:text-accent transition-colors duration-300"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
