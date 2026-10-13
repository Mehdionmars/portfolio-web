import Header from '@/components/layout/Header';
import RevealOnScroll from '@/components/layout/RevealOnScroll';
import TerminalIntro from '@/components/layout/TerminalIntro';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Achievements from '@/components/sections/Achievements';
import Pricing from '@/components/sections/Pricing';
import DevMon from '@/components/sections/DevMon';
import Contact from '@/components/sections/Contact';
import type { Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';

export default function Portfolio({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {t.skip}
      </a>
      <TerminalIntro locale={locale} />
      <RevealOnScroll />
      <Header locale={locale} />
      <main id="main" className="relative z-10 overflow-x-clip">
        <Hero locale={locale} />
        <About locale={locale} />
        <Projects locale={locale} />
        <Experience locale={locale} />
        <Skills locale={locale} />
        <Achievements locale={locale} />
        <Pricing locale={locale} />
        <DevMon locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
      <BackToTop label={t.toTop} />
    </>
  );
}
