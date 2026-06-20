import type { Industry, IndustryGroup } from '@/lib/types';

export const INDUSTRY_GROUPS: IndustryGroup[] = [
  {
    id: 'finance-commerce',
    label: 'Finance & Commerce',
    summary: 'Banking, fintech, retail, luxury, and consumer brands.',
    slugs: [
      'financial-services',
      'fintech',
      'banking-insurance',
      'luxury-retail',
      'retail-ecommerce',
      'food-beverage',
    ],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure & Industry',
    summary: 'Property, energy, logistics, construction, and telecom.',
    slugs: [
      'real-estate',
      'energy',
      'logistics',
      'construction-infra',
      'telecommunications',
      'travel-transport',
    ],
  },
  {
    id: 'people-society',
    label: 'People & Society',
    summary: 'Healthcare, education, hospitality, government, and media.',
    slugs: [
      'healthcare',
      'education',
      'government',
      'hospitality',
      'media',
      'agritech-foodtech',
    ],
  },
];

export const industries: Industry[] = [
  {
    slug: 'real-estate',
    name: 'Real Estate & PropTech',
    markets: 'UAE · KSA · Egypt',
    description:
      'Digital platforms for developers, agents, and investors. Property search, CRM, virtual tours, and investor portals built for the GCC and Egyptian markets.',
    services: ['Web & Mobile Platforms', 'UX/UI Design', 'AI Property Matching', 'CRM Integration'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    highlights: [
      'Investor and buyer portals with Arabic-first UX',
      'CRM and lead routing integrated with sales teams',
      'Virtual tour and 3D asset workflows for off-plan sales',
    ],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    markets: 'GCC · North Africa',
    description:
      'Secure, compliant digital experiences for banks, asset managers, and insurance providers operating under CBUAE, SAMA, and regional regulatory frameworks.',
    services: ['Digital Banking Portals', 'Compliance-Ready UX', 'Security Architecture', 'Analytics Dashboards'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    highlights: [
      'Regulatory-aware onboarding and KYC flows',
      'Secure client portals with role-based access',
      'Performance dashboards for relationship managers',
    ],
  },
  {
    slug: 'fintech',
    name: 'Fintech & Payments',
    markets: 'Africa · Levant',
    description:
      'Payment infrastructure, remittance platforms, and neobank products designed for underbanked populations across Sub-Saharan Africa and the Levant.',
    services: ['Mobile Wallets', 'Payment Gateway Integration', 'KYC/AML Flows', 'Open Banking APIs'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    highlights: [
      'Mobile-first wallets for low-bandwidth markets',
      'Payment gateway and PSP integrations',
      'Fraud monitoring and transaction analytics',
    ],
  },
  {
    slug: 'luxury-retail',
    name: 'Luxury & Fashion',
    markets: 'UAE · KSA · Morocco',
    description:
      'Editorial-quality digital presences for luxury brands entering or growing across MEA — from DTC e-commerce to immersive brand storytelling.',
    services: ['Brand Strategy', 'Editorial Web Design', 'Luxury E-commerce', 'Content Direction'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    highlights: [
      'Editorial commerce experiences with premium craft',
      'Brand systems adapted for Gulf and North African markets',
      'Content and campaign infrastructure for seasonal drops',
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    markets: 'MEA-wide',
    description:
      'High-performance storefronts, marketplace platforms, and omni-channel retail systems for ambitious retailers across the region.',
    services: ['Headless Commerce', 'Mobile Apps', 'Personalisation AI', 'Performance Marketing'],
    image: 'https://images.unsplash.com/photo-1472851298518-5276e088ce45?w=1200&q=80',
    highlights: [
      'Headless storefronts optimised for mobile conversion',
      'Marketplace and vendor onboarding at scale',
      'Personalisation and retention automation',
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Tourism',
    markets: 'GCC · East Africa',
    description:
      'Booking engines, loyalty platforms, and brand websites for hotels, resorts, and tourism boards across the Gulf and East Africa.',
    services: ['Booking Systems', 'Loyalty Apps', 'CMS & Content', 'SEO & PPC'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    highlights: [
      'Direct booking flows that reduce OTA dependency',
      'Loyalty and membership apps for repeat guests',
      'Multilingual content for international travellers',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & MedTech',
    markets: 'UAE · KSA · Egypt',
    description:
      'Patient portals, telehealth platforms, and clinical management systems built to meet DHA, MOH, and HAAD standards.',
    services: ['Patient Portals', 'Telehealth Apps', 'Data Compliance', 'Clinical UX'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    highlights: [
      'Patient journeys designed for clarity under stress',
      'Telehealth and appointment scheduling at scale',
      'Compliance-ready data handling and audit trails',
    ],
  },
  {
    slug: 'energy',
    name: 'Energy & Oil & Gas',
    markets: 'Gulf · North Africa',
    description:
      'Enterprise digital tools, field operations apps, and sustainability reporting platforms for energy majors and independents across the Gulf and North Africa.',
    services: ['Enterprise Platforms', 'Field Operations Apps', 'ESG Dashboards', 'Cloud Infrastructure'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80',
    highlights: [
      'Field operations tools for distributed teams',
      'Executive dashboards for asset and ESG reporting',
      'Integration with legacy enterprise systems',
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    markets: 'GCC · Kenya · Morocco',
    description:
      'Real-time tracking, last-mile optimisation, and supplier marketplace platforms for logistics operators in high-growth MEA corridors.',
    services: ['Tracking Platforms', 'Fleet Management', 'Marketplace Development', 'AI Route Optimisation'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    highlights: [
      'Real-time shipment visibility for B2B clients',
      'Driver and fleet apps for last-mile efficiency',
      'Supplier marketplaces with automated matching',
    ],
  },
  {
    slug: 'education',
    name: 'Education & EdTech',
    markets: 'MEA-wide',
    description:
      'Learning management systems, student portals, and edtech products for universities, schools, and corporate training providers across MEA.',
    services: ['LMS Development', 'Mobile Learning Apps', 'UX/UI Design', 'Arabic Localisation'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    highlights: [
      'LMS platforms with Arabic and bilingual support',
      'Mobile learning for students on low-end devices',
      'Analytics for educators and administrators',
    ],
  },
  {
    slug: 'government',
    name: 'Government & Public Sector',
    markets: 'UAE · KSA · Egypt',
    description:
      'Citizen-facing digital services, smart city platforms, and government portals delivered with the security, accessibility, and localisation MEA governments require.',
    services: ['Citizen Portals', 'Smart City Platforms', 'Accessibility (WCAG)', 'Security & Compliance'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    highlights: [
      'Citizen services with WCAG-aligned accessibility',
      'Secure identity and document verification flows',
      'Multilingual interfaces for diverse populations',
    ],
  },
  {
    slug: 'media',
    name: 'Media & Entertainment',
    markets: 'MENA · Sub-Saharan',
    description:
      'OTT platforms, content hubs, and digital media brands for broadcasters, publishers, and streaming services across Arabic and African markets.',
    services: ['OTT Platforms', 'Content Management', 'Monetisation Systems', 'Audience Analytics'],
    image: 'https://images.unsplash.com/photo-1522869635100-904f9a5c2d0a?w=1200&q=80',
    highlights: [
      'Streaming and OTT experiences for regional audiences',
      'Subscription and ad-supported monetisation models',
      'Content CMS built for editorial teams',
    ],
  },
  {
    slug: 'telecommunications',
    name: 'Telecommunications',
    markets: 'Africa · Gulf',
    description:
      'Customer self-service portals, retail apps, and enterprise tools for telcos serving hundreds of millions of subscribers across Africa and the Gulf.',
    services: ['Self-Service Portals', 'Mobile Apps', 'Billing UX', 'Customer Analytics'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    highlights: [
      'Self-service flows that reduce call-centre load',
      'Retail and prepaid recharge experiences for mobile-first users',
      'Enterprise dashboards for B2B connectivity clients',
    ],
  },
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    markets: 'GCC · North Africa',
    description:
      'DTC ordering, franchise platforms, and brand websites for F&B groups scaling across the Gulf and North Africa.',
    services: ['Ordering Platforms', 'Franchise Portals', 'Brand Websites', 'Loyalty Programs'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
    highlights: [
      'Direct ordering that bypasses aggregator fees',
      'Franchise onboarding and operations tooling',
      'Campaign sites and seasonal product launches',
    ],
  },
  {
    slug: 'construction-infra',
    name: 'Construction & Infra',
    markets: 'UAE · KSA · Egypt',
    description:
      'Project portals, tender platforms, and stakeholder dashboards for contractors and developers managing large-scale infrastructure programmes.',
    services: ['Project Portals', 'Tender Platforms', 'Document Management', 'Field Reporting'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    highlights: [
      'Stakeholder dashboards for mega-project visibility',
      'Tender and vendor management workflows',
      'Field reporting apps for site teams',
    ],
  },
  {
    slug: 'banking-insurance',
    name: 'Banking & Insurance',
    markets: 'GCC · Morocco · Kenya',
    description:
      'Policy portals, claims journeys, and digital onboarding for insurers and retail banks expanding across GCC, North Africa, and East Africa.',
    services: ['Policy Portals', 'Claims UX', 'Digital Onboarding', 'Agent Tools'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    highlights: [
      'Claims journeys designed for clarity and trust',
      'Agent and broker tools for distributed sales networks',
      'Regulatory-ready onboarding across multiple jurisdictions',
    ],
  },
  {
    slug: 'agritech-foodtech',
    name: 'Agritech & FoodTech',
    markets: 'East Africa · Morocco',
    description:
      'Marketplace platforms, supply-chain tools, and mobile apps connecting farmers, distributors, and buyers across East Africa and Morocco.',
    services: ['Agri Marketplaces', 'Supply Chain Apps', 'Mobile Field Tools', 'Data Dashboards'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
    highlights: [
      'Farmer-facing apps optimised for low connectivity',
      'Marketplace matching for produce and inputs',
      'Traceability dashboards for export compliance',
    ],
  },
  {
    slug: 'travel-transport',
    name: 'Travel & Transport',
    markets: 'MEA-wide',
    description:
      'Booking platforms, mobility apps, and operator websites for airlines, rail, and transport companies serving MEA travellers.',
    services: ['Booking Engines', 'Mobility Apps', 'Operator Websites', 'Loyalty Systems'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
    highlights: [
      'Booking flows optimised for mobile conversion',
      'Multilingual interfaces for international routes',
      'Operator tools for fleet and schedule management',
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getGroupedIndustries(): Array<IndustryGroup & { industries: Industry[] }> {
  return INDUSTRY_GROUPS.map((group) => ({
    ...group,
    industries: group.slugs
      .map((slug) => getIndustryBySlug(slug))
      .filter((ind): ind is Industry => ind !== undefined),
  }));
}

export function getIndustryHref(name: string): string {
  const exact = industries.find((i) => i.name === name);
  if (exact) return `/industries/${exact.slug}`;
  const partial = industries.find(
    (i) => i.name.startsWith(name) || name.startsWith(i.name.split(' &')[0] ?? i.name),
  );
  return partial ? `/industries/${partial.slug}` : '/industries';
}
