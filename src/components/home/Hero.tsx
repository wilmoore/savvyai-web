'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Section, CTAButton } from '@/components/marketing';

/**
 * Hero - Editorial Billboard Statement
 *
 * Massive typography on ink black background.
 * "Structural integrity first. Leverage second." as a billboard-scale headline.
 * Creates immediate premium, editorial impact.
 * Features subtle emerald glow behind headline for atmosphere.
 */
export default function Hero() {
  const { t } = useTranslation('homepage');

  return (
    <Section variant="ink" className="pt-32 md:pt-40 pb-20 md:pb-28" size="wide" animate={false}>
      <div className="max-w-5xl relative">
        {/* Emerald glow behind headline */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {t('hero.tagline') && (
          <motion.p
            className="text-xs font-mono tracking-widest text-white/40 mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('hero.tagline')}
          </motion.p>
        )}

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter text-white mb-8 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('hero.headline')}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/70 max-w-3xl mb-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t('hero.description')}
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col">
            <CTAButton href="/audit" variant="primary-accent" className="w-full sm:w-auto">
              {t('hero.cta.primary')}
            </CTAButton>
            {/* CTA Micro-copy */}
            {t('hero.cta.primaryMicro') && (
              <span className="text-xs text-white/40 mt-2 max-w-[240px]">
                {t('hero.cta.primaryMicro')}
              </span>
            )}
          </div>
          <CTAButton
            href="#systems"
            variant="secondary-ink"
            className="w-full sm:w-auto text-white/70"
          >
            {t('hero.cta.secondary')}
          </CTAButton>
        </motion.div>
      </div>
    </Section>
  );
}
