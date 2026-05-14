'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    company: 'Solupharm',
    role: 'Fullstack Developer Intern',
    location: 'Montreal, QC',
    period: 'Oct. 2024 – Dec. 2024',
    achievements: [
      'Collaborated cross-functionally to define and prioritize features.',
      'Developed interactive web platform using Next.js for task management.',
      'Integrated advanced scheduling features for real-time activity tracking.',
      'Designed modular and scalable architecture, reducing maintenance time.',
    ],
    technologies: ['Next.js', 'Vercel', 'Postgres', 'Node.js', 'Tailwind', 'EC2', 'RDS', 'S3', 'Shadcn', 'React', 'TypeScript'],
  },
  {
    company: 'LogInfo',
    role: 'Backend & Frontend Intern',
    location: 'Casablanca, Morocco',
    period: 'Mar. 2024 – Sept. 2024',
    achievements: [
      'Deployed applications with Next.js and React on AWS (EC2, RDS, S3).',
      'Integrated Docker and Azure DevOps for environment management.',
      'Performed code reviews, unit testing, and system testing.',
      'Created code templates to share with other developers.',
    ],
    technologies: ['Next.js', 'Vercel', 'Postgres', 'Node.js', 'Tailwind', 'EC2', 'RDS', 'S3', 'Shadcn', 'React.js'],
  },
  {
    company: 'Hpsearch',
    role: 'WordPress Developer Intern',
    location: 'Casablanca, Morocco',
    period: 'June 2023 – Aug. 2023',
    achievements: [
      'Developed a WordPress plugin integrating third-party APIs.',
      'Built multiple websites with responsive, optimized design.',
    ],
    technologies: ['WordPress', 'Elementor', 'PHP'],
  },
  {
    company: 'SDAIM',
    role: 'Android Developer Intern',
    location: 'Casablanca, Morocco',
    period: 'June 2021 – Sept. 2021',
    achievements: [
      'Developed and maintained a mobile application.',
      'Developed backend tools with Payload CMS and MongoDB.',
    ],
    technologies: ['Payload CMS', 'React Native', 'Node.js', 'MongoDB', 'Expo'],
  },
  {
    company: 'SITA',
    role: 'Network Technician Intern',
    location: 'Mohammed V Airport, Casablanca',
    period: 'May 2020 – June 2020',
    achievements: [
      'Assisted in managing network infrastructures.',
      'Gained introduction to network supervision and monitoring.',
    ],
    technologies: ['Cisco Networking', 'Network Monitoring'],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 text-sm">$ ls -la ~/experience/</p>
          <p className="text-xs text-muted-foreground mt-0.5">total {experiences.length}</p>
          <div className="border-t border-border mt-2" />
        </motion.div>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full text-left border border-border hover:border-green-400/40 transition-all duration-200 p-3 sm:p-4 group"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-muted-foreground/50 text-xs hidden sm:inline">drwxr-xr-x</span>
                    <span className="text-cyan-400 text-sm font-semibold">{exp.company}/</span>
                    <span className="text-muted-foreground text-xs">{exp.role}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="hidden sm:inline">{exp.location}</span>
                    <span>{exp.period}</span>
                    <span className={`transition-colors ${expanded === index ? 'text-green-400' : 'group-hover:text-foreground'}`}>
                      {expanded === index ? '[-]' : '[+]'}
                    </span>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border border-t-0 border-border bg-muted/10 p-4 sm:p-5 space-y-4 text-xs">
                      <div className="space-y-1.5">
                        <p className="text-muted-foreground/40"># achievements</p>
                        {exp.achievements.map((a, i) => (
                          <p key={i} className="text-muted-foreground pl-2">
                            <span className="text-green-400/70 mr-2">▸</span>{a}
                          </p>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground/40"># stack</p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="border border-border px-2 py-0.5 text-muted-foreground hover:text-foreground hover:border-green-400/40 transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
