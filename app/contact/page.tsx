import type { Metadata } from 'next';
import { offices } from '@/lib/data/clients';
import { ContactForm } from '@/components/forms/ContactForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact — Start a Project',
  description:
    'Get in touch with our team in Dubai, Riyadh, Cairo, Nairobi, or Casablanca. We respond within one business day.',
  alternates: { canonical: 'https://agence-emea.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-44 pb-24 border-b border-black/[0.05]">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-4 h-px bg-[#0000FF]" />
              <span className="font-body font-light uppercase text-[var(--color-cream)]/40"
                style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                Get in Touch
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="font-display font-semibold uppercase text-[var(--color-cream)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.025em' }}>
              Let&apos;s Start a<br />
              <span style={{ WebkitTextStroke: '1px rgba(17,17,17,0.4)', color: 'transparent' }}>
                Conversation.
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 font-body font-light text-[var(--color-cream)]/45 max-w-lg leading-relaxed"
              style={{ fontSize: '1.06rem' }}>
              Tell us about your project. We will match you with the right team in the nearest office and respond within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + offices */}
      <section className="bg-[#F5F5F5] py-24 border-b border-black/[0.05]">
        <div className="container-site grid grid-cols-1 lg:grid-cols-3 gap-20 xl:gap-28">
          {/* Form */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Offices sidebar */}
          <aside>
            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-4 h-px bg-[#0000FF]" />
                <span className="font-body font-light uppercase text-[var(--color-cream)]/30"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.35em' }}>
                  Our Offices
                </span>
              </div>
              <div className="space-y-8">
                {offices.map((o) => (
                  <div key={o.city} className="border-l border-black/[0.08] hover:border-[#0000FF]/50 pl-5 transition-colors duration-300">
                    <p className="font-body font-light text-[var(--color-cream)]/80"
                      style={{ fontSize: '1rem' }}>
                      {o.city}, {o.country}
                    </p>
                    <p className="font-body font-light text-[var(--color-cream)]/35 mt-1 leading-relaxed"
                      style={{ fontSize: '0.86rem' }}>
                      {o.address}
                    </p>
                    <a href={`mailto:${o.email}`}
                      className="block font-body font-light text-[#0000FF]/60 hover:text-[#0000FF] mt-1.5 transition-colors duration-300"
                      style={{ fontSize: '0.86rem' }}>
                      {o.email}
                    </a>
                    <p className="font-body font-light text-[var(--color-cream)]/20 mt-1"
                      style={{ fontSize: '0.74rem', letterSpacing: '0.1em' }}>
                      {o.timezone}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </section>
    </>
  );
}
