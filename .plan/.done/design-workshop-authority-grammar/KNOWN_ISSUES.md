# Known Issues & Future Considerations

## Not Addressed in This Effort

### 1. ESLint Configuration

- ESLint prompts for initial configuration when running `pnpm lint`
- The project may need ESLint config setup for strict Next.js linting
- Build passes without lint (TypeScript compilation successful)

### 2. Metadata Base Warning

- Warning during build: `metadataBase property in metadata export is not set`
- Should set `metadataBase` in layout.tsx for proper Open Graph/Twitter images
- Non-blocking warning, does not affect functionality

### 3. Legacy Component Cleanup

- `SectionDark.tsx` in layout folder is now unused
- `SectionLabel.tsx` replaced by `BandLabel.tsx` but kept for compatibility
- `GlassCard` still exports from layout but styling updated for light mode
- Consider full cleanup in future iteration

### 4. Testing

- No E2E tests exist for visual verification
- Visual testing should be done manually in browser
- Consider adding Playwright visual regression tests

### 5. Warm Gray Color Reference

- `bg-warm-50` defined in Tailwind config but some components use `bg-white` directly
- Consider consolidating background color usage to CSS variables

## Design System Notes

### Reserved Mono Labels

Per Workshop Authority Grammar, mono uppercase labels (via `ArtifactLabel`) should ONLY be used for:

- WORKSHOP
- OUTPUT
- ARTIFACT
- DELIVERABLE

All other section labels should use `BandLabel` (sentence case, Inter font).

### Color Usage Guidelines

- Emerald (`#10B981`) - CTAs, checkmarks, outcome accents, numbered indicators
- White (`#FFFFFF`) - Primary backgrounds, cards
- Warm Gray (`#FAFAF8`) - Section band alternation
- Gray scale - Text hierarchy (900/700/600/500/400)
