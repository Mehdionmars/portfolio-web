'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const bootLines = [
  { text: '$ whoami', delay: 0.3, color: 'text-green-400' },
  { text: '  Mehdi Moungid', delay: 0.7, color: 'text-foreground font-semibold' },
  { text: '', delay: 0.9, color: '' },
  { text: '$ cat role.txt', delay: 1.0, color: 'text-green-400' },
  { text: '  Software Engineer & AI/ML Enthusiast', delay: 1.4, color: 'text-cyan-400' },
  { text: '', delay: 1.5, color: '' },
  { text: '$ echo $TAGLINE', delay: 1.6, color: 'text-green-400' },
  { text: '  Building intelligent solutions, one line of code at a time', delay: 2.0, color: 'text-muted-foreground' },
  { text: '', delay: 2.1, color: '' },
  { text: '$ ls --links/', delay: 2.2, color: 'text-green-400' },
];

const links = [
  { label: 'linkedin/', href: 'https://www.linkedin.com/in/moungid-mehdi/', Icon: Linkedin, color: 'text-blue-400 hover:text-blue-300' },
  { label: 'github/', href: 'https://github.com/Mehdionmars', Icon: Github, color: 'text-foreground hover:text-white' },
  { label: 'leetcode/', href: 'https://leetcode.com/Mehdionmars', Icon: Code, color: 'text-orange-400 hover:text-orange-300' },
];

export default function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const titleComponent = (
    <div className="space-y-4 font-mono mb-6">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-green-400 text-xs sm:text-sm tracking-widest uppercase"
      >
        $ ./init-portfolio.sh
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
      >
        Mehdi Moungid
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-sm sm:text-base text-muted-foreground"
      >
        Software Engineer &amp; AI/ML Enthusiast
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-xs text-muted-foreground/50"
      >
        scroll to explore ↓
      </motion.p>
    </div>
  );

  return (
    <section id="hero" className="bg-background overflow-hidden">
      <ContainerScroll titleComponent={titleComponent}>
        {/* Terminal window inside the 3D card */}
        <div className="h-full flex flex-col bg-[#0a0a0a] font-mono text-sm overflow-hidden">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-500/70 block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70 block" />
            <span className="w-3 h-3 rounded-full bg-green-500/70 block" />
            <span className="ml-3 text-xs text-white/40">
              mehdi@portfolio: ~ — bash — 80×24
            </span>
          </div>

          {/* Terminal output */}
          <div className="flex-1 p-4 md:p-6 space-y-1 overflow-auto">
            {bootLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: line.delay, duration: 0.2 }}
                className={`leading-relaxed ${line.color}`}
              >
                {line.text || '\u00A0'}
              </motion.p>
            ))}

            {/* Links row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.2 }}
              className="flex flex-wrap gap-5 pt-1 pl-2"
            >
              {links.map(({ label, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${color} text-sm flex items-center gap-1.5 transition-colors`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </a>
              ))}
            </motion.div>

            {/* Active prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0, duration: 0.2 }}
              className="flex items-center gap-2 pt-4"
            >
              <span className="text-green-400">$</span>
              <button
                onClick={scrollToAbout}
                className="text-muted-foreground hover:text-green-400 transition-colors underline-offset-4 hover:underline"
              >
                ./explore-work.sh
              </button>
              <span
                className={`inline-block w-2 h-4 bg-green-400 transition-opacity ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
              />
            </motion.div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1 border-t border-white/10 bg-white/5 text-xs text-white/30 flex-shrink-0">
            <span>
              <span className="text-green-400/70">INSERT</span>
              &nbsp;|&nbsp;Casablanca, Morocco
            </span>
            <span>ready</span>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
