import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Savvy AI - Practical AI. Taught first. Built second.',
  description:
    'We help teams adopt AI through hands-on workshops, then turn that clarity into systems teams actually use.',
  keywords:
    'AI consulting, machine learning, artificial intelligence, AI strategy, custom AI development, business automation',
  authors: [{ name: 'Savvy AI' }],
  icons: {
    icon: [
      { url: '/logomark-inverted.ico?v=20250820', type: 'image/x-icon' },
      { url: '/logomark-inverted.png?v=20250820', sizes: '32x32', type: 'image/png' },
      { url: '/logomark-inverted.png?v=20250820', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/logomark-inverted.png?v=20250820',
    shortcut: '/logomark-inverted.png?v=20250820',
  },
  openGraph: {
    title: 'Savvy AI - Practical AI. Taught first. Built second.',
    description:
      'We help teams adopt AI through hands-on workshops, then turn that clarity into systems teams actually use.',
    type: 'website',
    images: ['/logomark-inverted.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logomark-inverted.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
