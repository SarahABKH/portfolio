'use client';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-6 h-6" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      data-cursor="pointer"
      className="p-2 rounded-sm hover:bg-surface transition-colors duration-500"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon size={18} className="text-accent" />
        ) : (
          <Sun size={18} className="text-accent" />
        )}
      </motion.div>
    </button>
  );
}
