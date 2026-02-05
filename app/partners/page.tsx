'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Header, Footer, Section, SectionID } from '@/components/marketing';
import { EXTERNAL_LINKS } from '@/lib/constants';

/**
 * AI Literate Partnerships Page
 *
 * Job: Convert interest into collaboration.
 * This is the B2B conversion page - qualify inbound, funnel into conversations.
 *
 * CRITICAL: Readiness Layer must appear FIRST to establish stack position.
 * Partners are licensing judgment + gating, not just training content.
 *
 * Editorial Noir design system:
 * - Zebra rhythm: Ink Black (#050505) / Paper White (#FFFFFF)
 * - Typography: Geist Sans (headings), Geist Mono (metadata)
 * - Accent: Emerald (#10B981) for CTAs only
 *
 * Section Order (Perfect Alternating Zebra):
 * 01 READINESS (INK) - Readiness Layer framing (NEW - top of stack)
 * 02 PARTNERS (PAPER) - Hero
 * 03 MODELS (INK) - Partnership models
 * 04 PROOF (PAPER) - Why it works
 * 05 CONNECT (INK) - CTA to LinkedIn
 */
export default function PartnersPage() {
  const { t } = useTranslation('partners');

  const readiness = t('readiness', { returnObjects: true }) as {
    label: string;
    title: string;
    body: string;
    conclusion: string;
    intelligence: {
      title: string;
      description: string;
      signal: string;
      items: string[];
      clarification: string;
    };
  };

  const hero = t('hero', { returnObjects: true }) as {
    label: string;
    title: string;
    subtitle: string;
  };

  const models = t('models', { returnObjects: true }) as {
    label: string;
    title: string;
    items: { title: string; description: string }[];
  };

  const proof = t('proof', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
  };

  const cta = t('cta', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
    primary: string;
    subtext: string;
    secondary: string;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 01 READINESS (INK) - Readiness Layer framing */}
        <Section variant="ink" size="wide" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <SectionID number="01" name="READINESS" variant="ink" />

          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {readiness.label}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-white mb-6">
              {readiness.title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4">{readiness.body}</p>
            <p className="text-base text-emerald-400 font-medium">{readiness.conclusion}</p>
          </div>

          {/* Readiness Intelligence Subsection */}
          <div className="mt-16 pt-12 border-t border-white/10 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-4">
              {readiness.intelligence.title}
            </h2>
            <p className="text-lg text-white/60 mb-6">{readiness.intelligence.description}</p>
            <p className="text-sm font-mono uppercase tracking-wider text-white/40 mb-4">
              {readiness.intelligence.signal}
            </p>
            <ul className="space-y-3 mb-6">
              {readiness.intelligence.items.map((item, index) => (
                <li key={index} className="text-white/70 pl-4 border-l-2 border-emerald-500/50">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-white/50 italic">{readiness.intelligence.clarification}</p>
          </div>
        </Section>

        {/* 02 PARTNERS (PAPER) - Hero */}
        <Section variant="paper" size="wide">
          <SectionID number="02" name="PARTNERS" variant="paper" />

          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
              {hero.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-ink mb-6">
              {hero.title}
            </h2>
            <p className="text-lg text-black/60">{hero.subtitle}</p>
          </div>
        </Section>

        {/* 03 MODELS (INK) - Partnership models */}
        <Section variant="ink" size="wide">
          <SectionID number="03" name="MODELS" variant="ink" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
            {models.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-10 max-w-2xl">
            {models.title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {models.items.map((item, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-mono text-emerald-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 04 PROOF (PAPER) - Why it works */}
        <Section variant="paper" size="wide">
          <SectionID number="04" name="PROOF" variant="paper" />

          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
              {proof.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-6">
              {proof.title}
            </h2>
            <p className="text-lg text-black/60">{proof.description}</p>
          </div>
        </Section>

        {/* 05 CONNECT (INK) - CTA to LinkedIn */}
        <Section variant="ink" size="wide">
          <SectionID number="05" name="CONNECT" variant="ink" />

          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {cta.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-4">
              {cta.title}
            </h2>
            <p className="text-lg text-white/60 mb-8">{cta.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
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
                href="/literate"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:border-white/40 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                {cta.secondary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-sm text-white/40">{cta.subtext}</p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
