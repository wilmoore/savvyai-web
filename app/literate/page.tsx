'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';
import { Header, Footer, Section, SectionID } from '@/components/marketing';
import { EXTERNAL_LINKS } from '@/lib/constants';

/**
 * AI Literate System Page
 *
 * Job: Explain the system. Establish authority. Create gravity.
 * This is the conceptual page - define AI Literate as IP.
 *
 * Editorial Noir design system:
 * - Zebra rhythm: Ink Black (#050505) / Paper White (#FFFFFF)
 * - Typography: Geist Sans (headings), Geist Mono (metadata)
 * - Accent: Emerald (#10B981) for CTAs only
 *
 * Section Order (Perfect Alternating Zebra):
 * 01 SYSTEM (INK) - Hero
 * 02 DEFINITION (PAPER) - What AI Literate is
 * 03 COMPARISON (INK) - AI Literate vs AI Bootcamp
 * 04 PARTNERSHIP (PAPER) - How people partner
 * 05 PROOF (INK) - April Sabral case study
 * 06 ACTION (PAPER) - CTA
 */
export default function LiteratePage() {
  const { t } = useTranslation('literate');

  const hero = t('hero', { returnObjects: true }) as {
    label: string;
    title: string;
    subtitle: string;
    tagline: string;
  };

  const definition = t('definition', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
    items: string[];
    tagline: string;
  };

  const comparison = t('comparison', { returnObjects: true }) as {
    label: string;
    title: string;
    literate: { title: string; items: string[] };
    bootcamp: { title: string; items: string[] };
    tagline: string;
  };

  const partnership = t('partnership', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
    items: string[];
  };

  const proof = t('proof', { returnObjects: true }) as {
    label: string;
    title: string;
    items: string[];
    tagline: string;
  };

  const cta = t('cta', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 01 SYSTEM (INK) - Hero */}
        <Section variant="ink" size="wide" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <SectionID number="01" name="SYSTEM" variant="ink" />

          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {hero.label}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-white mb-6">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4">{hero.subtitle}</p>
            <p className="text-base text-white/50 italic">{hero.tagline}</p>
          </div>
        </Section>

        {/* 02 DEFINITION (PAPER) - What AI Literate is */}
        <Section variant="paper" size="wide">
          <SectionID number="02" name="DEFINITION" variant="paper" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
            {definition.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-6 max-w-2xl">
            {definition.title}
          </h2>
          <p className="text-lg text-black/60 mb-8 max-w-2xl">{definition.description}</p>

          <ul className="space-y-3 mb-8 max-w-xl">
            {definition.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-black/70">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-base text-black/50 italic max-w-xl">{definition.tagline}</p>
        </Section>

        {/* 03 COMPARISON (INK) - AI Literate vs AI Bootcamp */}
        <Section variant="ink" size="wide">
          <SectionID number="03" name="COMPARISON" variant="ink" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
            {comparison.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-10">
            {comparison.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* AI Literate column */}
            <div className="bg-white/5 border border-white/10 rounded-md p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                {comparison.literate.title}
              </h3>
              <ul className="space-y-3">
                {comparison.literate.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Bootcamp column */}
            <div className="bg-white/5 border border-white/10 rounded-md p-6">
              <h3 className="text-lg font-semibold text-white/60 mb-4">
                {comparison.bootcamp.title}
              </h3>
              <ul className="space-y-3">
                {comparison.bootcamp.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/60">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-lg text-white/70 italic text-center">{comparison.tagline}</p>
        </Section>

        {/* 04 PARTNERSHIP (PAPER) - How people partner */}
        <Section variant="paper" size="wide">
          <SectionID number="04" name="PARTNERSHIP" variant="paper" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
            {partnership.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-6 max-w-2xl">
            {partnership.title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl">
            {partnership.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-paper-secondary border border-black/10 rounded-md"
              >
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-sm text-black/70">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-base text-black/50 italic max-w-xl">{partnership.description}</p>
        </Section>

        {/* 05 PROOF (INK) - April Sabral case study */}
        <Section variant="ink" size="wide">
          <SectionID number="05" name="PROOF" variant="ink" />

          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              {proof.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-6">
              {proof.title}
            </h2>

            <ul className="space-y-3 mb-8">
              {proof.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <Check
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-base text-white/50 italic">{proof.tagline}</p>
          </div>
        </Section>

        {/* 06 ACTION (PAPER) - CTA */}
        <Section variant="paper" size="wide">
          <SectionID number="06" name="ACTION" variant="paper" />

          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
              {cta.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-4">
              {cta.title}
            </h2>
            <p className="text-lg text-black/60 mb-8">{cta.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={EXTERNAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                {cta.primary}
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href="/workshops"
                className="inline-flex items-center justify-center gap-2 bg-white border border-black/20 hover:border-black/40 text-ink font-medium py-3 px-6 rounded-md transition-colors"
              >
                {cta.secondary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
