'use client';

import { useTranslation } from 'react-i18next';
import { Clock, Users, Check } from 'lucide-react';
import { Section, SectionID, CTAButton } from '@/components/marketing';

interface Workshop {
  name: string;
  description: string;
  audience: string;
  duration: string;
  outcomes: string[];
}

/**
 * OurWorkshops - Premium Folder Aesthetic Cards
 *
 * Cards styled like high-end studio folders with crisp borders.
 * Geist Mono for tags, emerald checkmarks for outcomes.
 * Sharp minimal shadows for "printed card" feel.
 */
export default function OurWorkshops() {
  const { t } = useTranslation('homepage');
  const workshops = t('ourWorkshops.workshops', { returnObjects: true }) as Workshop[];

  return (
    <Section variant="paper" size="wide" className="border-b border-black/10">
      <SectionID number="03" name="PROGRAMS" variant="paper" />

      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">
          {t('ourWorkshops.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-ink mb-4">
          {t('ourWorkshops.title')}
        </h2>
        <p className="text-lg text-black/60 max-w-2xl">{t('ourWorkshops.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop, index) => (
          <div
            key={index}
            className="bg-white border border-[#E2E8F0] rounded-md p-6 shadow-sm hover:shadow-md hover:border-black/20 transition-all duration-300"
          >
            {/* Workshop tag in Geist Mono */}
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
              {String(index + 1).padStart(2, '0')} / {workshop.duration.toUpperCase()}
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

            {/* Teams leave with - Structured inventory */}
            <div className="border-t border-black/10 pt-4">
              <p className="text-xs font-mono uppercase tracking-wider text-black/40 mb-3">
                Teams leave with
              </p>
              <ul className="space-y-2">
                {workshop.outcomes.map((outcome, idx) => (
                  <li key={idx} className="text-sm text-black/70 flex items-start gap-2">
                    <Check
                      className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
                      strokeWidth={2.5}
                    />
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
