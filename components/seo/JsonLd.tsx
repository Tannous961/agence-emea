import type { Article, CaseStudy, Service } from '@/lib/types';
import { BRAND } from '@/lib/constants/brand';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND.name,
  url: BRAND.url,
  logo: `${BRAND.url}/logo.svg`,
  sameAs: [
    'https://linkedin.com/company/agence-emea',
    'https://instagram.com/agenceemea',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-4-567-8900',
    contactType: 'customer service',
    areaServed: ['AE', 'SA', 'EG', 'KE', 'MA', 'QA', 'KW', 'BH', 'OM', 'JO', 'LB', 'TN', 'DZ'],
    availableLanguage: ['English', 'Arabic', 'French'],
  },
  areaServed: {
    '@type': 'GeoShape',
    name: 'Middle East and Africa',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai Design District, Building 7',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND.name,
  url: BRAND.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BRAND.url}/insights?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export function articleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: BRAND.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BRAND.url}/logo.svg`,
      },
    },
    mainEntityOfPage: `${BRAND.url}/insights/${article.slug}`,
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: BRAND.name,
      url: BRAND.url,
    },
    areaServed: {
      '@type': 'GeoShape',
      name: 'Middle East and Africa',
    },
    url: `${BRAND.url}/services/${service.slug}`,
    image: service.image,
  };
}

export function caseStudySchema(study: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: study.title,
    description: study.description,
    creator: {
      '@type': 'Organization',
      name: BRAND.name,
      url: BRAND.url,
    },
    about: study.client,
    dateCreated: study.year,
    image: study.coverImage,
    url: `${BRAND.url}/work/${study.slug}`,
  };
}
