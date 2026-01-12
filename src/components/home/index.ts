// Homepage section components
// Order matches the Editorial Paper & Ink "Zebra" rhythm
// Page Boundary Architecture (ADR-036):
// Homepage = Positioning + Routing ONLY
// Workshop mechanics live on /workshops

// — HERO (INK) - Positioning statement
export { default as Hero } from './Hero';

// 01 TRUST (INK) - System-level credibility
export { default as TrustBar } from './TrustBar';

// 02 SYSTEMS (PAPER) - System cards (AI Literate, Product Bakery, Onboarding)
export { default as SystemsOverview } from './SystemsOverview';

// 03 DIFFERENCE (INK) - Founder POV, why Śavvy AI is different
export { default as Difference } from './Difference';

// 04 ROUTING (PAPER) - Primary navigation CTAs
export { default as RoutingCTAs } from './RoutingCTAs';

// =============================================================================
// LEGACY COMPONENTS - Relocated to /workshops or removed
// Preserved for reference and potential reuse on /workshops page
// =============================================================================

// Relocated to /workshops
export { default as WhoThisIsFor } from './WhoThisIsFor';
export { default as OurWorkshops } from './OurWorkshops';
export { default as HowWeWork } from './HowWeWork';
export { default as WorkshopsExplained } from './WorkshopsExplained';
export { default as WorkshopOutcomes } from './WorkshopOutcomes';
export { default as Protocol } from './Protocol';
export { default as Pilot24 } from './Pilot24';
export { default as Safety } from './Safety';
export { default as HomeFAQ } from './HomeFAQ';
export { default as Audience } from './Audience';
export { default as StartCTA } from './StartCTA';
export { default as StatsGrid } from './StatsGrid';

// Legacy components (not used)
export { default as Problem } from './Problem';
export { default as Belief } from './Belief';
export { default as Credibility } from './Credibility';
export { default as BridgeToProtocol } from './BridgeToProtocol';
