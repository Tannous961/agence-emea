# B&B Agency — Website

Production-grade marketing website for **B&B Agency**, a premium digital agency operating across the Middle East and Africa. The site is served at [agence-emea.com](https://agence-emea.com).

## Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for scroll animations
- **next/font** for self-hosted Google Fonts (Barlow Condensed + Inter)
- **next/image** for responsive, optimised images
- **Resend** for contact form email delivery
- Static generation (SSG) on all pages; zero client-side-only primary content

---

## Quick Start

```bash
npm install
cp .env.example .env.local   # then fill in your keys
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
  constants/brand.ts    BRAND name, domain, emails
  types/index.ts        All shared TypeScript interfaces
  data/                 services.ts, work.ts, insights.ts, team.ts, clients.ts
  email/                send-contact-email.ts (Resend)
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

Client logos live in `public/logos/` and are listed in `lib/data/clients.ts`.

---

## Adding a Case Study

1. Open `lib/data/work.ts`
2. Add a new object to the `caseStudies` array following the `CaseStudy` interface in `lib/types/index.ts`
3. Set `featured: true` to mark it as featured in data (used by `getFeaturedWork()`)
4. The slug becomes the URL: `/work/your-slug`

---

## Adding a Blog/Insights Article

1. Add metadata to `articlesBase` in `lib/data/insights.ts`
2. Add the full article body to `lib/data/insights-content.ts` (keyed by slug)
3. The slug becomes the URL: `/insights/your-slug`

For a CMS-powered approach, replace the data files with a Sanity or Contentful fetch. The page components are already async and SSG-ready.

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

Brand constants (`name`, `domain`, `emails`) are centralised in `lib/constants/brand.ts`.

---

## Contact Form

The form at `/contact` uses a **Next.js Server Action** (`app/actions/contact.ts`) and sends email via **Resend** (`lib/email/send-contact-email.ts`).

Required environment variables:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=hello@agence-emea.com
RESEND_FROM=B&B Agency <noreply@agence-emea.com>
```

In development, if `RESEND_API_KEY` is not set, submissions are logged to the console instead of sent. In production, a missing key returns an error to the user.

The form includes a honeypot field for basic spam protection.

---

## SEO

- **Per-page metadata**: each route exports `generateMetadata()` or a static `metadata` object
- **JSON-LD**: Organization + WebSite schemas in the root layout; extend with `Service` or `Article` schemas on detail pages using `<JsonLd data={...} />` from `components/seo/JsonLd.tsx`
- **Sitemap**: auto-generated at `/sitemap.xml` via `app/sitemap.ts`
- **robots.txt**: auto-generated via `app/robots.ts`
- **OG image**: auto-generated at build time via `app/opengraph-image.tsx` (1200×630); customise the template or replace with a static asset in `public/`

---

## i18n Readiness

The codebase is structured for future Arabic/French localisation:

- `<html lang="en" dir="ltr">` in `app/layout.tsx` — change both for RTL
- All content is in `lib/data/` — replace with locale-keyed objects or CMS content
- No hardcoded UI strings in components; all come from data files or props

---

## Launch Checklist

Technical work on `main` is largely complete. Before going live, finish these items:

### Required for production

- [ ] Set `RESEND_API_KEY`, `RESEND_FROM`, and `CONTACT_EMAIL` in Vercel (or your host)
- [ ] Verify the contact form sends email end-to-end on the production domain
- [ ] Replace Unsplash URLs with real photography in `lib/data/` and section components
- [ ] Update case studies in `lib/data/work.ts` with authentic client work (or remove placeholders)
- [ ] Update team bios and portraits in `lib/data/team.ts`
- [ ] Add real social profile URLs in `components/layout/Footer.tsx`
- [ ] Confirm legal copy on `/privacy` and `/terms` with counsel

### Branding notes

- **Display name:** B&B Agency (`lib/constants/brand.ts`)
- **Alternate name / domain:** Agence EMEA → `agence-emea.com`
- **Package name:** `bb-agency` (npm); GitHub repo may still be named `agence-emea`

### Optional post-launch

- [ ] Arabic and French localisation (`app/[locale]/`)
- [ ] CMS for insights and work (Sanity, Contentful)
- [ ] CAPTCHA / rate limiting on the contact form

---

## Deployment (Vercel)

```bash
npx vercel          # or push to GitHub and connect via vercel.com
```

Set environment variables in the Vercel dashboard:

- `RESEND_API_KEY` — required for contact form in production
- `CONTACT_EMAIL` — inbox for enquiries (defaults to `hello@agence-emea.com`)
- `RESEND_FROM` — verified sender address in Resend
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional; Google Analytics loads only after cookie consent

Recommended Vercel settings: Framework = Next.js, Node = 20.x, region closest to Dubai (eu-central-1 or me-south-1).
