import { ScrollReveal } from '@/components/ui/ScrollReveal';

const clientNames = [
  'Aldar Properties', 'Majid Al Futtaim', 'Ooredoo', 'Arab Bank', 'Jumia',
  'Emirates NBD', 'Safaricom', 'OCP Group', 'Etisalat', 'Flutterwave',
];

export function ClientLogos() {
  return (
    <section className="bg-[#F0F0F0] py-24 border-y border-black/[0.05]" aria-label="Our clients">
      <div className="container-site">
        <ScrollReveal>
          <p
            className="text-center font-body font-light uppercase text-[var(--color-cream)]/25 mb-12"
            style={{ fontSize: '0.72rem', letterSpacing: '0.38em' }}
          >
            Trusted across MEA
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clientNames.map((name, i) => (
            <ScrollReveal key={name} delay={Math.min(i * 0.04, 0.25)}>
              <span
                className="font-body font-light uppercase text-[var(--color-cream)]/20 hover:text-[var(--color-cream)]/50 transition-colors duration-400"
                style={{ fontSize: '0.78rem', letterSpacing: '0.28em' }}
              >
                {name}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
