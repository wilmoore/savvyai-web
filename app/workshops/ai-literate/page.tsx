'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Clock, Users, Check, X, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Header, Footer, Section, SectionID, CTAButton } from '@/components/marketing';

/**
 * AI Literate Workshop Page
 *
 * Editorial Noir design system:
 * - Zebra rhythm: Ink Black (#050505) / Paper White (#FFFFFF)
 * - Typography: Geist Sans (headings), Geist Mono (metadata)
 * - Accent: Emerald (#10B981) for CTAs and highlights
 */
export default function AILiteratePage() {
  const { t } = useTranslation('workshops');

  const definition = t('aiLiterate.definition', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
    outcomes: string[];
  };

  const audience = t('aiLiterate.audience', { returnObjects: true }) as {
    forLabel: string;
    forItems: string[];
    notForLabel: string;
    notForItems: string[];
  };

  const modality = t('aiLiterate.modality', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
    detailsLabel: string;
    format: {
      duration: string;
      participants: string;
      delivery: string;
      prep: string;
    };
  };

  const artifacts = t('aiLiterate.artifacts', { returnObjects: true }) as {
    label: string;
    title: string;
    items: { title: string; description: string }[];
  };

  const cta = t('aiLiterate.cta', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    lumaUrl: string;
    lumaCaption: string;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO (INK) */}
        <Section variant="ink" size="wide" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <SectionID number="01" name="WORKSHOP" variant="ink" />

          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
                {t('aiLiterate.hero.label')}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-white mb-6">
                {t('aiLiterate.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl">
                {t('aiLiterate.hero.subtitle')}
              </p>
            </div>

            {/* Status Card */}
            <div className="bg-white/5 border border-white/10 rounded-md p-6">
              <span className="inline-block text-xs font-mono uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
                {t('aiLiterate.hero.status')}
              </span>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Clock className="w-4 h-4 text-white/40" />
                  <span>{t('aiLiterate.hero.duration')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <MapPin className="w-4 h-4 text-white/40" />
                  <span>{t('aiLiterate.hero.format')}</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={cta.lumaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  {cta.primary}
                </Link>
                <p className="text-xs text-white/40 text-center mt-2">{cta.lumaCaption}</p>
              </div>
            </div>
          </div>
        </Section>

        {/* DEFINITION (PAPER) */}
        <Section variant="paper" size="wide">
          <SectionID number="02" name="DEFINITION" variant="paper" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
            {definition.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-6 max-w-3xl">
            {definition.title}
          </h2>
          <p className="text-lg text-black/60 mb-10 max-w-2xl">{definition.description}</p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            {definition.outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-emerald-50/50 border border-emerald-100 rounded-md"
              >
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-sm text-black/70">{outcome}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* AUDIENCE (INK) */}
        <Section variant="ink" size="wide">
          <SectionID number="03" name="AUDIENCE" variant="ink" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Who this is for */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
                {audience.forLabel}
              </p>
              <ul className="space-y-4">
                {audience.forItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80">
                    <Check
                      className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who this is not for */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
                {audience.notForLabel}
              </p>
              <ul className="space-y-4">
                {audience.notForItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/50">
                    <X className="w-5 h-5 text-white/30 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* MODALITY (PAPER) */}
        <Section variant="paper" size="wide">
          <SectionID number="04" name="FORMAT" variant="paper" />

          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">
                {modality.label}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-6">
                {modality.title}
              </h2>
              <p className="text-lg text-black/60">{modality.description}</p>
            </div>

            {/* Format details card */}
            <div className="bg-paper-secondary border border-black/10 rounded-md p-6">
              <p className="text-xs font-mono uppercase tracking-wider text-black/40 mb-4">
                {modality.detailsLabel}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-black/40" />
                  <span className="text-sm text-black/70">{modality.format.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-black/40" />
                  <span className="text-sm text-black/70">{modality.format.participants}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-black/40" />
                  <span className="text-sm text-black/70">{modality.format.delivery}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-black/10">
                <p className="text-xs text-black/50">{modality.format.prep}</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ARTIFACTS (INK) */}
        <Section variant="ink" size="wide">
          <SectionID number="05" name="ARTIFACTS" variant="ink" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
            {artifacts.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-10">
            {artifacts.title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {artifacts.items.map((artifact, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-mono text-emerald-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{artifact.title}</h3>
                    <p className="text-sm text-white/60">{artifact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA (PAPER) */}
        <Section variant="paper" size="wide">
          <SectionID number="06" name="REGISTER" variant="paper" />

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
                href={cta.lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                {cta.primary}
              </Link>
              <Link
                href={cta.lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-black/20 hover:border-black/40 text-ink font-medium py-3 px-6 rounded-md transition-colors"
              >
                {cta.secondary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* Back to Programs Link */}
        <Section variant="ink" size="wide" className="py-8">
          <div className="flex justify-center">
            <Link
              href="/#programs"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/70 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              {t('aiLiterate.backToPrograms')}
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
