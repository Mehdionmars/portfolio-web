import { skillGroups, type Locale } from '@/lib/content';
import GitHubActivity from './GitHubActivity';
import Section from './Section';

export default function Skills({ locale }: { locale: Locale }) {
  return (
    <Section id="skills" locale={locale}>
      {/* Real activity first: the list below is a claim, this is the evidence. */}
      <GitHubActivity locale={locale} />
      <div className="term-window mt-6">
        <div className="term-bar" aria-hidden="true">
          skills.json
        </div>
        <div className="overflow-x-auto p-5 font-mono text-[0.875rem] sm:p-8">
          <span aria-hidden="true" className="text-dim">
            {'{'}
          </span>
          <dl className="grid gap-x-12 gap-y-6 py-3 pl-4 sm:pl-6 lg:grid-cols-2">
            {skillGroups.map((group, i) => (
              <div key={group.key.en}>
                <dt className="text-muted-foreground">
                  &quot;{group.key[locale]}&quot;
                  <span aria-hidden="true" className="text-dim">
                    : [
                  </span>
                </dt>
                <dd className="mt-1 pl-4 sm:pl-6">
                  <ul className="flex flex-wrap gap-x-1 gap-y-1">
                    {group.items[locale].map((skill, j) => (
                      <li key={skill} className="text-foreground">
                        <span aria-hidden="true" className="text-dim">
                          &quot;
                        </span>
                        {skill}
                        <span aria-hidden="true" className="text-dim">
                          &quot;{j < group.items[locale].length - 1 ? ',' : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span aria-hidden="true" className="text-dim">
                    ]{i < skillGroups.length - 1 ? ',' : ''}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <span aria-hidden="true" className="text-dim">
            {'}'}
          </span>
        </div>
      </div>
    </Section>
  );
}
