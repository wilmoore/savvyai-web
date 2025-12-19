'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { SectionLabel } from '@/components/layout';

export default function Credibility() {
  const { t } = useTranslation('homepage');

  return (
    <Section size="wide">
      <div className="max-w-4xl">
        <SectionLabel>Why Us</SectionLabel>

        <blockquote className="mb-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-white">
            {t('credibility.content.line1')}
          </p>
        </blockquote>

        <div className="space-y-4 text-white/70">
          <p className="text-base">{t('credibility.content.line2')}</p>
          <p className="text-base font-medium text-white">{t('credibility.content.line3')}</p>
        </div>
      </div>
    </Section>
  );
}
