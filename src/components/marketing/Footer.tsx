'use client';

import Link from 'next/link';
import Logo from '@/components/ui/logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <Logo variant="black" size="sm" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Practical AI. Taught first. Built second.
            </p>
          </div>

          <nav className="flex flex-col md:flex-row gap-6 md:gap-8">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/protocol"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              The Protocol
            </Link>
            <Link
              href="#book"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Savvy AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
