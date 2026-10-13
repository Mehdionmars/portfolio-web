// Refreshes lib/data/github-contributions.json from the public GitHub contribution
// calendar. Runs before every build; on any failure it keeps the committed file,
// so an offline build still ships the last real data (never a generated year).
import { writeFile } from 'node:fs/promises';

const USER = 'Mehdionmars';
const OUT = new URL('../lib/data/github-contributions.json', import.meta.url);

try {
  const res = await fetch(`https://github.com/users/${USER}/contributions`, {
    headers: { 'User-Agent': 'portfolio-build (github.com/Mehdionmars/portfolio-web)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();

  const dates = new Map();
  for (const td of html.matchAll(/<td\b[^>]*>/g)) {
    const date = /data-date="(\d{4}-\d{2}-\d{2})"/.exec(td[0]);
    const id = /\bid="(contribution-day-component-\d+-\d+)"/.exec(td[0]);
    if (date && id) dates.set(id[1], date[1]);
  }
  const days = [];
  for (const tip of html.matchAll(/<tool-tip\b[^>]*for="(contribution-day-component-\d+-\d+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const date = dates.get(tip[1]);
    const count = /^(\d+|No) contributions?/.exec(tip[2].trim());
    if (date && count) days.push({ date, count: count[1] === 'No' ? 0 : Number(count[1]) });
  }
  if (days.length < 300) throw new Error(`only ${days.length} days parsed`);
  days.sort((a, b) => (a.date < b.date ? -1 : 1));

  const total = days.reduce((sum, d) => sum + d.count, 0);
  const data = { user: USER, fetchedAt: new Date().toISOString().slice(0, 10), total, days };
  await writeFile(OUT, JSON.stringify(data) + '\n');
  console.log(`github-contributions: ${total} contributions, ${days[0].date} → ${days.at(-1).date}`);
} catch (error) {
  console.warn(`github-contributions: kept the existing file (${error.message})`);
}
