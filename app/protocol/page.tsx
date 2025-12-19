'use client';

import { Header, Footer } from '@/components/marketing';
import { Hero, Comparison, HowItWorks, Deliverables, FAQ, ReadyCTA } from '@/components/protocol';

export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Comparison />
        <HowItWorks />
        <Deliverables />
        <FAQ />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  );
}
