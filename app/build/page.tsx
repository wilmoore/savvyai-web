'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Clock, Check, X, ArrowRight, Calendar } from 'lucide-react';
import { Header, Footer, Section, SectionID, CTAButton } from '@/components/marketing';

/**
 * ŚavvyBuild Page - Custom AI Program Design & Delivery
 *
 * Premium positioning with application-required framing.
 *
 * Editorial Noir design system:
 * - Zebra rhythm: Ink Black (#050505) / Paper White (#FFFFFF)
 * - Typography: Geist Sans (headings), Geist Mono (metadata)
 * - Accent: Emerald (#10B981) for CTAs only
 *
 * Section Order (Perfect Alternating Zebra):
 * 01 BUILD (INK) - Hero with value proposition
 * 02 SCOPE (PAPER) - What we build
 * 03 FIT (INK) - Who it's for / not for
 * 04 PROOF (PAPER) - Testimonials placeholder
 * 05 APPLY (INK) - Application CTA
 */
export default function BuildPage() {
  const { t } = useTranslation('build');

  const hero = t('hero', { returnObjects: true }) as {
    label: string;
    title: string;
    subtitle: string;
    status: string;
    timeline: string;
  };

  const scope = t('scope', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };

  const fit = t('fit', { returnObjects: true }) as {
    label: string;
    forLabel: string;
    forItems: string[];
    notForLabel: string;
    notForItems: string[];
  };

  const proof = t('proof', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
  };

  const apply = t('apply', { returnObjects: true }) as {
    label: string;
    title: string;
    description: string;
    cta: string;
    note: string;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 01 BUILD (INK) - Hero */}
        <Section variant="ink" size="wide" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <SectionID number="01" name="BUILD" variant="ink" />

          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
                {hero.label}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-white mb-6">
                {hero.title}
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl">{hero.subtitle}</p>
            </div>

            {/* Status Card */}
            <div className="bg-white/5 border border-white/10 rounded-md p-6">
              <span className="inline-block text-xs font-mono uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
                {hero.status}
              </span>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Clock className="w-4 h-4 text-white/40" />
                  <span>{hero.timeline}</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/#book"
                  className="inline-flex items-center gap-2 w-full justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  {apply.cta}
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* 02 SCOPE (PAPER) - What we build */}
        <Section variant="paper" size="wide">
          <SectionID number="02" name="SCOPE" variant="paper" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
            {scope.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-6 max-w-3xl">
            {scope.title}
          </h2>
          <p className="text-lg text-black/60 mb-10 max-w-2xl">{scope.description}</p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {scope.items.map((item, index) => (
              <div key={index} className="p-6 bg-paper-secondary border border-black/10 rounded-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-mono text-emerald-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                    <p className="text-sm text-black/60">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 03 FIT (INK) - Who it's for / not for */}
        <Section variant="ink" size="wide">
          <SectionID number="03" name="FIT" variant="ink" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-8">
            {fit.label}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Who this is for */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-white/60 mb-4">
                {fit.forLabel}
              </p>
              <ul className="space-y-4">
                {fit.forItems.map((item, index) => (
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
                {fit.notForLabel}
              </p>
              <ul className="space-y-4">
                {fit.notForItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/50">
                    <X className="w-5 h-5 text-white/30 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 04 PROOF (PAPER) - Testimonials placeholder */}
        <Section variant="paper" size="wide">
          <SectionID number="04" name="PROOF" variant="paper" />

          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">
              {proof.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-4">
              {proof.title}
            </h2>
            <p className="text-lg text-black/60">{proof.description}</p>
          </div>
        </Section>

        {/* 05 APPLY (INK) - Application CTA */}
        <Section variant="ink" size="wide">
          <SectionID number="05" name="APPLY" variant="ink" />

          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {apply.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-4">
              {apply.title}
            </h2>
            <p className="text-lg text-white/70 mb-8">{apply.description}</p>

            <Link
              href="/#book"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              <Calendar className="w-4 h-4" />
              {apply.cta}
            </Link>
            <p className="text-sm text-white/40 mt-4">{apply.note}</p>
          </div>
        </Section>

        {/* Back to Programs Link */}
        <Section variant="paper" size="wide" className="py-8">
          <div className="flex justify-center">
            <Link
              href="/#programs"
              className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black/70 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              {t('backToPrograms')}
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
