import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd, organizationSchema, websiteSchema } from '@/components/seo/JsonLd';
import { CustomCursor } from '@/components/ui/CustomCursor';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agence-emea.com'),
  title: {
    default: 'Agence EMEA — Premium Digital Agency for the Middle East & Africa',
    template: '%s | Agence EMEA',
  },
  description:
    'A premium digital agency serving ambitious brands across the Middle East and Africa. Brand strategy, web development, mobile apps, AI and digital marketing.',
  keywords: [
    'digital agency Middle East',
    'digital agency Africa',
    'web design Dubai',
    'brand strategy MEA',
    'mobile app development MENA',
    'digital marketing Saudi Arabia',
    'AI automation UAE',
    'premium agency GCC',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agence-emea.com',
    siteName: 'Agence EMEA',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@agenceemea',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://agence-emea.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${barlowCondensed.variable} ${inter.variable}`}
    >
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <CustomCursor />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
