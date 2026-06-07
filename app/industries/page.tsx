import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CtaSection } from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Industries — Sectors We Serve Across MEA',
  description:
    'Agence EMEA delivers digital strategy, web development, mobile apps, and AI solutions across 20+ industry verticals in the Middle East and Africa.',
  alternates: { canonical: 'https://agence-emea.com/industries' },
};

const sectors = [
  {
    slug: 'real-estate',
    name: 'Real Estate & PropTech',
    markets: 'UAE · KSA · Egypt',
    description: 'Digital platforms for developers, agents, and investors. Property search, CRM, virtual tours, and investor portals built for the GCC and Egyptian markets.',
    services: ['Web & Mobile Platforms', 'UX/UI Design', 'AI Property Matching', 'CRM Integration'],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    markets: 'GCC · North Africa',
    description: 'Secure, compliant digital experiences for banks, asset managers, and insurance providers operating under CBUAE, SAMA, and regional regulatory frameworks.',
    services: ['Digital Banking Portals', 'Compliance-Ready UX', 'Security Architecture', 'Analytics Dashboards'],
  },
  {
    slug: 'fintech',
    name: 'Fintech & Payments',
    markets: 'Africa · Levant',
    description: 'Payment infrastructure, remittance platforms, and neobank products designed for underbanked populations across Sub-Saharan Africa and the Levant.',
    services: ['Mobile Wallets', 'Payment Gateway Integration', 'KYC/AML Flows', 'Open Banking APIs'],
  },
  {
    slug: 'luxury-retail',
    name: 'Luxury & Fashion',
    markets: 'UAE · KSA · Morocco',
    description: 'Editorial-quality digital presences for luxury brands entering or growing across MEA — from DTC e-commerce to immersive brand storytelling.',
    services: ['Brand Strategy', 'Editorial Web Design', 'Luxury E-commerce', 'Content Direction'],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    markets: 'MEA-wide',
    description: 'High-performance storefronts, marketplace platforms, and omni-channel retail systems for ambitious retailers across the region.',
    services: ['Headless Commerce', 'Mobile Apps', 'Personalisation AI', 'Performance Marketing'],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Tourism',
    markets: 'GCC · East Africa',
    description: 'Booking engines, loyalty platforms, and brand websites for hotels, resorts, and tourism boards across the Gulf and East Africa.',
    services: ['Booking Systems', 'Loyalty Apps', 'CMS & Content', 'SEO & PPC'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & MedTech',
    markets: 'UAE · KSA · Egypt',
    description: 'Patient portals, telehealth platforms, and clinical management systems built to meet DHA, MOH, and HAAD standards.',
    services: ['Patient Portals', 'Telehealth Apps', 'Data Compliance', 'Clinical UX'],
  },
  {
    slug: 'energy',
    name: 'Energy & Oil & Gas',
    markets: 'Gulf · North Africa',
    description: 'Enterprise digital tools, field operations apps, and sustainability reporting platforms for energy majors and independents across the Gulf and North Africa.',
    services: ['Enterprise Platforms', 'Field Operations Apps', 'ESG Dashboards', 'Cloud Infrastructure'],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    markets: 'GCC · Kenya · Morocco',
    description: 'Real-time tracking, last-mile optimisation, and supplier marketplace platforms for logistics operators in high-growth MEA corridors.',
    services: ['Tracking Platforms', 'Fleet Management', 'Marketplace Development', 'AI Route Optimisation'],
  },
  {
    slug: 'education',
    name: 'Education & EdTech',
    markets: 'MEA-wide',
    description: 'Learning management systems, student portals, and edtech products for universities, schools, and corporate training providers across MEA.',
    services: ['LMS Development', 'Mobile Learning Apps', 'UX/UI Design', 'Arabic Localisation'],
  },
  {
    slug: 'government',
    name: 'Government & Public Sector',
    markets: 'UAE · KSA · Egypt',
    description: 'Citizen-facing digital services, smart city platforms, and government portals delivered with the security, accessibility, and localisation MEA governments require.',
    services: ['Citizen Portals', 'Smart City Platforms', 'Accessibility (WCAG)', 'Security & Compliance'],
  },
  {
    slug: 'media',
    name: 'Media & Entertainment',
    markets: 'MENA · Sub-Saharan',
    description: 'OTT platforms, content hubs, and digital media brands for broadcasters, publishers, and streaming services across Arabic and African markets.',
    services: ['OTT Platforms', 'Content Management', 'Monetisation Systems', 'Audience Analytics'],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-44 pb-24 border-b border-black/[0.05]">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span className="font-body font-light uppercase text-[var(--color-cream)]/40"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                Industries
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}>
              Built for Every<br />
              <span style={{ WebkitTextStroke: '1px rgba(17,17,17,0.4)', color: 'transparent' }}>
                MEA Vertical.
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 font-body font-light text-[var(--color-cream)]/45 max-w-xl leading-relaxed"
              style={{ fontSize: '1.06rem' }}>
              From sovereign wealth funds to Series A startups — we have delivered across every major sector in the region. Each industry has its own regulatory context, cultural nuance, and user behaviour. We know them all.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sector grid */}
      <section className="bg-[#F5F5F5] py-24" aria-label="All industries">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.05]">
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector.slug} delay={Math.min(i * 0.04, 0.25)}>
                <div className="bg-[#F5F5F5] p-10 md:p-12 hover:bg-[#EDEDED] transition-colors duration-400 group">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="block font-body font-light text-[var(--color-cream)]/20 mb-2 tabular-nums"
                        style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="font-display font-semibold uppercase text-[var(--color-cream)]"
                        style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.9rem)', letterSpacing: '-0.015em', lineHeight: 0.95 }}>
                        {sector.name}
                      </h2>
                    </div>
                    <span className="shrink-0 font-body font-light text-[#0000FF]/50 mt-1"
                      style={{ fontSize: '0.72rem', letterSpacing: '0.2em' }}>
                      {sector.markets}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-body font-light text-[var(--color-cream)]/40 leading-relaxed mb-7"
                    style={{ fontSize: '1rem' }}>
                    {sector.description}
                  </p>

                  {/* Services tags */}
                  <div className="flex flex-wrap gap-2">
                    {sector.services.map((s) => (
                      <span key={s}
                        className="font-body font-light text-[var(--color-cream)]/25 border border-black/[0.07] px-3 py-1.5 group-hover:border-black/[0.12] transition-colors duration-300"
                        style={{ fontSize: '0.74rem', letterSpacing: '0.12em' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA bar */}
          <ScrollReveal delay={0.2}>
            <div className="mt-px bg-[#F0F0F0] border border-black/[0.07] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0000FF]" />
                <p className="font-body font-light text-[var(--color-cream)]/50" style={{ fontSize: '1rem' }}>
                  <span className="text-[var(--color-cream)]/80">Don&apos;t see your sector?</span>
                  {' '}We have built for 20+ industries across MEA. Let&apos;s talk.
                </p>
              </div>
              <Link href="/contact"
                className="shrink-0 inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/50 hover:text-[#0000FF] transition-colors duration-300"
                style={{ fontSize: '0.78rem', letterSpacing: '0.28em' }}>
                Get in Touch <span className="w-5 h-px bg-current" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
