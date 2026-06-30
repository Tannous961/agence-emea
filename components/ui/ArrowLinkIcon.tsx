import { cn } from '@/lib/utils';

interface ArrowLinkIconProps {
  className?: string;
}

/** Minimal right-arrow for list links — avoids emoji rendering issues on iOS. */
export function ArrowLinkIcon({ className }: ArrowLinkIconProps) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center w-9 h-9 border border-black/10 text-ink-meta transition-colors duration-300',
        className,
      )}
      aria-hidden="true"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2 7h8M7 3.5L10.5 7 7 10.5"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
