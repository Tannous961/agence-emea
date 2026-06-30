'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFocusTrap } from '@/lib/hooks/useFocusTrap';
import { services } from '@/lib/data/services';
import { industries } from '@/lib/data/industries';
import { cn } from '@/lib/utils';

type NavLink = { type: 'link'; label: string; href: string };
type NavGroup = {
  type: 'group';
  key: string;
  label: string;
  href: string;
  children: { label: string; href: string }[];
};
type NavEntry = NavLink | NavGroup;

const navEntries: NavEntry[] = [
  {
    type: 'group',
    key: 'services',
    label: 'Services',
    href: '/services',
    children: [
      ...services.map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}` })),
      { label: 'All Services', href: '/services' },
    ],
  },
  {
    type: 'group',
    key: 'industries',
    label: 'Industries',
    href: '/industries',
    children: [
      ...industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
      { label: 'All Industries', href: '/industries' },
    ],
  },
  { type: 'link', label: 'Work', href: '/work' },
  { type: 'link', label: 'About', href: '/about' },
  { type: 'link', label: 'Insights', href: '/insights' },
  { type: 'link', label: 'Contact', href: '/contact' },
];

interface NavigationMenuProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
}

export function NavigationMenu({ id, isOpen, onClose, returnFocusRef }: NavigationMenuProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useFocusTrap(menuRef, isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const t = setTimeout(() => firstLinkRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
    document.body.style.overflow = '';
    returnFocusRef.current?.focus();
    setExpanded(null);
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, returnFocusRef]);

  useEffect(() => { onClose(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const menuVariants = {
    closed: { opacity: 0 },
    open:   { opacity: 1 },
  };

  const itemVariants = {
    closed: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    open:   (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : 0.08 + i * 0.05,
        duration: 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const toggleGroup = (key: string) => {
    setExpanded((prev) => (prev === key ? null : key));
  };

  const isActivePath = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[80] flex flex-col bg-[#F5F5F5] overflow-y-auto"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.45, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="container-site flex flex-col pt-28 pb-[max(4rem,env(safe-area-inset-bottom))] min-h-full">
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navEntries.map((entry, i) => (
                  <motion.li
                    key={entry.type === 'group' ? entry.key : entry.href}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    {entry.type === 'link' ? (
                      <Link
                        href={entry.href}
                        className={cn(
                          'group block font-display font-semibold uppercase leading-none hover:text-[var(--color-cream)] focus-visible:text-blue-link transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-link focus-visible:ring-offset-2',
                          isActivePath(entry.href) ? 'text-[var(--color-cream)]' : 'text-ink-body',
                        )}
                        style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)', letterSpacing: '-0.025em' }}
                        aria-current={isActivePath(entry.href) ? 'page' : undefined}
                      >
                        {entry.label}
                      </Link>
                    ) : (
                      <div>
                        <div className="flex items-center gap-4">
                          <Link
                            href={entry.href}
                            ref={i === 0 ? firstLinkRef : undefined}
                            className={cn(
                              'font-display font-semibold uppercase leading-none hover:text-[var(--color-cream)] focus-visible:text-blue-link transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-link focus-visible:ring-offset-2',
                              isActivePath(entry.href) ? 'text-[var(--color-cream)]' : 'text-ink-body',
                            )}
                            aria-current={isActivePath(entry.href) ? 'page' : undefined}
                            style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)', letterSpacing: '-0.025em' }}
                          >
                            {entry.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleGroup(entry.key)}
                            aria-expanded={expanded === entry.key}
                            aria-label={`${expanded === entry.key ? 'Collapse' : 'Expand'} ${entry.label} submenu`}
                            className="flex items-center justify-center w-11 h-11 border border-black/[0.08] text-ink-meta hover:text-ink-body hover:border-black/[0.15] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-link"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              aria-hidden="true"
                              className={cn('transition-transform duration-300', expanded === entry.key && 'rotate-180')}
                            >
                              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {expanded === entry.key && (
                            <motion.ul
                              id={`submenu-${entry.key}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: 'easeOut' }}
                              className="overflow-hidden pl-1 mt-3 mb-4 space-y-1 border-l border-black/[0.06] ml-1"
                            >
                              {entry.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className={cn(
                                      'block font-body font-light transition-colors duration-200 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-link focus-visible:ring-offset-2',
                                      isActivePath(child.href)
                                        ? 'text-[var(--color-cream)]'
                                        : 'text-ink-meta hover:text-[var(--color-cream)] focus-visible:text-blue-link',
                                    )}
                                    style={{ fontSize: '0.92rem', letterSpacing: '0.06em' }}
                                    aria-current={isActivePath(child.href) ? 'page' : undefined}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-14 border-t border-black/[0.07] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="flex gap-5 font-body text-ink-meta text-caption-a11y"
                style={{ letterSpacing: '0.08em' }}>
                <span>Beirut · Lagos · Dubai · Riyadh</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-eyebrow text-blue-link hover:text-[var(--color-cream)] transition-colors duration-300 min-h-[44px]">
                Start a Project
                <span className="w-5 h-px bg-current inline-block" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
