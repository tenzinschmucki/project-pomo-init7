import { useTranslations } from 'next-intl';

export function SeoContent() {
  const t = useTranslations('seoContent');

  return (
    <section className="sr-only" aria-label={t('title')}>
      <h2>{t('title')}</h2>
      <p>{t('intro')}</p>
      <h3>{t('codeTitle')}</h3>
      <p>{t('codeDescription')}</p>
      <h3>{t('howToTitle')}</h3>
      <p>{t('howToDescription')}</p>
      <h3>{t('discountTitle')}</h3>
      <p>{t('discountDescription')}</p>
    </section>
  );
}