import type { CaseStudy } from '@/lib/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'urban-commerce-uae',
    title: 'Redefining Urban Commerce',
    client: 'Souk & Co.',
    category: 'Brand Strategy / Web Development',
    year: '2024',
    description:
      "A full-stack brand and digital overhaul for one of the UAE's fastest-growing omni-channel retail chains.",
    challenge:
      'Souk & Co. had outgrown its legacy brand — a heritage retail business with no coherent digital identity, an underperforming e-commerce site, and no mobile presence in a market where 91% of purchases begin on a smartphone.',
    approach:
      'We led a full brand strategy engagement before a single pixel was designed. Workshops with founders and CMO, competitive mapping across GCC, and consumer interviews across Dubai and Abu Dhabi. We rebuilt the brand from the name system up, then delivered a new Next.js storefront with headless Shopify, an iOS/Android app, and a content programme targeting Arabic and English audiences.',
    result:
      'In six months the new digital experience drove a 3.4× uplift in conversion rate, 180% growth in mobile revenue, and the brand was awarded Best Retail Rebrand at the 2024 Gulf Marketing Awards.',
    metrics: [
      { label: 'Conversion uplift', value: '3.4×' },
      { label: 'Mobile revenue growth', value: '+180%' },
      { label: 'Organic traffic', value: '+220%' },
      { label: 'App store rating', value: '4.8 ★' },
    ],
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    ],
    tags: ['Brand', 'Web', 'Mobile', 'E-commerce'],
    featured: true,
  },
  {
    slug: 'saudi-logistics-digital',
    title: 'Digital Transformation at Scale',
    client: 'Majd Logistics',
    category: 'AI & Automation / Cloud & DevOps',
    year: '2024',
    description:
      'Enterprise-grade operational efficiency transformation for a Saudi logistics operator — cutting costs by 22% and doubling shipment capacity without adding headcount.',
    challenge:
      "Majd Logistics ran on manual tracking spreadsheets and a decade-old ERP that couldn't integrate with modern last-mile carriers. Every exception required human intervention. Operational costs were rising while customer satisfaction fell.",
    approach:
      'We conducted a full operational workflow audit before writing a line of code. The UX redesign reduced dispatcher task completion time by 60%. A real-time shipment intelligence platform on AWS, integrated with 14 carrier APIs, automated the exception-handling layer entirely. CI/CD pipelines cut release cycles from weeks to hours — transforming infrastructure from a bottleneck into a growth engine.',
    result:
      'Customer satisfaction (CSAT) rose from 61 to 89, operational costs reduced 22%, and the platform now handles 4,000+ daily shipments without added headcount — the definition of operational leverage.',
    metrics: [
      { label: 'CSAT improvement', value: '+28pts' },
      { label: 'Operational cost reduction', value: '-22%' },
      { label: 'Shipment capacity', value: '2× scale' },
      { label: 'Query auto-resolution', value: '68%' },
    ],
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80',
    ],
    tags: ['AI', 'Cloud', 'DevOps', 'Enterprise'],
    featured: true,
  },
  {
    slug: 'fintech-africa',
    title: 'Building the Future of African Fintech',
    client: 'Pesa Flow',
    category: 'UX/UI Design / Mobile Apps',
    year: '2023',
    description:
      'A mobile-first remittance and savings platform built for underbanked communities across Sub-Saharan Africa.',
    challenge:
      'Pesa Flow had a breakthrough product concept but an MVP that users described as confusing and untrustworthy. With 6 months of runway and 12 markets to serve, clarity was existential.',
    approach:
      'Deep user research across Kenya, Ghana, and Nigeria — in-person and moderated remote sessions. We rebuilt the app architecture, simplified the core money-movement flow to 3 taps, and introduced localised onboarding that increased completion rates immediately. Built on React Native for parity across iOS and Android.',
    result:
      'Post-launch: 4.7-star App Store rating, 40% month-on-month user growth, and Pesa Flow raised a $6M Series A four months after launch.',
    metrics: [
      { label: 'App Store rating', value: '4.7 ★' },
      { label: 'Monthly user growth', value: '+40%' },
      { label: 'Onboarding completion', value: '+55%' },
      { label: 'Series A raised', value: '$6M' },
    ],
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
    ],
    tags: ['Mobile', 'UX/UI', 'Fintech', 'Africa'],
    featured: true,
  },
  {
    slug: 'egyptian-heritage-brand',
    title: 'A New Identity for Egyptian Heritage',
    client: 'Nil Maison',
    category: 'Brand Strategy / Web Development',
    year: '2023',
    description:
      'Repositioning a century-old Egyptian luxury goods brand for the global premium market.',
    challenge:
      "Nil Maison's artisan craft was world-class but the brand was invisible outside Cairo. Online, it had no presence worth speaking of — a static WordPress site with no e-commerce and product photography shot on an iPhone.",
    approach:
      "We developed a new brand world grounded in Nil Maison's actual heritage — the artisans, the materials, the 103-year story. A new visual identity, photography direction, and editorial-level Shopify storefront designed to sit alongside Hermès and Diptyque.",
    result:
      'International orders in the first quarter exceeded the entire previous year. Featured in Vogue Arabia and Wallpaper*. Net Promoter Score increased from 42 to 78.',
    metrics: [
      { label: 'International revenue', value: '+310%' },
      { label: 'Average order value', value: '+85%' },
      { label: 'NPS increase', value: '+36pts' },
      { label: 'Press features', value: '12' },
    ],
    coverImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80',
    ],
    tags: ['Brand', 'Luxury', 'E-commerce', 'Heritage'],
    featured: false,
  },
  {
    slug: 'north-africa-ecommerce',
    title: 'E-commerce at Regional Scale',
    client: 'Maghreb Market',
    category: 'Web Development / Digital Marketing',
    year: '2024',
    description:
      "North Africa's first dedicated B2B marketplace for the hospitality and food-service sector.",
    challenge:
      'Procurement in North African hospitality remained almost entirely offline — fragmented suppliers, no price transparency, and no digital paper trail. Maghreb Market needed a platform that worked for buyers in Casablanca, Tunis, and Algiers simultaneously.',
    approach:
      'Multi-vendor marketplace on Next.js with Arabic, French, and English support. Custom supplier onboarding flows, RFQ tooling, and a logistics integration layer. Paired with an SEO content strategy across three language variants.',
    result:
      '300+ suppliers onboarded in 90 days, GMV of $2.4M in the first full quarter, and #1 organic ranking for key procurement terms across all three markets.',
    metrics: [
      { label: 'Suppliers onboarded', value: '300+' },
      { label: 'Q1 GMV', value: '$2.4M' },
      { label: 'Organic rankings', value: '#1' },
      { label: 'Markets live', value: '3' },
    ],
    coverImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=1200&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
    ],
    tags: ['Marketplace', 'Web', 'SEO', 'Multilingual'],
    featured: false,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedWork(): CaseStudy[] {
  return caseStudies.filter((c) => c.featured);
}
