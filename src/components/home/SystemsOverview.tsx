'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionID } from '@/components/marketing';
import { cn } from '@/lib/utils';

interface System {
  name: string;
  purpose: string;
  href: string;
  status: 'active' | 'coming-soon';
}

/**
 * SystemsOverview - Large, High-Weight System Cards
 *
 * These are PRIMARY ASSETS, not secondary navigation.
 * Visual gravity matches the importance of what they represent:
 * systems that everything else runs on.
 *
 * Displays the three Śavvy AI systems:
 * - AI Literate™
 * - Product Bakery
 * - Onboarding System
 *
 * Each card shows ONLY:
 * - System name (large, bold)
 * - One-line purpose (system-level, no delivery language)
 * - "Explore system →" CTA
 *
 * FORBIDDEN in cards:
 * - "workshop"
 * - "bootcamp"
 * - "what you get"
 * - steps, timelines, promises
 *
 * Per ADR-036: Homepage shows systems, not delivery mechanics.
 */
export default function SystemsOverview() {
  const { t } = useTranslation('homepage');
  const systems = t('systemsOverview.systems', { returnObjects: true }) as System[];

  return (
    <Section variant="paper" size="full" className="border-b border-black/10">
      <SectionID number="02" name="SYSTEMS" variant="paper" />

      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
          {t('systemsOverview.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-ink mb-4">
          {t('systemsOverview.title')}
        </h2>
        <p className="text-lg text-black/60 max-w-2xl">{t('systemsOverview.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {systems.map((system, index) => {
          const isActive = system.status === 'active';

          const cardContent = (
            <div
              className={cn(
                'relative border rounded-lg p-8 transition-all duration-300 h-full min-h-[280px] flex flex-col',
                isActive
                  ? 'bg-ink text-white border-ink hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1 cursor-pointer'
                  : 'bg-paper-secondary border-black/10 opacity-60'
              )}
            >
              {/* System number + status */}
              <div className="flex items-center justify-between mb-6">
                <p
                  className={cn(
                    'text-xs font-mono uppercase tracking-widest',
                    isActive ? 'text-emerald-400' : 'text-black/40'
                  )}
                >
                  {String(index + 1).padStart(2, '0')} / SYSTEM
                </p>
                {isActive && (
                  <span className="text-xs font-mono uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Active
                  </span>
                )}
                {!isActive && (
                  <span className="text-xs font-mono uppercase tracking-wider px-2 py-1 rounded bg-black/5 text-black/40 border border-black/10">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* System name - large, bold */}
              <h3
                className={cn(
                  'text-2xl md:text-3xl font-bold tracking-tight mb-4',
                  isActive ? 'text-white' : 'text-black/50'
                )}
              >
                {system.name}
              </h3>

              {/* Purpose - system-level, no delivery language */}
              <p
                className={cn(
                  'text-base leading-relaxed flex-grow',
                  isActive ? 'text-white/70' : 'text-black/40'
                )}
              >
                {system.purpose}
              </p>

              {/* CTA for active cards */}
              {isActive && (
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm font-medium text-emerald-400">Explore system</span>
                  <ArrowRight className="w-5 h-5 text-emerald-400" />
                </div>
              )}
            </div>
          );

          // Wrap active cards in Link
          if (isActive) {
            return (
              <Link key={index} href={system.href} className="block">
                {cardContent}
              </Link>
            );
          }

          return <div key={index}>{cardContent}</div>;
        })}
      </div>
    </Section>
  );
}
