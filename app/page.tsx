import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { IntroSection } from '@/components/sections/IntroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CapabilitiesMarquee } from '@/components/sections/CapabilitiesMarquee';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { RegionalSection } from '@/components/sections/RegionalSection';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { InsightsTeaser } from '@/components/sections/InsightsTeaser';
import { CtaSection } from '@/components/sections/CtaSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';

export const metadata: Metadata = {
  title: 'Agence EMEA — Premium Digital Agency for the Middle East & Africa',
  description:
    'We build brands, digital products, and marketing systems for ambitious organisations across the Middle East and Africa. Brand strategy, web development, mobile apps, AI, and more.',
  alternates: { canonical: 'https://agence-emea.com' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <CapabilitiesMarquee />
      <WhyUsSection />
      <IndustriesSection />
      <RegionalSection />
      <ClientLogos />
      <TestimonialsSection />
      <InsightsTeaser />
      <CtaSection />
    </>
  );
}
