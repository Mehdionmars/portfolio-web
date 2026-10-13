import type { Locale } from '@/lib/content';
import CertificationDeck from './CertificationDeck';
import Section from './Section';

export default function Achievements({ locale }: { locale: Locale }) {
  return (
    <Section id="certifications" locale={locale}>
      <CertificationDeck locale={locale} />
    </Section>
  );
}
