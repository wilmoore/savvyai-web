# 025. Visual Inventory SVG Illustrations

Date: 2025-12-19

## Status

Accepted

## Context

The Artifacts section ([ 06 / ARTIFACTS ]) listed workshop deliverables in text form but lacked visual differentiation between artifact types. High-end consulting firms and design studios often use visual "inventory" cards to showcase deliverables with mini-UI mockups.

The requirement specified three artifact types:

1. Retail SOP Blueprint (checklist-style document)
2. Engineering Workflow (node diagram)
3. AI Prompt Library (code block)

## Decision

Create inline SVG components that render decorative mini-UI illustrations for each artifact type:

**Components:**

- `ChecklistUI`: Simulates a checklist document with checkmarks and progress bar
- `NodeDiagramUI`: Simulates a workflow diagram with connected nodes
- `CodeBlockUI`: Simulates a code editor with syntax highlighting

**Design constraints:**

- Size: 120x100px viewBox
- Colors: Monochrome using Tailwind classes (`fill-black/5`, `fill-emerald-500/20`, etc.)
- Style: Rounded corners (rx="6"), subtle opacity variations
- Accessibility: `aria-hidden="true"` since decorative

**Integration:**

- Wrapped in `ArtifactCard` component with title/description
- i18n keys for all text content
- 3-column responsive grid layout

## Consequences

**Positive:**

- Visual differentiation of artifact types at a glance
- No external image dependencies (inline SVG)
- Tailwind classes enable theme consistency
- Lightweight (no raster images or icon library bloat)

**Negative:**

- SVG markup adds ~150 lines to component file
- Manual maintenance if design system colors change
- Not easily editable by non-developers (unlike Figma exports)

## Alternatives Considered

1. **Icon library (Lucide/Heroicons)**: Use existing icons
   - Rejected: Available icons too generic, don't convey specific artifact types

2. **Figma exports**: Export SVGs from design tool
   - Rejected: Adds asset management overhead, harder to use Tailwind classes

3. **Placeholder images**: Use stock illustrations
   - Rejected: Style inconsistency, licensing concerns, larger file size

4. **Text-only cards**: Just title and description
   - Rejected: Doesn't meet "Visual Inventory" requirement

## Related

- Planning: `.plan/.done/fix-alignment-drift-brand-authority/`
- ADR: `019-editorial-paper-ink-theme.md` (establishes color system)
