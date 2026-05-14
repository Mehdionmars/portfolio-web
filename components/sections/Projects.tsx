'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const projects = [
  {
    title: 'VCard QR Generator',
    description: 'Interactive web tool to generate vCard QR codes with customizable contact information.',
    date: 'March 2025',
    achievements: [
      'Built with React.js and Node.js',
      'Fill in data to make vCard and generate QR code',
      'Open source project',
    ],
    technologies: ['React.js', 'Node.js', 'Python', 'Data Visualization'],
    demoUrl: 'https://gentle-lamington-556b02.netlify.app/',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'PC Boost Gaming',
    description: 'Mobile/web platform for a store selling gaming PCs and accessories.',
    date: 'February 2025',
    achievements: [
      'Built a website for a gaming PC store',
      'Developed backend with Payload CMS for real-time updates and auth',
      'Added PC builder feature',
    ],
    technologies: ['Payload CMS', 'React', 'Node.js', 'Express', 'TypeScript', 'Vite.js'],
    demoUrl: 'https://beta.boostgaming.ma/',
    githubUrl: 'https://github.com/xenedium/boostgaming-frontend',
  },
  {
    title: 'Weather Forecast Detection',
    description: 'Enhanced weather forecast system achieving 97.35% accuracy using advanced ML techniques.',
    date: 'June 2025',
    achievements: [
      'Enhanced weather forecast accuracy using APIs by optimizing features',
      'Designed a CNN-based weather classification pipeline in PyTorch',
      'Achieved 3x faster training with batch normalization',
      'Developed an interactive web app using Next.js for real-time data',
    ],
    technologies: ['Python', 'Seaborn', 'Next.js', 'PyTorch', 'Jupyter Notebook'],
    demoUrl: 'https://weatherca.vercel.app/',
    githubUrl: 'https://github.com/Mehdionmars/weatherca/',
  },
  {
    title: 'Cyberpunk Dashboard',
    description: 'Cyberpunk-inspired display combining retro-pixel aesthetics with modern interface elements.',
    date: 'Aug 2024 – Dec 2024',
    achievements: [
      'Built with TypeScript, Next.js, and Supabase',
      'Custom UI with retro aesthetics',
    ],
    technologies: ['TypeScript', 'Next.js', 'Supabase', 'React'],
    demoUrl: 'https://v0-cyberpunk-dashboard-design-gold-eta-63.vercel.app/',
    githubUrl: 'https://github.com/AkshatJha0411/SustainX/',
  },
  {
    title: 'Beachfront Luxury Accommodation',
    description: 'Website for a luxury beachfront accommodation in Maldives.',
    date: 'Jan – May 2025',
    achievements: [
      'Designed using Figma for UI/UX and React.js for frontend',
      'Integrated gallery and contact form',
      'Hotel booking and accommodation services',
    ],
    technologies: ['Vite.js', 'React', 'TypeScript'],
    demoUrl: 'https://resortseaside.vercel.app/',
    githubUrl: 'https://github.com/AkshatJha0411/teleop-with-ros',
  },
  {
    title: 'AtlanticSoud',
    description: 'Web application for a construction company in Morocco.',
    date: 'February 2025',
    achievements: [
      'Built with Next.js, React and Supabase',
      'Implemented gallery, contact form, and dynamic content management',
      'SEO optimization and responsive design',
    ],
    technologies: ['Next.js', 'React', 'Supabase', 'TypeScript'],
    demoUrl: 'https://www.atlanticsoud.ma/',
    githubUrl: 'https://github.com/Mehdionmars/Constead',
  },
];

const titleComponent = (
  <div className="space-y-3 font-mono mb-6">
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="text-green-400 text-xs sm:text-sm tracking-widest uppercase"
    >
      $ ls -la ~/projects/
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight"
    >
      Projects
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-sm text-muted-foreground"
    >
      {projects.length} entries — scroll inside to browse
    </motion.p>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="bg-background overflow-hidden">
      <ContainerScroll titleComponent={titleComponent}>
        {/* Terminal file listing inside the 3D card */}
        <div className="h-full flex flex-col bg-[#0a0a0a] font-mono text-xs overflow-hidden">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-500/70 block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70 block" />
            <span className="w-3 h-3 rounded-full bg-green-500/70 block" />
            <span className="ml-3 text-white/40 text-xs">
              ~/projects — total {projects.length}
            </span>
          </div>

          {/* Column header */}
          <div className="flex items-center gap-3 px-4 py-2 border-b border-white/5 text-white/20 flex-shrink-0">
            <span className="w-24 hidden sm:block">permissions</span>
            <span className="flex-1">name</span>
            <span className="w-28 text-right hidden sm:block">date</span>
            <span className="w-16 text-right">links</span>
          </div>

          {/* Scrollable project rows */}
          <div className="flex-1 overflow-y-auto divide-y divide-white/5">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group hover:bg-green-400/5 transition-colors duration-150"
              >
                {/* Main row */}
                <div className="flex items-center gap-3 px-4 py-2.5">
                  <span className="w-24 text-white/25 hidden sm:block shrink-0">-rw-r--r--</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-cyan-400 font-semibold truncate">{project.title}</span>
                      <span className="text-white/30 hidden sm:inline truncate max-w-xs">
                        — {project.description}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-green-400/50">[{tech}]</span>
                      ))}
                    </div>
                  </div>
                  <span className="w-28 text-right text-white/30 hidden sm:block shrink-0">
                    {project.date}
                  </span>
                  <div className="w-16 flex justify-end gap-2 shrink-0">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-green-400 transition-colors"
                        title="Live demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-white transition-colors"
                        title="Source code"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Achievements — visible on hover via group */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out">
                  <div className="px-4 pb-2.5 space-y-1 border-t border-white/5">
                    {project.achievements.map((a, i) => (
                      <p key={i} className="text-white/40 pl-2">
                        <span className="text-green-400/50 mr-1.5">▸</span>
                        {a}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 border-t border-white/10 bg-white/5 text-white/25 flex-shrink-0">
            <span>
              <span className="text-green-400/60">NORMAL</span>
              &nbsp;|&nbsp;{projects.length} files
            </span>
            <span>hover a row to expand</span>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
