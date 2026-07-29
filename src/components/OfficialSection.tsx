'use client';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, Shield } from 'lucide-react';
import { OFFICIAL_LINKS } from '@/lib/constants';
import type { Locale } from '@/config/i18n';

export function OfficialSection() {
  const t = useTranslations('official');
  const locale = useLocale() as keyof typeof OFFICIAL_LINKS;
  const officialLink = OFFICIAL_LINKS[locale] || OFFICIAL_LINKS.de;

  return (
    <section className="py-20 sm:py-28 border-t border-border/50" aria-label={t('title')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            {t('description')}
          </p>
          <a
            href={officialLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg px-4 py-2"
            aria-label={t('linkText')}
          >
            {t('linkText')}
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}