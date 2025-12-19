# 002. Migrate from Vite to Next.js

Date: 2025-12-18

## Status

Accepted

## Context

The site was built with Vite + React Router as a client-side rendered SPA. This worked for initial development but presented limitations:

1. **SEO**: Client-side rendering provides no server-rendered HTML for search engine crawlers
2. **Performance**: No static generation or server-side rendering capabilities
3. **Lead magnet pages**: New landing pages (like `/resources/gpt-guide`) need proper SEO for discoverability
4. **Future scaling**: No built-in API routes, image optimization, or incremental static regeneration

The site is deployed on Vercel, which is built for Next.js and provides zero-config deployment.

## Decision

Migrate from Vite + React Router to Next.js 14 using the App Router.

### Migration approach:
1. Keep components in `src/components/` (compatible with both frameworks)
2. Create `app/` directory for Next.js routing
3. Add `"use client"` directives to interactive components
4. Remove React Router in favor of file-based routing

## Consequences

### Positive
- Server-side rendering and static generation available for all pages
- Better SEO out of the box with metadata API
- File-based routing reduces boilerplate
- Vercel deployment is optimized for Next.js
- Built-in image optimization, code splitting, and prefetching
- API routes available if needed

### Negative
- Required adding `"use client"` to 10+ components
- Increased bundle size for first load (~87KB shared JS)
- Team needs familiarity with App Router patterns
- Some patterns differ from traditional React (server vs client components)

## Alternatives Considered

### 1. Stay with Vite + add SSR plugin
- Rejected: More complex setup, less ecosystem support than Next.js

### 2. Use Astro
- Rejected: Would require rewriting components, React integration less seamless

### 3. Use Remix
- Rejected: Vercel deployment better optimized for Next.js, similar capabilities

## Related

- Planning: `.plan/.done/feature-nextjs-migration-and-gpt-guide/`
