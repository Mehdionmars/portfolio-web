'use client';

import type { CSSProperties } from 'react';
import { useEffect } from 'react';
import { Minus, Square, X } from 'lucide-react';
import type { Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';
import { INTRO_STORAGE_KEY } from '@/lib/intro';

const at = (t: number, len?: number) => ({ '--t': `${t}s`, ...(len ? { '--len': len } : {}) }) as CSSProperties;

export default function TerminalIntro({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].intro;

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('intro-playing')) return;
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, '1');
    } catch {
      // Private mode: the intro may replay, which is harmless.
    }

    // Any intent to interact (click, key, wheel, touch) skips straight to the site.
    const events = ['keydown', 'pointerdown', 'wheel', 'touchstart'] as const;
    const detach = () => {
      events.forEach((name) => window.removeEventListener(name, finish));
      window.clearTimeout(timer);
    };
    const finish = () => {
      root.classList.remove('intro-playing');
      detach();
    };
    const timer = window.setTimeout(finish, 3000);
    events.forEach((name) => window.addEventListener(name, finish, { passive: true }));
    return detach;
  }, []);

  const width = 24;
  const typedCmd = t.cmd;

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-window">
        <div className="intro-box">
          {/* Linux window chrome: title on the left, controls on the right. */}
          <div className="term-bar justify-between">
            <span className="truncate">{t.title}</span>
            <span className="flex shrink-0 items-center gap-3 text-dim">
              <Minus className="h-3 w-3" />
              <Square className="h-2.5 w-2.5" />
              <X className="h-3 w-3" />
            </span>
          </div>
          <div className="space-y-1.5 px-5 py-5 text-[0.8125rem] sm:px-7 sm:py-6 sm:text-sm">
            <p className="intro-line text-dim" style={at(0.25)}>
              {t.login}
            </p>
            <p className="intro-line whitespace-nowrap" style={at(0.35)}>
              <span className="text-muted-foreground">mehdi@portfolio:~</span>
              <span className="text-primary">$ </span>
              <span className="intro-typed text-foreground" style={at(0.4, typedCmd.length)}>
                {typedCmd}
              </span>
            </p>
            {t.steps.map((step, i) => (
              <p key={step} className="intro-line whitespace-pre text-muted-foreground" style={at(0.95 + i * 0.12)}>
                <span className="text-dim">  ▸ </span>
                <span className="text-foreground">{step}</span>
                <span className="text-dim"> {'.'.repeat(Math.max(3, width - step.length))} </span>
                <span className="text-primary">ok</span>
              </p>
            ))}
            <p className="intro-line flex items-center gap-2 pt-1 text-primary" style={at(0.95 + t.steps.length * 0.12 + 0.05)}>
              ✓ {t.ready}
              <span className="caret" />
            </p>
          </div>
        </div>
      </div>
      <p className="intro-hint">{t.hint}</p>
    </div>
  );
}
