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

export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        {/* Hero - standalone */}
        <Hero />

        {/* Comparison - contrast background */}
        <SectionGroup variant="contrast">
          <Comparison />
        </SectionGroup>

        {/* How It Works - default background */}
        <SectionGroup>
          <HowItWorks />
        </SectionGroup>

        {/* Deliverables - contrast background */}
        <SectionGroup variant="contrast">
          <Deliverables />
        </SectionGroup>

        {/* What This Is Not - default background */}
        <SectionGroup>
          <WhatThisIsNot />
        </SectionGroup>

        {/* After The Pilot - contrast background */}
        <SectionGroup variant="contrast">
          <AfterThePilot />
        </SectionGroup>

        {/* FAQ - default background */}
        <SectionGroup>
          <FAQ />
        </SectionGroup>

        {/* Ready CTA - contrast background */}
        <SectionGroup variant="contrast">
          <ReadyCTA />
        </SectionGroup>
      </main>
      <Footer />
    </div>
  );
}
