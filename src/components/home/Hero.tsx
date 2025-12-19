'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Section, CTAButton } from '@/components/marketing';

/**
 * Hero - Editorial Billboard Statement
 *
 * Massive typography on ink black background.
 * "Taught first. Built second." as a billboard-scale headline.
 * Creates immediate premium, editorial impact.
 */
export default function Hero() {
  const { t } = useTranslation('homepage');

  return (
    <Section variant="ink" className="pt-32 md:pt-40 pb-20 md:pb-28" size="wide" animate={false}>
      <div className="max-w-5xl">
        <motion.p
          className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tighter text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('hero.headline')}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          className="space-y-3 text-base text-white/50 mb-12 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>{t('hero.clarification.line1')}</p>
          <p>{t('hero.clarification.line2')}</p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CTAButton href="#book" variant="primary">
            {t('hero.cta.primary')}
          </CTAButton>
          <CTAButton href="#book" variant="secondary-ink">
            {t('hero.cta.secondary')}
          </CTAButton>
        </motion.div>
      </div>
    </Section>
  );
}
