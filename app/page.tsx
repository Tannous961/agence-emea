import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { IntroSection } from '@/components/sections/IntroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { InsightsTeaser } from '@/components/sections/InsightsTeaser';
import { CtaSection } from '@/components/sections/CtaSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { RegionalSection } from '@/components/sections/RegionalSection';
import { BRAND } from '@/lib/constants/brand';

export const metadata: Metadata = {
  title: {
    absolute: `${BRAND.name} — Premium Digital Agency for the Middle East & Africa`,
  },
  description:
    'We build brands, digital products, and marketing systems for ambitious organisations across the Middle East and Africa. Brand strategy, web development, mobile apps, AI, and more.',
  alternates: { canonical: BRAND.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ClientLogos />
      <ServicesSection />
      <FeaturedWork />
      <WhyUsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <RegionalSection />
      <InsightsTeaser />
      <CtaSection />
    </>
  );
}
