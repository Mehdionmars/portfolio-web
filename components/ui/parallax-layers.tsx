'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';

// Adapted from Osmo's "Parallax Scrolling" (21st.dev/@osmosupply): same layer stack and
// speeds, driven by framer-motion instead of GSAP + Lenis so the page keeps native scrolling
// (scroll snap, the projects wheel and the menu jumps all rely on it).
const LAYER_IMG =
  'pointer-events-none absolute left-0 top-[-17.5%] h-[117.5%] w-full max-w-none select-none object-cover will-change-transform';

function Layer({ src, y }: { src: string; y?: MotionValue<string> }) {
  return <motion.img src={src} alt="" width={2000} height={1906} loading="eager" decoding="async" draggable={false} style={y ? { y } : undefined} className={LAYER_IMG} />;
}

export function ParallaxLayers({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // From the stack's top meeting the viewport top to its bottom leaving it.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const sky = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const mountain = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);
  const title = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const front = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const move = !reduce;

  return (
    <div className="absolute inset-x-0 top-0 h-[120%]">
      <div ref={ref} className="absolute inset-0 overflow-hidden bg-neutral-900">
        <Layer src="/hero/sky.webp" y={move ? sky : undefined} />
        <Layer src="/hero/mountain.webp" y={move ? mountain : undefined} />
        <motion.div style={move ? { y: title } : undefined} className="absolute inset-x-0 top-0 flex h-[100svh] items-center justify-center will-change-transform">
          {children}
        </motion.div>
        <Layer src="/hero/front.webp" y={move ? front : undefined} />
      </div>
      {/* Shade under the copy that sits on the ground, then the stack dissolves into the page in either theme. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] h-[55%] bg-gradient-to-t from-black/50 to-transparent" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[24%] bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)/0.55)_45%,hsl(var(--background)/0.9)_75%,hsl(var(--background)))]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-px z-20 h-0.5 bg-background" />
    </div>
  );
}
