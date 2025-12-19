# Known Issues

Issues identified during implementation that should be addressed in subsequent efforts.

## Out of Scope (Intentional)

### 1. Contact Form Backend

- **Location:** `src/components/marketing/BookingForm.tsx`
- **Issue:** Form submission is a placeholder with simulated delay
- **TODO Comment:** Line 32 - "TODO: Add backend wiring for form submission"
- **Next Steps:** Wire up to Airtable, email service, or API endpoint

### 2. metadataBase Warning

- **Issue:** Build warnings about metadataBase not being set for OG images
- **Impact:** Minor - affects social sharing preview URL resolution
- **Next Steps:** Add `metadataBase: new URL('https://savvyai.com')` to layout.tsx metadata

## Minor Improvements (Future)

### 1. Logo Asset

- The logomark.png may need a light-theme variant
- Current logo may not be optimized for white backgrounds

### 2. Mobile Navigation

- Current header is minimal; may want hamburger menu for more nav items later

### 3. Page-Specific Metadata

- Protocol page could have its own metadata for better SEO
- Consider adding page-specific titles and descriptions
