'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BackToTop({ label }: { label: string }) {
  const [show, setShow] = useState(false);

  // Appears once the first screen is behind you.
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', window.location.pathname);
    // Keyboard users continue from the top of the page, not from the bottom.
    document.getElementById('top')?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label={label}
      title={label}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={cn(
        'fixed bottom-5 right-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/80 text-foreground shadow-[var(--shadow)] backdrop-blur-xl transition-[opacity,transform,border-color] duration-200 ease-out hover:border-foreground motion-reduce:transition-none sm:bottom-8 sm:right-8',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <ArrowUp aria-hidden="true" className="h-4 w-4" />
    </button>
  );
}
