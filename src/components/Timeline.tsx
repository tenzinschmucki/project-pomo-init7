'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, Copy, Globe, MousePointerClick, CreditCard, PiggyBank } from 'lucide-react';

const icons = [Copy, Globe, MousePointerClick, CreditCard, PiggyBank];

export function Timeline() {
  const t = useTranslations('howItWorks');
  const steps = t.raw('steps') as Array<{ title: string; description: string }>;

  return (
    <section className="py-20 sm:py-28" aria-label={t('title')}>
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

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = icons[index] || Copy;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Icon circle */}
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow between steps (except last) */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-[1.35rem] top-14" aria-hidden="true">
                        <ArrowDown className="w-[1.125rem] h-6 text-border" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}