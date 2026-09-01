import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const statusFile = fileURLToPath(
  new URL('../src/data/referral-program-status.json', import.meta.url),
);

const requiredTerms = [
  'Empfehlungscode',
  'CHF 111',
  'Hardware',
  'Fiber7',
  'Crossover7',
  'Hybrid7',
  'Copper7',
  '31. Dezember 2027',
];

function dateInZurich() {
  const parts = new Intl.DateTimeFormat('en', {
    timeZone: 'Europe/Zurich',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const values = Object.fromEntries(
    parts
      .filter(({ type }) => type !== 'literal')
      .map(({ type, value }) => [type, value]),
  );

  return `${values.year}-${values.month}-${values.day}`;
}

const currentStatus = JSON.parse(await readFile(statusFile, 'utf8'));
const response = await fetch(currentStatus.officialUrl, {
  headers: {
    'User-Agent': 'init7-code.ch programme verifier (+https://www.init7-code.ch/de)',
  },
});

if (!response.ok) {
  throw new Error(`Official Init7 page returned HTTP ${response.status}.`);
}

const pageText = await response.text();
const missingTerms = requiredTerms.filter((term) => !pageText.includes(term));

if (missingTerms.length > 0) {
  throw new Error(
    `Official Init7 programme terms changed or could not be verified: ${missingTerms.join(', ')}`,
  );
}

const verifiedAt = dateInZurich();
if (currentStatus.verifiedAt === verifiedAt) {
  console.log(`Official Init7 programme already verified for ${verifiedAt}.`);
  process.exit(0);
}

await writeFile(
  statusFile,
  `${JSON.stringify({ ...currentStatus, verifiedAt }, null, 2)}\n`,
);
console.log(`Official Init7 programme verified for ${verifiedAt}.`);
