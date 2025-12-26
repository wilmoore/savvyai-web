import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Spot Opportunities for Custom GPTs (and Build Them Correctly) | Śavvy AI',
  description:
    'Learn how to identify when a custom GPT is worth building, what makes it useful vs. noise, and the exact 7-step process to build one that actually saves you time.',
  openGraph: {
    title: 'How to Spot Opportunities for Custom GPTs (and Build Them Correctly)',
    description:
      'Stop re-typing context. Learn how to build custom GPTs that actually save you time.',
    type: 'website',
  },
};

export default function GptGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
