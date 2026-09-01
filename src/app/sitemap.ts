import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/config/i18n';
import { SITE_URL } from '@/lib/constants';
import { getReferralProgramStatus } from '@/lib/referral-program';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const referralProgramStatus = await getReferralProgramStatus();
  const lastVerified = new Date(`${referralProgramStatus.verifiedAt}T12:00:00Z`);

  // Include only canonical, indexable URLs. The root URL redirects to /de and
  // must not be submitted as a separate sitemap entry.
  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: lastVerified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'x-default': `${SITE_URL}/${defaultLocale}`,
          ...Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}/${l}`])
          ),
        },
      },
    });
  }

  entries.push({
    url: `${SITE_URL}/de/init7-rabatt`,
    lastModified: lastVerified,
    changeFrequency: 'weekly',
    priority: 0.8,
    alternates: {
      languages: {
        de: `${SITE_URL}/de/init7-rabatt`,
        'x-default': `${SITE_URL}/de/init7-rabatt`,
      },
    },
  });

  return entries;
}
