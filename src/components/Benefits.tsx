'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { PiggyBank, CopyCheck, BadgeCheck } from 'lucide-react';

const benefitIcons = [PiggyBank, CopyCheck, BadgeCheck];

export function Benefits() {
  const t = useTranslations('benefits');
  const cards = t.raw('cards') as Array<{ title: string; description: string }>;

  return (
    <section className="py-20 sm:py-28 border-t border-border/50" aria-label={t('title')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const Icon = benefitIcons[index] || PiggyBank;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}