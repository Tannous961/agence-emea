import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'outline';
}

export function Tag({ children, className, variant = 'default' }: TagProps) {
  const variants = {
    default: 'bg-white/10 text-white/70',
    blue:    'bg-[#0000FF] text-white',
    outline: 'border border-black/20 text-white/60',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
