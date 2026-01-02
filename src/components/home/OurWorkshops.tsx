'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Clock, Users, Check, ArrowRight } from 'lucide-react';
import { Section, SectionID, CTAButton } from '@/components/marketing';
import { cn } from '@/lib/utils';

interface Workshop {
  name: string;
  description: string;
  audience: string;
  duration: string;
  outcomes: string[];
  status: 'active' | 'coming-soon';
  statusLabel: string;
  href?: string;
  waitlistText?: string;
}

/**
 * OurWorkshops - AI Literate Format Cards
 *
 * Two-card layout presenting AI Literate formats:
 *
 * Card 01: AI Literate · Bootcamp
 * - Live virtual training (public, cohort-based)
 * - "Now Enrolling" status
 * - Routes to /workshops/ai-literate
 *
 * Card 02: AI Literate · Team Session
 * - Private, company-specific sessions
 * - "Now Booking" status
 * - Routes to /contact
 *
 * Both cards use active styling (emerald glow, hover lift).
 */
export default function OurWorkshops() {
  const { t } = useTranslation('homepage');
  const workshops = t('ourWorkshops.workshops', { returnObjects: true }) as Workshop[];

  return (
    <Section variant="ink" size="full" className="border-b border-white/10">
      <SectionID number="03" name="PROGRAMS" variant="ink" />

      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
          {t('ourWorkshops.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-white mb-4">
          {t('ourWorkshops.title')}
        </h2>
        <p className="text-lg text-white/60 max-w-2xl">{t('ourWorkshops.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {workshops.map((workshop, index) => {
          const isActive = workshop.status === 'active';

          const cardContent = (
            <div
              className={cn(
                'relative bg-white/5 border rounded-md p-6 transition-all duration-300 h-full backdrop-blur-sm',
                isActive
                  ? 'border-emerald-500/30 shadow-sm hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 hover:border-emerald-400/50 cursor-pointer'
                  : 'border-white/10 opacity-50 grayscale'
              )}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <p
                  className={cn(
                    'text-xs font-mono uppercase tracking-widest',
                    isActive ? 'text-emerald-400' : 'text-white/40'
                  )}
                >
                  {String(index + 1).padStart(2, '0')} / {workshop.duration.toUpperCase()}
                </p>
                <span
                  className={cn(
                    'text-xs font-mono uppercase tracking-wider px-2 py-1 rounded',
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-white/5 text-white/40 border border-white/10'
                  )}
                >
                  {workshop.statusLabel}
                </span>
              </div>

              <h3
                className={cn(
                  'text-xl font-semibold tracking-tight mb-3',
                  isActive ? 'text-white' : 'text-white/50'
                )}
              >
                {workshop.name}
              </h3>

              <p className={cn('text-sm mb-4', isActive ? 'text-white/60' : 'text-white/40')}>
                {workshop.description}
              </p>

              <div className="space-y-2 mb-4">
                <div
                  className={cn(
                    'flex items-center gap-2 text-sm',
                    isActive ? 'text-white/50' : 'text-white/30'
                  )}
                >
                  <Users className={cn('w-4 h-4', isActive ? 'text-white/40' : 'text-white/20')} />
                  <span>{workshop.audience}</span>
                </div>
                <div
                  className={cn(
                    'flex items-center gap-2 text-sm',
                    isActive ? 'text-white/50' : 'text-white/30'
                  )}
                >
                  <Clock className={cn('w-4 h-4', isActive ? 'text-white/40' : 'text-white/20')} />
                  <span>{workshop.duration}</span>
                </div>
              </div>

              {/* Teams leave with - Structured inventory */}
              <div className="border-t border-white/10 pt-4">
                <p
                  className={cn(
                    'text-xs font-mono uppercase tracking-wider mb-3',
                    isActive ? 'text-white/40' : 'text-white/30'
                  )}
                >
                  Teams leave with
                </p>
                <ul className="space-y-2">
                  {workshop.outcomes.map((outcome, idx) => (
                    <li
                      key={idx}
                      className={cn(
                        'text-sm flex items-start gap-2',
                        isActive ? 'text-white/70' : 'text-white/40'
                      )}
                    >
                      <Check
                        className={cn(
                          'w-4 h-4 mt-0.5 flex-shrink-0',
                          isActive ? 'text-emerald-400' : 'text-white/30'
                        )}
                        strokeWidth={2.5}
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Waitlist link for coming-soon cards */}
              {!isActive && workshop.waitlistText && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <button className="text-sm text-white/50 hover:text-white/70 underline underline-offset-2 transition-colors">
                    {workshop.waitlistText}
                  </button>
                </div>
              )}

              {/* Arrow indicator for active card */}
              {isActive && (
                <div className="absolute bottom-6 right-6">
                  <ArrowRight className="w-5 h-5 text-emerald-400" />
                </div>
              )}
            </div>
          );

          // Wrap active cards in Link
          if (isActive && workshop.href) {
            return (
              <Link key={index} href={workshop.href} className="block">
                {cardContent}
              </Link>
            );
          }

          return <div key={index}>{cardContent}</div>;
        })}
      </div>

      {/* Primary CTA - View AI Literate Curriculum */}
      <div className="mt-10 flex justify-center">
        <CTAButton href="/workshops/ai-literate" variant="primary">
          {t('ourWorkshops.primaryCta')}
        </CTAButton>
      </div>
    </Section>
  );
}
