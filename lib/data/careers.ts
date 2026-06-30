export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export const openings: JobOpening[] = [
  {
    slug: 'senior-product-designer',
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'Dubai · Hybrid',
    type: 'Full-time',
    description:
      'Lead end-to-end product design for regional fintech, retail, and SaaS clients. Strong Arabic/English systems experience is a plus.',
  },
  {
    slug: 'full-stack-engineer',
    title: 'Full-Stack Engineer',
    department: 'Engineering',
    location: 'Beirut · Remote-friendly',
    type: 'Full-time',
    description:
      'Build performant web apps with Next.js, TypeScript, and cloud-native backends. You care about craft, accessibility, and shipping.',
  },
  {
    slug: 'account-strategist',
    title: 'Account Strategist',
    department: 'Strategy',
    location: 'Riyadh · On-site',
    type: 'Full-time',
    description:
      'Partner with ambitious brands across the GCC on positioning, digital roadmaps, and multi-market go-to-market programmes.',
  },
];

export function getOpeningBySlug(slug: string): JobOpening | undefined {
  return openings.find((o) => o.slug === slug);
}
