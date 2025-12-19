'use client';

import { useTranslation } from 'react-i18next';
import { Clock, Users } from 'lucide-react';
import { Section, CTAButton } from '@/components/marketing';

interface Workshop {
  name: string;
  description: string;
  audience: string;
  duration: string;
  outcomes: string[];
}

/**
 * OurWorkshops - Gallery Board Cards
 *
 * Cards styled like high-end studio documents or gallery boards.
 * Paper background with black/10 borders for editorial feel.
 * Avoids anything that looks like "tech" or "code."
 */
export default function OurWorkshops() {
  const { t } = useTranslation('homepage');
  const workshops = t('ourWorkshops.workshops', { returnObjects: true }) as Workshop[];

  return (
    <Section variant="paper" size="wide" className="border-b border-black/10">
      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">
          {t('ourWorkshops.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-ink mb-4">
          {t('ourWorkshops.title')}
        </h2>
        <p className="text-lg text-black/60 max-w-2xl">{t('ourWorkshops.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop, index) => (
          <div
            key={index}
            className="bg-white border border-black/10 rounded-md p-6 hover:border-black/20 hover:shadow-lg transition-all duration-300"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
              Workshop
            </p>

            <h3 className="text-xl font-semibold tracking-tight text-ink mb-3">{workshop.name}</h3>

            <p className="text-sm text-black/60 mb-4">{workshop.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-black/50">
                <Users className="w-4 h-4 text-black/40" />
                <span>{workshop.audience}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-black/50">
                <Clock className="w-4 h-4 text-black/40" />
                <span>{workshop.duration}</span>
              </div>
            </div>

            <div className="border-t border-black/10 pt-4">
              <p className="text-xs font-mono uppercase tracking-wider text-black/40 mb-3">
                Teams leave with
              </p>
              <ul className="space-y-2">
                {workshop.outcomes.map((outcome, idx) => (
                  <li key={idx} className="text-sm text-black/70 flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">&#x2022;</span>
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
