'use client';

import { ArrowUpRight } from 'lucide-react';
import ContributionSkyline, { type SkylineLabels } from '@/components/ui/contribution-skyline';
import contributions from '@/lib/data/github-contributions.json';
import { links, type Locale } from '@/lib/content';


// Module-level so the chart receives a stable object (it memoises on it).
const LABELS: Record<Locale, Partial<SkylineLabels>> = {
  en: {},
  fr: {
    inLastYear: 'sur la dernière année',
    yearTotal: 'Total sur 1 an',
    busiest: 'Jour le plus actif',
    longest: 'Plus longue série',
    current: 'Série actuelle',
    day: 'jour',
    days: 'jours',
    none: () => 'Aucune contribution',
    on: 'le',
    between: 'entre',
    heatMap: 'carte de chaleur',
    skyline: 'skyline 3D',
    shownAs: 'affichées en',
    arrowsHint: 'Utilisez les flèches pour lire chaque jour.',
    chartView: 'Vue du graphique',
    levels: ['Faible', 'Modérée', 'Forte', 'Très forte'],
    highlight: (level) => `Mettre en évidence : ${level.toLowerCase()}`,
    less: 'Moins',
    more: 'Plus',
    hintFlat: 'Survolez un jour pour le détail · flèches pour explorer',
    hintOrbit: 'Glissez pour pivoter · double-clic pour réinitialiser',
  },
};

const COPY = {
  en: { lead: 'GitHub contributions in the last 12 months' },
  fr: { lead: 'contributions GitHub sur les 12 derniers mois' },
} satisfies Record<Locale, { lead: string }>;

export default function GitHubActivity({ locale }: { locale: Locale }) {
  const days = contributions.days;

  return (
    <ContributionSkyline
      data={days}
      endDate={days[days.length - 1]?.date}
      palette="mono"
      locale={locale === 'fr' ? 'fr-FR' : 'en-US'}
      labels={LABELS[locale]}
      title={
        <>
          <span className="font-semibold tabular-nums text-primary">{contributions.total}</span> {COPY[locale].lead}
          <span className="text-dim"> · </span>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
            @{contributions.user}
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </>
      }
    />
  );
}
