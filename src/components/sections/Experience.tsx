'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '@/data/portfolio';

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-accent text-sm font-sans tracking-[0.2em] uppercase mb-4"
      >
        Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="font-serif text-4xl md:text-5xl font-light text-primary mb-16"
      >
        Where I'm building.
      </motion.h2>

      <div className="max-w-3xl">
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="pb-12 border-l-2 border-accent/30 pl-8 relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-5 top-2 w-6 h-6 rounded-full bg-accent border-4 border-base shadow-md shadow-accent/30" />

            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="font-serif text-2xl text-primary font-light mb-1">
                  {exp.role}
                </h3>
                <p className="font-sans text-sm text-accent mb-1">{exp.company}</p>
                <p className="font-sans text-xs text-muted">{exp.period}</p>
                <p className="font-sans text-xs text-muted mt-1">{exp.location}</p>
              </div>

              <div className="mt-6 md:mt-0 md:col-span-2 space-y-4">
                {exp.points.map((point, pidx) => (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (idx + pidx) * 0.08 }}
                  >
                    <p className="font-sans text-xs text-accent uppercase tracking-wider mb-1">
                      {point.label}
                    </p>
                    <p className="font-sans text-secondary text-sm leading-relaxed">
                      {point.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
