import type { CSSProperties } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { links, type Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';
import { ParallaxLayers } from '@/components/ui/parallax-layers';

const step = (i: number) => ({ '--i': i }) as CSSProperties;

export default function Hero({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].hero;
  const status = t.status.find((s) => s.ok);

  return (
    <section id="top" tabIndex={-1} aria-labelledby="hero-title" className="relative overflow-hidden outline-none">
      {/* First screen: the layered landscape, the name between its layers, the offer and both actions on the ground. */}
      <div className="relative z-[2] flex min-h-[100svh] flex-col items-center justify-end px-5 pb-[8svh] sm:px-8">
        <ParallaxLayers>
          <h1
            id="hero-title"
            className="boot px-4 text-center text-[19vw] font-semibold leading-[0.88] tracking-[-0.05em] text-white sm:text-[clamp(4rem,9.5vw,10rem)]"
            style={step(0)}
          >
            {t.name.split(' ').map((word, i) => (
              <span key={word} className="block sm:inline">
                {i > 0 && <span className="hidden sm:inline"> </span>}
                {word}
              </span>
            ))}
          </h1>
        </ParallaxLayers>

        <div className="dark relative z-40 flex w-full max-w-md flex-col items-center text-center text-white sm:max-w-none">
          {status && (
            <p className="boot inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3.5 py-1.5 text-sm text-white/75 backdrop-blur-md" style={step(1)}>
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-medium text-white">{status.value}</span>
              <span aria-hidden="true">·</span>
              {t.place}
            </p>
          )}
          <p className="boot mt-4 text-xl font-medium tracking-[-0.02em] sm:text-2xl" style={step(2)}>
            {t.role}
          </p>
          <div className="boot mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row" style={step(3)}>
            <a href={links.cv} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3.5">
              <Download aria-hidden="true" className="h-4 w-4" />
              {t.cv}
            </a>
            <a href="#contact" className="btn-ghost border-white/25 bg-white/10 px-6 py-3.5 text-white backdrop-blur-md hover:border-white">
              {t.contact}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Below the first screen: the offer in a sentence, and a door for each audience. */}
      <div className="relative px-5 pb-20 pt-[26svh] sm:px-8 md:pb-28">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[clamp(1.25rem,2.2vw,1.625rem)] font-medium leading-snug tracking-[-0.02em] text-muted-foreground">{t.lede}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-2 text-[0.9375rem] sm:flex-row">
            <p>
              <span className="text-muted-foreground">{t.hiring} </span>
              <a href="#experience" className="link whitespace-nowrap">
                {t.hiringLink} →
              </a>
            </p>
            <p>
              <span className="text-muted-foreground">{t.client} </span>
              <a href="#pricing" className="link whitespace-nowrap">
                {t.clientLink} →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
