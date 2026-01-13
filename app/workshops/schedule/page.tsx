import { Metadata } from 'next';
import WorkshopsScheduleClient from './WorkshopsScheduleClient';

/**
 * /workshops/schedule - Clean shareable URL for workshop schedule section.
 *
 * Renders the same workshops page as /workshops, but auto-scrolls to the
 * schedule section on mount. Provides unique OG metadata for social sharing.
 *
 * Why this exists:
 * - Hash fragments (#schedule) break on social platforms
 * - Hard to communicate verbally ("slash workshops hashtag schedule")
 * - Social previews don't differentiate /workshops from /workshops#schedule
 *
 * This route solves all three with a clean /workshops/schedule URL.
 */

export const metadata: Metadata = {
  title: 'Workshop Schedule | Śavvy AI',
  description:
    'View upcoming AI Literate workshops and watch replays. Practical, hands-on AI training built for leverage, not demos.',
  openGraph: {
    title: 'Workshop Schedule | Śavvy AI',
    description:
      'View upcoming AI Literate workshops and watch replays. Practical, hands-on AI training built for leverage, not demos.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workshop Schedule | Śavvy AI',
    description:
      'View upcoming AI Literate workshops and watch replays. Practical, hands-on AI training built for leverage, not demos.',
  },
};

export default function WorkshopsSchedulePage() {
  return <WorkshopsScheduleClient />;
}
