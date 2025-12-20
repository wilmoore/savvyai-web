# 028. External Redirect Routes for Sharing

Date: 2024-12-19

## Status

Accepted

## Context

Workshop registration is handled externally via Luma. The site needed short, memorable URLs for:

- QR codes on physical materials
- Verbal sharing in conversations
- Social media bios

These URLs should be internal routes that redirect externally, avoiding:

- Exposing long Luma URLs in printed materials
- Breaking links if the Luma event URL changes
- Requiring users to navigate through the site to register

## Decision

Configure Next.js redirects for short paths that go directly to Luma:

```javascript
// next.config.mjs
async redirects() {
  return [
    { source: '/workshop', destination: 'https://lu.ma/savvy-ai-literate', permanent: false },
    { source: '/register', destination: 'https://lu.ma/savvy-ai-literate', permanent: false },
  ];
}
```

**Key decisions:**

1. Use 302 (temporary) redirects to allow changing destination without cache issues
2. These routes are NOT linked anywhere in the site UI
3. Detail page (`/workshops/ai-literate`) links directly to Luma, not through redirect
4. Redirect destination can be updated in one place if Luma URL changes

## Consequences

**Positive:**

- Short, memorable URLs for external sharing
- Single point of configuration for destination changes
- Works for QR codes, verbal sharing, and marketing materials
- 302 redirect prevents browser caching of destination

**Negative:**

- Routes exist but aren't discoverable in UI (intentional)
- Requires documentation for team awareness
- Extra redirect hop for users coming from these URLs

## Alternatives Considered

1. **Link shortener (bit.ly, etc.)**: Adds external dependency, loses brand consistency
2. **Custom middleware**: More complex than needed for simple redirects
3. **Client-side redirect page**: Slower, shows flash of content

## Related

- Planning: `.plan/.done/feature-editorial-noir-workshop-first/`
- Configuration: `next.config.mjs`
