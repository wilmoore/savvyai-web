'use client';

import { Header, Footer, BookingForm, SectionGroup, Section } from '@/components/marketing';
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
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        {/* Hero - standalone */}
        <Hero />

        {/* Problem + Belief - contrast background, two-column layout */}
        <SectionGroup variant="contrast">
          <Section size="wide">
            <div className="grid md:grid-cols-2 gap-8">
              <Problem />
              <Belief />
            </div>
          </Section>
        </SectionGroup>

        {/* How We Work + Protocol + Pilot24 - default background */}
        <SectionGroup>
          <HowWeWork />
          <Protocol />
          <Pilot24 />
        </SectionGroup>

        {/* Credibility + Difference - contrast background */}
        <SectionGroup variant="contrast">
          <Credibility />
          <Difference />
        </SectionGroup>

        {/* Workshop sections - default background */}
        <SectionGroup>
          <WorkshopsExplained />
          <WorkshopOutcomes />
          <BridgeToProtocol />
        </SectionGroup>

        {/* Safety + FAQ - contrast background */}
        <SectionGroup variant="contrast">
          <Safety />
          <HomeFAQ />
        </SectionGroup>

        {/* Audience - default background */}
        <Audience />

        {/* Final CTA + Booking - contrast background */}
        <SectionGroup variant="contrast" className="pt-8 md:pt-12">
          <StartCTA />
          <BookingForm />
        </SectionGroup>
      </main>
      <Footer />
    </div>
  );
}
