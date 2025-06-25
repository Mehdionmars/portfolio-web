'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Github, Linkedin, Code, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-4 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -bottom-8 -left-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 p-1"
          >
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-teal-600 bg-clip-text text-transparent">
                AJ
              </span>
            </div>
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-6xl font-bold text-foreground"
            >
              Akshat Jha
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-muted-foreground"
            >
              Software Engineer & AI/ML Enthusiast
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Building intelligent solutions and automating the future, one line of code at a time
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center flex-wrap gap-4"
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-900/20"
            >
              <a
                href="https://linkedin.com/in/iakshatjha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Linkedin className="w-5 h-5 group-hover:text-blue-600" />
                <span>LinkedIn</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-gray-800"
            >
              <a
                href="https://github.com/AkshatJha0411/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="group hover:bg-pink-50 hover:border-pink-300 dark:hover:bg-pink-900/20"
            >
              <a
                href="https://www.instagram.com/akshat_j11/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Instagram className="w-5 h-5 group-hover:text-pink-600" />
                <span>Instagram</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group hover:bg-orange-50 hover:border-orange-300 dark:hover:bg-orange-900/20"
            >
              <a
                href="https://leetcode.com/iakshatjha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Code className="w-5 h-5 group-hover:text-orange-600" />
                <span>LeetCode</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - moved to bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 right-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}