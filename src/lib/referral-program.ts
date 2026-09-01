import { unstable_cache } from 'next/cache';
import fallbackStatus from '@/data/referral-program-status.json';

const verificationIntervalSeconds = 86_400;

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

export type ReferralProgramStatus = {
  officialUrl: string;
  verifiedAt: string;
};

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

async function verifyOfficialProgramme(): Promise<ReferralProgramStatus> {
  try {
    const response = await fetch(fallbackStatus.officialUrl, {
      headers: {
        'User-Agent': 'init7-code.ch programme verifier (+https://www.init7-code.ch/de)',
      },
      next: { revalidate: verificationIntervalSeconds },
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const pageText = await response.text();
    if (requiredTerms.some((term) => !pageText.includes(term))) {
      throw new Error('Required programme terms changed.');
    }

    return {
      officialUrl: fallbackStatus.officialUrl,
      verifiedAt: dateInZurich(),
    };
  } catch {
    // Never report a newer date unless the official programme page was actually
    // checked successfully. The checked-in date is the last known valid status.
    return fallbackStatus;
  }
}

export const getReferralProgramStatus = unstable_cache(
  verifyOfficialProgramme,
  ['init7-referral-programme-status'],
  { revalidate: verificationIntervalSeconds },
);

export { verificationIntervalSeconds };
