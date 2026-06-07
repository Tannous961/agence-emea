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
  name: 'Agence EMEA',
  url: 'https://agence-emea.com',
  logo: 'https://agence-emea.com/logo.png',
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
  name: 'Agence EMEA',
  url: 'https://agence-emea.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://agence-emea.com/insights?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};
