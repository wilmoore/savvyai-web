'use client';

import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { Header, Footer, Section, SectionID, CTAButton } from '@/components/marketing';
import { EXTERNAL_LINKS } from '@/lib/constants';

const ensureString = (value: unknown, fallback: string) =>
  typeof value === 'string' ? value : fallback;
const ensureArray = (value: unknown) => (Array.isArray(value) ? value : []);

export default function LiteratePage() {
  const { t } = useTranslation('literate');

  const heroData = t('hero', { returnObjects: true }) as Record<string, unknown>;
  const hero = {
    label: ensureString(heroData.label, 'AI Literacy'),
    title: ensureString(heroData.title, 'AI Literate'),
    subtitle: ensureString(
      heroData.subtitle,
      'Teach teams how to make confident leverage decisions fast.'
    ),
    tagline: ensureString(heroData.tagline, 'Every session ends with a clear next move.'),
  };

  const sessionData = t('session', { returnObjects: true }) as Record<string, unknown>;
  const session = {
    label: ensureString(sessionData.label, 'Join Session'),
    title: ensureString(sessionData.title, 'Current cohort is limited and fast-moving.'),
    description: ensureString(
      sessionData.description,
      'Live working sessions that get your operators aligned, fluent, and ready to ship.'
    ),
    cta: ensureString(sessionData.cta, 'View Sessions'),
  };
  const sessionDetails = ensureArray(t('session.details', { returnObjects: true }));

  const partnerData = t('partners', { returnObjects: true }) as Record<string, unknown>;
  const partners = {
    label: ensureString(partnerData.label, 'For Partners'),
    title: ensureString(partnerData.title, 'Bring AI Literate to your clients.'),
    description: ensureString(
      partnerData.description,
      'License the readiness layer and keep our operators on standby when you need build support.'
    ),
    cta: ensureString(partnerData.cta, 'Become a Partner'),
  };
  const partnerMessage = t('partners.message', {
    audience: 'operators we already serve',
  });
  const partnerHref = `${EXTERNAL_LINKS.LINKEDIN}?messageText=${encodeURIComponent(partnerMessage)}`;

  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        <Section variant="ink" size="wide" className="pt-32 pb-16">
          <SectionID number="01" name="SYSTEM" variant="ink" />
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {hero.label}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
              {hero.title}
            </h1>
            <p className="text-lg text-white/70 mb-4">{hero.subtitle}</p>
            <p className="text-base text-white/50">{hero.tagline}</p>
          </div>
        </Section>

        <Section variant="paper" size="wide">
          <SectionID number="02" name="SESSION" variant="paper" />
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
              {session.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">
              {session.title}
            </h2>
            <p className="text-lg text-black/70 mb-6">{session.description}</p>
            <ul className="space-y-3 mb-8">
              {sessionDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3 text-black/70">
                  <Check className="w-5 h-5 text-emerald-500 mt-0.5" strokeWidth={2} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <CTAButton href="/workshops#ai-literate" variant="primary" className="w-full sm:w-auto">
              {session.cta}
            </CTAButton>
          </div>
        </Section>

        <Section variant="ink" size="wide" className="pb-24">
          <SectionID number="03" name="PARTNER" variant="ink" />
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {partners.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
              {partners.title}
            </h2>
            <p className="text-lg text-white/70 mb-6">{partners.description}</p>
            <CTAButton
              href={partnerHref}
              variant="primary-accent"
              className="w-full sm:w-auto"
              external
            >
              {partners.cta}
            </CTAButton>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
