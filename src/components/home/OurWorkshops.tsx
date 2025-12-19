'use client';

import { useTranslation } from 'react-i18next';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Section, CTAButton } from '@/components/marketing';
import { BandLabel, ArtifactLabel } from '@/components/layout';

interface Workshop {
  name: string;
  description: string;
  audience: string;
  duration: string;
  outcomes: string[];
}

/**
 * OurWorkshops - Commercial clarity section
 *
 * Purpose: Commercial clarity
 * Job: Show what you actually sell
 *
 * This section must appear before any deep explanation.
 * It answers: "What do you run?"
 */
export default function OurWorkshops() {
  const { t } = useTranslation('homepage');
  const workshops = t('ourWorkshops.workshops', { returnObjects: true }) as Workshop[];

  return (
    <Section size="wide">
      <div className="mb-12">
        <BandLabel className="mb-4">{t('ourWorkshops.label')}</BandLabel>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
          {t('ourWorkshops.title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">{t('ourWorkshops.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-emerald-200 hover:shadow-sm transition-all"
          >
            <ArtifactLabel className="inline-block mb-4 bg-emerald-50 px-2 py-1 rounded">
              Workshop
            </ArtifactLabel>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">{workshop.name}</h3>

            <p className="text-sm text-gray-600 mb-4">{workshop.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Users className="w-4 h-4 text-emerald-500" />
                <span>{workshop.audience}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>{workshop.duration}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Teams leave with:
              </p>
              <ul className="space-y-1">
                {workshop.outcomes.map((outcome, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <CTAButton href="#book" variant="primary">
          {t('ourWorkshops.cta')}
        </CTAButton>
      </div>
    </Section>
  );
}
