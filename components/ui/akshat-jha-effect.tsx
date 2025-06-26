"use client";

import type { TargetAndTransition } from "framer-motion";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
};

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
};

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

function AkshatJhaEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-16 sm:h-20 md:h-24", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="12"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>Akshat Jha</title>

      {/* A */}
      <motion.path
        d="M20 180 L60 40 L100 180 M35 120 L85 120"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />

      {/* k */}
      <motion.path
        d="M120 40 L120 180 M120 110 L160 70 M120 110 L160 150"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(0.2),
          opacity: { duration: 0.3, delay: calc(0.2) },
        }}
      />

      {/* s */}
      <motion.path
        d="M200 150 C180 150 180 130 200 130 C220 130 220 110 200 110 C180 110 180 90 200 90"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(0.4),
          opacity: { duration: 0.35, delay: calc(0.4) },
        }}
      />

      {/* h */}
      <motion.path
        d="M240 40 L240 180 M240 110 C240 90 260 90 280 90 L280 180"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(0.6),
          opacity: { duration: 0.4, delay: calc(0.6) },
        }}
      />

      {/* a */}
      <motion.path
        d="M320 130 C320 110 340 90 360 90 C380 90 400 110 400 130 L400 180 M400 130 L320 130"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(0.8),
          opacity: { duration: 0.35, delay: calc(0.8) },
        }}
      />

      {/* t */}
      <motion.path
        d="M440 70 L480 70 M460 70 L460 170 C460 180 470 180 480 180"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(1.0),
          opacity: { duration: 0.3, delay: calc(1.0) },
        }}
      />

      {/* Space */}

      {/* J */}
      <motion.path
        d="M520 70 L560 70 M540 70 L540 150 C540 170 520 180 500 170"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(1.2),
          opacity: { duration: 0.4, delay: calc(1.2) },
        }}
      />

      {/* h */}
      <motion.path
        d="M580 40 L580 180 M580 110 C580 90 600 90 620 90 L620 180"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(1.4),
          opacity: { duration: 0.4, delay: calc(1.4) },
        }}
      />

      {/* a */}
      <motion.path
        d="M660 130 C660 110 680 90 700 90 C720 90 740 110 740 130 L740 180 M740 130 L660 130"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(1.6),
          opacity: { duration: 0.35, delay: calc(1.6) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

export { AkshatJhaEffect };