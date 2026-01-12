'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';
import { Header, Footer, Section, SectionID } from '@/components/marketing';
import { EXTERNAL_LINKS } from '@/lib/constants';

interface Lane {
  name: string;
  description: string;
  items: string[];
  cta: string;
}

/**
 * AI Literate System Page
 *
 * Job: Explain the system. Establish authority. Create gravity.
 * Hierarchy: System → Lanes of delivery → Outcomes
 *
 * Editorial Noir design system:
 * - Zebra rhythm: Ink Black (#050505) / Paper White (#FFFFFF)
 * - Typography: Geist Sans (headings), Geist Mono (metadata)
 * - Accent: Emerald (#10B981) for CTAs only
 *
 * Section Order (Perfect Alternating Zebra):
 * 01 SYSTEM (INK) - Hero
 * 02 DEFINITION (PAPER) - What AI Literate does
 * 03 LANES (INK) - Direct / Partnered
 * 04 PROOF (PAPER) - April Sabral case study
 * 05 ACTION (INK) - CTA
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

  const lanes = t('lanes', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
    direct: Lane;
    partnered: Lane;
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

        {/* 02 DEFINITION (PAPER) - What AI Literate does */}
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

        {/* 03 LANES (INK) - Direct / Partnered */}
        <Section variant="ink" size="wide">
          <SectionID number="03" name="LANES" variant="ink" />

          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {lanes.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-4">
              {lanes.title}
            </h2>
            <p className="text-lg text-white/60">{lanes.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Direct Lane */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">{lanes.direct.name}</h3>
              <p className="text-white/60 mb-6">{lanes.direct.description}</p>

              <ul className="space-y-3 mb-6">
                {lanes.direct.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70">
                    <Check
                      className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/workshops"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                {lanes.direct.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Partnered Lane */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">{lanes.partnered.name}</h3>
              <p className="text-white/60 mb-6">{lanes.partnered.description}</p>

              <ul className="space-y-3 mb-6">
                {lanes.partnered.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70">
                    <Check
                      className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={EXTERNAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                {lanes.partnered.cta}
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* 04 PROOF (PAPER) - April Sabral case study */}
        <Section variant="paper" size="wide">
          <SectionID number="04" name="PROOF" variant="paper" />

          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
              {proof.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-6">
              {proof.title}
            </h2>

            <ul className="space-y-3 mb-8">
              {proof.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-black/70">
                  <Check
                    className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-base text-black/50 italic">{proof.tagline}</p>
          </div>
        </Section>

        {/* 05 ACTION (INK) - CTA */}
        <Section variant="ink" size="wide">
          <SectionID number="05" name="ACTION" variant="ink" />

          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {cta.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-4">
              {cta.title}
            </h2>
            <p className="text-lg text-white/60 mb-8">{cta.description}</p>

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
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:border-white/40 text-white font-medium py-3 px-6 rounded-md transition-colors"
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
