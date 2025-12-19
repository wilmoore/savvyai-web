'use client';

import { Section } from '@/components/marketing';

/**
 * Stylized text logos with varying Geist Sans weights
 * Creates a "High-Density Wall of Trust" effect
 */
const LOGOS = [
  { name: 'Google', weight: 'font-bold' },
  { name: 'Meta', weight: 'font-semibold' },
  { name: 'Stripe', weight: 'font-medium' },
  { name: 'Airbnb', weight: 'font-semibold' },
  { name: 'McKinsey', weight: 'font-medium' },
  { name: 'Goldman Sachs', weight: 'font-semibold' },
  { name: 'Salesforce', weight: 'font-medium' },
  { name: 'Adobe', weight: 'font-bold' },
  { name: 'Shopify', weight: 'font-semibold' },
  { name: 'HubSpot', weight: 'font-medium' },
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
      {/* Section ID */}
      <div className="mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-white/30">
          [ 01 / TRUST ]
        </span>
      </div>

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
