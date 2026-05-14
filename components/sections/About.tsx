'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const meta = [
  { key: 'name',   value: 'Mehdi Moungid',     cls: 'text-cyan-400' },
  { key: 'edu',    value: 'Emsi • Miage',        cls: 'text-foreground' },
  { key: 'loc',    value: 'Casablanca, Morocco', cls: 'text-foreground' },
  { key: 'focus',  value: 'AI/ML, Fullstack',    cls: 'text-green-400' },
  { key: 'status', value: 'open to work',        cls: 'text-green-400' },
];

const currentFocus = [
  'AI integrations (chatbots, automation)',
  'SaaS platforms (Airbnb-like systems)',
  'Performance & UX (premium-level interfaces)',
  'System design & scalable architecture',
];

const whatIBring = [
  'Clean architecture & scalable code',
  'Strong UX/UI sense — not just dev',
  'Fast execution (startup mindset)',
  'End-to-end product thinking',
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 text-sm">$ cat about.md</p>
          <div className="border-t border-border mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Profile column */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="border border-border inline-block p-0.5">
              <Image
                src="/profile.jpg"
                alt="Mehdi Moungid"
                width={160}
                height={160}
                className="object-cover grayscale contrast-110"
              />
            </div>

            <div className="space-y-1.5 text-xs">
              {meta.map(({ key, value, cls }) => (
                <div key={key} className="flex gap-2">
                  <span className="text-muted-foreground w-12 shrink-0">{key}:</span>
                  <span className={cls}>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6 text-xs"
          >
            <div className="border-l-2 border-green-400/40 pl-4 space-y-3">
              <p className="text-muted-foreground/40"># about.md</p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground">One word drives me</span> — curiosity.
                I build real-world full-stack and AI/ML applications that make a difference,
                from voice bots to intelligent automation systems.
              </p>
              <p className="text-muted-foreground/50 italic">
                &quot;I don&apos;t just build apps — I build products.&quot;
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-green-400">## current_focus</p>
              {currentFocus.map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground pl-2"
                >
                  <span className="text-cyan-400/60 mr-2">▸</span>{item}
                </motion.p>
              ))}
            </div>

            <div className="space-y-1.5">
              <p className="text-green-400">## what_i_bring</p>
              {whatIBring.map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground pl-2"
                >
                  <span className="text-green-400/60 mr-2">✓</span>{item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
