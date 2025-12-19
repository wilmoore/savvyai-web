'use client';

import { useTranslation } from 'react-i18next';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { Section } from '@/components/marketing';

const icons = [Shield, Lock, Eye, FileText];

/**
 * Safety - Dark reassurance section
 *
 * Purpose: Risk removal
 * Job: Calm procurement and legal brains
 *
 * This section should feel boring and competent.
 * Answers: "Is this safe?"
 */
export default function Safety() {
  const { t } = useTranslation('homepage');
  const items = t('safety.items', { returnObjects: true }) as string[];

  return (
    <Section size="full" variant="dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
              Security
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            {t('safety.title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t('safety.intro')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-lg"
              >
                <Icon className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">{t('safety.closing')}</p>
      </div>
    </Section>
  );
}
