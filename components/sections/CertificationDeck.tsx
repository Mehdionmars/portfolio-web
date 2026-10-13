'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Atom, Cloud, Infinity as Loop, Server, ShieldCheck } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/animated-card';
import { cn } from '@/lib/utils';
import { certifications, type Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';

const ICONS = {
  'meta-react': Atom,
  'google-spring': Server,
  'ibm-devops': Loop,
  'ibm-cloud': Cloud,
  mastercard: ShieldCheck,
} as const;

/** Where each position in the deck sits: the front card, then the fan behind it. */
const SLOTS = [
  { x: '0%', y: '0%', rotate: 0, scale: 1, z: 40, shade: 0 },
  { x: '36%', y: '8%', rotate: 7, scale: 0.92, z: 30, shade: 0.4 },
  { x: '-36%', y: '8%', rotate: -7, scale: 0.92, z: 20, shade: 0.4 },
  { x: '52%', y: '16%', rotate: 13, scale: 0.84, z: 15, shade: 0.65 },
  { x: '-52%', y: '16%', rotate: -13, scale: 0.84, z: 10, shade: 0.65 },
];

function VerifyLink({ href, title, label }: { href: string; title: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      className="link inline-flex items-center gap-1.5"
    >
      {label}
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      <span className="sr-only">— {title}</span>
    </a>
  );
}

export default function CertificationDeck({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].certifications;
  const reduce = useReducedMotion();
  // order[0] is the card at the front.
  const [order, setOrder] = useState(() => certifications.map((_, i) => i));
  const front = order[0];

  const bringForward = (certIndex: number) =>
    setOrder((prev) => {
      const slot = prev.indexOf(certIndex);
      if (slot <= 0) return prev;
      const next = [...prev];
      [next[0], next[slot]] = [next[slot], next[0]];
      return next;
    });

  const card = (i: number, onClick?: () => void) => {
    const cert = certifications[i];
    const Icon = ICONS[cert.id];
    return (
      <AnimatedCard
        icon={<Icon aria-hidden="true" className="h-5 w-5" />}
        eyebrow={cert.issuer}
        title={cert.title}
        subtitle={cert.detail}
        tags={cert.tags[locale]}
        variant={cert.variant}
        onClick={onClick}
        aria-label={onClick ? `${t.show}: ${cert.title}` : undefined}
        footer={cert.link ? <VerifyLink href={cert.link} title={cert.title} label={t.view} /> : undefined}
      />
    );
  };

  return (
    <>
      {/* Phones: a plain stack, every card readable. */}
      <div className="space-y-4 md:hidden">
        {certifications.map((_, i) => (
          <div key={certifications[i].id}>{card(i)}</div>
        ))}
      </div>

      {/* Wider screens: the fanned deck, plus an index that reads at a glance. */}
      <div className="hidden gap-10 md:grid lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-center">
        <div className="relative h-[30rem]" style={{ perspective: '1000px' }} role="group" aria-label={t.deck}>
          {certifications.map((cert, i) => {
            const slot = SLOTS[order.indexOf(i)];
            const isFront = i === front;
            return (
              <motion.div
                key={cert.id}
                className="absolute inset-x-0 top-[16%] mx-auto w-[min(25rem,62%)]"
                initial={false}
                animate={{ x: slot.x, y: slot.y, rotate: slot.rotate, scale: slot.scale }}
                transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 28 }}
                style={{ zIndex: slot.z }}
              >
                {card(i, isFront ? undefined : () => bringForward(i))}
                {/* Opaque cards, receded by a veil of the page colour: no text shows through. */}
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-background"
                  initial={false}
                  animate={{ opacity: slot.shade }}
                  transition={reduce ? { duration: 0 } : { duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        <ol className="border-t border-border">
          {certifications.map((cert, i) => {
            const isFront = i === front;
            return (
              <li key={cert.id} className="flex items-start justify-between gap-4 border-b border-border py-4">
                <button
                  type="button"
                  onClick={() => bringForward(i)}
                  aria-current={isFront ? 'true' : undefined}
                  className="min-w-0 text-left"
                >
                  <span className={cn('block font-semibold transition-colors', isFront ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}>
                    {isFront ? <span className="text-primary">▸ </span> : null}
                    {cert.title}
                  </span>
                  <span className="mt-0.5 block font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">{cert.issuer}</span>
                </button>
                {cert.link && (
                  <span className="shrink-0 text-sm">
                    <VerifyLink href={cert.link} title={cert.title} label={t.view} />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
