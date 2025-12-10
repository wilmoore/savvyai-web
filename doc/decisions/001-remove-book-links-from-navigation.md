# 001. Remove book links from navigation

Date: 2025-12-10

## Status

Accepted

## Context

The website had a "Book" link in the header navigation and a "Read AI Literate" CTA button in the Hero section, both linking to `https://book.savvyai.dev`. The decision was made to remove these functional links while preserving the decorative book visual graphic in the Hero section.

## Decision

Remove all functional book links from the website:

1. Remove the "Book" anchor element from header navigation
2. Replace the "Read AI Literate" CTA button with a "Start Your Project" button that scrolls to the contact section
3. Remove the unused `BOOK` constant from `constants.ts`
4. Preserve the decorative "AI Literate" book cover visual in the Hero section

## Consequences

**Positive:**
- Simplified navigation with fewer external links
- Hero section now has a single, focused CTA directing users to contact
- Cleaner codebase with no orphaned constants

**Negative:**
- Users can no longer directly access the book from the website navigation
- The decorative book visual may seem disconnected without a functional link

## Alternatives Considered

1. **Remove everything including the visual** - Rejected because the visual adds aesthetic value to the Hero section
2. **Keep the navigation link only** - Rejected as the goal was to remove book promotion entirely
3. **Replace book link with different content** - The "Start Your Project" CTA serves as a better conversion-focused replacement

## Related

- Planning: `.plan/.done/fix-remove-book-navigation-links/`
