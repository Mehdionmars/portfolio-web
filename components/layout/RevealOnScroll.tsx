'use client';

import { useEffect } from 'react';

/**
 * Reveals every `[data-reveal]` block as it scrolls into view. Content is visible
 * by default: only blocks still below the fold when the page loads are held back,
 * and nothing is held back without JavaScript or for reduced-motion users.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const pending = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]')).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9
    );
    pending.forEach((el) => el.classList.add('reveal-pending'));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove('reveal-pending');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    pending.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      pending.forEach((el) => el.classList.remove('reveal-pending'));
    };
  }, []);

  return null;
}
