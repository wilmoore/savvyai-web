'use client';

import { Header, Footer, SectionGroup } from '@/components/marketing';
import {
  Hero,
  Comparison,
  HowItWorks,
  Deliverables,
  WhatThisIsNot,
  AfterThePilot,
  FAQ,
  ReadyCTA,
} from '@/components/protocol';

/**
 * Protocol Page - Workshop Authority Grammar
 *
 * Band Structure:
 * - Orientation: Hero
 * - Contrast: Comparison (old way vs new way)
 * - Process: HowItWorks
 * - Outcomes: Deliverables
 * - Clarity: WhatThisIsNot
 * - Continuation: AfterThePilot
 * - Answers: FAQ
 * - Decision: ReadyCTA
 */
export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Orientation Band - Hero */}
        <Hero />

        {/* Contrast Band - Old Way vs New Way */}
        <SectionGroup variant="contrast">
          <Comparison />
        </SectionGroup>

        {/* Process Band - How It Works */}
        <SectionGroup>
          <HowItWorks />
        </SectionGroup>

        {/* Outcomes Band - Deliverables */}
        <SectionGroup variant="contrast">
          <Deliverables />
        </SectionGroup>

        {/* Clarity Band - What This Is Not */}
        <SectionGroup>
          <WhatThisIsNot />
        </SectionGroup>

        {/* Continuation Band - After The Pilot */}
        <SectionGroup variant="contrast">
          <AfterThePilot />
        </SectionGroup>

        {/* Answers Band - FAQ */}
        <SectionGroup>
          <FAQ />
        </SectionGroup>

        {/* Decision Band - Ready CTA */}
        <SectionGroup variant="contrast">
          <ReadyCTA />
        </SectionGroup>
      </main>
      <Footer />
    </div>
  );
}
