'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Services',   href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About',      href: '/about' },
  { label: 'Insights',   href: '/insights' },
  { label: 'Contact',    href: '/contact' },
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

  // Scroll lock + focus management
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Short delay to let animation start before focusing
      const t = setTimeout(() => firstLinkRef.current?.focus(), 80);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = '';
      // Restore focus to the hamburger button that opened the menu
      returnFocusRef.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, returnFocusRef]);

  // Close on route change
  useEffect(() => { onClose(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const menuVariants = {
    closed: { opacity: 0, y: prefersReducedMotion ? 0 : '-100%' },
    open:   { opacity: 1, y: '0%' },
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 flex flex-col bg-[#F5F5F5]"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.45, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="container-site flex flex-col justify-end pb-16 pt-28 h-full">
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={item.href}
                      ref={i === 0 ? firstLinkRef : undefined}
                      className="group block font-display font-semibold uppercase text-[var(--color-cream)]/60 leading-none hover:text-[var(--color-cream)] focus-visible:text-[#0000FF] transition-colors duration-200 focus-visible:outline-none"
                      style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)', letterSpacing: '-0.025em' }}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-14 border-t border-black/[0.07] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="flex gap-5 font-body font-light text-[var(--color-cream)]/30"
                style={{ fontSize: '0.72rem', letterSpacing: '0.08em' }}>
                <span>Dubai · Riyadh · Cairo</span>
                <span>Nairobi · Casablanca</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-body font-light uppercase text-[#0000FF] hover:text-[var(--color-cream)] transition-colors duration-300"
                style={{ fontSize: '0.65rem', letterSpacing: '0.28em' }}>
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
