'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { clients } from '@/lib/data/clients';

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="font-body font-light uppercase text-ink-meta hover:text-ink-body transition-colors duration-400"
        style={{ fontSize: '0.78rem', letterSpacing: '0.28em' }}
      >
        {name}
      </span>
    );
  }

  return (
    <Image
      src={logo}
      alt={name}
      width={120}
      height={40}
      className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-400 grayscale hover:grayscale-0"
      onError={() => setFailed(true)}
    />
  );
}

export function ClientLogos() {
  return (
    <section className="bg-[#F0F0F0] py-24 border-y border-black/[0.05]" aria-label="Our clients">
      <div className="container-site">
        <ScrollReveal>
          <p
            className="text-center font-body font-light uppercase text-ink-meta mb-12"
            style={{ fontSize: '0.72rem', letterSpacing: '0.38em' }}
          >
            Trusted across MEA
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((client, i) => (
            <ScrollReveal key={client.name} delay={Math.min(i * 0.04, 0.25)}>
              <ClientLogo name={client.name} logo={client.logo} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
