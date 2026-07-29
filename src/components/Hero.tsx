'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden" aria-label="Hero section">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            {t('cta')}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            {t('headline')}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('subheadline')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}