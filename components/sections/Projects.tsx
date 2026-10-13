import type { Locale } from '@/lib/content';
import ProjectsWheel from './ProjectsWheel';
import Section from './Section';

export default function Projects({ locale }: { locale: Locale }) {
  return (
    <Section id="projects" locale={locale}>
      <ProjectsWheel locale={locale} />
    </Section>
  );
}
