# 018. Tiered Label System

Date: 2025-12-19

## Status

Accepted

## Context

The previous design used uppercase monospace labels (via SectionLabel) for all section headings (ADR-015). While this created visual consistency, the heavy monospace treatment:

- Made the site feel more "tech/code" oriented than workshop-oriented
- Created unnecessary visual weight at every section start
- Didn't differentiate between contextual labels and key workshop artifacts

Workshop programs need clear visual distinction between:

- General section labels (contextual guidance)
- Key deliverables/artifacts (outputs that clients care about)

## Decision

We implemented a two-tier label system:

### 1. BandLabel (General Section Labels)

- **Font**: Inter (humanist sans-serif)
- **Case**: Sentence case ("The Challenge", "Our Belief")
- **Color**: text-gray-500
- **Weight**: font-medium
- **Purpose**: Contextual orientation for readers

### 2. ArtifactLabel (Workshop Artifacts)

- **Font**: Geist Mono (monospace)
- **Case**: UPPERCASE with wide tracking
- **Color**: text-emerald-600
- **Reserved words only**: WORKSHOP, OUTPUT, ARTIFACT, DELIVERABLE
- **Purpose**: Signal key tangible outcomes

This creates a visual hierarchy where mono labels "pop" precisely because they're rare.

## Consequences

**Positive:**

- Mono labels now have semantic meaning (artifacts/deliverables)
- General labels feel approachable and human
- Clear visual distinction between contextual guidance and key outputs
- Emerald color on artifacts reinforces "outcome" association
- Reduced visual weight overall

**Negative:**

- Requires discipline to only use ArtifactLabel for true artifacts
- Slight increase in component complexity (two label types)

## Alternatives Considered

1. **All sentence case labels**: Rejected because artifacts lose visual distinction.

2. **All uppercase mono labels**: Status quo, rejected for being too tech-heavy.

3. **Color differentiation only**: Rejected because color alone doesn't create sufficient visual hierarchy.

## Related

- Modifies: ADR-015 (Dual Typography System)
- Planning: `.plan/.done/design-workshop-authority-grammar/`
