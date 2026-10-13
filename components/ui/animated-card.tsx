'use client';

/**
 * AnimatedCard — a card with a subtle, interactive 3D tilt on hover.
 *
 * Adapted from kavikatiyar's AnimatedJobCard (21st.dev) to the terminal theme:
 * square corners, theme tokens, a coloured top rule per variant, bracket-free
 * square tags, and generic slots (icon, eyebrow, title, subtitle, tags, footer)
 * so it can carry more than job postings. Positioning (fans, stacks) is left to
 * the parent; the card only owns its tilt.
 */
import React from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export type AnimatedCardVariant = 'green' | 'cyan' | 'amber' | 'white';

export interface AnimatedCardProps {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  subtitle?: string;
  tags?: string[];
  footer?: React.ReactNode;
  variant?: AnimatedCardVariant;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

// Monochrome theme: every variant renders the same quiet card; the prop is kept for API compatibility.
const variantClasses: Record<AnimatedCardVariant, { rule: string; ink: string }> = {
  green: { rule: '', ink: 'text-foreground' },
  cyan: { rule: '', ink: 'text-foreground' },
  amber: { rule: '', ink: 'text-foreground' },
  white: { rule: '', ink: 'text-foreground' },
};

export const AnimatedCard = ({
  icon,
  eyebrow,
  title,
  subtitle,
  tags = [],
  footer,
  variant = 'green',
  className,
  onClick,
  'aria-label': ariaLabel,
}: AnimatedCardProps) => {
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || reduce) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Mouse position → 3D rotation, with spring physics for a smooth return.
  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-150, 150], [-10, 10]);
  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const tone = variantClasses[variant];

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: 'preserve-3d' }}
      className={cn(
        'relative w-full transform-gpu overflow-hidden rounded-2xl border border-border bg-card p-6',
        'shadow-[var(--shadow)] transition-shadow duration-300 hover:shadow-[0_32px_64px_-24px_rgb(0_0_0/0.35)]',
        onClick && 'cursor-pointer',
        tone.rule,
        className
      )}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="space-y-4">
        <div className="flex items-center gap-3">
          <div className={cn('grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background', tone.ink)}>{icon}</div>
          <span className="font-semibold text-muted-foreground">{eyebrow}</span>
        </div>

        <div>
          <h3 className="text-lg font-bold leading-snug text-foreground">{title}</h3>
          {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>

        {tags.length ? (
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {footer ? <div className="pt-2 text-right text-sm">{footer}</div> : null}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
