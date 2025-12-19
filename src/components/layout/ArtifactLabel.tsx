import { cn } from '@/lib/utils';

interface ArtifactLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * ArtifactLabel - Mono uppercase label for workshop artifacts.
 *
 * ONLY use for: WORKSHOP, OUTPUT, ARTIFACT, DELIVERABLE
 * For section labels, use BandLabel instead.
 */
export default function ArtifactLabel({ children, className }: ArtifactLabelProps) {
  return (
    <span
      className={cn('font-mono text-xs uppercase tracking-[0.15em] text-emerald-600', className)}
    >
      {children}
    </span>
  );
}
