'use client';

import { motion } from 'framer-motion';

export default function GitHubStats() {
  return (
    <section id="github" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 text-sm">$ gh api /users/Mehdionmars --stats</p>
          <div className="border-t border-border mt-2" />
        </motion.div>

        <div className="space-y-6">
          {/* Stats + Streak */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground/40 text-xs mb-3"># repository_stats</p>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api?username=Mehdionmars&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0a0a0a&title_color=4ade80&icon_color=22d3ee&text_color=e2e2e2"
                alt="GitHub Stats"
                className="w-full sm:w-1/2 object-contain"
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://streak-stats.demolab.com/?user=Mehdionmars&theme=tokyonight&hide_border=true&background=0a0a0a&ring=4ade80&fire=22d3ee&currStreakLabel=4ade80"
                alt="GitHub Streak"
                className="w-full sm:w-1/2 object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Top languages */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground/40 text-xs mb-3"># top_languages</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mehdionmars&layout=compact&theme=tokyonight&hide_border=true&bg_color=0a0a0a&title_color=4ade80&text_color=e2e2e2"
              alt="Top Languages"
              className="w-full max-w-sm object-contain"
              loading="lazy"
            />
          </motion.div>

          {/* Trophies */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground/40 text-xs mb-3"># trophies</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-profile-trophy.vercel.app/?username=Mehdionmars&theme=tokyonight&no-frame=true&margin-w=8&column=4"
              alt="GitHub Trophies"
              className="w-full object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
