# Plan: Remove Book Links from Navigation

## Summary
Remove all functional book links from the website while preserving the visual book graphic in the Hero section.

## Scope
- **Removed**: "Book" link from header navigation
- **Removed**: "Read AI Literate" CTA button from Hero section (replaced with "Start Your Project" button that scrolls to contact)
- **Kept**: Visual book graphic in Hero section (decorative only)
- **Cleaned up**: BOOK constant from constants.ts

## Files Modified

### 1. `src/components/Header.tsx`
- Removed `EXTERNAL_LINKS` import
- Removed the `<a>` element linking to book from navigation

### 2. `src/components/Hero.tsx`
- Removed `EXTERNAL_LINKS` import
- Replaced "Read AI Literate" book button with "Start Your Project" button
- Consolidated from 2 CTA buttons to 1, keeping the magnetic hover effect

### 3. `src/lib/constants.ts`
- Removed `BOOK: 'https://book.savvyai.dev'` line from EXTERNAL_LINKS
- Kept EXTERNAL_LINKS export structure for future external links

## Verification
- [x] Build succeeds without errors
- [x] Navigation shows only: Services, About, Contact
- [x] Hero section shows single "Start Your Project" button
- [x] Book visual graphic preserved

## Branch
`fix/remove-book-navigation-links`

## Related ADRs
- [001. Remove book links from navigation](../../../doc/decisions/001-remove-book-links-from-navigation.md)
