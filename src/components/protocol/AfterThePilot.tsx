'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

interface Option {
  label: string;
  description: string;
}

export default function AfterThePilot() {
  const { t } = useTranslation('protocol');
  const options = t('afterThePilot.options', { returnObjects: true }) as Option[];

  return (
    <Section variant="muted">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
        {t('afterThePilot.title')}
      </h2>
      <div className="space-y-8">
        <p className="text-lg text-foreground">{t('afterThePilot.intro')}</p>

        <div className="space-y-4">
          {options.map((option, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-primary mt-0.5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <div>
                <span className="font-medium text-foreground">{option.label}</span>{' '}
                <span className="text-muted-foreground">{option.description}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg font-medium text-foreground">{t('afterThePilot.closing')}</p>
      </div>
    </Section>
  );
}
