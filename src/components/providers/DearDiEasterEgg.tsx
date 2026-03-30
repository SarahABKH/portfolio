'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function DearDiEasterEgg() {
  const [showToast, setShowToast] = useState(false);
  const [recentKeys, setRecentKeys] = useState('');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setRecentKeys((prev) => {
        const updated = (prev + key).slice(-4);
        if (updated === 'dear') {
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        }
        return updated;
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] pointer-events-none"
        >
          <div className="bg-surface border border-border/50 rounded-sm px-6 py-3 shadow-lg">
            <p className="font-sans text-sm text-primary">Still building it. 🌸</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
