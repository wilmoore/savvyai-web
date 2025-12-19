# 015. Dual Typography System (Inter + Geist Mono)

Date: 2025-12-19

## Status

Accepted

## Context

The original design used Inter exclusively for all typography (ADR-009). While Inter is excellent for readability, the Executive Dark Mode aesthetic called for additional typographic distinction—particularly for metadata, labels, and interface elements that should feel more "technical" or "protocol-like."

The design philosophy differentiated between:

- **The Voice** - Primary content that speaks to the reader (headings, body copy)
- **The Interface** - Metadata and labels that orient the reader (section labels, step numbers, tags)

## Decision

Implement a dual typography system:

**Inter (Primary - "The Voice"):**

- All headings (H1-H4)
- Body text and paragraphs
- CTAs and button text
- Tight tracking (`letter-spacing: -0.02em`)

**Geist Mono (Secondary - "The Interface"):**

- Section labels (e.g., "THE CHALLENGE", "OUR APPROACH")
- Step numbers and phase names
- Metadata tags
- Uppercase with wide tracking (`letter-spacing: 0.05em`)
- Applied sparingly at small sizes (`text-xs`, `text-sm`)

**Implementation:**

```tsx
// app/layout.tsx
import { GeistMono } from 'geist/font/mono';

<body className={`${inter.variable} ${geistMono.variable}`}>
```

**Usage Pattern:**

```tsx
// SectionLabel component
<span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">{children}</span>
```

## Consequences

**Positive:**

- Clear visual distinction between content and interface
- Monospace adds technical credibility for AI consulting
- Creates rhythm and visual interest without illustration
- Geist Mono pairs well with Inter (both are modern geometric fonts)

**Negative:**

- Additional font download (~15KB for Geist Mono)
- Requires discipline to use mono sparingly
- Team must learn when to use each font

## Alternatives Considered

1. **Inter only with weight/case variations** - Tested but lacked distinctiveness
2. **JetBrains Mono** - Good but felt too "developer-oriented"
3. **IBM Plex Mono** - Considered but Geist Mono has better Next.js integration

## Related

- Extends: ADR-009 (Four-Tier Typography Hierarchy)
- Planning: `.plan/.done/design-executive-dark-mode-reskin/`
