import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Agence EMEA — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://agence-emea.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="bg-[#F5F5F5] pt-40 pb-32">
      <div className="container-site max-w-3xl">
        <ScrollReveal>
          <h1 className="font-display text-display-md text-[var(--color-cream)] uppercase mb-12">Privacy Policy</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="font-body text-[var(--color-cream)]/60 text-base leading-relaxed space-y-8">
            <p>Last updated: January 2025</p>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">1. Who We Are</h2>
              <p>Agence EMEA FZ-LLC is a digital agency registered in Dubai Design District, United Arab Emirates. References to "we", "us", and "our" refer to Agence EMEA.</p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">2. Data We Collect</h2>
              <p>We collect information you voluntarily provide via our contact form: your name, email address, company name, and project enquiry details. We may also collect standard server logs (IP addresses, browser type, pages visited) for security and analytics purposes.</p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">3. How We Use Your Data</h2>
              <p>We use the information you submit to respond to your enquiry and, where you have agreed, to send you relevant updates about our work and thinking. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">4. Data Retention</h2>
              <p>Enquiry data is retained for up to 24 months or until you request deletion. You may request deletion of your data at any time by emailing <a href="mailto:privacy@agence-emea.com" className="text-[#0000FF] hover:text-[#0000FF]/70 transition-colors duration-200">privacy@agence-emea.com</a>.</p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">5. Your Rights</h2>
              <p>Depending on your jurisdiction you have rights to access, correct, delete, and port your personal data. To exercise any of these rights, contact us at the email above.</p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">6. Contact</h2>
              <p>For any privacy-related questions: <a href="mailto:privacy@agence-emea.com" className="text-[#0000FF] hover:text-[#0000FF]/70 transition-colors duration-200">privacy@agence-emea.com</a></p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
