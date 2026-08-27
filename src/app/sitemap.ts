import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/config/i18n';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Include only canonical, indexable URLs. The root URL redirects to /de and
  // must not be submitted as a separate sitemap entry.
  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
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

  return entries;
}
