'use client';

import Link from 'next/link';
import Logo from '@/components/ui/logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Logo variant="black" size="md" />
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/protocol"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            The Protocol
          </Link>
          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition-colors"
          >
            Book a Conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
