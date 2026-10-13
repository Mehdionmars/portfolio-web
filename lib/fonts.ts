import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';

/** Neutral premium grotesk for everything readable: headings and body. */
export const sans = Hanken_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

/** Metadata, code blocks and the terminal intro. */
export const mono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});
