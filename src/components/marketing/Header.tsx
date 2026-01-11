'use client';

import Link from 'next/link';
import Logo from '@/components/ui/logo';
import { EXTERNAL_LINKS } from '@/lib/constants';

/**
 * Header - Editorial Dark Floating Glass
 *
 * Deep black background with subtle transparency and 1px bottom border.
 * Creates a premium, editorial feel that floats above content.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-ink/95 backdrop-blur-md supports-[backdrop-filter]:bg-ink/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Logo variant="white" size="md" />
        </Link>

        <nav className="flex items-center gap-6">
          <a
            href={EXTERNAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition-colors"
          >
            Message on LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
