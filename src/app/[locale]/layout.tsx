import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { locales, defaultLocale, type Locale } from '@/config/i18n';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedGradient } from '@/components/AnimatedGradient';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const t = await getTranslations({ locale, namespace: 'metadata' });

  const title = t('title');
  const description = t('description');
  const keywords = t('keywords');

  const ogLocaleMap: Record<Locale, string> = {
    de: 'de_CH',
    en: 'en_US',
    fr: 'fr_CH',
    it: 'it_CH',
  };

  const languages: Record<string, string> = {
    'x-default': `${SITE_URL}/${defaultLocale}`,
  };
  for (const l of locales) {
    languages[l] = `${SITE_URL}/${l}`;
  }

  return {
    title,
    description,
    keywords: keywords ? keywords.split(', ').map((k) => k.trim()) : undefined,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: SITE_NAME,
      locale: ogLocaleMap[locale as Locale],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <AnimatedGradient />
            <main className="flex-1" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
