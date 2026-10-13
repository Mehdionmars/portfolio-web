import { links, type Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';

export default function Footer({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].footer;
  const year = new Date().getFullYear();
  const social = [
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'GitHub', href: links.github },
    { label: 'LeetCode', href: links.leetcode },
  ];

  return (
    <footer className="relative z-10 border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {t.rights}
        </p>
        <ul className="flex gap-6">
          {social.map(({ label, href }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
