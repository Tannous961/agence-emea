import Link from 'next/link';
import { offices } from '@/lib/data/clients';
import { BRAND } from '@/lib/constants/brand';

const nav = {
  Services: [
    { label: 'AI & Automation',   href: '/services/ai-automation' },
    { label: 'Brand Strategy',    href: '/services/brand-strategy' },
    { label: 'Web Development',   href: '/services/web-development' },
    { label: 'Mobile Apps',       href: '/services/mobile-apps' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
  ],
  Company: [
    { label: 'Work',       href: '/work' },
    { label: 'Industries', href: '/industries' },
    { label: 'About',      href: '/about' },
    { label: 'Insights',   href: '/insights' },
    { label: 'Contact',    href: '/contact' },
    { label: 'Privacy',    href: '/privacy' },
    { label: 'Terms',      href: '/terms' },
  ],
};

const socials = [
  { label: 'LinkedIn (coming soon)',  abbr: 'LI' },
  { label: 'Instagram (coming soon)', abbr: 'IG' },
  { label: 'X / Twitter (coming soon)', abbr: 'X' },
];

const labelCls = 'text-eyebrow text-ink-meta block mb-6';
const linkCls  = 'block font-body text-ink-body hover:text-[var(--color-cream)] focus-visible:text-blue-link transition-colors duration-300 mb-3 outline-none focus-visible:ring-2 focus-visible:ring-blue-link focus-visible:ring-offset-2';
const linkStyle = { fontSize: '0.95rem' };

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F5] border-t border-black/[0.05]" aria-label="Site footer">
      <div className="container-site py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-display font-semibold text-[var(--color-cream)] text-lg uppercase tracking-[0.2em] hover:text-blue-link transition-colors duration-300 block mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-link focus-visible:ring-offset-2"
            >
              {BRAND.name}<span className="text-blue-accent">.</span>
            </Link>
            <p className="font-body text-ink-body leading-relaxed max-w-[200px] text-caption-a11y">
              {BRAND.tagline}
            </p>
            <nav aria-label="Social links" className="flex gap-5 mt-7">
              {socials.map(({ label, abbr }) => (
                <span
                  key={label}
                  aria-label={label}
                  className="text-eyebrow text-ink-muted/60 min-w-[44px] min-h-[44px] inline-flex items-center select-none"
                >
                  {abbr}
                </span>
              ))}
            </nav>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([title, links]) => (
            <nav key={title} aria-label={`${title} links`}>
              <span className={labelCls}>{title}</span>
              {links.map((l) => (
                <Link key={l.href} href={l.href} className={linkCls} style={linkStyle}>
                  {l.label}
                </Link>
              ))}
            </nav>
          ))}

          {/* Offices */}
          <div className="col-span-2 lg:col-span-1">
            <span className={labelCls}>Offices</span>
            {offices.map((o) => (
              <address key={o.city} className="not-italic mb-4">
                <span className="block font-body text-ink-body text-caption-a11y">
                  {o.city}
                </span>
                <span className="block font-body text-ink-meta mt-0.5 text-caption-a11y"
                  style={{ letterSpacing: '0.06em' }}>
                  {o.country} · {o.timezone}
                </span>
              </address>
            ))}
          </div>
        </div>

        <div className="border-t border-black/[0.05] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-body text-ink-meta text-caption-a11y"
            style={{ letterSpacing: '0.12em' }}>
            <span aria-hidden="true">© </span>{year} {BRAND.name}. All rights reserved.
          </p>
          <p className="font-body text-ink-muted text-eyebrow"
            aria-label="Office locations">
            Beirut · Lagos · Dubai · Riyadh
          </p>
        </div>
      </div>
    </footer>
  );
}
