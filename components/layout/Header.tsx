'use client';

import { useState, useEffect, useRef, useCallback, useId } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { NavigationMenu } from './NavigationMenu';
import { MegaMenuServices } from './MegaMenuServices';
import { MegaMenuIndustries } from './MegaMenuIndustries';
import { cn } from '@/lib/utils';

type MegaMenu = 'services' | 'industries' | null;

export function Header() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenu>(null);
  const closeTimerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hamburgerRef   = useRef<HTMLButtonElement>(null);
  const pathname       = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const servicesMenuId   = useId();
  const industriesMenuId = useId();

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mega menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeMenu) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [activeMenu]);

  const openMenu = useCallback((name: MegaMenu) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMenu(name);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 300);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  const toggleMenu = useCallback((name: MegaMenu) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMenu((prev) => (prev === name ? null : name));
  }, []);

  const desktopLinks: {
    label: string;
    href: string;
    menu?: MegaMenu;
    menuId?: string;
  }[] = [
    { label: 'Services',   href: '/services',   menu: 'services',   menuId: servicesMenuId },
    { label: 'Industries', href: '/industries', menu: 'industries', menuId: industriesMenuId },
    { label: 'Work',       href: '/work' },
    { label: 'About',      href: '/about' },
    { label: 'Insights',   href: '/insights' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
          menuOpen || activeMenu || navHovered
            ? 'bg-white border-b border-black/[0.04]'
            : scrolled
              ? 'bg-[#F5F5F5]/80 backdrop-blur-md border-b border-black/[0.04]'
              : 'bg-transparent',
        )}
        style={{ height: 'var(--header-height)' }}
      >
        <div className="container-site h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="B&B Agency — Home"
            className="font-body font-semibold text-[var(--color-cream)] text-[22px] uppercase tracking-[0px] leading-[20px] hover:text-[var(--color-blue)] transition-colors duration-300 relative z-10"
            onClick={() => setActiveMenu(null)}
          >
            B&amp;B<br />Agency<span className="text-[#0000FF]">.</span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-10"
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => setNavHovered(false)}
          >
            {desktopLinks.map((item) => {
              const isActive = activeMenu === item.menu && !!item.menu;
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.menu ? openMenu(item.menu) : setActiveMenu(null)}
                  onMouseLeave={item.menu ? scheduleClose : undefined}
                >
                  {item.menu ? (
                    /* Items with mega menus: link for mouse navigation, keyboard toggles mega menu */
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          'text-[15px] leading-[72px] font-body font-light uppercase tracking-[0.25em] transition-colors duration-300',
                          isActive ? 'text-[var(--color-cream)]' : 'text-ink-body hover:text-[var(--color-cream)]',
                        )}
                        onMouseEnter={() => openMenu(item.menu!)}
                      >
                        {item.label}
                      </Link>
                      {/* Keyboard toggle button (visually hidden label) */}
                      <button
                        type="button"
                        aria-expanded={isActive}
                        aria-controls={item.menuId}
                        aria-label={`${isActive ? 'Close' : 'Open'} ${item.label} menu`}
                        className="ml-1 p-1 text-ink-meta hover:text-ink-body transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#0000FF] rounded-sm"
                        onClick={() => toggleMenu(item.menu!)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleMenu(item.menu!);
                          }
                        }}
                      >
                        <svg
                          width="8" height="5" viewBox="0 0 8 5" fill="none"
                          aria-hidden="true"
                          style={{
                            transform: isActive ? 'rotate(180deg)' : 'none',
                            transition: prefersReducedMotion ? 'none' : 'transform 0.2s ease',
                          }}
                        >
                          <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[15px] leading-[72px] font-body font-light uppercase tracking-[0.25em] text-ink-body hover:text-[var(--color-cream)] transition-colors duration-300"
                      onMouseEnter={() => setActiveMenu(null)}
                    >
                      {item.label}
                    </Link>
                  )}
                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#0000FF]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                    />
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2 text-[13px] font-body font-light uppercase tracking-[0.2em] text-white bg-[#0000FF] border border-[#0000FF] hover:bg-[#111] hover:border-[#111] focus-visible:ring-2 focus-visible:ring-[#0000FF] focus-visible:ring-offset-2 transition-all duration-300"
              onMouseEnter={() => setActiveMenu(null)}
            >
              Start a Project <span className="w-4 h-px bg-current inline-block" aria-hidden="true" />
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="md:hidden flex flex-col gap-[5px] p-2 relative z-10 focus-visible:outline-2 focus-visible:outline-[#0000FF] rounded-sm"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block w-5 h-px bg-[var(--color-cream)]"
                animate={
                  i === 1
                    ? { opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }
                    : {
                        rotate: menuOpen ? (i === 0 ? 45 : -45) : 0,
                        y: menuOpen ? (i === 0 ? 6 : -6) : 0,
                      }
                }
                transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mega menus */}
      <MegaMenuServices
        id={servicesMenuId}
        isVisible={activeMenu === 'services'}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      />
      <MegaMenuIndustries
        id={industriesMenuId}
        isVisible={activeMenu === 'industries'}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      />

      {/* Backdrop */}
      {activeMenu && (
        <motion.div
          className="fixed inset-0 z-30 bg-black/40"
          style={{ top: 'var(--header-height)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={scheduleClose}
          onClick={() => setActiveMenu(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile navigation */}
      <NavigationMenu
        id="mobile-nav"
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        returnFocusRef={hamburgerRef}
      />
    </>
  );
}
