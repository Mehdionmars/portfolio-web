'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WorksWheel, type WorksWheelItem } from '@/components/ui/works-wheel';
import { formatPeriod, projects, type Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';

export default function ProjectsWheel({ locale }: { locale: Locale }) {
  const d = dictionaries[locale];
  const t = d.projects;
  const [active, setActive] = useState(0);
  const project = projects[active];

  const items = useMemo<WorksWheelItem[]>(
    () =>
      projects.map((p) => ({
        title: p.title,
        image: p.image,
        href: p.demoUrl ?? undefined,
        meta: `${p.kind[locale]} · ${formatPeriod(p.date, locale)}`,
      })),
    [locale]
  );

  return (
    <div>
      {/* Full-bleed, full-height stage: breaks out of the section container and the
          page settles onto it (scroll-snap proximity) when you scroll close. The negative
          margin cancels the header's scroll padding so it fills the whole viewport. */}
      <div
        data-fullscreen
        className="relative mx-[calc(50%-50vw)] w-screen snap-start"
        style={{ scrollMarginTop: 'calc(-1 * (var(--header-h) + 1rem))' }}
      >
        <WorksWheel
          items={items}
          label={d.sections.projects.path}
          action={t.open}
          onActiveChange={setActive}
          className="h-[100svh] min-h-[30rem] bg-background"
        />
      </div>

      {/* What the front card is: kept in sync with the wheel, readable without it. */}
      <div className="grid gap-x-10 gap-y-6 border-t border-border pt-10 lg:grid-cols-[minmax(0,1fr)_18rem]" aria-live="polite">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
            {project.kind[locale]}
            <span className="text-dim"> · </span>
            <span>{formatPeriod(project.date, locale)}</span>
            <span className="text-dim"> · </span>
            <span className="tabular-nums">
              {active + 1}/{projects.length}
            </span>
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">{project.title}</h3>
          <p className="mt-3 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">{project.summary[locale]}</p>
          <p className="mt-5 max-w-[60ch] text-foreground">
            <span className="mr-2 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">{t.result}</span>
            {project.outcome[locale]}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.9375rem]">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2.5 text-sm">
                {t.live}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                <span className="sr-only">— {project.title}</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
              >
                {t.code}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                <span className="sr-only">— {project.title}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
