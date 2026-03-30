'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { personal } from '@/data/portfolio';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-accent text-sm font-sans tracking-[0.2em] uppercase mb-4"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl font-light text-[rgb(59_18_40)] dark:text-primary mb-6"
        >
          Let's build something<br />worth building.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="font-sans mb-16 text-lg max-w-xl leading-relaxed text-[rgb(55_38_48)] dark:text-[rgb(220_198_210)]"
        >
          If you're working on something interesting, or just want to talk craft — I'm around.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <button
            onClick={copyEmail}
            data-cursor="pointer"
            className="flex items-center gap-4 group w-full text-left rounded-2xl border border-border bg-surface p-4 md:p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-primary/5 transition-all duration-500 hover:border-accent/40 dark:border-border dark:bg-elevated dark:shadow-none dark:ring-white/10"
          >
            <Mail size={16} className="text-accent flex-shrink-0" />
            <span className="font-sans text-sm md:text-base font-medium text-[rgb(59_18_40)] dark:text-primary">
              {personal.email}
            </span>
            <ArrowRight size={14} className="ml-auto text-[rgb(154_125_140)] group-hover:text-accent dark:text-muted group-hover:translate-x-1 transition-all duration-300" />
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-accent font-sans ml-2 absolute right-6"
                >
                  copied!
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {[
            { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin },
            { icon: Github, label: 'GitHub', href: personal.github },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="flex items-center gap-4 group rounded-2xl border border-border bg-surface p-4 md:p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-primary/5 transition-all duration-500 hover:border-accent/40 dark:border-border dark:bg-elevated dark:shadow-none dark:ring-white/10"
            >
              <Icon size={16} className="text-accent flex-shrink-0" />
              <span className="font-sans text-sm md:text-base font-medium text-[rgb(59_18_40)] dark:text-primary">
                {label}
              </span>
              <ArrowRight size={14} className="ml-auto text-[rgb(154_125_140)] group-hover:text-accent dark:text-muted group-hover:translate-x-1 transition-all duration-300" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
