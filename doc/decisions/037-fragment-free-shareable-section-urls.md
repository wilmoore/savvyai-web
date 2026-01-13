# 037. Fragment-Free Shareable Section URLs

Date: 2026-01-13

## Status

Accepted

## Context

URLs with hash fragments (e.g., `/workshops#schedule`) have limitations for sharing:

1. Social platforms often strip hash fragments when generating previews
2. Hash fragments are hard to communicate verbally ("slash workshops hashtag schedule")
3. Pages with fragments share identical OG metadata with the base URL
4. Some link shorteners don't preserve fragments

The site needed clean, shareable URLs for specific page sections that work reliably across all platforms.

## Decision

Create dedicated route pages that render the same content as the parent page but auto-scroll to the target section on mount.

**Pattern:**

- `/workshops/schedule` instead of `/workshops#schedule`
- Server component exports unique metadata for social sharing
- Client component renders parent page and scrolls on mount

**Implementation:**

```tsx
// page.tsx (server component)
export const metadata = { title: 'Workshop Schedule | Śavvy AI', ... };
export default function Page() { return <ClientWrapper />; }

// ClientWrapper.tsx (client component)
useEffect(() => {
  document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
}, []);
return <ParentPage />;
```

## Consequences

**Positive:**

- Clean URLs that work everywhere
- Unique OG metadata per section
- Same UX as hash fragments (smooth scroll)
- SEO benefits from dedicated routes
- Easy to communicate verbally

**Negative:**

- Additional route files per shareable section
- Slight code duplication (minimal - just wrapper)
- Must keep parent page component exportable

## Alternatives Considered

1. **Keep hash fragments**: Simple but breaks on social platforms
2. **Server-side redirect to hash**: Loses unique metadata
3. **Query parameter with scroll**: Works but uglier URL (`?section=schedule`)

## Related

- ADR-028: External Redirect Routes for Sharing (related pattern for external URLs)
- Planning: `.plan/.done/feature-workshops-schedule-shareable-url/`
