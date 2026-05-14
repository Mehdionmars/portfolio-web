'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  activeSection: string;
}

const navigation = [
  { name: '~/',          href: '#hero' },
  { name: 'about',       href: '#about' },
  { name: 'exp',         href: '#experience' },
  { name: 'projects',    href: '#projects' },
  { name: 'skills',      href: '#skills' },
  { name: 'github',      href: '#github' },
  { name: 'awards',      href: '#achievements' },
  { name: 'pricing',     href: '#pricing' },
  { name: 'contact',     href: '#contact' },
];

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          {/* Prompt logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-0.5 text-xs hover:opacity-80 transition-opacity"
          >
            <span className="text-muted-foreground">mehdi</span>
            <span className="text-green-400">@</span>
            <span className="text-cyan-400">portfolio</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="ml-1 inline-block w-1.5 h-3.5 bg-green-400 cursor-blink" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => {
              const isActive = item.href.substring(1) === activeSection;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'px-2.5 py-1 text-xs transition-all duration-200',
                    isActive
                      ? 'text-green-400 bg-green-400/10 border border-green-400/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent'
                  )}
                >
                  {isActive ? (
                    <span><span className="text-green-400/60">./</span>{item.name}</span>
                  ) : (
                    <span>./{item.name}</span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-muted-foreground hover:text-foreground text-xs transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '[close]' : '[menu]'}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/98 py-2">
            {navigation.map((item) => {
              const isActive = item.href.substring(1) === activeSection;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'block w-full text-left px-4 py-2 text-xs transition-colors',
                    isActive
                      ? 'text-green-400 bg-green-400/5'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <span className={isActive ? 'text-green-400' : 'text-muted-foreground/50'}>
                    {isActive ? '▶ ' : '  '}
                  </span>
                  ./{item.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
