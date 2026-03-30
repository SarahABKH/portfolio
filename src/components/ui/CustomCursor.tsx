'use client';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useState, useEffect } from 'react';

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [visible, setVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text'>('default');

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const onMove = () => setVisible(true);
    window.addEventListener('mousemove', onMove, { once: true });

    const onHover = (e: MouseEvent) => {
      const target = (e.target as Element).closest('[data-cursor]') as HTMLElement | null;
      setCursorType((target?.dataset.cursor as typeof cursorType) || 'default');
    };
    window.addEventListener('mouseover', onHover);

    return () => {
      window.removeEventListener('mouseover', onHover);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-current pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: x - 2, y: y - 2 }}
        animate={{ opacity: 1 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998]"
        style={{
          x: springX,
          y: springY,
          borderColor: 'rgba(125, 154, 139, 0.5)',
          backgroundColor: 'rgba(125, 154, 139, 0.04)',
        }}
        animate={{
          width: cursorType === 'pointer' ? 48 : cursorType === 'text' ? 2 : 32,
          height: cursorType === 'pointer' ? 48 : cursorType === 'text' ? 28 : 32,
          translateX: cursorType === 'pointer' ? -24 : cursorType === 'text' ? -1 : -16,
          translateY: cursorType === 'pointer' ? -24 : cursorType === 'text' ? -14 : -16,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
