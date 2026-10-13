import type { Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';
import Section from './Section';

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground">{title}</h3>
      <ul className="mt-4 divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li key={item} className="py-3 text-[1.0625rem] text-foreground">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].about;

  return (
    <Section id="about" locale={locale}>
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <p className="text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-[1.2] tracking-[-0.03em]">{t.lead}</p>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">{t.bio}</p>
          <blockquote className="mt-10 border-l border-foreground pl-5 text-xl font-medium leading-snug tracking-[-0.02em]">
            “{t.quote}”
          </blockquote>
        </div>
        <div className="grid content-start gap-10 sm:grid-cols-2 md:col-span-5 md:grid-cols-1">
          <List title={t.educationTitle} items={t.education} />
          <List title={t.focusTitle} items={t.focus} />
          <List title={t.bringTitle} items={t.bring} />
        </div>
      </div>
    </Section>
  );
}
