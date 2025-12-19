'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

export default function Credibility() {
  const { t } = useTranslation('homepage');

  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
        {t('credibility.title')}
      </h2>
      <div className="space-y-6">
        <p className="text-xl text-muted-foreground">{t('credibility.content.line1')}</p>
        <p className="text-base text-muted-foreground">{t('credibility.content.line2')}</p>
        <p className="text-base text-foreground font-medium">{t('credibility.content.line3')}</p>
      </div>
    </Section>
  );
}
