'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { thoughts } from '@/data/portfolio';
import { Shuffle } from 'lucide-react';

export function HowIThink() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [shuffledThoughts, setShuffledThoughts] = useState(thoughts);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleThoughts = () => {
    setIsShuffling(true);
    const shuffled = [...shuffledThoughts].sort(() => Math.random() - 0.5);
    setShuffledThoughts(shuffled);
    setTimeout(() => setIsShuffling(false), 600);
  };

  return (
    <section
      id="thinking"
      ref={ref}
      className="py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <div className="flex items-start justify-between mb-16">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-accent text-sm font-sans tracking-[0.2em] uppercase mb-4"
          >
            Thinking
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-light text-[rgb(59_18_40)] dark:text-primary"
          >
            A few things I keep<br />coming back to.
          </motion.h2>
        </div>

        <motion.button
          onClick={shuffleThoughts}
          disabled={isShuffling}
          data-cursor="pointer"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.6 }}
          className="p-3 border border-border/50 rounded-sm hover:border-accent/30 transition-colors duration-300 flex-shrink-0 mt-4"
          aria-label="Shuffle thoughts"
        >
          <Shuffle size={18} className="text-accent" />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shuffledThoughts.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.08,
              duration: 0.6,
            }}
            whileHover={{ y: -4 }}
            className="bg-elevated border border-border/50 rounded-sm p-6 group cursor-default relative overflow-hidden"
          >
            {/* Card number, top right */}
            <p className="absolute top-4 right-4 font-serif text-xl text-[rgb(154_125_140)]/20 dark:text-muted/20 font-light">
              {String(i + 1).padStart(2, '0')}
            </p>

            {/* Category label */}
            <p className="font-sans text-xs text-accent uppercase tracking-widest mb-3">
              {item.category}
            </p>

            {/* Main thought */}
            <p className="font-serif text-lg md:text-xl font-light text-[rgb(59_18_40)] dark:text-primary leading-relaxed">
              {item.thought}
            </p>

            {/* Subtle hover effect background */}
            <motion.div
              className="absolute inset-0 bg-accent/5 -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
