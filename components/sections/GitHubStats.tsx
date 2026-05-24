'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CAUGHT_STORAGE_KEY = 'portfolio:devmon:caught:v1';

export default function GitHubStats() {
  const [message, setMessage] = useState('Awaiting command...');
  const [lastCommand, setLastCommand] = useState('idle');
  const [caught, setCaught] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CAUGHT_STORAGE_KEY);
      if (saved === 'true') {
        setCaught(true);
        setMessage('DevMon is already in your party.');
        setLastCommand('status');
      }
    } catch {
      // Ignore storage read failures on restricted browsers.
    }
  }, []);

  const runInspect = () => {
    setLastCommand('inspect');
    setMessage('DevMon checks your commits and nods respectfully.');
  };

  const runDebug = () => {
    setLastCommand('debug');
    setMessage('You fixed a wild layout shift. DevMon looks impressed.');
  };

  const runCatch = () => {
    setLastCommand('catch');

    if (caught) {
      setMessage('DevMon is already in your party.');
      return;
    }

    const success = Math.random() >= 0.45;
    if (success) {
      setCaught(true);
      setMessage('Caught! DevMon joined your portfolio.');
      try {
        window.localStorage.setItem(CAUGHT_STORAGE_KEY, 'true');
      } catch {
        // Ignore storage write failures on restricted browsers.
      }
      return;
    }

    setMessage('DevMon escaped into another branch.');
  };

  return (
    <section id="github" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 text-sm">$ cat ./easter_egg/encounter.log</p>
          <div className="border-t border-border mt-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground/40 text-xs mb-3"># easter_egg</p>

          <div className="w-full max-w-full overflow-hidden rounded-md border border-neutral-700/90 bg-black/95 p-4 shadow-[0_0_22px_rgba(34,211,238,0.08)] sm:p-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="mx-auto w-full max-w-[160px] shrink-0" aria-hidden="true">
                <div className="mx-auto h-36 w-36 rounded-md border border-neutral-700 bg-neutral-950/80 p-4">
                  <div className="relative mx-auto mt-2 h-20 w-20">
                    <div className="absolute left-3 top-0 h-4 w-4 rounded-sm border border-cyan-300/70 bg-cyan-400/20" />
                    <div className="absolute right-3 top-0 h-4 w-4 rounded-sm border border-cyan-300/70 bg-cyan-400/20" />
                    <div className="absolute left-1/2 top-3 h-14 w-14 -translate-x-1/2 rounded-md border border-cyan-300/80 bg-cyan-500/20 shadow-[0_0_12px_rgba(34,211,238,0.35)]" />
                    <div className="absolute left-[29px] top-[23px] h-2 w-2 rounded-sm bg-cyan-200" />
                    <div className="absolute right-[29px] top-[23px] h-2 w-2 rounded-sm bg-cyan-200" />
                    <div className="absolute left-1/2 top-[33px] h-2 w-4 -translate-x-1/2 rounded-sm bg-rose-300/80" />
                    <div className="absolute left-1/2 top-[58px] h-1.5 w-10 -translate-x-1/2 rounded bg-cyan-900/60" />
                  </div>
                </div>
              </div>

              <div className="min-w-0 flex-1 space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">Wild DevMon appeared!</h3>
                  <p className="mt-1 text-sm text-muted-foreground">A tiny creature is hiding in the source code.</p>
                </div>

                <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
                  <p className="rounded border border-neutral-800 bg-neutral-950/80 px-2.5 py-2 text-neutral-300">HP: <span className="text-green-400">42</span></p>
                  <p className="rounded border border-neutral-800 bg-neutral-950/80 px-2.5 py-2 text-neutral-300">TYPE: <span className="text-cyan-300">frontend</span></p>
                  <p className="rounded border border-neutral-800 bg-neutral-950/80 px-2.5 py-2 text-neutral-300">RARITY: <span className="text-amber-300">rare</span></p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={runInspect}
                    className="h-8 border-neutral-700 bg-black px-3 text-xs text-neutral-300 hover:border-green-400 hover:bg-green-500/10 hover:text-green-300 active:scale-[0.98]"
                  >
                    Inspect
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={runDebug}
                    className="h-8 border-neutral-700 bg-black px-3 text-xs text-neutral-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 active:scale-[0.98]"
                  >
                    Debug
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={runCatch}
                    className="h-8 border-neutral-700 bg-black px-3 text-xs text-neutral-300 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 active:scale-[0.98]"
                  >
                    Catch
                  </Button>
                </div>

                <p className="text-xs text-neutral-500">
                  {'>'} choose_action: <span className="text-cyan-300">{lastCommand}</span>
                  <span className="ml-1 inline-block h-3 w-1 animate-pulse bg-rose-400 align-middle" />
                </p>

                <p className="break-words rounded border border-neutral-800 bg-neutral-950/90 px-3 py-2 text-xs text-green-300" aria-live="polite">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
