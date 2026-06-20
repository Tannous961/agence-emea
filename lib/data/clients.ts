import type { Client, Office, Testimonial } from '@/lib/types';

export const clients: Client[] = [
  { name: 'Aldar Properties', logo: '/logos/aldar.svg' },
  { name: 'Majid Al Futtaim', logo: '/logos/maf.svg' },
  { name: 'Ooredoo', logo: '/logos/ooredoo.svg' },
  { name: 'Arab Bank', logo: '/logos/arabbank.svg' },
  { name: 'Jumia', logo: '/logos/jumia.svg' },
  { name: 'Emirates NBD', logo: '/logos/emiratesnbd.svg' },
  { name: 'Safaricom', logo: '/logos/safaricom.svg' },
  { name: 'OCP Group', logo: '/logos/ocp.svg' },
  { name: 'Etisalat', logo: '/logos/etisalat.svg' },
  { name: 'Flutterwave', logo: '/logos/flutterwave.svg' },
];

export const offices: Office[] = [
  {
    city: 'Beirut',
    country: 'Lebanon',
    address: 'Beirut Digital District, Beirut, Lebanon',
    phone: '+961 1 234 5678',
    email: 'beirut@agence-emea.com',
    timezone: 'EET (UTC+2)',
    markets: ['Lebanon', 'Jordan', 'Levant'],
  },
  {
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Victoria Island, Lagos, Nigeria',
    phone: '+234 1 765 4321',
    email: 'lagos@agence-emea.com',
    timezone: 'WAT (UTC+1)',
    markets: ['Nigeria', 'West Africa'],
  },
  {
    city: 'Dubai',
    country: 'UAE',
    address: 'Dubai Design District, Building 7, Dubai, UAE',
    phone: '+971 4 567 8900',
    email: 'dubai@agence-emea.com',
    timezone: 'GST (UTC+4)',
    markets: ['UAE', 'Qatar', 'Bahrain', 'Kuwait', 'Oman'],
  },
  {
    city: 'Riyadh',
    country: 'Saudi Arabia',
    address: 'King Abdullah Financial District, Tower B, Riyadh',
    phone: '+966 11 234 5678',
    email: 'riyadh@agence-emea.com',
    timezone: 'AST (UTC+3)',
    markets: ['Saudi Arabia', 'GCC'],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'B&B Agency did not just build us a website — they gave us a brand we are genuinely proud of. The rigour of their process and the beauty of the output are unlike anything we had encountered in the region.',
    author: 'Fatima Al-Sayed',
    role: 'Chief Marketing Officer',
    company: 'Souk & Co.',
  },
  {
    quote:
      'From the first briefing to launch, the team demonstrated a rare combination of strategic clarity and technical excellence. Our platform now processes four times the volume with greater reliability than before.',
    author: 'Mohammed Al-Otaibi',
    role: 'Chief Digital Officer',
    company: 'Majd Logistics',
  },
  {
    quote:
      'Working with a partner who genuinely understands the African market — the infrastructure constraints, the cultural nuances, the user behaviours — made all the difference. The results speak for themselves.',
    author: 'Amara Diallo',
    role: 'Co-Founder & CEO',
    company: 'Pesa Flow',
  },
];
