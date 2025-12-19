'use client';

import { Header, Footer, BookingForm } from '@/components/marketing';
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
        <Hero />
        <Problem />
        <Belief />
        <HowWeWork />
        <Protocol />
        <Pilot24 />
        <Credibility />
        <Difference />
        <WorkshopsExplained />
        <WorkshopOutcomes />
        <BridgeToProtocol />
        <Safety />
        <HomeFAQ />
        <Audience />
        <StartCTA />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
