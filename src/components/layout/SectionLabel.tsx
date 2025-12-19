import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * SectionLabel - Mono uppercase metadata label.
 *
 * Uses Geist Mono with uppercase tracking for system-like feel.
 * Apply to section identifiers like "THE CHALLENGE", "OUR APPROACH", etc.
 */
export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'font-mono text-xs uppercase tracking-[0.2em] text-white/40',
        'block mb-4',
        className
      )}
    >
      {children}
    </span>
  );
}
