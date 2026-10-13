import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice, links, tiers, type Locale } from '@/lib/content';
import { dictionaries } from '@/lib/i18n';
import Section from './Section';

const mailto = (subject: string) => `mailto:${links.email}?subject=${encodeURIComponent(subject)}`;

export default function Pricing({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].pricing;

  return (
    <Section id="pricing" locale={locale}>
      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => {
          const name = tier.name[locale];
          return (
            <article
              key={tier.id}
              className={cn('flex flex-col overflow-hidden rounded-2xl border bg-card', tier.featured ? 'border-foreground' : 'border-border')}
              style={{ boxShadow: 'var(--shadow)' }}
            >
              <div className="flex items-center justify-between gap-4 px-6 pt-6 text-sm">
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{name}</h3>
                {tier.featured && <span className="rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background">{t.popular}</span>}
              </div>
              <div className="flex flex-1 flex-col p-6 pt-3">
                <p className="text-muted-foreground md:min-h-[3.4em]">{tier.audience[locale]}</p>
                <p className="mt-6 text-[2.5rem] font-semibold leading-none tracking-[-0.045em] text-foreground">
                  {formatPrice(tier.price, locale)}
                </p>
                <ul className="mb-8 mt-6 space-y-2.5 border-t border-border pt-6">
                  {tier.features[locale].map((feature) => (
                    <li key={feature} className="flex gap-3 text-foreground">
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={mailto(t.subject(name))} className={cn('mt-auto w-full', tier.featured ? 'btn-primary' : 'btn-ghost')}>
                  {t.cta}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  <span className="sr-only">— {name}</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-8 text-muted-foreground">
        {t.custom}{' '}
        <a href={mailto(t.customSubject)} className="link">
          {t.customLink} →
        </a>
      </p>
    </Section>
  );
}
