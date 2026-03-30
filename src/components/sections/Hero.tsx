'use client';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { personal } from '@/data/portfolio';
import { HeroMascot } from '@/components/sections/HeroMascot';

export function Hero() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headlineWords = useMemo(() => personal.tagline.split(' '), []);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-16 lg:px-24 pt-20"
    >
      {/* Ambient blobs */}
      <span
        className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl dark:bg-accent/15"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-0 left-1/4 h-[360px] w-[360px] rounded-full bg-accent-warm/15 blur-3xl dark:bg-accent-warm/10"
        aria-hidden
      />
      <span
        className="pointer-events-none hero-grid-glow absolute left-1/2 top-1/2 h-[min(90vh,820px)] w-[min(90vw,820px)] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />

      {/* Layered grids */}
      <span className="absolute inset-0 hero-grid-lines opacity-90" aria-hidden />
      <span className="absolute inset-0 hero-grid-dots opacity-80 mix-blend-multiply dark:mix-blend-screen" aria-hidden />

      {/* Vignette + subtle diagonal sheen */}
      <span
        className="absolute inset-0 bg-gradient-to-b from-base/20 via-transparent to-base/90 dark:from-[#140810]/30 dark:via-transparent dark:to-[#140810]/95"
        aria-hidden
      />
      <span
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/[0.03] to-accent-warm/[0.06] dark:via-accent/[0.04] dark:to-accent-warm/[0.08]"
        aria-hidden
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl w-full">
        {/* Gradient frame + glass panel — lifts content off the grid */}
        <div className="relative rounded-[1.75rem] p-px bg-gradient-to-br from-accent/50 via-accent/15 to-transparent shadow-[0_0_0_1px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:from-accent/40 dark:via-accent/10">
          <div className="rounded-[1.75rem] bg-base/75 dark:bg-[#0f080c]/80 backdrop-blur-xl px-8 py-10 md:px-12 md:py-12 ring-1 ring-accent/10 dark:ring-accent/15">
            <span
              className="mb-8 block h-px w-12 bg-gradient-to-r from-accent to-transparent"
              aria-hidden
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-8 font-sans"
            >
              Sarah Abdul Khader
            </motion.p>

            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-6 lg:gap-10">
              <motion.h1
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary leading-[1.1] mb-0 md:mb-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: prefersReducedMotion ? 0 : 0.045,
                      delayChildren: prefersReducedMotion ? 0 : 0.35,
                    },
                  },
                }}
              >
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    className="inline-block mr-[0.25em] mb-1 last:mr-0"
                    variants={{
                      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 22 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: prefersReducedMotion ? 0 : 0.45,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <div className="flex justify-center md:justify-end md:pt-1 lg:pt-2">
                <HeroMascot prefersReducedMotion={prefersReducedMotion} />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: prefersReducedMotion ? 0.2 : 0.85 }}
              className="text-secondary text-lg md:text-xl font-sans font-light max-w-xl mb-12 mt-8 md:mt-10 dark:text-primary/85"
            >
              {personal.subTagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: prefersReducedMotion ? 0.35 : 1.05 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#work"
                data-cursor="pointer"
                className="px-7 py-3.5 rounded-full bg-accent text-white text-sm font-sans font-medium tracking-wide shadow-lg shadow-accent/30 hover:brightness-110 transition-all duration-500"
              >
                See my work
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="px-7 py-3.5 rounded-full border border-border bg-surface/90 text-secondary text-sm font-sans font-medium tracking-wide hover:border-accent/50 hover:text-primary transition-all duration-500 backdrop-blur-sm dark:bg-white/5"
              >
                View résumé →
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-muted text-xs font-sans tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
