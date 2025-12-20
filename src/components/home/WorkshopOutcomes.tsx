'use client';

import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { Section, SectionID } from '@/components/marketing';
import { OutcomeBlock } from '@/components/layout';

/**
 * Visual Inventory SVG Components
 * Decorative mini-UIs representing different artifact types
 */

/** Retail SOP Blueprint - Checklist UI */
function ChecklistUI() {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      aria-hidden="true"
    >
      {/* Card background */}
      <rect x="0" y="0" width="120" height="100" rx="6" className="fill-black/5" />
      {/* Header bar */}
      <rect x="8" y="8" width="60" height="6" rx="2" className="fill-emerald-500/20" />
      {/* Checklist items */}
      <rect x="8" y="22" width="8" height="8" rx="2" className="fill-emerald-500/30" />
      <rect x="22" y="24" width="50" height="4" rx="1" className="fill-black/10" />
      <rect x="8" y="36" width="8" height="8" rx="2" className="fill-emerald-500/30" />
      <rect x="22" y="38" width="40" height="4" rx="1" className="fill-black/10" />
      <rect x="8" y="50" width="8" height="8" rx="2" className="fill-emerald-500/30" />
      <rect x="22" y="52" width="55" height="4" rx="1" className="fill-black/10" />
      <rect x="8" y="64" width="8" height="8" rx="2" className="fill-black/10" />
      <rect x="22" y="66" width="35" height="4" rx="1" className="fill-black/10" />
      {/* Checkmarks */}
      <path
        d="M10 26L12 28L16 24"
        className="stroke-emerald-500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 40L12 42L16 38"
        className="stroke-emerald-500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 54L12 56L16 52"
        className="stroke-emerald-500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Progress bar */}
      <rect x="8" y="82" width="104" height="4" rx="2" className="fill-black/10" />
      <rect x="8" y="82" width="78" height="4" rx="2" className="fill-emerald-500/30" />
    </svg>
  );
}

/** Engineering Workflow - Node Diagram UI */
function NodeDiagramUI() {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      aria-hidden="true"
    >
      {/* Card background */}
      <rect x="0" y="0" width="120" height="100" rx="6" className="fill-black/5" />
      {/* Connection lines */}
      <path
        d="M30 30L60 50L90 30"
        className="stroke-black/15"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M60 50L60 70" className="stroke-black/15" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M30 70L60 70L90 70"
        className="stroke-black/15"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Nodes */}
      <circle
        cx="30"
        cy="30"
        r="10"
        className="fill-emerald-500/20 stroke-emerald-500/40"
        strokeWidth="1.5"
      />
      <circle
        cx="90"
        cy="30"
        r="10"
        className="fill-emerald-500/20 stroke-emerald-500/40"
        strokeWidth="1.5"
      />
      <circle
        cx="60"
        cy="50"
        r="12"
        className="fill-emerald-500/30 stroke-emerald-500/50"
        strokeWidth="1.5"
      />
      <circle cx="30" cy="70" r="8" className="fill-black/10 stroke-black/20" strokeWidth="1.5" />
      <circle cx="60" cy="70" r="8" className="fill-black/10 stroke-black/20" strokeWidth="1.5" />
      <circle cx="90" cy="70" r="8" className="fill-black/10 stroke-black/20" strokeWidth="1.5" />
      {/* Node labels */}
      <rect x="20" y="86" width="20" height="3" rx="1" className="fill-black/10" />
      <rect x="50" y="86" width="20" height="3" rx="1" className="fill-black/10" />
      <rect x="80" y="86" width="20" height="3" rx="1" className="fill-black/10" />
    </svg>
  );
}

