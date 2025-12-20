'use client';

import { useTranslation } from 'react-i18next';
import { Section, SectionID } from '@/components/marketing';

interface Step {
  number: string;
  name: string;
  description: string;
}

/**
 * Phase tags for each step - Creates architectural blueprint feel
 */
const PHASE_TAGS = ['PHASE: AUDIT', 'PHASE: DESIGN', 'PHASE: BUILD', 'PHASE: DEPLOY'];

/**
 * HowWeWork - Technical Blueprint Visualization
 *
 * Step-by-step flow rendered as an engineered process diagram.
 * Ink black background with dashed connector lines between steps.
 * PHASE tags above each step for systems thinking aesthetic.
 */
export default function HowWeWork() {
  const { t } = useTranslation('homepage');
  const steps = t('howTeamsWork.steps', { returnObjects: true }) as Step[];

  return (
    <Section size="wide" variant="ink">
      <SectionID number="04" name="PROCESS" variant="ink" />

      <div className="text-center mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
          {t('howTeamsWork.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-white">
          {t('howTeamsWork.title')}
        </h2>
      </div>

      {/* Desktop: Horizontal blueprint with dashed connectors */}
      <div className="hidden md:block">
        <div className="relative flex items-start justify-between max-w-4xl mx-auto">
          {/* Dashed connector line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px border-t border-dashed border-white/20" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center w-40">
              {/* Phase tag */}
              <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/70 mb-3">
                {PHASE_TAGS[index] || `PHASE: ${index + 1}`}
              </p>

              {/* Step circle */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-white/5 border border-white/20 text-white flex items-center justify-center text-lg font-mono font-semibold mb-4">
                {step.number}
              </div>

              {/* Step content */}
              <h3 className="text-base font-semibold text-white mb-2">{step.name}</h3>
              <p className="text-sm text-white/50">{step.description}</p>

              {/* Connection dot */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 -right-4 w-2 h-2 rounded-full bg-emerald-500/50" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical blueprint with vertical line */}
      <div className="md:hidden">
        <div className="relative pl-8">
          {/* Vertical connector line */}
          <div className="absolute top-6 bottom-6 left-4 w-px border-l border-dashed border-white/20" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative flex items-start gap-4 mb-8 last:mb-0">
              {/* Step circle */}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/20 text-white flex items-center justify-center text-sm font-mono font-semibold -ml-5">
                {step.number}
              </div>

              {/* Step content */}
              <div className="pt-1">
                <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/70 mb-1">
                  {PHASE_TAGS[index] || `PHASE: ${index + 1}`}
                </p>
                <h3 className="text-base font-semibold text-white mb-1">{step.name}</h3>
                <p className="text-sm text-white/50">{step.description}</p>
              </div>

              {/* Connection dot */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-4 w-2 h-2 rounded-full bg-emerald-500/50 -ml-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
