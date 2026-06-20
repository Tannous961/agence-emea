import type { Service } from '@/lib/types';

/** High-quality Unsplash URLs for service imagery (1920px, q=90). */
function hq(photoId: string) {
  return `https://images.unsplash.com/photo-${photoId}?w=1920&q=90&auto=format&fit=crop`;
}

export const services: Service[] = [
  {
    slug: 'ai-automation',
    shortTitle: 'AI & Automation',
    title: 'AI & Automation',
    tagline: 'Intelligent systems for competitive edges.',
    description:
      'We integrate large language models, computer vision, and workflow automation to help ambitious organisations move faster and serve customers better — with solutions built for MEA data sovereignty, Arabic language nuance, and real operational constraints.',
    highlights: [
      'Discovery workshops to map high-ROI automation opportunities before any build',
      'Production-grade LLM integrations with guardrails, monitoring, and human-in-the-loop fallbacks',
      'Workflow automation that connects your existing tools — CRM, ERP, support, and ops stacks',
    ],
    features: [
      'LLM integration & fine-tuning',
      'AI-powered chatbots & agents',
      'Process automation (n8n, Zapier)',
      'Data pipelines & dashboards',
      'Custom AI product development',
    ],
    image: hq('1677442135703-1787eea5ce01'),
    imageAlt: 'Abstract neural network visualization representing AI and automation',
  },
  {
    slug: 'brand-strategy',
    shortTitle: 'Brand Strategy',
    title: 'Brand Strategy & Identity',
    tagline: 'Build brands that command attention.',
    description:
      "We craft purposeful brand identities — from positioning and naming to visual systems — that resonate across MEA's diverse, rapidly growing markets. Strategy first, then design systems that scale across touchpoints.",
    highlights: [
      'Positioning grounded in competitive mapping and stakeholder interviews across your markets',
      'Visual identity systems designed for Arabic and English — RTL, typography, and cultural nuance',
      'Brand governance toolkits so your team stays consistent long after launch',
    ],
    features: [
      'Brand positioning & messaging',
      'Visual identity & design systems',
      'Brand naming & narrative',
      'Rebranding & brand evolution',
      'Brand guidelines & governance',
    ],
    image: hq('1618005180692-67be308fee36'),
    imageAlt: 'Creative brand design workspace with colour swatches and typography',
  },
  {
    slug: 'web-development',
    shortTitle: 'Web Design & Dev',
    title: 'Web Design & Development',
    tagline: 'Websites that convert ambition into revenue.',
    description:
      'Performance-first, editorially beautiful websites built with the latest technologies — from bespoke marketing sites to complex web applications. Every project is engineered for Core Web Vitals, accessibility, and conversion.',
    highlights: [
      'Editorial design language aligned with your brand — not generic templates',
      'Next.js and headless CMS architectures built for speed, SEO, and easy content updates',
      'Launch support with analytics, A/B testing hooks, and ongoing performance monitoring',
    ],
    features: [
      'Bespoke website design',
      'Next.js & React development',
      'E-commerce & headless CMS',
      'CMS integration (Sanity, Contentful)',
      'Core Web Vitals optimisation',
    ],
    image: hq('1498050108023-c5249f4df085'),
    imageAlt: 'Developer workspace with laptop showing modern web application code',
  },
  {
    slug: 'mobile-apps',
    shortTitle: 'Mobile Apps',
    title: 'Mobile Applications',
    tagline: 'Experiences built for a mobile-first region.',
    description:
      "Native and cross-platform mobile applications designed for the world's most engaged smartphone audiences across the Middle East and Africa — optimised for low-bandwidth conditions, local payment rails, and bilingual UX.",
    highlights: [
      'User research and prototyping before development — validated flows, not assumptions',
      'React Native and native builds tuned for performance on mid-range devices common in MEA',
      'App Store and Play Store launch support, ASO, and post-launch iteration cycles',
    ],
    features: [
      'iOS & Android development',
      'React Native & Flutter',
      'App Store optimisation',
      'Mobile UI/UX design',
      'Maintenance & iteration',
    ],
    image: hq('1512941937669-90a1b58e7e9c'),
    imageAlt: 'Smartphone displaying a polished mobile application interface',
  },
  {
    slug: 'digital-marketing',
    shortTitle: 'Digital Marketing',
    title: 'Digital Marketing & SEO',
    tagline: 'Visibility that drives measurable growth.',
    description:
      'Integrated digital marketing strategies combining technical SEO, paid media, content, and analytics to build durable competitive advantage in MEA markets — Arabic and English, search and social, always tied to revenue metrics.',
    highlights: [
      'Technical SEO audits and content architecture built for multilingual MEA search behaviour',
      'Paid media on Google and Meta with creative and landing pages optimised per market',
      'Monthly reporting tied to pipeline, revenue, and CAC — not vanity metrics',
    ],
    features: [
      'Technical SEO & content strategy',
      'Google & Meta paid media',
      'Arabic & English content',
      'Conversion rate optimisation',
      'Analytics & performance reporting',
    ],
    image: hq('1460925895917-afdab827c52f'),
    imageAlt: 'Analytics dashboard showing digital marketing performance metrics',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, limit);
}
