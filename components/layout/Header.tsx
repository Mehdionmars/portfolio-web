'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Download, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { links, LOCALE_PATH, type Locale } from '@/lib/content';
import { dictionaries, SECTION_IDS, type SectionId } from '@/lib/i18n';
import { THEME_STORAGE_KEY } from '@/lib/intro';

function ThemeToggle({ labels }: { labels: { toDark: string; toLight: string } }) {
  // null until mounted: the server cannot know the theme the boot script picked.
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => setDark(document.documentElement.classList.contains('dark')), []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light');
    } catch {
      // Storage blocked: the choice simply lasts for this page view.
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? labels.toLight : labels.toDark}
      title={dark ? labels.toLight : labels.toDark}
      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-foreground"
    >
      {dark ? <Sun aria-hidden="true" className="h-4 w-4" /> : <Moon aria-hidden="true" className="h-4 w-4" />}
    </button>
  );
}

export default function Header({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const other: Locale = locale === 'en' ? 'fr' : 'en';
  const [active, setActive] = useState<SectionId | 'top'>('top');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    const stage = document.querySelector('[data-fullscreen]');
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // A full-screen stage keeps the whole viewport, even after the snap nudges the page up.
      const r = stage?.getBoundingClientRect();
      if (r && r.top <= 1 && r.bottom >= window.innerHeight - 1) {
        setHidden(true);
        lastY = y;
        return;
      }
      // Ignore sub-pixel jitter; past the header's own height, down hides and up shows.
      if (Math.abs(y - lastY) < 4) return;
      setHidden(y > lastY && y > 64);
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const targets = ['top', ...SECTION_IDS]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId | 'top');
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    targets.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  // While the menu is open: lock the page, move focus in, keep Tab inside, Escape closes.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    const focusables = () =>
      Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href], button') ?? []).concat(buttonRef.current ? [buttonRef.current] : []);
    // Wait a frame so the menu is visible (and therefore focusable) before moving focus in.
    const raf = requestAnimationFrame(() => focusables()[0]?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      const index = items.indexOf(document.activeElement as HTMLElement);
      if (e.shiftKey && index <= 0) {
        e.preventDefault();
        items[items.length - 1]?.focus();
      } else if (!e.shiftKey && index === items.length - 1) {
        e.preventDefault();
        items[0]?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(raf);
      root.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Close first, then scroll, so the page is unlocked before it moves.
  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault();
    setOpen(false);
    // Unlock now: lifting the lock in the effect cleanup would interrupt the smooth scroll midway.
    document.documentElement.style.overflow = '';
    requestAnimationFrame(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      history.replaceState(null, '', `#${id}`);
    });
  };

  const switchHref = `${LOCALE_PATH[other]}${active === 'top' ? '' : `#${active}`}`;

  return (
    <>
      <header
        onFocus={() => setHidden(false)}
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color] duration-200 ease-out motion-reduce:transition-none text-foreground',
          // Resting on the hero photo: dark tokens, whatever the page theme.
          !scrolled && !open && 'dark',
          hidden && !open ? '-translate-y-full' : 'translate-y-0',
          open
            ? 'border-transparent bg-transparent'
            : scrolled
              ? 'border-border bg-background/80 backdrop-blur-xl'
              : 'border-transparent bg-transparent'
        )}
      >
        <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" className="text-[0.9375rem] font-semibold tracking-[-0.01em]" onClick={() => setOpen(false)}>
            Mehdi Moungid
          </a>

          <div className="flex items-center gap-2">
            <span className="flex items-center rounded-full border border-border bg-background p-0.5 font-mono text-xs">
              <span aria-current="true" className="rounded-full bg-foreground px-2 py-1 font-semibold text-background">
                {locale.toUpperCase()}
              </span>
              <a
                href={switchHref}
                hrefLang={other}
                lang={other}
                aria-label={t.switchTo.aria}
                className="rounded-full px-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.switchTo.label}
              </a>
            </span>
            <ThemeToggle labels={t.theme} />
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? t.menuClose : t.menuOpen}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 items-center gap-2.5 rounded-full border border-border bg-background pl-4 pr-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              <span>{open ? t.menu.close : t.menu.open}</span>
              {/* Two lines that cross into an X. */}
              <span aria-hidden="true" className="relative block h-3 w-4">
                <span
                  className={cn(
                    'absolute left-0 h-[1.5px] w-4 bg-foreground transition-transform duration-300',
                    open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[2px]'
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 h-[1.5px] w-4 bg-foreground transition-transform duration-300',
                    open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-[2px]'
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.menu.label}
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-40 overflow-y-auto bg-background duration-300',
          // Visible at once when opening (so focus can move in); hidden only after the fade when closing.
          open ? 'visible opacity-100 transition-opacity' : 'invisible opacity-0 transition-[opacity,visibility]'
        )}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-12 pt-[calc(var(--header-h)+1.5rem)] sm:px-8 md:grid-cols-[minmax(0,1fr)_20rem] md:items-end md:pt-[calc(var(--header-h)+2.5rem)]">
          <nav aria-label="Sections">
            <ul className="group/menu">
              {SECTION_IDS.map((id, i) => {
                const isActive = id === active;
                return (
                  <li
                    key={id}
                    className={cn(
                      'transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                      open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    )}
                    style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
                  >
                    <a
                      href={`#${id}`}
                      tabIndex={open ? 0 : -1}
                      onClick={(e) => go(e, id)}
                      aria-current={isActive ? 'location' : undefined}
                      className="flex items-center gap-4 py-1 text-[clamp(2.25rem,6.5vh,4.25rem)] font-semibold capitalize leading-[1.1] tracking-[-0.045em] transition-colors hover:!text-foreground group-hover/menu:text-muted-foreground"
                    >
                      {t.nav[id]}
                      {isActive && <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-foreground" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className={cn(
              'space-y-8 border-t border-border pt-8 transition-[opacity,transform] delay-300 duration-500 md:border-l md:border-t-0 md:pl-8 md:pt-0',
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground">{t.menu.contact}</p>
              <a
                href={`mailto:${links.email}`}
                tabIndex={open ? 0 : -1}
                className="mt-3 block break-all text-xl font-semibold tracking-[-0.02em] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {links.email}
              </a>
            </div>
            <ul className="space-y-2 text-[0.9375rem]">
              {[
                { label: 'LinkedIn', href: links.linkedin },
                { label: 'GitHub', href: links.github },
                { label: 'LeetCode', href: links.leetcode },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={open ? 0 : -1}
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
            <a href={links.cv} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} className="btn-primary w-full">
              <Download aria-hidden="true" className="h-4 w-4" />
              {t.hero.cv}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
