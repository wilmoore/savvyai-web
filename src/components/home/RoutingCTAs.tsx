'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Play } from 'lucide-react';
import { Section, SectionID, CTAButton } from '@/components/marketing';
import { EXTERNAL_LINKS } from '@/lib/constants';

/**
 * RoutingCTAs - Primary Navigation Section
 *
 * Clear routing to the three main destinations:
 * - View Workshops → /workshops (see delivery options)
 * - Explore AI Literate → /literate (understand the system)
 * - Message on LinkedIn → external (direct contact)
 *
 * This is the ONLY sales/conversion pressure on the homepage.
 * All delivery detail lives on /workshops.
 */
export default function RoutingCTAs() {
  const { t } = useTranslation('homepage');

  return (
    <Section variant="paper" size="wide" className="border-t border-black/10">
      <SectionID number="04" name="NEXT" variant="paper" />

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
          {t('routing.label')}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-[1.1] text-ink mb-4">
          {t('routing.title')}
        </h2>
        <p className="text-base text-black/60 mb-10">{t('routing.subtitle')}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/workshops" variant="primary-accent">
            <Play className="w-4 h-4" />
            {t('routing.cta.workshops')}
          </CTAButton>

          <Link
            href="/literate"
            className="inline-flex items-center justify-center gap-2 bg-white border border-black/20 hover:border-black/40 text-ink font-medium py-3 px-6 rounded-md transition-colors"
          >
            {t('routing.cta.literate')}
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={EXTERNAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white border border-black/20 hover:border-black/40 text-ink font-medium py-3 px-6 rounded-md transition-colors"
          >
            {t('routing.cta.linkedin')}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
