# 039. Readiness Layer Top-of-Stack Positioning

Date: 2026-01-30

## Status

Accepted

## Context

The website copy and structure implicitly positioned Śavvy AI as a training/education provider. Key problems:

1. **Partners page** read as "licensing training" rather than "licensing judgment + gating"
2. **AI Literate** was framed education-first with language like "teaches teams"
3. **"Two lanes. Same system."** could be misread as optional paths bypassing diagnostics
4. No explicit mention of a **readiness layer** that all candidates pass through

This collapsed Śavvy AI down the stack into execution enablement rather than establishing authority as the gatekeeper of who is ready.

## Decision

Install an explicit **Readiness Layer** as the top-of-stack concept across all relevant pages:

### Partners Page

- Add a new **READINESS** section as section 01 (before all other content)
- Reframe hero from "AI Literate Partnerships" to "License Judgment and Gating"
- Position partnerships as licensing control over the readiness layer

### AI Literate Page

- Change definition title from "teaches teams" to "produces lasting capability" (outcome, not instruction)
- Add single clarifying line: "Both lanes begin with the same readiness layer"
- Condition all delivery descriptions on readiness being confirmed first

### Homepage

- Condition AI Literate system card with "after readiness is confirmed"
- Add audience self-selection anchor
- Add CTA micro-copy explaining the audit scope
- Add downstream authority bridge linking to /literate

### Language Patterns

**Remove:** bootcamp, curriculum, training-first language, "teach/learn"
**Replace with:** readiness, evaluation, signal, decision quality, placement intelligence

## Consequences

**Positive:**

- Clear stack position: Śavvy AI decides what happens next
- Training/execution is explicitly conditional and downstream
- Partners understand they license judgment + gating, not just content
- Higher quality inbound (self-selection through explicit audience targeting)
- Fewer clarification emails about what the audit includes

**Negative:**

- Some visitors may initially be confused about what "readiness layer" means (acceptable - those who need clarification should be in a conversation)
- Copy is more abstract than before (intentional - specifics belong in partner conversations)

## Alternatives Considered

1. **Keep education-first framing, add readiness as secondary**: Rejected - maintains gravity well into training category
2. **Create separate readiness product page**: Rejected - adds complexity, readiness is a layer not a product
3. **Integrate readiness by rewording existing sections only**: Rejected - partners scan for authority; a distinct section establishes stack position immediately

## Related

- ADR 036: Homepage Page Boundary Enforcement
- ADR 038: Flagship System Status Tier
- Planning: `.plan/.done/feat-readiness-layer-reframe-partnered/`
