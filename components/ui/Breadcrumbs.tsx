import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 font-body font-light text-ink-meta text-caption-a11y">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" className="text-ink-muted">/</span>}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-blue-link focus-visible:text-blue-link transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-link focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-ink-body' : undefined} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
