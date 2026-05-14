'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const fields = [
  { key: 'email',    value: 'mehdimoungids@gmail.com',          href: 'mailto:mehdimoungids@gmail.com', comma: true },
  { key: 'location', value: 'Casablanca, Morocco',               href: null,                             comma: true },
  { key: 'status',   value: 'open to opportunities',             href: null,                             comma: true },
  { key: 'linkedin', value: 'linkedin.com/in/moungid-mehdi',     href: 'https://www.linkedin.com/in/moungid-mehdi/', comma: true },
  { key: 'github',   value: 'github.com/Mehdionmars',            href: 'https://github.com/Mehdionmars', comma: true },
  { key: 'resume',   value: 'download_cv.pdf',                   href: 'https://drive.google.com/file/d/1vFYeZIGTTjD5PKPlPh5m5qh8RitD-P_6/view?usp=drive_link', comma: false, icon: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 text-sm">$ curl -X GET /api/contact</p>
          <div className="border-t border-border mt-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-xl border border-border p-5 sm:p-6 space-y-3 text-sm"
        >
          <p className="text-muted-foreground/40 text-xs">{'// response 200 OK'}</p>
          <p className="text-muted-foreground">{'{'}</p>

          <div className="pl-5 space-y-2.5">
            {fields.map(({ key, value, href, comma, icon }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -4 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                viewport={{ once: true }}
                className="flex items-center gap-1.5 flex-wrap text-xs"
              >
                <span className="text-cyan-400">&quot;{key}&quot;</span>
                <span className="text-muted-foreground">:</span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-green-400 hover:underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
                  >
                    {icon && <Download className="w-3 h-3" />}
                    &quot;{value}&quot;
                  </a>
                ) : (
                  <span className="text-green-400">&quot;{value}&quot;</span>
                )}
                {comma && <span className="text-muted-foreground">,</span>}
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground">{'}'}</p>

          <div className="border-t border-border pt-4 text-xs">
            <p className="text-muted-foreground/40 mb-1"># tagline</p>
            <p className="text-muted-foreground/60 italic pl-2">
              &quot;I don&apos;t just build apps — I build products.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
