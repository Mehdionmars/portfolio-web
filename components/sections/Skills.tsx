'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  { key: 'languages',  skills: ['Python', 'JavaScript/TypeScript', 'C++', 'Java', 'Golang'] },
  { key: 'frameworks', skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Django'] },
  { key: 'tools',      skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Supabase', 'Salesforce'] },
  { key: 'data',       skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'PostgreSQL', 'MongoDB', 'GeoPandas', 'Rasterio'] },
];

const techStacks = [
  { label: 'Core',           icons: 'react,nextjs,nodejs,ts,js' },
  { label: 'Backend & DB',   icons: 'nestjs,express,mongodb,postgres,mysql,prisma' },
  { label: 'Cloud & DevOps', icons: 'docker,aws,azure,nginx,linux,git' },
  { label: 'UI & Tools',     icons: 'tailwind,figma,threejs' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 text-sm">$ cat skills.json | python3 -m json.tool</p>
          <div className="border-t border-border mt-2" />
        </motion.div>

        {/* Skillicons visual rows */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-border p-4 sm:p-5 mb-4 space-y-4"
        >
          <p className="text-muted-foreground/40 text-xs"># tech_stack</p>
          {techStacks.map(({ label, icons }) => (
            <div key={label} className="space-y-1">
              <p className="text-muted-foreground/50 text-xs pl-2">{label}</p>
              <div className="pl-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://skillicons.dev/icons?i=${icons}&theme=dark`}
                  alt={label}
                  className="h-8 md:h-9"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* JSON skills */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="border border-border p-4 sm:p-5 space-y-4 text-xs"
        >
          <p className="text-muted-foreground/30">{'{'}</p>

          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
              viewport={{ once: true }}
              className="pl-4 sm:pl-6 space-y-1.5"
            >
              <div className="flex items-center gap-1">
                <span className="text-cyan-400">&quot;{cat.key}&quot;</span>
                <span className="text-muted-foreground">: [</span>
              </div>
              <div className="pl-4 flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="text-green-400/75 hover:text-green-400 transition-colors cursor-default">
                    &quot;{skill}&quot;{j < cat.skills.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">]{i < skillCategories.length - 1 ? ',' : ''}</p>
            </motion.div>
          ))}

          <p className="text-muted-foreground/30">{'}'}</p>
        </motion.div>
      </div>
    </section>
  );
}
