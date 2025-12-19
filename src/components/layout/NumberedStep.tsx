import { cn } from '@/lib/utils';

interface NumberedStepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

/**
 * NumberedStep - Step indicator with accent-colored number.
 *
 * Use for process flows, timelines, or numbered lists.
 */
export default function NumberedStep({ number, title, description, className }: NumberedStepProps) {
  return (
    <div className={cn('flex gap-4', className)}>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-semibold font-mono">
        {number}
      </div>
      <div className="pt-1">
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
}
