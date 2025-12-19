import { cn } from '@/lib/utils';

interface BandLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * BandLabel - Sentence case label for Workshop Authority Grammar.
 *
 * Uses Inter (humanist sans), NOT uppercase mono.
 * Example: "The Challenge" instead of "THE CHALLENGE"
 *
 * For artifact labels (WORKSHOP, OUTPUT, ARTIFACT), use ArtifactLabel instead.
 */
export default function BandLabel({ children, className }: BandLabelProps) {
  return (
    <p
      className={cn(
        'text-sm font-medium text-gray-500 mb-4',
        'tracking-wide',
        'font-sans',
        className
      )}
    >
      {children}
    </p>
  );
}
