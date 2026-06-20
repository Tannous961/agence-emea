import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BRAND } from '@/lib/constants/brand';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${BRAND.name} — the conditions governing use of our website and services.`,
  alternates: { canonical: `${BRAND.url}/terms` },
};

export default function TermsPage() {
  return (
    <section className="bg-[#F5F5F5] pt-40 pb-32">
      <div className="container-site max-w-3xl">
        <ScrollReveal>
          <h1 className="font-display text-display-md text-[var(--color-cream)] uppercase mb-12">Terms of Service</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="font-body text-ink-body text-base leading-relaxed space-y-8">
            <p>Last updated: June 2025</p>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">1. Agreement</h2>
              <p>
                By accessing or using the website at{' '}
                <a href={BRAND.url} className="text-[#0000FF] hover:text-blue-link transition-colors duration-200">
                  {BRAND.domain}
                </a>
                , you agree to these Terms of Service. If you do not agree, please do not use this site. {BRAND.legalName} (&ldquo;{BRAND.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">2. Use of the Website</h2>
              <p>
                You may use this website for lawful purposes only. You agree not to attempt to gain unauthorised access to our systems, interfere with the site&apos;s operation, scrape content at scale, or use the contact form to send spam or malicious content.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">3. Intellectual Property</h2>
              <p>
                All content on this website — including text, design, logos, images, and code — is owned by or licensed to {BRAND.name} unless otherwise stated. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">4. Enquiries and Services</h2>
              <p>
                Submitting a contact form does not create a client relationship or contractual obligation. Any professional services are governed by a separate written agreement between you and {BRAND.name}. Information on this site is provided for general purposes and does not constitute professional advice.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">5. Third-Party Links</h2>
              <p>
                This website may link to third-party sites. We are not responsible for the content, privacy practices, or availability of those sites. Accessing third-party links is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">6. Disclaimer</h2>
              <p>
                This website is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We do not guarantee that the site will be uninterrupted, error-free, or free of harmful components.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, {BRAND.name} shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">8. Governing Law</h2>
              <p>
                These terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE, unless otherwise required by mandatory local law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">9. Changes</h2>
              <p>
                We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[var(--color-cream)] uppercase mb-3">10. Contact</h2>
              <p>
                Questions about these terms:{' '}
                <a href={`mailto:${BRAND.email}`} className="text-[#0000FF] hover:text-blue-link transition-colors duration-200">
                  {BRAND.email}
                </a>
                . See also our{' '}
                <Link href="/privacy" className="text-[#0000FF] hover:text-blue-link transition-colors duration-200">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
