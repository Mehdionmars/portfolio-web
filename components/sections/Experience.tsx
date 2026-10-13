'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { experiences, formatRange, type Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';
import Section from './Section';

export default function Experience({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].experience;
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <Section id="experience" locale={locale}>
      <ol className="border-t border-border">
        {experiences.map((exp, i) => {
          const isOpen = open.has(i);
          const panelId = `exp-panel-${i}`;
          return (
            <li key={exp.company} className="border-b border-border">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className="group grid w-full grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-5 text-left md:grid-cols-[12rem_1fr_auto] md:py-6"
                >
                  <span className="col-span-2 font-mono text-xs uppercase tracking-[0.06em] tabular-nums text-muted-foreground md:col-span-1">
                    {formatRange(exp.start, exp.end, locale)}
                  </span>
                  <span className="min-w-0">
                    <span className="text-xl font-semibold tracking-[-0.02em] text-foreground">{exp.company}</span>
                    <span className="mt-0.5 block text-muted-foreground md:ml-3 md:mt-0 md:inline">{exp.role[locale]}</span>
                  </span>
                  <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full border border-border text-foreground transition-colors group-hover:border-foreground">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                aria-hidden={!isOpen}
                className={cn(
                  'grid transition-[grid-template-rows] duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                )}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-8 pb-8 md:grid-cols-[12rem_1fr_15rem] md:gap-x-6">
                    <p className="text-sm text-muted-foreground">{exp.location[locale]}</p>
                    <div>
                      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground">{t.did}</p>
                      <ul className="mt-3 space-y-2.5">
                        {exp.achievements[locale].map((a) => (
                          <li key={a} className="flex gap-3 text-foreground">
                            <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-foreground" />
                            <span className="max-w-[62ch]">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground">{t.stack}</p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {exp.stack.map((tech) => (
                          <li key={tech} className="chip">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
