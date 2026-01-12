'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Check, X, ArrowRight, Play, Calendar, ExternalLink } from 'lucide-react';
import { Header, Footer, Section, SectionID } from '@/components/marketing';
import { EXTERNAL_LINKS } from '@/lib/constants';

/**
 * Workshops Directory Page
 *
 * Job: Show what's running now + comprehensive delivery details.
 * This is the SINGLE SOURCE OF TRUTH for workshop information.
 * Per ADR-036: All "what happens when" content lives here, not homepage.
 *
 * Editorial Noir design system:
 * - Zebra rhythm: Ink Black (#050505) / Paper White (#FFFFFF)
 * - Typography: Geist Sans (headings), Geist Mono (metadata)
 * - Accent: Emerald (#10B981) for CTAs only
 *
 * Section Order (Perfect Alternating Zebra):
 * 01 WORKSHOPS (INK) - Hero
 * 02 OUTCOMES (PAPER) - What participants leave with
 * 03 AUDIENCE (INK) - Who it's for / not for
 * 04 EXPERIENCE (PAPER) - What happens in a workshop
 * 05 SCHEDULE (INK) - Current workshop listing
 * 06 FAQ (PAPER) - Common questions
 * 07 SYSTEM (INK) - Link to AI Literate system
 */
export default function WorkshopsPage() {
  const { t } = useTranslation('workshops');

  const hero = t('directory.hero', { returnObjects: true }) as {
    label: string;
    title: string;
    subtitle: string;
    tagline: string;
    cta: string;
  };

  const outcomes = t('directory.outcomes', { returnObjects: true }) as {
    label: string;
    title: string;
    items: string[];
  };

  const audience = t('directory.audience', { returnObjects: true }) as {
    forLabel: string;
    forItems: string[];
    notForLabel: string;
    notForItems: string[];
  };

  const schedule = t('directory.schedule', { returnObjects: true }) as {
    label: string;
    title: string;
    workshops: { title: string; badge: string }[];
    watchReplay: string;
    viewSchedule: string;
    note: string;
    replayNote: string;
  };

  const system = t('directory.system', { returnObjects: true }) as {
    label: string;
    title: string;
    cta: string;
    secondary: string;
  };

  const experience = t('directory.experience', { returnObjects: true }) as {
    label: string;
    title: string;
    intro: string;
    clarification: string;
    description: string;
    outcome: string;
    aside: string;
  };

  const faq = t('directory.faq', { returnObjects: true }) as {
    label: string;
    title: string;
    items: { question: string; answer: string }[];
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 01 WORKSHOPS (INK) - Hero */}
        <Section variant="ink" size="wide" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <SectionID number="01" name="WORKSHOPS" variant="ink" />

          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {hero.label}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-white mb-6">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4">{hero.subtitle}</p>
            <p className="text-base text-white/50 mb-8">{hero.tagline}</p>

            <a
              href="#schedule"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <Play className="w-4 h-4" />
              {hero.cta}
            </a>
          </div>
        </Section>

        {/* 02 OUTCOMES (PAPER) - What participants leave with */}
        <Section variant="paper" size="wide">
          <SectionID number="02" name="OUTCOMES" variant="paper" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
            {outcomes.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-10 max-w-2xl">
            {outcomes.title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            {outcomes.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-emerald-50/50 border border-emerald-100 rounded-md"
              >
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-sm text-black/70">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 03 AUDIENCE (INK) - Who it's for / not for */}
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

        {/* 04 EXPERIENCE (PAPER) - What happens in a workshop */}
        <Section variant="paper" size="wide">
          <SectionID number="04" name="EXPERIENCE" variant="paper" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
            {experience.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-6 max-w-2xl">
            {experience.title}
          </h2>

          <div className="max-w-2xl space-y-4">
            <p className="text-lg text-black/70 font-medium">{experience.intro}</p>
            <p className="text-base text-black/60">{experience.clarification}</p>
            <p className="text-base text-black/60">{experience.description}</p>
            <p className="text-base text-black/70 font-medium">{experience.outcome}</p>
            <p className="text-sm text-black/50 italic border-l-2 border-emerald-500/30 pl-4 mt-6">
              {experience.aside}
            </p>
          </div>
        </Section>

        {/* 05 SCHEDULE (INK) - Current workshop listing */}
        <Section variant="ink" size="wide" id="schedule">
          <SectionID number="05" name="SCHEDULE" variant="ink" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
            {schedule.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-10">
            {schedule.title}
          </h2>

          <div className="space-y-6 max-w-2xl">
            {schedule.workshops.map((workshop, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{workshop.title}</h3>
                    <span className="inline-block text-xs font-mono uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {workshop.badge}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={EXTERNAL_LINKS.AI_BOOTCAMP_REPLAY}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                    >
                      <Play className="w-4 h-4" />
                      {schedule.watchReplay}
                    </Link>
                    <Link
                      href={EXTERNAL_LINKS.AI_BOOTCAMP_SCHEDULE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:border-white/40 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      {schedule.viewSchedule}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-xs text-white/50 mt-3">{schedule.replayNote}</p>
          </div>

          <p className="text-sm text-white/50 mt-6">{schedule.note}</p>
        </Section>

        {/* 06 FAQ (PAPER) - Common questions */}
        <Section variant="paper" size="wide">
          <SectionID number="06" name="FAQ" variant="paper" />

          <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
            {faq.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-10">
            {faq.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {faq.items.map((item, index) => (
              <div key={index} className="p-6 bg-paper-secondary border border-black/10 rounded-md">
                <h3 className="text-base font-semibold text-ink mb-3">{item.question}</h3>
                <p className="text-sm text-black/60">{item.answer}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 07 SYSTEM (INK) - Link to AI Literate system */}
        <Section variant="ink" size="wide">
          <SectionID number="07" name="SYSTEM" variant="ink" />

          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              {system.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-8">
              {system.title}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={EXTERNAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                {system.cta}
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href="/literate"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:border-white/40 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                {system.secondary}
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
