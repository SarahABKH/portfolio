'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { personal } from '@/data/portfolio';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-16 lg:px-24 pt-20"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-8 font-sans"
        >
          Sarah Abdul Khader
        </motion.p>

        {/* Main tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary leading-[1.1] mb-6"
        >
          {personal.tagline}
        </motion.h1>

        {/* Sub tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-secondary text-lg md:text-xl font-sans font-light max-w-xl mb-12"
        >
          {personal.subTagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#work"
            data-cursor="pointer"
            className="px-6 py-3 border border-accent/40 text-accent text-sm font-sans tracking-wide hover:bg-accent/10 transition-all duration-500 rounded-sm"
          >
            See my work
          </a>
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="px-6 py-3 text-secondary text-sm font-sans tracking-wide hover:text-primary transition-all duration-500"
          >
            View résumé →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs font-sans tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-muted to-transparent"
        />
      </motion.div>
    </section>
  );
}
