'use client';

import Link from 'next/link';
import Logo from '@/components/ui/logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Logo variant="black" size="md" />
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/protocol"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            The Protocol
          </Link>
          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book a Conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
