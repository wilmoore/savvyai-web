'use client';

import { Section } from '@/components/marketing';

/**
 * Business Impact Stats
 * Derived from key value propositions
 */
const STATS = [
  {
    value: '24h',
    label: 'PILOT BUILD TIME',
    description: 'From concept to working prototype',
  },
  {
    value: '100%',
    label: 'HANDS-ON',
    description: 'Every participant actively engaged',
  },
  {
    value: '1',
    label: 'CLEAR NEXT STEP',
    description: 'Defined action after every session',
  },
  {
    value: '0',
    label: 'BUZZWORDS',
    description: 'Practical outcomes, not hype',
  },
];

/**
 * StatsGrid - "Paper on Desk" Business Impact Numbers
 *
 * Ink background preserves zebra rhythm.
 * Massive white card contains stats with vertical dividers.
 * Vogue-meets-McKinsey editorial aesthetic.
 */
export default function StatsGrid() {
  return (
    <Section variant="ink" size="full">
      {/* Section ID */}
      <div className="mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-white/30">
          [ 10 / RESULTS ]
        </span>
      </div>

      <div className="text-center mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
          Business Impact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-white">
          Results, not promises
        </h2>
      </div>

      {/* Paper Card containing stats */}
      <div className="bg-white rounded-md shadow-lg p-8 md:p-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-black/10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:px-8 first:pl-0 last:pr-0">
              <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-ink mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-black/40 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-black/50">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
