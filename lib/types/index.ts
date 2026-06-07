export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: Array<{ label: string; value: string }>;
  coverImage: string;
  images: string[];
  tags: string[];
  featured: boolean;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: { name: string; role: string };
  publishedAt: string;
  readTime: number;
  category: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Office {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  markets: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Client {
  name: string;
  logo: string;
}
