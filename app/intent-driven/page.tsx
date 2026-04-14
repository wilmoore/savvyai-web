'use client';

import { useTranslation } from 'react-i18next';
import { Header, Footer, Section, SectionID, CTAButton } from '@/components/marketing';

const ensureString = (value: unknown, fallback: string) =>
  typeof value === 'string' ? value : fallback;
const ensureObject = (value: unknown) =>
  value && typeof value === 'object' ? (value as Record<string, unknown>) : {};

export default function IntentDrivenPage() {
  const { t } = useTranslation('intent-driven');

  const rawHero = ensureObject(t('hero', { returnObjects: true }));
  const hero = {
    label: ensureString(rawHero.label, 'Agentic Software Engineering'),
    title: ensureString(rawHero.title, 'Intent-Driven Engineering'),
    description: ensureString(
      rawHero.description,
      'Design and build production-grade agents with clear ownership, routing, and safeguards.'
    ),
  };

  const rawPlaybook = ensureObject(t('playbook', { returnObjects: true }));
  const playbook = {
    label: ensureString(rawPlaybook.label, 'Playbook'),
    title: ensureString(rawPlaybook.title, 'Read the philosophy and apply it to your stack.'),
    description: ensureString(
      rawPlaybook.description,
      'Intent-Driven Engineering is a playbook for how agents should be specified before production.'
    ),
    cta: ensureString(rawPlaybook.cta, 'Start Here'),
  };

  const rawBuilds = ensureObject(t('builds', { returnObjects: true }));
  const freeBlock = ensureObject(rawBuilds.free);
  const paidBlock = ensureObject(rawBuilds.paid);
  const builds = {
    label: ensureString(rawBuilds.label, 'App Builds'),
    title: ensureString(
      rawBuilds.title,
      'Pick the build track that matches your risk tolerance and speed.'
    ),
    free: {
      label: ensureString(freeBlock.label, 'Free'),
      title: ensureString(freeBlock.title, 'Sandbox'),
      description: ensureString(
        freeBlock.description,
        'Shared templates and routing diagrams for teams testing intent-driven flows.'
      ),
    },
    paid: {
      label: ensureString(paidBlock.label, 'Paid'),
      title: ensureString(paidBlock.title, 'Guided build'),
      description: ensureString(
        paidBlock.description,
        'We spec, build, and hand off production-ready intent-driven agents with guardrails.'
      ),
    },
    cta: ensureString(rawBuilds.cta, 'Explore Builds'),
  };

  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        <Section variant="ink" size="wide" className="pt-32 pb-16">
          <SectionID number="01" name="INTENT" variant="ink" />
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {hero.label}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
              {hero.title}
            </h1>
            <p className="text-lg text-white/70 mb-6">{hero.description}</p>
          </div>
        </Section>

        <Section variant="paper" size="wide">
          <SectionID number="02" name="PLAYBOOK" variant="paper" />
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
              {playbook.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">
              {playbook.title}
            </h2>
            <p className="text-lg text-black/70 mb-6">{playbook.description}</p>
            <CTAButton href="/build" variant="primary" className="w-full sm:w-auto">
              {playbook.cta}
            </CTAButton>
          </div>
        </Section>

        <Section variant="ink" size="wide" className="pb-24">
          <SectionID number="03" name="APP BUILDS" variant="ink" />
          <div className="max-w-5xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {builds.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8">
              {builds.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-mono uppercase tracking-widest text-emerald-400 mb-2">
                  {builds.free.label}
                </p>
                <h3 className="text-xl font-semibold mb-2">{builds.free.title}</h3>
                <p className="text-white/70">{builds.free.description}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-mono uppercase tracking-widest text-emerald-400 mb-2">
                  {builds.paid.label}
                </p>
                <h3 className="text-xl font-semibold mb-2">{builds.paid.title}</h3>
                <p className="text-white/70">{builds.paid.description}</p>
              </div>
            </div>
            <CTAButton href="/build" variant="primary-accent" className="w-full sm:w-auto">
              {builds.cta}
            </CTAButton>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
