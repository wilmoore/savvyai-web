'use client';

import Header from '@/components/legacy/Header';
import Hero from '@/components/legacy/Hero';
import Services from '@/components/legacy/Services';
import About from '@/components/legacy/About';
import Proof from '@/components/legacy/Proof';
import Contact from '@/components/legacy/Contact';
import Footer from '@/components/legacy/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Proof />
      <Contact />
      <Footer />
    </div>
  );
}
