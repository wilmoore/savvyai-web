'use client';

import { Section } from '@/components/marketing';

/**
 * Placeholder company data for the Trust Bar
 * Replace with actual client logos when available
 */
const COMPANIES = [
  'Acme Corp',
  'Stellar Inc',
  'Horizon Group',
  'Nova Partners',
  'Apex Digital',
  'Catalyst Co',
  'Meridian Labs',
  'Vertex Systems',
  'Prism Ventures',
  'Atlas Industries',
];

/**
 * TrustBar - High-Density Logo Wall
 *
 * Displays company logos in a grid to establish credibility.
 * On Paper (light) background: Black text/logos at 40% opacity
 * On Ink (dark) background: White text/logos at 40% opacity
 *
 * TODO: Replace placeholder text with actual company logos
 */
export default function TrustBar() {
  return (
    <Section variant="paper" size="full" className="py-12 md:py-16 border-b border-black/10">
      <div className="text-center mb-8">
        <p className="text-xs font-mono uppercase tracking-widest text-black/40">
          Teams from the world&apos;s most innovative companies
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
        {COMPANIES.map((company) => (
          <div
            key={company}
            className="text-lg md:text-xl font-semibold text-black/30 hover:text-black/50 transition-colors"
          >
            {company}
          </div>
        ))}
      </div>
    </Section>
  );
}
