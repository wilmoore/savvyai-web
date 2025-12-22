/**
 * Workshop Configuration
 *
 * Central registry of known workshops.
 * Only workshops listed here will accept feedback submissions.
 */

import type { WorkshopConfig } from '@/types/workshop';

export const WORKSHOPS: Record<string, WorkshopConfig> = {
  'ai-literate': {
    slug: 'ai-literate',
    title: 'AI Literate',
    active: true,
  },
};

/**
 * Get workshop configuration by slug
 */
export function getWorkshop(slug: string): WorkshopConfig | undefined {
  return WORKSHOPS[slug];
}

/**
 * Check if a workshop slug is valid and active
 */
export function isValidWorkshop(slug: string): boolean {
  const workshop = WORKSHOPS[slug];
  return workshop !== undefined && workshop.active;
}

/**
 * Get all active workshop slugs
 */
export function getActiveWorkshopSlugs(): string[] {
  return Object.values(WORKSHOPS)
    .filter((w) => w.active)
    .map((w) => w.slug);
}
