'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

export default function WorkshopsExplained() {
  const { t } = useTranslation('homepage');

  return (
    <Section>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
        {t('workshopsExplained.title')}
      </h2>
      <div className="space-y-6">
        <p className="text-lg font-medium text-foreground">{t('workshopsExplained.intro')}</p>
        <p className="text-lg text-muted-foreground">{t('workshopsExplained.clarification')}</p>
        <p className="text-lg text-foreground">{t('workshopsExplained.description')}</p>
        <p className="text-lg text-foreground">{t('workshopsExplained.outcome')}</p>
        <p className="text-base text-muted-foreground italic">{t('workshopsExplained.aside')}</p>
      </div>
    </Section>
  );
}
