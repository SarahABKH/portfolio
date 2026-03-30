'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutStatements } from '@/data/portfolio';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-accent text-sm font-sans tracking-[0.2em] uppercase mb-4"
      >
        About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="font-serif text-4xl md:text-5xl font-light text-primary mb-16"
      >
        A few things worth knowing.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {aboutStatements.map((s, i) => (
          <motion.div
            key={s.label}
            custom={i}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="rounded-2xl border border-border bg-surface p-6 md:p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-primary/5 dark:border-border dark:bg-elevated dark:shadow-none dark:ring-white/10"
          >
            <p className="font-sans text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              {s.label}
            </p>
            <p
              className="font-sans text-desc leading-relaxed text-sm md:text-base"
              data-cursor="text"
            >
              {s.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quick facts grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
      >
        {[
          { value: 'Bengaluru', label: 'Home base' },
          { value: 'Frontend', label: 'Where I spend my time' },
          { value: 'dear.di', label: 'Side project' },
          { value: 'Capillary', label: 'Building' },
        ].map((fact) => (
          <div
            key={fact.label}
            className="rounded-xl border border-border bg-surface p-6 text-center shadow-[0_1px_0_rgba(0,0,0,0.03)] dark:bg-elevated dark:ring-1 dark:ring-white/5"
          >
            <p className="font-serif text-3xl text-primary font-light">{fact.value}</p>
            <p className="font-sans text-xs text-muted mt-2 uppercase tracking-wider dark:text-[#d4b8c4]">
              {fact.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
