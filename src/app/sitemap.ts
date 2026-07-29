import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/config/i18n';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Root URL (redirects to default locale)
  entries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  });

  // Locale-specific pages with hreflang alternates
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