'use client';

import { Header, Footer } from '@/components/marketing';
import { Hero, TrustBar, SystemsOverview, Difference, RoutingCTAs } from '@/components/home';

/**
 * Homepage - Positioning + Routing ONLY
 *
 * Page Boundary Architecture (ADR-036):
 * - Homepage's job is positioning and routing, NOT explanation
 * - If a section explains "what happens when," it cannot live here
 * - All workshop mechanics live on /workshops
 *
 * DESIGN SYSTEM: Editorial Noir - Strict Binary Pattern
 * - INK: #050505 (Ink Black) - Authority, premium, systems
 * - PAPER: #FFFFFF (Stark White) - Clarity, readability, breathing room
 *
 * Section Order (Minimal 6-Section Structure):
 * — HERO (INK) - Positioning statement (no SectionID)
 * 01 TRUST (INK) - System-level credibility
 * 02 SYSTEMS (PAPER) - System cards (AI Literate, Product Bakery, Onboarding)
 * 03 DIFFERENCE (INK) - Founder POV, why Śavvy AI is different
 * 04 ROUTING (PAPER) - Primary navigation CTAs
 * — FOOTER (INK)
 *
 * SectionID SPINE: All [ XX / NAME ] tags align to the same vertical axis
 * via max-w-7xl shell architecture.
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* — HERO (INK) - Positioning statement */}
        <Hero />

        {/* 01 TRUST (INK) - System-level credibility */}
        <TrustBar />

        {/* 02 SYSTEMS (PAPER) - System cards */}
        <section id="systems">
          <SystemsOverview />
        </section>

        {/* 03 DIFFERENCE (INK) - Founder POV */}
        <Difference />

        {/* 04 ROUTING (PAPER) - Primary navigation CTAs */}
        <RoutingCTAs />
      </main>
      <Footer />
    </div>
  );
}
