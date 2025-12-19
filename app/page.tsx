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
 * Homepage - Editorial Paper & Ink "Zebra" Rhythm
 *
 * THE ONE RULE: Programs -> Experience -> Proof -> Philosophy
 * Never the other way around.
 *
 * Section Order (Zebra Pattern):
 * 1. HERO (INK) - Billboard statement
 * 2. TRUST BAR (PAPER) - Logo wall / social proof
 * 3. WHO THIS IS FOR (PAPER) - Self-qualification
 * 4. OUR WORKSHOPS (PAPER) - Commercial clarity
 * 5. HOW TEAMS WORK (INK) - Technical blueprint
 * 6. WHAT HAPPENS IN A WORKSHOP (PAPER) - Visualization
 * 7. WHAT TEAMS LEAVE WITH (PAPER) - Artifact inventory
 * 8. THE SAVVY PILOT PROTOCOL (INK) - Credibility + IP
 * 9. WHY WE BUILD A PILOT IN 24 HOURS (PAPER) - Justification
 * 10. WHAT MAKES THIS DIFFERENT (PAPER) - Differentiation
 * 11. STATS GRID (INK) - Business impact numbers
 * 12. DATA, SECURITY, AND BOUNDARIES (INK) - Risk removal
 * 13. QUICK ANSWERS (FAQ) (PAPER) - Objection handling
 * 14. WHO THIS IS FOR / WHO THIS IS NOT FOR (PAPER) - Qualification
 * 15. FINAL CTA (INK) - Conversion
 * 16. BOOK A CONVERSATION (PAPER) - Lead capture
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. HERO (INK) - Billboard statement */}
        <Hero />

        {/* 2. TRUST BAR (PAPER) - Logo wall / social proof */}
        <TrustBar />

        {/* 3. WHO THIS IS FOR (PAPER) - Self-qualification */}
        <WhoThisIsFor />

        {/* 4. OUR WORKSHOPS (PAPER) - Commercial clarity */}
        <OurWorkshops />

        {/* 5. HOW TEAMS WORK (INK) - Technical blueprint */}
        <HowWeWork />

        {/* 6. WHAT HAPPENS IN A WORKSHOP (PAPER) - Visualization */}
        <WorkshopsExplained />

        {/* 7. WHAT TEAMS LEAVE WITH (PAPER) - Artifact inventory */}
        <WorkshopOutcomes />

        {/* 8. THE SAVVY PILOT PROTOCOL (INK) - Credibility + IP */}
        <Protocol />

        {/* 9. WHY WE BUILD A PILOT IN 24 HOURS (PAPER) - Justification */}
        <Pilot24 />

        {/* 10. WHAT MAKES THIS DIFFERENT (PAPER) - Differentiation */}
        <Difference />

        {/* 11. STATS GRID (INK) - Business impact numbers */}
        <StatsGrid />

        {/* 12. DATA, SECURITY, AND BOUNDARIES (INK) - Risk removal */}
        <Safety />

        {/* 13. QUICK ANSWERS (FAQ) (PAPER) - Objection handling */}
        <HomeFAQ />

        {/* 14. WHO THIS IS FOR / WHO THIS IS NOT FOR (PAPER) - Qualification */}
        <Audience />

        {/* 15. FINAL CTA (INK) - Conversion */}
        <StartCTA />

        {/* 16. BOOK A CONVERSATION (PAPER) - Lead capture */}
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
