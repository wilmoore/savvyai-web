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

/**
 * Homepage - Workshop Authority Grammar
 *
 * Band Structure:
 * - Orientation: Hero
 * - Problem: Problem
 * - Belief + Method: Belief, HowWeWork
 * - Program Structure: Protocol, Pilot24
 * - Workshop Details: WorkshopsExplained, WorkshopOutcomes
 * - Bridge: BridgeToProtocol
 * - Credibility: Credibility, Difference
 * - Reassurance: Safety, HomeFAQ, Audience
 * - Decision: StartCTA, BookingForm
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Orientation Band - Hero standalone */}
        <Hero />

        {/* Problem Band - The Challenge */}
        <SectionGroup variant="contrast">
          <Section size="wide">
            <div className="grid md:grid-cols-2 gap-12">
              <Problem />
              <Belief />
            </div>
          </Section>
        </SectionGroup>

        {/* Method Band - How We Work + Protocol Structure */}
        <SectionGroup>
          <HowWeWork />
          <Protocol />
          <Pilot24 />
        </SectionGroup>

        {/* Workshop Details Band */}
        <SectionGroup variant="contrast">
          <WorkshopsExplained />
          <WorkshopOutcomes />
        </SectionGroup>

        {/* Bridge Band */}
        <BridgeToProtocol />

        {/* Credibility Band */}
        <SectionGroup variant="contrast">
          <Credibility />
          <Difference />
        </SectionGroup>

        {/* Reassurance Band */}
        <SectionGroup>
          <Safety />
          <HomeFAQ />
          <Audience />
        </SectionGroup>

        {/* Decision Band */}
        <SectionGroup variant="contrast" className="pt-8 md:pt-12">
          <StartCTA />
          <BookingForm />
        </SectionGroup>
      </main>
      <Footer />
    </div>
  );
}
