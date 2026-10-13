'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';
import Section from './Section';

const CAUGHT_STORAGE_KEY = 'portfolio:devmon:caught:v1';

type Command = 'idle' | 'inspect' | 'debug' | 'catch' | 'status';

export default function DevMon({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].devmon;
  const [message, setMessage] = useState(t.idle);
  const [lastCommand, setLastCommand] = useState<Command>('idle');
  const [caught, setCaught] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(CAUGHT_STORAGE_KEY) === 'true') {
        setCaught(true);
        setMessage(t.already);
        setLastCommand('status');
      }
    } catch {
      // Ignore storage read failures on restricted browsers.
    }
  }, [t.already]);

  const runInspect = () => {
    setLastCommand('inspect');
    setMessage(t.inspected);
  };

  const runDebug = () => {
    setLastCommand('debug');
    setMessage(t.debugged);
  };

  const runCatch = () => {
    setLastCommand('catch');
    if (caught) {
      setMessage(t.already);
      return;
    }
    if (Math.random() >= 0.45) {
      setCaught(true);
      setMessage(t.caught);
      try {
        window.localStorage.setItem(CAUGHT_STORAGE_KEY, 'true');
      } catch {
        // Ignore storage write failures on restricted browsers.
      }
      return;
    }
    setMessage(t.escaped);
  };

  const actions = [
    { label: t.inspect, run: runInspect },
    { label: t.debug, run: runDebug },
    { label: t.catch, run: runCatch },
  ];

  return (
    <Section id="devmon" locale={locale}>
      <div className="term-window max-w-4xl font-mono text-[0.875rem]">
        <div className="term-bar" aria-hidden="true">
          ./easter_egg/encounter.log
        </div>
        <div className="flex flex-col gap-8 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="mx-auto shrink-0 sm:mx-0" aria-hidden="true">
            <div className="h-36 w-36 border border-border bg-background p-4">
              <div className={`relative mx-auto mt-2 h-20 w-20 transition-transform duration-500 ${caught ? 'scale-90' : ''}`}>
                <div className="absolute left-3 top-0 h-4 w-4 border border-accent/70 bg-accent/20" />
                <div className="absolute right-3 top-0 h-4 w-4 border border-accent/70 bg-accent/20" />
                <div className="absolute left-1/2 top-3 h-14 w-14 -translate-x-1/2 border border-accent/80 bg-accent/20" />
                <div className="absolute left-[29px] top-[23px] h-2 w-2 bg-accent" />
                <div className="absolute right-[29px] top-[23px] h-2 w-2 bg-accent" />
                <div className="absolute left-1/2 top-[33px] h-2 w-4 -translate-x-1/2 bg-primary/80" />
                <div className="absolute left-1/2 top-[58px] h-1.5 w-10 -translate-x-1/2 bg-primary/25" />
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
              <p className="mt-1 text-muted-foreground">{t.sub}</p>
            </div>

            <dl className="grid grid-cols-3 gap-2 text-sm">
              {t.stats.map(({ k, v }, i) => (
                <div key={k} className="border border-border bg-background px-3 py-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-semibold text-foreground">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-2">
              {actions.map(({ label, run }) => (
                <button key={label} type="button" onClick={run} className="btn-ghost px-4 py-2.5 text-sm">
                  {label}
                </button>
              ))}
            </div>

            <div className="border border-border bg-background px-4 py-3 text-sm">
              <p className="text-muted-foreground" aria-hidden="true">
                &gt; choose_action: <span className="text-accent">{lastCommand}</span>
              </p>
              <p className="mt-1 break-words text-primary" aria-live="polite">
                {message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
