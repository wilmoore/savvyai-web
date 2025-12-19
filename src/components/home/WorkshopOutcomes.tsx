'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

export default function WorkshopOutcomes() {
  const { t } = useTranslation('homepage');
  const items = t('workshopOutcomes.typicalItems', { returnObjects: true }) as string[];

  return (
    <Section variant="muted">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
        {t('workshopOutcomes.title')}
      </h2>
      <div className="space-y-6">
        <p className="text-lg text-foreground">{t('workshopOutcomes.intro')}</p>

        <div className="mt-6">
          <p className="text-base font-medium text-foreground mb-4">
            {t('workshopOutcomes.typicalTitle')}
          </p>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-lg text-foreground mt-8">{t('workshopOutcomes.emotional')}</p>

        <div className="mt-8 border-l-2 border-primary/30 pl-6">
          <p className="text-lg font-medium text-foreground">
            {t('workshopOutcomes.validOutcome.line1')}
          </p>
          <p className="text-muted-foreground mt-2">{t('workshopOutcomes.validOutcome.line2')}</p>
        </div>
      </div>
    </Section>
  );
}
