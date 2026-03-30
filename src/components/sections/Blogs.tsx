'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { blogs } from '@/data/portfolio';

export function Blogs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="blog"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-accent text-sm font-sans tracking-[0.2em] uppercase mb-4"
      >
        Writing
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="font-serif text-4xl md:text-5xl font-light text-primary mb-4"
      >
        Words on craft &amp; systems.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.15 }}
        className="font-sans text-secondary text-sm md:text-base max-w-2xl mb-14 leading-relaxed"
      >
        Longer pieces live on Medium — here’s a highlight you can open in one click.
      </motion.p>

      <ul className="space-y-8 list-none p-0 m-0">
        {blogs.map((post, i) => (
          <motion.li
            key={post.id}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 + i * 0.08 }}
          >
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="group flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-2xl border border-border/70 bg-surface/80 backdrop-blur-sm p-6 md:p-8 lg:p-10 ring-glow transition-all duration-500 hover:border-accent/40 hover:bg-elevated/90"
            >
              <aside className="relative shrink-0 w-full lg:w-[min(100%,280px)] aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-elevated">
                {post.previewImage ? (
                  <>
                    <Image
                      src={post.previewImage}
                      alt={`Preview illustration for “${post.title}”`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 280px"
                    />
                    <span
                      className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5 dark:ring-white/10"
                      aria-hidden
                    />
                  </>
                ) : (
                  <>
                    <span
                      className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 30% 20%, var(--color-accent) 0%, transparent 45%), radial-gradient(circle at 80% 80%, var(--color-accent-warm) 0%, transparent 40%)',
                      }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 via-accent-soft to-transparent">
                      <BookOpen
                        className="w-14 h-14 text-accent/80 dark:text-accent/90"
                        strokeWidth={1.25}
                        aria-hidden
                      />
                    </span>
                  </>
                )}
              </aside>

              <article className="flex flex-col flex-1 min-w-0">
                <p className="font-sans text-xs text-accent uppercase tracking-widest mb-2">
                  {post.publication}
                  <span className="text-muted font-normal normal-case tracking-normal">
                    {' '}
                    · {post.date}
                  </span>
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-primary leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="font-sans text-secondary text-sm md:text-base leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <p className="font-sans text-xs text-muted mb-6">{post.credit}</p>
                <span className="mt-auto inline-flex items-center gap-2 font-sans text-sm font-medium text-accent">
                  Read on Medium
                  <span className="text-muted font-normal">({post.readTime})</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </article>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
