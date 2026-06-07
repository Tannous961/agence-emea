import Link from 'next/link';
import { offices } from '@/lib/data/clients';

const nav = {
  Services: [
    { label: 'Brand Strategy',    href: '/services/brand-strategy' },
    { label: 'Web Development',   href: '/services/web-development' },
    { label: 'Mobile Apps',       href: '/services/mobile-apps' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'AI & Automation',   href: '/services/ai-automation' },
    { label: 'UX/UI Design',      href: '/services/ux-ui-design' },
    { label: 'Cloud & DevOps',    href: '/services/cloud-devops' },
  ],
  Company: [
    { label: 'Work',       href: '/work' },
    { label: 'Industries', href: '/industries' },
    { label: 'About',      href: '/about' },
    { label: 'Insights',   href: '/insights' },
    { label: 'Contact',    href: '/contact' },
    { label: 'Privacy',    href: '/privacy' },
  ],
};

const socials = [
  { label: 'LinkedIn',     href: '#', abbr: 'LI' },
  { label: 'Instagram',    href: '#', abbr: 'IG' },
  { label: 'X (Twitter)',  href: '#', abbr: 'X' },
];

const labelCls = 'text-[0.68rem] font-body font-light uppercase tracking-[0.32em] text-[var(--color-cream)]/25 block mb-6';
const linkCls  = 'block font-body font-light text-[var(--color-cream)]/45 hover:text-[var(--color-cream)] focus-visible:text-[#0000FF] transition-colors duration-300 mb-3 outline-none';
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
              className="font-display font-semibold text-[var(--color-cream)] text-lg uppercase tracking-[0.2em] hover:text-[#0000FF] transition-colors duration-300 block mb-5"
            >
              B&amp;B Agency<span className="text-[#0000FF]">.</span>
            </Link>
            <p className="font-body font-light text-[var(--color-cream)]/35 leading-relaxed max-w-[200px]"
              style={{ fontSize: '0.92rem' }}>
              Premium digital agency for the Middle East and Africa.
            </p>
            <nav aria-label="Social links" className="flex gap-5 mt-7">
              {socials.map(({ label, href, abbr }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-[0.72rem] font-body font-light uppercase tracking-[0.22em] text-[var(--color-cream)]/25 hover:text-[#0000FF] focus-visible:text-[#0000FF] transition-colors outline-none"
                  rel="noopener noreferrer"
                >
                  {abbr}
                </a>
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
                <span className="block font-body font-light text-[var(--color-cream)]/45"
                  style={{ fontSize: '0.95rem' }}>
                  {o.city}
                </span>
                <span className="block font-body font-light text-[var(--color-cream)]/22 mt-0.5"
                  style={{ fontSize: '0.78rem', letterSpacing: '0.06em' }}>
                  {o.country} · {o.timezone}
                </span>
              </address>
            ))}
          </div>
        </div>

        <div className="border-t border-black/[0.05] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-body font-light text-[var(--color-cream)]/20"
            style={{ fontSize: '0.76rem', letterSpacing: '0.12em' }}>
            <span aria-hidden="true">© </span>{year} Agence EMEA. All rights reserved.
          </p>
          <p className="font-body font-light text-[var(--color-cream)]/14 uppercase"
            style={{ fontSize: '0.66rem', letterSpacing: '0.32em' }}
            aria-label="Office locations">
            Dubai · Riyadh · Cairo · Nairobi · Casablanca
          </p>
        </div>
      </div>
    </footer>
  );
}
