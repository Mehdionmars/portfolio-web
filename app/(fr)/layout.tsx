import '../globals.css';
import { mono, sans } from '@/lib/fonts';
import { buildMetadata } from '@/lib/i18n';
import { INTRO_BOOT_SCRIPT } from '@/lib/intro';

export const metadata = buildMetadata('fr');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the boot script sets the theme and intro classes on <html> before React hydrates.
    <html lang="fr" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_BOOT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
