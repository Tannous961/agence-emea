export type HeroPattern = 'grid' | 'dots' | 'lines' | 'nodes' | 'rings';

export interface HeroTheme {
  pattern: HeroPattern;
  tint: string;
  glow: string;
  label: string;
}

export const serviceHeroThemes: Record<string, HeroTheme> = {
  'ai-automation': {
    pattern: 'nodes',
    tint: '#0000FF',
    glow: 'rgba(0, 0, 255, 0.09)',
    label: 'Intelligence',
  },
  'brand-strategy': {
    pattern: 'rings',
    tint: '#111111',
    glow: 'rgba(17, 17, 17, 0.06)',
    label: 'Identity',
  },
  'web-development': {
    pattern: 'grid',
    tint: '#0000FF',
    glow: 'rgba(0, 0, 255, 0.08)',
    label: 'Digital Build',
  },
  'mobile-apps': {
    pattern: 'dots',
    tint: '#0000FF',
    glow: 'rgba(0, 0, 255, 0.07)',
    label: 'Mobile First',
  },
  'digital-marketing': {
    pattern: 'lines',
    tint: '#0000FF',
    glow: 'rgba(0, 0, 255, 0.08)',
    label: 'Growth',
  },
};

export const industryGroupHeroThemes: Record<string, HeroTheme> = {
  'finance-commerce': {
    pattern: 'grid',
    tint: '#0000FF',
    glow: 'rgba(0, 0, 255, 0.07)',
    label: 'Finance & Commerce',
  },
  infrastructure: {
    pattern: 'lines',
    tint: '#111111',
    glow: 'rgba(17, 17, 17, 0.05)',
    label: 'Infrastructure',
  },
  'people-society': {
    pattern: 'dots',
    tint: '#0000FF',
    glow: 'rgba(0, 0, 255, 0.06)',
    label: 'People & Society',
  },
};

const defaultServiceTheme: HeroTheme = serviceHeroThemes['web-development'];
const defaultIndustryTheme: HeroTheme = industryGroupHeroThemes['finance-commerce'];

export function getServiceHeroTheme(slug: string): HeroTheme {
  return serviceHeroThemes[slug] ?? defaultServiceTheme;
}

export function getIndustryHeroTheme(slug: string, groupId?: string): HeroTheme {
  if (groupId && industryGroupHeroThemes[groupId]) {
    return industryGroupHeroThemes[groupId];
  }
  return defaultIndustryTheme;
}
