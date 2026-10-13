'use client';

import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { links, type Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';

export default function CopyEmail({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].contact;
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');

  useEffect(() => {
    if (state === 'idle') return;
    const id = window.setTimeout(() => setState('idle'), 2200);
    return () => window.clearTimeout(id);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setState('copied');
    } catch {
      setState('failed');
    }
  };

  return (
    <button type="button" onClick={copy} className="btn-ghost">
      {state === 'copied' ? <Check aria-hidden="true" className="h-4 w-4 text-primary" /> : <Copy aria-hidden="true" className="h-4 w-4" />}
      <span aria-live="polite">{state === 'copied' ? t.copied : state === 'failed' ? t.copyFailed : t.copy}</span>
    </button>
  );
}
