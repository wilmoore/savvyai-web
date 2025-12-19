'use client';

import Link from 'next/link';
import Logo from '@/components/ui/logo';

const MinimalHeader = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo variant="white" size="md" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MinimalHeader;
