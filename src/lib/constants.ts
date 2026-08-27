export const REFERRAL_CODE = '835 119 225 51';
export const REFERRAL_CODE_COPY = '83511922551';
export const REFERRAL_DISCOUNT = 'CHF 111';
export const REFERRAL_PROGRAM_LAST_VERIFIED = '2026-08-26';

export const OFFICIAL_LINKS = {
  de: 'https://www.init7.net/de/init7-empfehlen',
  en: 'https://www.init7.net/en/init7-empfehlen',
  fr: 'https://www.init7.net/fr/init7-empfehlen',
  it: 'https://www.init7.net/it/init7-empfehlen',
} as const;

// The www host is the production host. Every SEO signal must use this final,
// non-redirecting URL rather than the apex domain.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.init7-code.ch';
export const SITE_NAME = 'Init7 Empfehlungscode';
