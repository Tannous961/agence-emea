import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SectionViewAllLinkProps {
  href: string;
  label: string;
  className?: string;
}

const linkCls =
  'inline-flex items-center gap-3 font-body font-light uppercase text-ink-meta hover:text-[var(--color-cream)] focus-visible:text-blue-link transition-colors duration-400 outline-none focus-visible:ring-2 focus-visible:ring-blue-link focus-visible:ring-offset-2 min-h-[44px] text-eyebrow shrink-0';

export function SectionViewAllLink({ href, label, className }: SectionViewAllLinkProps) {
  return (
    <Link href={href} className={cn(linkCls, className)} style={{ letterSpacing: '0.3em' }}>
      {label}
      <span className="w-5 md:w-6 h-px bg-current" aria-hidden="true" />
    </Link>
  );
}
