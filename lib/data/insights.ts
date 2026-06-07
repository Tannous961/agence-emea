import type { Article } from '@/lib/types';

export const articles: Article[] = [
  {
    slug: 'operational-efficiency-digital-playbook-mea',
    title: 'Operational Efficiency as Competitive Advantage: The Digital Playbook for MEA Enterprises',
    excerpt:
      "In MEA's fastest-growing sectors, operational efficiency isn't a finance KPI — it's the most underused source of competitive advantage. How leading organisations are reclaiming it through UX design, cloud infrastructure, and intelligent automation.",
    content: '',
    author: { name: 'Layla Al-Rashid', role: 'Head of Strategy' },
    publishedAt: '2026-01-20',
    readTime: 8,
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    tags: ['Operational Efficiency', 'Strategy', 'MEA', 'Digital Transformation'],
  },
  {
    slug: 'ux-design-operational-asset',
    title: 'Why UX Design Is Your Most Undervalued Operational Asset',
    excerpt:
      'Every click your team and customers waste on a confusing interface is a direct operational cost. A research-backed look at how intentional UX investment drives measurable efficiency gains — and why MEA enterprises can no longer afford to ignore it.',
    content: '',
    author: { name: 'Sara Khalil', role: 'Creative Director' },
    publishedAt: '2026-01-08',
    readTime: 6,
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
    tags: ['UX Design', 'Operational Efficiency', 'Product Design', 'ROI'],
  },
  {
    slug: 'future-digital-marketing-mena',
    title: 'The Future of Digital Marketing in the MENA Region',
    excerpt:
      'Programmatic, AI-driven personalisation, and the Arabic-first content revolution are reshaping how brands reach 500 million consumers across the Middle East and North Africa.',
    content: '',
    author: { name: 'Layla Al-Rashid', role: 'Head of Strategy' },
    publishedAt: '2025-11-15',
    readTime: 7,
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80',
    tags: ['MENA', 'Digital Marketing', 'AI', 'Strategy'],
  },
  {
    slug: 'ai-reshaping-africa',
    title: 'How AI Is Reshaping Business Across Africa',
    excerpt:
      'From Lagos to Nairobi, a new generation of founders is deploying large language models not as novelties, but as core infrastructure for growth.',
    content: '',
    author: { name: 'David Mwangi', role: 'Head of AI & Automation' },
    publishedAt: '2025-10-28',
    readTime: 9,
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    tags: ['AI', 'Africa', 'Technology', 'Innovation'],
  },
  {
    slug: 'building-arabic-web',
    title: 'Building for the Arabic Web: Design Considerations You Cannot Ignore',
    excerpt:
      'RTL layouts, Arabic type rendering, cultural colour associations, and why your Western design system will fail without intentional localisation.',
    content: '',
    author: { name: 'Sara Khalil', role: 'Creative Director' },
    publishedAt: '2025-10-05',
    readTime: 6,
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=1200&q=80',
    tags: ['Arabic', 'Design', 'UX', 'Localisation'],
  },
  {
    slug: 'mobile-commerce-middle-east',
    title: 'The Rise of Mobile Commerce in the Middle East',
    excerpt:
      "With smartphone penetration above 85% in GCC markets and average daily screen time among the world's highest, mobile-first is no longer optional.",
    content: '',
    author: { name: 'Karim Hassan', role: 'Head of Mobile'},
    publishedAt: '2025-09-18',
    readTime: 5,
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    tags: ['Mobile', 'E-commerce', 'GCC', 'UX'],
  },
  {
    slug: 'premium-digital-presence',
    title: 'Why Your Brand Needs a Premium Digital Presence in 2025',
    excerpt:
      "In MEA's most competitive verticals — real estate, luxury retail, and financial services — digital mediocrity is commercial suicide.",
    content: '',
    author: { name: 'Layla Al-Rashid', role: 'Head of Strategy' },
    publishedAt: '2025-09-02',
    readTime: 4,
    category: 'Brand',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    tags: ['Brand', 'Premium', 'MEA', 'Strategy'],
  },
  {
    slug: 'dubai-to-nairobi-mea',
    title: 'From Dubai to Nairobi: Scaling Digital Products Across MEA',
    excerpt:
      'The MEA region is not one market — it is 54 countries, six lingua francas, and wildly different infrastructure realities. Here is how to build for all of them.',
    content: '',
    author: { name: 'David Mwangi', role: 'Head of AI & Automation' },
    publishedAt: '2025-08-14',
    readTime: 8,
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1568197895986-6b7163140be9?w=1200&q=80',
    tags: ['MEA', 'Scale', 'Product', 'Strategy'],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getLatestArticles(n = 3): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, n);
}
