'use client';

import { useTranslation } from 'react-i18next';
import { Section } from '@/components/marketing';
import { BandLabel, ArtifactLabel } from '@/components/layout';

interface Deliverable {
  number: string;
  name: string;
  description: string;
}

export default function Deliverables() {
  const { t } = useTranslation('protocol');
  const items = t('deliverables.items', { returnObjects: true }) as Deliverable[];

  return (
    <Section variant="contrast" size="wide">
      <ArtifactLabel className="block mb-4">Deliverables</ArtifactLabel>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-10">
        {t('deliverables.title')}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.number}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm hover:border-gray-300 transition-all"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-semibold font-mono mb-4">
              {item.number}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
