import { Download, Mail } from 'lucide-react';
import { links, type Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';
import CopyEmail from './CopyEmail';
import Section, { Prompt } from './Section';

export default function Contact({ locale }: { locale: Locale }) {
  const d = dictionaries[locale];
  const t = d.contact;

  const fields: { key: string; value: string; href?: string }[] = [
    { key: t.keys.location, value: t.location },
    { key: t.keys.status, value: t.statusValue },
    { key: 'linkedin', value: 'linkedin.com/in/moungid-mehdi', href: links.linkedin },
    { key: 'github', value: 'github.com/Mehdionmars', href: links.github },
    { key: 'leetcode', value: 'leetcode.com/Mehdionmars', href: links.leetcode },
    { key: t.keys.resume, value: t.cvFile, href: links.cv },
  ];

  return (
    <Section id="contact" locale={locale} className="pb-24 md:pb-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <a
            href={`mailto:${links.email}`}
            className="block break-all text-[clamp(1.5rem,3.2vw,2.5rem)] font-semibold leading-tight tracking-[-0.035em] text-title underline decoration-transparent underline-offset-8 transition-colors hover:decoration-foreground"
          >
            {links.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${links.email}`} className="btn-primary">
              <Mail aria-hidden="true" className="h-4 w-4" />
              {t.email}
            </a>
            <CopyEmail locale={locale} />
            <a href={links.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Download aria-hidden="true" className="h-4 w-4" />
              {t.cv}
            </a>
          </div>
          <blockquote className="mt-12 border-l border-foreground pl-5 text-lg font-medium tracking-[-0.01em] text-muted-foreground">
            “{d.about.quote}”
          </blockquote>
        </div>

        <div className="term-window lg:col-span-6">
          <div className="term-bar" aria-hidden="true">
            <Prompt /> curl /api/contact
          </div>
          <div className="p-5 font-mono text-[0.8125rem] sm:p-6">
            <p aria-hidden="true" className="text-sm text-dim">
              {'// 200 OK'}
            </p>
            <span aria-hidden="true" className="text-dim">
              {'{'}
            </span>
            <dl className="space-y-1.5 py-1 pl-4">
              {fields.map(({ key, value, href }, i) => (
                <div key={key} className="flex flex-wrap gap-x-2">
                  <dt className="text-muted-foreground">
                    &quot;{key}&quot;<span className="text-dim">:</span>
                  </dt>
                  <dd className="min-w-0 break-words">
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="link">
                        &quot;{value}&quot;
                      </a>
                    ) : (
                      <span className="text-foreground">&quot;{value}&quot;</span>
                    )}
                    {i < fields.length - 1 && <span className="text-dim">,</span>}
                  </dd>
                </div>
              ))}
            </dl>
            <span aria-hidden="true" className="text-dim">
              {'}'}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
