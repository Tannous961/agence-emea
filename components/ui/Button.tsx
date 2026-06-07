'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

const variants = {
  primary: [
    'bg-[#0000FF] text-white border border-[#0000FF]',
    'hover:bg-[#111] hover:text-white hover:border-[#111]',
    'active:scale-[0.97] active:bg-[#111]/90',
    'focus-visible:ring-2 focus-visible:ring-[#0000FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F5]',
  ].join(' '),
  outline: [
    'bg-transparent text-[var(--color-cream)] border border-black/30',
    'hover:border-[#111] hover:text-[#111]',
    'active:scale-[0.97] active:bg-black/5',
    'focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F5]',
  ].join(' '),
  ghost: [
    'bg-transparent text-[var(--color-cream)]/60 border border-transparent',
    'hover:text-[#0000FF]',
    'active:scale-[0.97]',
    'focus-visible:ring-2 focus-visible:ring-[#0000FF]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F5]',
  ].join(' '),
};

const sizes = {
  sm: 'px-5 py-2.5 text-[0.65rem] tracking-[0.22em]',
  md: 'px-8 py-3.5 text-[0.7rem] tracking-[0.2em]',
  lg: 'px-10 py-4 text-[0.75rem] tracking-[0.2em]',
};

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  external,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center gap-2 font-body font-light uppercase transition-all duration-200 ease-out',
    variants[variant],
    sizes[size],
    disabled && 'opacity-40 pointer-events-none cursor-not-allowed',
    className,
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base} aria-label={ariaLabel}>
        {children}
      </a>
    ) : (
      <Link href={href} className={base} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
