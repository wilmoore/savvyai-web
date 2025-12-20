'use client';

import { Section, SectionID } from '@/components/marketing';

/**
 * Stylized text logos with varying Geist Sans weights
 * Creates a "High-Density Wall of Trust" effect
 *
 * Companies derived from founders' backgrounds:
 * Apple, Starbucks, Nordstrom, HP, Gap Inc, Aetna,
 * Shutterstock, MapQuest, DavidsTea, Holt Renfrew
 */
const LOGOS = [
  { name: 'Apple', weight: 'font-bold' },
  { name: 'Starbucks', weight: 'font-semibold' },
  { name: 'Nordstrom', weight: 'font-semibold' },
  { name: 'HP', weight: 'font-bold' },
  { name: 'Gap Inc', weight: 'font-medium' },
  { name: 'Aetna', weight: 'font-semibold' },
  { name: 'Shutterstock', weight: 'font-medium' },
  { name: 'MapQuest', weight: 'font-medium' },
  { name: 'DavidsTea', weight: 'font-medium' },
  { name: 'Holt Renfrew', weight: 'font-semibold' },
];

/**
 * TrustBar - High-Density Logo Wall
 *
 * Stylized text logos in a tight 5-column grid.
 * Monochrome white at 20% opacity for subtle authority.
 * Creates a "Seal of Approval" block, not a list of names.
 */
export default function TrustBar() {
  return (
    <Section variant="ink" size="full" className="py-10 md:py-12 border-b border-white/10">
      <SectionID number="01" name="TRUST" variant="ink" />

      <div className="text-center mb-8">
        <p className="text-xs font-mono uppercase tracking-widest text-white/40">
          Teams from the world&apos;s most innovative companies
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-6 items-center justify-items-center max-w-4xl mx-auto">
        {LOGOS.map((logo) => (
          <div
            key={logo.name}
            className={`text-sm md:text-base ${logo.weight} tracking-tight text-white/20 whitespace-nowrap`}
          >
            {logo.name}
          </div>
        ))}
      </div>
    </Section>
  );
}
