'use client';

import { Section } from '@/components/marketing';

/**
 * Business Impact Stats
 * Derived from key value propositions
 */
const STATS = [
  {
    value: '24h',
    label: 'Pilot build time',
    description: 'From concept to working prototype',
  },
  {
    value: '100%',
    label: 'Hands-on',
    description: 'Every participant actively engaged',
  },
  {
    value: '1',
    label: 'Clear next step',
    description: 'Defined action after every session',
  },
  {
    value: '0',
    label: 'Buzzwords',
    description: 'Practical outcomes, not hype',
  },
];

/**
 * StatsGrid - Business Impact Numbers
 *
 * 4-column grid with large bold numbers and mono subtext.
 * Creates a "Facilitator-style" data density effect.
 * Displayed on Ink background for visual impact.
 */
export default function StatsGrid() {
  return (
    <Section variant="ink" size="full">
      <div className="text-center mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
          Business Impact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
          Results, not promises
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-2">
              {stat.value}
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-white/50">{stat.description}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
