'use client';

import { Header, Footer, BookingForm, SectionGroup } from '@/components/marketing';
import {
  Hero,
  Problem,
  Belief,
  HowWeWork,
  Protocol,
  Pilot24,
  Credibility,
  Difference,
  WorkshopsExplained,
  WorkshopOutcomes,
  BridgeToProtocol,
  Safety,
  HomeFAQ,
  Audience,
  StartCTA,
} from '@/components/home';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero - standalone white */}
        <Hero />

        {/* Problem + Belief - muted group */}
        <SectionGroup variant="muted">
          <Problem />
          <Belief />
        </SectionGroup>

        {/* How We Work + Protocol + Pilot24 - white group */}
        <SectionGroup>
          <HowWeWork />
          <Protocol />
          <Pilot24 />
        </SectionGroup>

        {/* Credibility + Difference - muted group */}
        <SectionGroup variant="muted">
          <Credibility />
          <Difference />
        </SectionGroup>

        {/* Workshop sections - white group */}
        <SectionGroup>
          <WorkshopsExplained />
          <WorkshopOutcomes />
          <BridgeToProtocol />
        </SectionGroup>

        {/* Safety + FAQ - muted group */}
        <SectionGroup variant="muted">
          <Safety />
          <HomeFAQ />
        </SectionGroup>

        {/* Audience - white standalone */}
        <Audience />

        {/* Final CTA + Booking - muted group with extra emphasis */}
        <SectionGroup variant="muted" className="pt-8 md:pt-12">
          <StartCTA />
          <BookingForm />
        </SectionGroup>
      </main>
      <Footer />
    </div>
  );
}
