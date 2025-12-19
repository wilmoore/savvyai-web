'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

export default function HowWeWork() {
  const { t } = useTranslation('homepage');
  const items = t('howWeWork.items', { returnObjects: true }) as string[];

  return (
    <Section variant="muted">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
        {t('howWeWork.title')}
      </h2>
      <div className="space-y-6">
        <p className="text-lg text-foreground">{t('howWeWork.intro')}</p>

        <div className="mt-6">
          <p className="text-base text-foreground mb-4">{t('howWeWork.description')}</p>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-1">
          <p className="text-lg text-foreground">{t('howWeWork.closing.line1')}</p>
          <p className="text-lg text-foreground">{t('howWeWork.closing.line2')}</p>
        </div>
      </div>
    </Section>
  );
}
