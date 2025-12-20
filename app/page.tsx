'use client';

import { Header, Footer, BookingForm } from '@/components/marketing';
import {
  Hero,
  TrustBar,
  WhoThisIsFor,
  OurWorkshops,
  HowWeWork,
  WorkshopsExplained,
  WorkshopOutcomes,
  Protocol,
  Pilot24,
  Difference,
  StatsGrid,
  Safety,
  HomeFAQ,
  Audience,
  StartCTA,
} from '@/components/home';

/**
 * Homepage - Institutional Perfection "High-Contrast" Zebra Rhythm
 *
 * THE ONE RULE: Programs -> Experience -> Proof -> Philosophy
 * Never the other way around.
 *
 * DESIGN SYSTEM: Editorial Noir - Strict Binary Pattern
 * - INK: #050505 (Ink Black) - Authority, premium, systems
 * - PAPER: #FFFFFF (Stark White) - Clarity, readability, breathing room
 *
 * Section Order (Perfect Alternating Zebra):
 * — HERO (INK) - Billboard statement (no SectionID)
 * 01 TRUST (INK) - Logo wall / social proof
 * 02 QUALIFICATION (PAPER) - Self-qualification
 * 03 PROGRAMS (INK) - Workshop cards with authority
 * 04 PROCESS (PAPER) - Technical blueprint
 * 05 EXPERIENCE (INK) - Workshop visualization
 * 06 ARTIFACTS (PAPER) - Deliverables inventory
 * 07 PROTOCOL (INK) - Systems blueprint
 * 08 METHOD (PAPER) - 24-hour pitch
 * 09 CONTRAST (INK) - Why Us comparison
 * 10 RESULTS (PAPER) - CRITICAL: Black numbers on white
 * 11 SECURITY (INK) - Data security assurances
 * 12 FAQ (PAPER) - Objection handling
 * 13 QUALIFICATION (INK) - Who is/isn't it for
 * 14 NEXT (PAPER) - Pre-CTA reset
 * 15 CONTACT (INK) - Institutional close
 *
 * SectionID SPINE: All [ XX / NAME ] tags align to the same vertical axis
 * via max-w-7xl shell architecture.
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* — HERO (INK) - Billboard statement */}
        <Hero />

        {/* 01 TRUST (INK) - Logo wall / social proof */}
        <TrustBar />

        {/* 02 QUALIFICATION (PAPER) - Self-qualification */}
        <WhoThisIsFor />

        {/* 03 PROGRAMS (INK) - Workshop cards with authority */}
        <OurWorkshops />

        {/* 04 PROCESS (PAPER) - Technical blueprint */}
        <HowWeWork />

        {/* 05 EXPERIENCE (INK) - Workshop visualization */}
        <WorkshopsExplained />

        {/* 06 ARTIFACTS (PAPER) - Deliverables inventory */}
        <WorkshopOutcomes />

        {/* 07 PROTOCOL (INK) - Systems blueprint */}
        <Protocol />

        {/* 08 METHOD (PAPER) - 24-hour pitch */}
        <Pilot24 />

        {/* 09 CONTRAST (INK) - Why Us comparison */}
        <Difference />

        {/* 10 RESULTS (PAPER) - CRITICAL: Black numbers on white */}
        <StatsGrid />

        {/* 11 SECURITY (INK) - Data security assurances */}
        <Safety />

        {/* 12 FAQ (PAPER) - Objection handling */}
        <HomeFAQ />

        {/* 13 QUALIFICATION (INK) - Who is/isn't it for */}
        <Audience />

        {/* 14 NEXT (PAPER) - Pre-CTA reset */}
        <StartCTA />

        {/* 15 CONTACT (INK) - Institutional close */}
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
