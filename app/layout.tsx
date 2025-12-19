import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Savvy AI - Practical AI Solutions for Modern Business",
  description:
    "AI engineering without the hype. We build practical, transformative AI solutions that solve real business problems with measurable impact.",
  keywords:
    "AI consulting, machine learning, artificial intelligence, AI strategy, custom AI development, business automation",
  authors: [{ name: "Savvy AI" }],
  icons: {
    icon: [
      { url: "/logomark-inverted.ico?v=20250820", type: "image/x-icon" },
      { url: "/logomark-inverted.png?v=20250820", sizes: "32x32", type: "image/png" },
      { url: "/logomark-inverted.png?v=20250820", sizes: "16x16", type: "image/png" },
    ],
    apple: "/logomark-inverted.png?v=20250820",
    shortcut: "/logomark-inverted.png?v=20250820",
  },
  openGraph: {
    title: "Savvy AI - Practical AI Solutions for Modern Business",
    description:
      "AI engineering without the hype. We build practical, transformative AI solutions that solve real business problems with measurable impact.",
    type: "website",
    images: ["/logomark-inverted.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logomark-inverted.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
