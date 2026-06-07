import type { Service } from '@/lib/types';

export const services: Service[] = [
  {
    slug: 'brand-strategy',
    shortTitle: 'Brand Strategy',
    title: 'Brand Strategy & Identity',
    tagline: 'Build brands that command attention.',
    description:
      "We craft purposeful brand identities — from positioning and naming to visual systems — that resonate across MEA's diverse, rapidly growing markets.",
    features: [
      'Brand positioning & messaging',
      'Visual identity & design systems',
      'Brand naming & narrative',
      'Rebranding & brand evolution',
      'Brand guidelines & governance',
    ],
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80',
  },
  {
    slug: 'ux-ui-design',
    shortTitle: 'UX/UI Design',
    title: 'UX/UI Design',
    tagline: 'Eliminate friction. Accelerate performance.',
    description:
      'Every confusing screen, redundant click, and unclear flow is an operational cost — paid in time, support tickets, and lost conversions. We design interfaces so precise they become invisible: reducing onboarding friction, compressing task completion times, and turning your product into your most efficient operator.',
    features: [
      'Operational workflow & journey mapping',
      'Friction audit & interface optimisation',
      'Design systems & component libraries (Figma)',
      'Wireframing, prototyping & usability testing',
      'Product design for web & mobile',
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
  },
  {
    slug: 'web-development',
    shortTitle: 'Web Design & Dev',
    title: 'Web Design & Development',
    tagline: 'Websites that convert ambition into revenue.',
    description:
      'Performance-first, editorially beautiful websites built with the latest technologies — from bespoke marketing sites to complex web applications.',
    features: [
      'Bespoke website design',
      'Next.js & React development',
      'E-commerce & headless CMS',
      'CMS integration (Sanity, Contentful)',
      'Core Web Vitals optimisation',
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14431b4?w=1200&q=80',
  },
  {
    slug: 'cloud-devops',
    shortTitle: 'Cloud & DevOps',
    title: 'Cloud & DevOps',
    tagline: 'The infrastructure behind operational excellence.',
    description:
      'Slow deployments, fragile pipelines, and over-provisioned infrastructure are silent operational taxes — ones your competitors do not pay. We architect cloud environments and DevOps workflows that eliminate bottlenecks, automate the routine, and transform your infrastructure from a cost centre into a measurable competitive advantage.',
    features: [
      'Cloud cost optimisation & FinOps',
      'CI/CD automation & pipeline engineering',
      'AWS, GCP & Azure architecture',
      'Containerisation & orchestration (Docker, K8s)',
      'Infrastructure-as-Code & automated monitoring',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
  },
  {
    slug: 'mobile-apps',
    shortTitle: 'Mobile Apps',
    title: 'Mobile Applications',
    tagline: 'Experiences built for a mobile-first region.',
    description:
      "Native and cross-platform mobile applications designed for the world's most engaged smartphone audiences across the Middle East and Africa.",
    features: [
      'iOS & Android development',
      'React Native & Flutter',
      'App Store optimisation',
      'Mobile UI/UX design',
      'Maintenance & iteration',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
  },
  {
    slug: 'ai-automation',
    shortTitle: 'AI & Automation',
    title: 'AI & Automation',
    tagline: 'Intelligent systems for competitive edges.',
    description:
      'We integrate large language models, computer vision, and workflow automation to help ambitious organisations move faster and serve customers better.',
    features: [
      'LLM integration & fine-tuning',
      'AI-powered chatbots & agents',
      'Process automation (n8n, Zapier)',
      'Data pipelines & dashboards',
      'Custom AI product development',
    ],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
  },
  {
    slug: 'digital-marketing',
    shortTitle: 'Digital Marketing',
    title: 'Digital Marketing & SEO',
    tagline: 'Visibility that drives measurable growth.',
    description:
      'Integrated digital marketing strategies combining technical SEO, paid media, content, and analytics to build durable competitive advantage in MEA markets.',
    features: [
      'Technical SEO & content strategy',
      'Google & Meta paid media',
      'Arabic & English content',
      'Conversion rate optimisation',
      'Analytics & performance reporting',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
