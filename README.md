# Agence EMEA — Website

Production-grade marketing website for a premium digital agency operating across the Middle East and Africa.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for scroll animations
- **next/font** for self-hosted Google Fonts (Barlow Condensed + Inter)
- **next/image** for responsive, optimised images
- Static generation (SSG) on all pages; zero client-side-only primary content

---

## Quick Start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve production build
```

---

## Project Structure

```
app/                    Next.js App Router routes
  layout.tsx            Root layout — fonts, metadata, JSON-LD, Header/Footer
  page.tsx              Homepage
  services/
    page.tsx            Services index
    [slug]/page.tsx     Individual service detail
  work/
    page.tsx            Work/portfolio grid
    [slug]/page.tsx     Case study detail
  about/page.tsx
  insights/
    page.tsx            Article index
    [slug]/page.tsx     Article detail
  contact/page.tsx
  privacy/page.tsx
  sitemap.ts            Auto-generated XML sitemap
  robots.ts             robots.txt
  actions/contact.ts    Server action for contact form

components/
  layout/               Header, Footer, NavigationMenu
  sections/             Homepage section components
  ui/                   Button, ScrollReveal, Tag
  forms/                ContactForm
  seo/                  JsonLd structured data

lib/
  types/index.ts        All shared TypeScript interfaces
  data/                 services.ts, work.ts, insights.ts, team.ts, clients.ts
  utils.ts              cn(), formatDate(), slugify()
```

---

## How to Swap Images

All images currently use **Unsplash URLs** via `next/image`. To replace with real assets:

1. Add your images to `public/images/`
2. Update the `src` props in the relevant data files:
   - `lib/data/services.ts` — service page images
   - `lib/data/work.ts` — case study cover + detail images
   - `lib/data/insights.ts` — article cover images
   - `lib/data/team.ts` — team member portraits
3. Update hero image in `components/sections/Hero.tsx`
4. Remove the `images.remotePatterns` entry for `images.unsplash.com` from `next.config.ts` once no Unsplash URLs remain

---

## Adding a Case Study

1. Open `lib/data/work.ts`
2. Add a new object to the `caseStudies` array following the `CaseStudy` interface in `lib/types/index.ts`
3. Set `featured: true` to include it in the homepage grid (shows first 3 featured)
4. The slug becomes the URL: `/work/your-slug`

---

## Adding a Blog/Insights Article

1. Open `lib/data/insights.ts`
2. Add a new object to the `articles` array following the `Article` interface
3. The slug becomes the URL: `/insights/your-slug`
4. Update `content` (currently uses a placeholder body) for full article text

For a CMS-powered approach, replace the `articles` array with a Sanity or Contentful fetch. The page components are already async and SSG-ready.

---

## Adding a Service

1. Open `lib/data/services.ts`
2. Add an entry following the `Service` interface
3. The slug becomes the URL: `/services/your-slug`
4. Update `components/layout/Footer.tsx` if you want it in the footer nav

---

## Customising the Design

All design tokens live in two places:

- `tailwind.config.ts` — colours, fonts, font sizes, animations
- `app/globals.css` — CSS variables, base resets, utility classes

Key values:
- Accent blue: `#0000FF` (also `bg-[#0000FF]`, `text-[#0000FF]` in Tailwind)
- Display font: Barlow Condensed (variable: `--font-barlow-condensed`)
- Body font: Inter (variable: `--font-inter`)

---

## Contact Form

The form at `/contact` uses a **Next.js Server Action** (`app/actions/contact.ts`). Currently it logs submissions to the console.

To wire it to an email provider:

```ts
// app/actions/contact.ts
import { Resend } from 'resend'; // or @sendgrid/mail, nodemailer, etc.

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'website@agence-emea.com',
  to: 'hello@agence-emea.com',
  subject: `New enquiry from ${name}`,
  text: message,
});
```

Add your API key to `.env.local` — never in client code.

---

## SEO

- **Per-page metadata**: each route exports `generateMetadata()` or a static `metadata` object
- **JSON-LD**: Organization + WebSite schemas in the root layout; extend with `Service` or `Article` schemas on detail pages using `<JsonLd data={...} />` from `components/seo/JsonLd.tsx`
- **Sitemap**: auto-generated at `/sitemap.xml` via `app/sitemap.ts`
- **robots.txt**: auto-generated via `app/robots.ts`
- **OG image**: replace `/public/og-default.jpg` with a real 1200×630 image, or generate dynamically with `next/og`

---

## i18n Readiness

The codebase is structured for future Arabic/French localisation:

- `<html lang="en" dir="ltr">` in `app/layout.tsx` — change both for RTL
- All content is in `lib/data/` — replace with locale-keyed objects or CMS content
- No hardcoded UI strings in components; all come from data files or props

---

## Deployment (Vercel)

```bash
npx vercel          # or push to GitHub and connect via vercel.com
```

Set environment variables in the Vercel dashboard:
- `RESEND_API_KEY` (or equivalent) for the contact form

Recommended Vercel settings: Framework = Next.js, Node = 20.x, region closest to Dubai (eu-central-1 or me-south-1).
