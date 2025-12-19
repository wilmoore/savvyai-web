'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';

export default function Comparison() {
  const { t } = useTranslation('protocol');
  const oldWayItems = t('comparison.oldWay.items', {
    returnObjects: true,
  }) as string[];
  const savvyWayItems = t('comparison.savvyWay.items', {
    returnObjects: true,
  }) as string[];

  return (
    <Section variant="muted">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 text-center">
        {t('comparison.title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-background border border-border rounded-lg p-6 md:p-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            {t('comparison.oldWay.title')}
          </h3>
          <ul className="space-y-4">
            {oldWayItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-muted-foreground/50 mt-0.5 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
            {t('comparison.savvyWay.title')}
          </h3>
          <ul className="space-y-4">
            {savvyWayItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-foreground">
                <span className="text-primary mt-0.5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
