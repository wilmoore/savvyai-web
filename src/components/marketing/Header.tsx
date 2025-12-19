'use client';

import Link from 'next/link';
import Logo from '@/components/ui/logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Logo variant="white" size="md" />
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/protocol"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
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
