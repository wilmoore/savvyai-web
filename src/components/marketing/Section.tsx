'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'paper' | 'ink' | 'default' | 'contrast' | 'dark' | 'neutral';
  size?: 'default' | 'wide' | 'full';
  animate?: boolean;
  animationDelay?: number;
  /** When true, uses shell architecture (7xl outer, variable inner) */
  shell?: boolean;
}

/**
 * Section component for Editorial Paper & Ink theme system.
 *
 * Architecture:
 * - Shell Mode (shell=true): Outer 7xl container creates consistent left edge for SectionIDs.
 *   Content constrained to variable width (3xl/5xl/7xl) but LEFT-ALIGNED, not centered.
 *   This creates a vertical "spine" for metadata tags while maintaining comfortable typography.
 *
 * - Legacy Mode (shell=false): Original centered container behavior for backwards compatibility.
 *
 * Variants:
 * - paper: Paper White (#FFFFFF) - Light sections in zebra pattern
 * - ink: Ink Black (#050505) - Dark sections in zebra pattern (applies theme-ink class)
 * - default: Alias for paper (backwards compatibility)
 * - contrast: Same as paper (backwards compatibility)
 * - dark: Alias for ink (backwards compatibility)
 * - neutral: Same as paper (backwards compatibility)
 *
 * Sizes:
 * - default: max-w-3xl for reading-optimized content
 * - wide: max-w-5xl for two-column layouts
 * - full: max-w-7xl for full-bleed content
 */
export default function Section({
  children,
  className,
  id,
  variant = 'paper',
  size = 'default',
  animate = true,
  animationDelay = 0,
  shell = true,
}: SectionProps) {
  const sizeClasses = {
    default: 'max-w-3xl',
    wide: 'max-w-5xl',
    full: 'max-w-7xl',
  };

  // Map legacy variants to new Paper & Ink system
  const normalizedVariant =
    variant === 'default' || variant === 'contrast' || variant === 'neutral'
      ? 'paper'
      : variant === 'dark'
        ? 'ink'
        : variant;

  const variantClasses = {
    paper: 'bg-paper text-ink',
    ink: 'bg-ink text-white theme-ink',
  };

  // Shell architecture: 7xl outer container, variable inner content
  // Creates consistent left edge for SectionIDs across all sections
  const content = shell ? (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className={cn(sizeClasses[size])}>{children}</div>
    </div>
  ) : (
    // Legacy: centered container (backwards compatibility)
    <div className={cn('container mx-auto px-4 md:px-6', sizeClasses[size])}>{children}</div>
  );

  if (!animate) {
    return (
      <section
        id={id}
        className={cn('py-16 md:py-24', variantClasses[normalizedVariant], className)}
      >
        {content}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={cn('py-16 md:py-24', variantClasses[normalizedVariant], className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: animationDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {content}
    </motion.section>
  );
}
