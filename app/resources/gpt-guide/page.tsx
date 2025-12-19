"use client";

import { useState } from "react";
import Link from "next/link";
import MinimalHeader from "@/components/MinimalHeader";

export default function GptGuidePage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Wire up to email capture backend
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">
      <MinimalHeader />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                How to Spot Opportunities for Custom GPTs (and Build Them Correctly)
              </h1>

              <p className="text-lg md:text-xl text-[#94A3B8] mb-4">
                If you keep re-typing the same context every time you use ChatGPT, you are doing it wrong.
              </p>

              <p className="text-base text-[#6B7280] mb-8">
                This guide explains how to identify when a custom GPT is worth building,
                what makes it useful vs. noise, and the exact process to build one that
                actually saves you time.
              </p>

              <EmailForm
                email={email}
                setEmail={setEmail}
                isSubmitting={isSubmitting}
                submitted={submitted}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 md:py-24 border-t border-[#1a1a1a]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                The Problem
              </h2>

              <p className="text-[#94A3B8] mb-6">
                You already know how to use AI. That is not the problem. The problem is friction.
              </p>

              <ul className="space-y-4 text-[#94A3B8]">
                <li className="flex items-start">
                  <span className="text-[#6B7280] mr-3">-</span>
                  <span>You explain the same context every single session.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B7280] mr-3">-</span>
                  <span>You re-type your preferences, constraints, and frameworks from scratch.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B7280] mr-3">-</span>
                  <span>You get generic answers because the model does not know how you think.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B7280] mr-3">-</span>
                  <span>You know what you want but spend more time setting up than getting output.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B7280] mr-3">-</span>
                  <span>You have built GPTs before but they sit unused because they do not actually help.</span>
                </li>
              </ul>

              <p className="text-[#6B7280] mt-8 italic">
                If the setup takes longer than the answer, the setup belongs in a GPT.
              </p>
            </div>
          </div>
        </section>

        {/* The Reframe Section */}
        <section className="py-16 md:py-24 border-t border-[#1a1a1a]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                The Reframe
              </h2>

              <p className="text-[#94A3B8] mb-6">
                Custom GPTs are not AI products. They are <span className="text-white font-medium">context containers</span> and <span className="text-white font-medium">decision systems</span>.
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-2 border-[#2563EB] pl-4">
                  <p className="text-white font-medium mb-1">Free GPTs = information and clarity</p>
                  <p className="text-[#6B7280]">
                    They encode how you think. They remove the need to explain yourself.
                    They give you leverage over your own mental models.
                  </p>
                </div>

                <div className="border-l-2 border-[#2563EB] pl-4">
                  <p className="text-white font-medium mb-1">Paid GPTs = enforcement, pressure, and leverage</p>
                  <p className="text-[#6B7280]">
                    They apply your thinking to others. They create accountability.
                    They systematize what you would otherwise do manually.
                  </p>
                </div>
              </div>

              <p className="text-[#94A3B8]">
                Most people think about GPTs as tools for others. The real opportunity is building them for yourself first.
                Once you stop re-typing your own context, you can decide if it is worth packaging for anyone else.
              </p>
            </div>
          </div>
        </section>

        {/* What the Guide Covers Section */}
        <section className="py-16 md:py-24 border-t border-[#1a1a1a]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                What the Guide Covers
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#2563EB] font-mono mr-3">01</span>
                  <div>
                    <p className="text-white font-medium">Spotting GPT Opportunities</p>
                    <p className="text-[#6B7280]">The signals that indicate a GPT is worth building vs. a waste of time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] font-mono mr-3">02</span>
                  <div>
                    <p className="text-white font-medium">Context Fatigue as a Signal</p>
                    <p className="text-[#6B7280]">How to recognize when you are repeating yourself and what to do about it.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] font-mono mr-3">03</span>
                  <div>
                    <p className="text-white font-medium">Internal vs. External GPTs</p>
                    <p className="text-[#6B7280]">When to build for yourself vs. when to build for others.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] font-mono mr-3">04</span>
                  <div>
                    <p className="text-white font-medium">The 7-Step Build Process</p>
                    <p className="text-[#6B7280]">The exact sequence for building a GPT that actually gets used.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] font-mono mr-3">05</span>
                  <div>
                    <p className="text-white font-medium">What Makes a GPT Worth Building</p>
                    <p className="text-[#6B7280]">The criteria that separate useful GPTs from forgotten experiments.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who This Is / Is Not For Section */}
        <section className="py-16 md:py-24 border-t border-[#1a1a1a]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Who This Is For
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-white font-medium mb-4">This guide is for:</p>
                  <ul className="space-y-2 text-[#94A3B8]">
                    <li>- Builders who use AI daily but feel friction</li>
                    <li>- Consultants who want to systematize their thinking</li>
                    <li>- Founders who need leverage without hiring</li>
                    <li>- Technical operators tired of repeating themselves</li>
                    <li>- Anyone who has built a GPT and wondered why it did not stick</li>
                  </ul>
                </div>

                <div>
                  <p className="text-white font-medium mb-4">This guide is not for:</p>
                  <ul className="space-y-2 text-[#6B7280]">
                    <li>- People looking for a get-rich-quick AI scheme</li>
                    <li>- Beginners who have never used ChatGPT</li>
                    <li>- Anyone expecting a copy-paste template that requires no thinking</li>
                    <li>- People who want to build GPTs to sell before using them</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#6B7280] mt-8">
                If you are looking for shortcuts, this is not it. If you want to build something
                that actually reduces your cognitive load, keep reading.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 border-t border-[#1a1a1a]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Get the Guide
              </h2>

              <p className="text-[#94A3B8] mb-8">
                Stop re-typing context. Start building GPTs that actually save you time.
              </p>

              <div className="max-w-md mx-auto">
                <EmailForm
                  email={email}
                  setEmail={setEmail}
                  isSubmitting={isSubmitting}
                  submitted={submitted}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="py-12 border-t border-[#1a1a1a]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <Link href="/" className="text-[#6B7280] hover:text-white transition-colors">
                  Savvy AI
                </Link>
                <p className="text-[#4B5563] text-sm">
                  More resources coming soon.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function EmailForm({
  email,
  setEmail,
  isSubmitting,
  submitted,
  onSubmit
}: {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  submitted: boolean;
  onSubmit: (e: React.FormEvent) => void;
}) {
  if (submitted) {
    return (
      <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
        <p className="text-white font-medium">Check your email.</p>
        <p className="text-[#6B7280] mt-1">The guide is on its way.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} action="#" className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="flex-1 px-4 py-3 bg-[#111111] border border-[#1a1a1a] rounded-lg text-white placeholder-[#4B5563] focus:outline-none focus:border-[#2563EB] transition-colors"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-[#2563EB] text-white font-medium rounded-lg hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {isSubmitting ? "Sending..." : "Get the Free Guide"}
      </button>
    </form>
  );
}
