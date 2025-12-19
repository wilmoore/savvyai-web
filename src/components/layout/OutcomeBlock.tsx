import { cn } from '@/lib/utils';

interface OutcomeBlockProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

/**
 * OutcomeBlock - Visual anchor for workshop outcomes.
 *
 * Used to emphasize "What teams leave with", "What this produces",
 * "What exists after the workshop".
 *
 * Every time the page explains "why" or "how", anchor it with outcomes.
 */
export default function OutcomeBlock({ children, title, className }: OutcomeBlockProps) {
  return (
    <div className={cn('border-l-2 border-l-emerald-500 pl-5 py-3', className)}>
      {title && (
        <p className="font-mono text-xs uppercase tracking-wider text-emerald-600 mb-2">{title}</p>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