/** AI Prompt Library - Code Block UI */
function CodeBlockUI() {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      aria-hidden="true"
    >
      {/* Card background */}
      <rect x="0" y="0" width="120" height="100" rx="6" className="fill-black/5" />
      {/* Code editor header */}
      <rect x="0" y="0" width="120" height="16" rx="6" className="fill-black/10" />
      <circle cx="12" cy="8" r="3" className="fill-black/20" />
      <circle cx="22" cy="8" r="3" className="fill-black/20" />
      <circle cx="32" cy="8" r="3" className="fill-black/20" />
      {/* Code lines */}
      <rect x="8" y="24" width="16" height="4" rx="1" className="fill-emerald-500/40" />
      <rect x="28" y="24" width="50" height="4" rx="1" className="fill-black/15" />
      <rect x="16" y="34" width="12" height="4" rx="1" className="fill-emerald-500/30" />
      <rect x="32" y="34" width="40" height="4" rx="1" className="fill-black/10" />
      <rect x="16" y="44" width="20" height="4" rx="1" className="fill-black/15" />
      <rect x="40" y="44" width="30" height="4" rx="1" className="fill-emerald-500/20" />
      <rect x="16" y="54" width="8" height="4" rx="1" className="fill-black/10" />
      <rect x="28" y="54" width="55" height="4" rx="1" className="fill-black/10" />
      <rect x="8" y="64" width="16" height="4" rx="1" className="fill-emerald-500/40" />
      {/* Cursor line */}
      <rect x="8" y="74" width="60" height="4" rx="1" className="fill-black/10" />
      <rect x="68" y="74" width="2" height="6" className="fill-emerald-500/50" />
      {/* Line numbers */}
      <rect x="2" y="24" width="4" height="44" className="fill-black/5" />
    </svg>
  );
}

/**
 * Artifact Card with SVG visualization
 */
interface ArtifactCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function ArtifactCard({ title, description, children }: ArtifactCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-paper-secondary border border-black/10 rounded-md">
      {children}
      <div>
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="text-xs text-black/50 mt-1">{description}</p>
      </div>
    </div>
  );
}

/**
 * WorkshopOutcomes - Artifact Inventory
 *
 * 2-column "Deliverables Inventory" styled like high-end studio documents.
 * Bold emerald checkmarks establish credibility.
 * Proves Savvy produces "Results, not Hype."
 */
export default function WorkshopOutcomes() {
  const { t } = useTranslation('homepage');
  const items = t('workshopOutcomes.typicalItems', { returnObjects: true }) as string[];

  return (
    <Section variant="paper" size="wide">
      <SectionID number="06" name="ARTIFACTS" variant="paper" />

      <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
        {t('workshopOutcomes.artifactLabel')}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-ink mb-6">
        {t('workshopOutcomes.title')}
      </h2>
      <p className="text-lg text-black/60 mb-10">{t('workshopOutcomes.intro')}</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left column: Deliverables Inventory */}
        <div className="bg-paper-secondary border border-black/10 rounded-md p-6">
          <p className="text-xs font-mono uppercase tracking-wider text-black/40 mb-6">
            {t('workshopOutcomes.typicalTitle')}
          </p>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  strokeWidth={2.5}
                />
                <span className="text-black/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: Emotional + Valid outcome */}
        <div className="space-y-6">
          <p className="text-lg text-black/70 leading-relaxed">{t('workshopOutcomes.emotional')}</p>

          <OutcomeBlock>
            <p className="text-base font-semibold text-ink">
              {t('workshopOutcomes.validOutcome.line1')}
            </p>
            <p className="text-sm text-black/50 mt-2">{t('workshopOutcomes.validOutcome.line2')}</p>
          </OutcomeBlock>
        </div>
      </div>

      {/* Visual Inventory - Artifact Type Cards */}
      <div className="mt-12 pt-8 border-t border-black/10">
        <p className="text-xs font-mono uppercase tracking-wider text-black/40 mb-6">
          {t('workshopOutcomes.exampleArtifactsLabel')}
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <ArtifactCard
            title={t('workshopOutcomes.artifacts.retailSOP.title')}
            description={t('workshopOutcomes.artifacts.retailSOP.description')}
          >
            <ChecklistUI />
          </ArtifactCard>
          <ArtifactCard
            title={t('workshopOutcomes.artifacts.engineeringWorkflow.title')}
            description={t('workshopOutcomes.artifacts.engineeringWorkflow.description')}
          >
            <NodeDiagramUI />
          </ArtifactCard>
          <ArtifactCard
            title={t('workshopOutcomes.artifacts.aiPromptLibrary.title')}
            description={t('workshopOutcomes.artifacts.aiPromptLibrary.description')}
          >
            <CodeBlockUI />
          </ArtifactCard>
        </div>
      </div>
    </Section>
  );
}
