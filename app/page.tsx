'use client';

import { Header, Footer, BookingForm } from '@/components/marketing';
import {
  Hero,
  WhoThisIsFor,
  OurWorkshops,
  HowWeWork,
  WorkshopsExplained,
  WorkshopOutcomes,
  Protocol,
  Pilot24,
  Difference,
  Safety,
  HomeFAQ,
  Audience,
  StartCTA,
} from '@/components/home';

/**
 * Homepage - Final Section Order
 *
 * THE ONE RULE: Programs → Experience → Proof → Philosophy
 * Never the other way around.
 *
 * Section Order:
 * 1. HERO (LIGHT) - Invitation + clarity
 * 2. WHO THIS IS FOR (LIGHT, COMPACT) - Self-qualification
 * 3. OUR WORKSHOPS (LIGHT, PROMINENT) - Commercial clarity
 * 4. HOW TEAMS WORK WITH SAVVY (NEUTRAL) - Reassurance
 * 5. WHAT HAPPENS IN A WORKSHOP (LIGHT) - Visualization
 * 6. WHAT TEAMS LEAVE WITH (LIGHT) - Tangibility
 * 7. THE SAVVY PILOT PROTOCOL (DARK – AUTHORITY) - Credibility + IP
 * 8. WHY WE BUILD A PILOT IN 24 HOURS (NEUTRAL) - Justification
 * 9. WHAT MAKES THIS DIFFERENT (LIGHT, COMPARATIVE) - Differentiation
 * 10. DATA, SECURITY, AND BOUNDARIES (DARK – REASSURANCE) - Risk removal
 * 11. QUICK ANSWERS (FAQ) (LIGHT) - Objection handling
 * 12. WHO THIS IS FOR / WHO THIS IS NOT FOR (LIGHT) - Qualification
 * 13. FINAL CTA (LIGHT, STRONG) - Conversion
 * 14. BOOK A CONVERSATION (FORM) - Capture intent
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 1. HERO (LIGHT) - "What is this, and is it for me?" */}
        <Hero />

        {/* 2. WHO THIS IS FOR (LIGHT, COMPACT) - "Am I the intended audience?" */}
        <WhoThisIsFor />

        {/* 3. OUR WORKSHOPS (LIGHT, PROMINENT) - "What do you run?" */}
        <OurWorkshops />

        {/* 4. HOW TEAMS WORK WITH SAVVY (NEUTRAL) - "How does engagement work?" */}
        <HowWeWork />

        {/* 5. WHAT HAPPENS IN A WORKSHOP (LIGHT) - "What would my team experience?" */}
        <WorkshopsExplained />

        {/* 6. WHAT TEAMS LEAVE WITH (LIGHT) - "What do we own at the end?" */}
        <WorkshopOutcomes />

        {/* 7. THE SAVVY PILOT PROTOCOL (DARK – AUTHORITY) - "Why Savvy specifically?" */}
        <Protocol />

        {/* 8. WHY WE BUILD A PILOT IN 24 HOURS (NEUTRAL) - "Why do you work this way?" */}
        <Pilot24 />

        {/* 9. WHAT MAKES THIS DIFFERENT (LIGHT, COMPARATIVE) - "Why not someone else?" */}
        <Difference />

        {/* 10. DATA, SECURITY, AND BOUNDARIES (DARK – REASSURANCE) - "Is this safe?" */}
        <Safety />

        {/* 11. QUICK ANSWERS (FAQ) (LIGHT) - Objection handling */}
        <HomeFAQ />

        {/* 12. WHO THIS IS FOR / WHO THIS IS NOT FOR (LIGHT) - Qualification */}
        <Audience />

        {/* 13. FINAL CTA (LIGHT, STRONG) - "Every engagement starts with a workshop" */}
        <StartCTA />

        {/* 14. BOOK A CONVERSATION (FORM) - Capture intent */}
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
