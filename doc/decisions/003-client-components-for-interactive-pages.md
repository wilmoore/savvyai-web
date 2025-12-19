# 003. Client Components for Interactive Pages

Date: 2025-12-18

## Status

Accepted

## Context

Next.js 14 App Router defaults to Server Components. The existing codebase has heavily interactive components:

- `Hero.tsx`: Mouse tracking, typewriter animation, useState/useEffect
- `Header.tsx`: DOM manipulation for scroll-to-section
- `Contact.tsx`: Form state, validation, submission handling
- Various UI components: Event handlers (onClick, onChange)

Server Components cannot use hooks, browser APIs, or handle events. Passing event handlers from server to client components causes runtime errors.

## Decision

Mark interactive components and pages with `"use client"` directive:

### Pages
- `app/page.tsx` - Home page (imports all interactive sections)
- `app/resources/gpt-guide/page.tsx` - Landing page with form

### Components
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/MinimalHeader.tsx`
- UI components: button, input, textarea, toast, toaster, sonner, tooltip

### Static components (no directive needed)
- `src/components/Services.tsx`
- `src/components/About.tsx`
- `src/components/Proof.tsx`
- `src/components/Footer.tsx`
- `app/not-found.tsx`

## Consequences

### Positive
- Components work without refactoring their internal logic
- Clear boundary between client and server code
- UI library components (shadcn/ui) function correctly
- Forms and animations work as expected

### Negative
- Client components don't benefit from server rendering of their content
- Slightly larger JavaScript bundles for client components
- Need to maintain awareness of client/server boundaries

### Mitigations
- Keep layout.tsx as server component for metadata
- Static pages (like not-found) remain server components
- Future pages can be server components if they don't need interactivity

## Alternatives Considered

### 1. Refactor to separate client/server parts
- Rejected: Would require significant rewrite of Hero, Contact components
- Trade-off: More code complexity for marginal bundle savings

### 2. Use Server Actions for forms
- Rejected: Current form submits to external Supabase endpoint
- Could revisit if adding Next.js API routes

## Related

- ADR-002: Migrate from Vite to Next.js
- Planning: `.plan/.done/feature-nextjs-migration-and-gpt-guide/`
