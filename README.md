# Verity — Trusted Business Gateway

A premium, search-first website for Verity, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production build has already been verified with `npm run build`.

## What's here

- `/` — Home: hero search experience, Find → Trust → Connect journey, For Businesses teaser
- `/search` — Full verified business directory with category filters
- `/for-businesses` — Benefits, verification journey, and application form
- `/contact` — Support form (accepts `?invite=BusinessName` to prefill an invite message)
- `/resources` — Help Center with FAQ accordion

## Data

`lib/data.ts` holds demo directory data (businesses, categories, FAQs) so the search experience is fully interactive out of the box. Replace this with real API calls to Verity's verification backend when ready — the search, filter, and form logic are already isolated so this is a drop-in swap.

## Forms

The application and contact forms currently simulate submission client-side (see the `TODO` comments in `app/for-businesses/page.tsx` and `app/contact/page.tsx`). Wire these to your backend, CRM, or an email service (e.g. Resend, Formspree) before going live.

## Brand

- Colors, type scale, and spacing live in `tailwind.config.ts`
- Fonts are self-hosted via `@fontsource` (Inter for UI, Manrope for display, IBM Plex Mono for small labels/IDs) — no external font requests at runtime
- The logo mark is cropped from the provided brand asset at `public/logo-icon.png` (icon) and `public/logo-full.png` (full lockup)
