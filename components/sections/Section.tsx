import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/content';
import { dictionaries, type SectionId } from '@/lib/i18n';

export function Prompt({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn('select-none font-mono text-muted-foreground', className)}>
      $
    </span>
  );
}

const titleCase = (path: string) => (path === 'devmon' ? 'DevMon' : path.charAt(0).toUpperCase() + path.slice(1));

export default function Section({
  id,
  locale,
  className,
  children,
}: {
  id: SectionId;
  locale: Locale;
  className?: string;
  children: React.ReactNode;
}) {
  const { path } = dictionaries[locale].sections[id];

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('border-t border-border px-5 py-20 sm:px-8 md:py-32', className)}>
      <div className="mx-auto max-w-6xl">
        <header data-reveal className="mb-10 md:mb-12">
          <h2 id={`${id}-title`} className="text-[clamp(1.875rem,3.4vw,2.625rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-title">
            {titleCase(path)}
          </h2>
        </header>
        <div data-reveal style={{ '--reveal-delay': '140ms' } as React.CSSProperties}>
          {children}
        </div>
      </div>
    </section>
  );
}
