import { getTranslations } from 'next-intl/server';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { type Locale } from '@/config/i18n';

interface SchemaOrgProps {
  locale: Locale;
}

export async function SchemaOrg({ locale }: SchemaOrgProps) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const title = t('title');
  const description = t('description');
  const pageUrl = `${SITE_URL}/${locale}`;

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: description,
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/{locale}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description: description,
    isPartOf: {
      '@id': `${SITE_URL}#website`,
    },
    inLanguage: locale,
    breadcrumb: {
      '@id': `${pageUrl}#breadcrumb`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: tNav('title'),
        item: pageUrl,
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: description,
  };

  const graph = [websiteSchema, webPageSchema, breadcrumbSchema, organizationSchema];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}