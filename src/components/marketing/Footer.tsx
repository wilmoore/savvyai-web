'use client';

import Link from 'next/link';
import Logo from '@/components/ui/logo';

/**
 * Footer - Editorial Ink Black Minimal
 *
 * Stark black (#050505) background with minimal content.
 * White text hierarchy with subtle borders.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <Logo variant="white" size="sm" />
            <p className="text-sm text-white/50 max-w-xs">
              Practical AI. Taught first. Built second.
            </p>
          </div>

          <nav className="flex flex-col md:flex-row gap-6 md:gap-8">
            <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/protocol"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              The Protocol
            </Link>
            <Link href="#book" className="text-sm text-white/50 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/30 text-center">
            &copy; {currentYear} Savvy AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
