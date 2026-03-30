'use client';
import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 h-px bg-accent z-[9998]"
      style={{ width: `${progress * 100}%` }}
      transition={{ duration: 0.1 }}
    />
  );
}
