'use client';

import Link from 'next/link';
import type { WorkshopDownload } from '@/types/workshop';

interface WorkshopDownloadsProps {
  downloads: WorkshopDownload[];
  label: string;
}

/**
 * WorkshopDownloads Component
 *
 * Simple list of download links.
 * No effects, no upsells, no additional calls to action.
 */
export function WorkshopDownloads({ downloads, label }: WorkshopDownloadsProps) {
  if (downloads.length === 0) {
    return null;
  }

  return (
    <div className="max-w-xl mx-auto">
      <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">{label}</p>

      <ul className="space-y-3">
        {downloads.map((download, index) => (
          <li key={index}>
            <Link
              href={download.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white border border-black/10 rounded-md hover:border-black/20 transition-colors"
            >
              <span className="text-sm font-medium text-ink">{download.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
