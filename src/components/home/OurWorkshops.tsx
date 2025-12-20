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
 * OurWorkshops - Premium Folder Aesthetic Cards
 *
 * Active Card (AI Literate):
 * - Hover lift + Emerald glow effect
 * - Routes to /workshops/ai-literate
 * - "Now Enrolling" status tag
 *
 * Roadmap Cards (Coming Soon):
 * - Grayscale styling, 50% opacity
 * - "Coming Soon" tag, no hover lift
 * - Secondary "Get notified" / "Join waitlist" text link
 */
export default function OurWorkshops() {
  const { t } = useTranslation('homepage');
  const workshops = t('ourWorkshops.workshops', { returnObjects: true }) as Workshop[];

  return (
    <Section variant="paper" size="wide" className="border-b border-black/10">
      <SectionID number="03" name="PROGRAMS" variant="paper" />

      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">
          {t('ourWorkshops.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-ink mb-4">
          {t('ourWorkshops.title')}
        </h2>
        <p className="text-lg text-black/60 max-w-2xl">{t('ourWorkshops.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop, index) => {
          const isActive = workshop.status === 'active';

          const cardContent = (
            <div
              className={cn(
                'relative bg-white border rounded-md p-6 transition-all duration-300 h-full',
                isActive
                  ? 'border-emerald-200 shadow-sm hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 hover:border-emerald-300 cursor-pointer'
                  : 'border-black/10 opacity-60 grayscale'
              )}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <p
                  className={cn(
                    'text-xs font-mono uppercase tracking-widest',
                    isActive ? 'text-emerald-500' : 'text-black/40'
                  )}
                >
                  {String(index + 1).padStart(2, '0')} / {workshop.duration.toUpperCase()}
                </p>
                <span
                  className={cn(
                    'text-xs font-mono uppercase tracking-wider px-2 py-1 rounded',
                    isActive
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                      : 'bg-black/5 text-black/40 border border-black/10'
                  )}
                >
                  {workshop.statusLabel}
                </span>
              </div>

              <h3
                className={cn(
                  'text-xl font-semibold tracking-tight mb-3',
                  isActive ? 'text-ink' : 'text-black/50'
                )}
              >
                {workshop.name}
              </h3>

              <p className={cn('text-sm mb-4', isActive ? 'text-black/60' : 'text-black/40')}>
                {workshop.description}
              </p>

              <div className="space-y-2 mb-4">
                <div
                  className={cn(
                    'flex items-center gap-2 text-sm',
                    isActive ? 'text-black/50' : 'text-black/30'
                  )}
                >
                  <Users className={cn('w-4 h-4', isActive ? 'text-black/40' : 'text-black/20')} />
                  <span>{workshop.audience}</span>
                </div>
                <div
                  className={cn(
                    'flex items-center gap-2 text-sm',
                    isActive ? 'text-black/50' : 'text-black/30'
                  )}
                >
                  <Clock className={cn('w-4 h-4', isActive ? 'text-black/40' : 'text-black/20')} />
                  <span>{workshop.duration}</span>
                </div>
              </div>

              {/* Teams leave with - Structured inventory */}
              <div className="border-t border-black/10 pt-4">
                <p
                  className={cn(
                    'text-xs font-mono uppercase tracking-wider mb-3',
                    isActive ? 'text-black/40' : 'text-black/30'
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
                        isActive ? 'text-black/70' : 'text-black/40'
                      )}
                    >
                      <Check
                        className={cn(
                          'w-4 h-4 mt-0.5 flex-shrink-0',
                          isActive ? 'text-emerald-500' : 'text-black/30'
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
                <div className="mt-4 pt-4 border-t border-black/10">
                  <button className="text-sm text-black/50 hover:text-black/70 underline underline-offset-2 transition-colors">
                    {workshop.waitlistText}
                  </button>
                </div>
              )}

              {/* Arrow indicator for active card */}
              {isActive && (
                <div className="absolute bottom-6 right-6">
                  <ArrowRight className="w-5 h-5 text-emerald-500" />
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
