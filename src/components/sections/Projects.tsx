'use client';
import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github, Lock } from 'lucide-react';

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[0];
  large?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      data-cursor="pointer"
      onClick={() => setExpanded(!expanded)}
      className={`group border border-border/60 bg-surface/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 cursor-pointer
        hover:border-accent/35 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 ${large ? 'col-span-full' : ''}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-serif text-xl md:text-2xl text-[rgb(59_18_40)] dark:text-primary font-light">
              {project.name}
            </h3>
            {project.private && (
              <span className="flex items-center gap-1 text-xs text-[rgb(154_125_140)] dark:text-muted font-sans">
                <Lock size={10} /> private
              </span>
            )}
          </div>
          <p className="font-sans text-sm text-[rgb(154_125_140)] dark:text-muted">{project.year}</p>
        </div>
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              data-cursor="pointer"
              className="text-[rgb(107_77_95)] hover:text-[rgb(59_18_40)] dark:text-secondary dark:hover:text-primary transition-colors"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="font-sans text-[rgb(107_77_95)] dark:text-secondary text-sm md:text-base mb-4 leading-relaxed">
        {project.tagline}
      </p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border/50 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'The problem', text: project.problem },
                { label: 'My approach', text: project.approach },
                { label: 'The result', text: project.result },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-sans text-xs text-accent uppercase tracking-widest mb-2">
                    {item.label}
                  </p>
                  <p className="font-sans text-[rgb(107_77_95)] dark:text-secondary text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-sans text-xs text-[rgb(154_125_140)] dark:text-muted border border-border/50 px-2 py-1 rounded-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="font-sans text-xs text-[rgb(154_125_140)]/50 mt-4 group-hover:text-[rgb(154_125_140)] dark:text-muted/50 dark:group-hover:text-muted transition-colors duration-300">
        {expanded ? 'Click to collapse' : 'Click to explore'}
      </p>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      ref={ref}
      className="py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-accent text-sm font-sans tracking-[0.2em] uppercase mb-4"
      >
        Work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="font-serif text-4xl md:text-5xl font-light text-[rgb(59_18_40)] dark:text-primary mb-4"
      >
        Things I've built.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="font-sans text-[rgb(107_77_95)] dark:text-secondary text-sm mb-16"
      >
        Click any card to see the thinking behind it.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {featured.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: (featured.length + i) * 0.08 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
