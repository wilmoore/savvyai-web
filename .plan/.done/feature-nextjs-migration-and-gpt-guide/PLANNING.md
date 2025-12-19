# Feature: Next.js Migration + GPT Guide Landing Page

## Overview
Migrated the site from Vite + React Router to Next.js 14, then built the GPT Guide landing page with proper SSR/SEO support.

## Branch
`feature/nextjs-migration-and-gpt-guide`

## Status: COMPLETED

---

## Completed Work

### Phase 1: Next.js Migration

#### Files Created
- `app/layout.tsx` - Root layout with metadata and providers
- `app/page.tsx` - Home page (client component)
- `app/not-found.tsx` - 404 page
- `app/providers.tsx` - Client-side providers (QueryClient, Toaster, Tooltip)
- `app/globals.css` - Global styles (moved from src/index.css)
- `next.config.js` - Next.js configuration
- `postcss.config.js` - Updated to CommonJS format

#### Files Modified
- `package.json` - Updated scripts, name, removed Vite deps
- `tsconfig.json` - Updated for Next.js
- `tailwind.config.ts` - Converted require() to ES import
- `src/components/Header.tsx` - Added "use client"
- `src/components/Hero.tsx` - Added "use client"
- `src/components/Contact.tsx` - Added "use client"
- `src/components/ui/button.tsx` - Added "use client"
- `src/components/ui/input.tsx` - Added "use client"
- `src/components/ui/textarea.tsx` - Added "use client"
- `src/components/ui/toast.tsx` - Added "use client"
- `src/components/ui/toaster.tsx` - Added "use client"
- `src/components/ui/sonner.tsx` - Added "use client"
- `src/components/ui/tooltip.tsx` - Added "use client"

#### Files Removed
- `src/main.tsx` - Vite entry point
- `src/App.tsx` - React Router setup
- `src/index.css` - Moved to app/globals.css
- `src/pages/` - Old pages directory
- `vite.config.ts`
- `index.html`
- `tsconfig.app.json`
- `tsconfig.node.json`

#### Dependencies Removed
- `react-router-dom`
- `@vitejs/plugin-react-swc`
- `eslint-plugin-react-refresh`
- `lovable-tagger`
- `vite`

### Phase 2: GPT Guide Landing Page

#### Route
`/resources/gpt-guide`

#### Files Created
- `app/resources/gpt-guide/page.tsx` - Landing page with 7 sections
- `app/resources/gpt-guide/layout.tsx` - SEO metadata
- `src/components/MinimalHeader.tsx` - Reusable minimal header

#### Features
- Minimal dark theme (no gradients/glows)
- Mobile-first responsive design
- Email capture form with placeholder action
- SEO metadata for social sharing
- Direct, opinionated copy (no hype, no emojis)

#### Page Structure
1. Hero Section - Headline, hook, email capture
2. The Problem - Bullet list of friction points
3. The Reframe - Context containers and decision systems
4. What the Guide Covers - 5 numbered topics
5. Who This Is For - Explicit qualification/disqualification
6. CTA Section - Final email capture
7. Minimal Footer - Link to main site

---

## Build Output

```
Route (app)                              Size     First Load JS
┌ ○ /                                    8.27 kB         104 kB
├ ○ /_not-found                          142 B          87.4 kB
└ ○ /resources/gpt-guide                 3.2 kB         99.2 kB
+ First Load JS shared by all            87.3 kB

○  (Static)  prerendered as static content
```

---

## Known Issues / Future Work

1. **Email form backend** - Currently uses placeholder action. Wire up to Supabase or email service.
2. **metadataBase warning** - Set metadataBase in root layout for production URL.
3. **Browserslist** - Run `npx update-browserslist-db@latest` to update.

---

## Definition of Done - ALL COMPLETED

### Migration
- [x] Site loads at `/` with all functionality intact
- [x] 404 page works
- [x] No console errors
- [x] Forms submit correctly (to existing Supabase endpoint)
- [x] Animations work (Hero, hover effects)
- [x] Mobile responsive

### Landing Page
- [x] Page loads at `/resources/gpt-guide`
- [x] All 7 sections implemented
- [x] Email form with placeholder action
- [x] SEO meta tags in place
- [x] Mobile responsive

### Cleanup
- [x] Vite config removed
- [x] react-router-dom removed
- [x] No dead code

---

## Related ADRs

- [002. Migrate from Vite to Next.js](../../doc/decisions/002-migrate-from-vite-to-nextjs.md)
- [003. Client Components for Interactive Pages](../../doc/decisions/003-client-components-for-interactive-pages.md)
