import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t('independent')}
          </p>
          <p className="text-xs text-muted-foreground/60">
            {t('trademark')}
          </p>
        </div>
      </div>
    </footer>
  );
}