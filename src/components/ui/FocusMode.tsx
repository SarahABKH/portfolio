'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

export function FocusMode() {
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFocus) {
        setIsFocus(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocus]);

  useEffect(() => {
    if (isFocus) {
      document.body.classList.add('focus-mode');
    } else {
      document.body.classList.remove('focus-mode');
    }

    return () => document.body.classList.remove('focus-mode');
  }, [isFocus]);

  return (
    <>
      <style>{`
        body.focus-mode nav, body.focus-mode footer {
          opacity: 0.1;
          pointer-events: none;
        }
      `}</style>

      <motion.button
        onClick={() => setIsFocus(!isFocus)}
        data-cursor="pointer"
        className="fixed bottom-8 right-8 p-3 rounded-sm border border-border/50 bg-surface hover:border-accent/30 transition-all duration-500 z-[100] flex items-center gap-2"
        whileHover={{ y: -2 }}
      >
        {isFocus ? (
          <>
            <EyeOff size={16} className="text-accent" />
            <span className="text-xs font-sans text-secondary">Focus</span>
          </>
        ) : (
          <Eye size={16} className="text-secondary" />
        )}
      </motion.button>
    </>
  );
}
