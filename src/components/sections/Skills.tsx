'use client';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '@/data/portfolio';
import { ChevronDown } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCategory, setExpandedCategory] = useState('Thinking');

  return (
    <section
      id="skills"
      ref={ref}
      className="py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-accent text-sm font-sans tracking-[0.2em] uppercase mb-4"
      >
        Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="font-serif text-4xl md:text-5xl font-light text-primary mb-16"
      >
        How I work.
      </motion.h2>

      <div className="space-y-3 max-w-2xl">
        {skills.map((category, i) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <button
              onClick={() =>
                setExpandedCategory(
                  expandedCategory === category.category ? '' : category.category
                )
              }
              data-cursor="pointer"
              className="w-full border border-border/50 bg-surface rounded-sm p-4 md:p-6 text-left hover:border-accent/30 transition-colors duration-300 flex items-center justify-between"
            >
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-primary font-light mb-1">
                  {category.category}
                </h3>
                <p className="font-sans text-sm text-muted">
                  {category.description}
                </p>
              </div>
              <motion.div
                animate={{
                  rotate:
                    expandedCategory === category.category ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-accent flex-shrink-0" />
              </motion.div>
            </button>

            <AnimatePresence>
              {expandedCategory === category.category && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="border-l border-r border-b border-border/50 bg-surface p-6 flex flex-wrap gap-3">
                    {category.items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-3 py-2 bg-elevated rounded-sm border border-border/50"
                      >
                        <p className="font-sans text-sm text-secondary">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
