'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pencil, X, Eraser } from 'lucide-react';

const STROKE = '#e91e8c';
const STROKE_DARK = '#fb64b6';
const LINE_WIDTH = 2.5;

export function SketchLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = LINE_WIDTH;
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [resize]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && active) setActive(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const strokeColor = useCallback(() => {
    if (typeof document === 'undefined') return STROKE;
    return document.documentElement.classList.contains('dark') ? STROKE_DARK : STROKE;
  }, []);

  const getPos = (e: React.MouseEvent | MouseEvent | React.TouchEvent | TouchEvent) => {
    if ('touches' in e && e.touches.length) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    if ('clientX' in e) {
      return { x: e.clientX, y: e.clientY };
    }
    return { x: 0, y: 0 };
  };

  const drawLine = (from: { x: number; y: number }, to: { x: number; y: number }) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    ctx.strokeStyle = strokeColor();
    ctx.lineWidth = LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  const start = (e: React.MouseEvent | React.TouchEvent) => {
    if (!active) return;
    e.preventDefault();
    drawing.current = true;
    last.current = getPos(e);
  };

  const move = (e: React.MouseEvent | React.TouchEvent) => {
    if (!active || !drawing.current || !last.current) return;
    e.preventDefault();
    const pos = getPos(e);
    drawLine(last.current, pos);
    last.current = pos;
  };

  const end = () => {
    drawing.current = false;
    last.current = null;
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`sketch-canvas fixed inset-0 z-[40] touch-none ${
          active ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!active}
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={end}
        onMouseLeave={end}
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={end}
      />

      <div className="fixed bottom-8 left-8 z-[100] flex max-w-[calc(100vw-2rem)] flex-col gap-2 sm:flex-row sm:items-center">
        <motion.button
          type="button"
          onClick={() => setActive((v) => !v)}
          data-cursor="pointer"
          className="flex w-fit items-center gap-2 rounded-sm border border-border/50 bg-surface p-3 px-3 shadow-sm transition-all duration-500 hover:border-accent/40 dark:bg-elevated"
          whileHover={{ y: -2 }}
          aria-pressed={active}
          aria-label={active ? 'Exit sketch mode' : 'Sketch on the page'}
        >
          <Pencil size={16} className={active ? 'text-accent' : 'text-secondary'} />
          <span className="text-xs font-sans text-secondary">{active ? 'Done' : 'Sketch'}</span>
        </motion.button>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex flex-wrap items-center gap-2 rounded-sm border border-accent/30 bg-surface/95 px-3 py-2 font-sans text-xs text-secondary shadow-md backdrop-blur-sm dark:bg-elevated/95"
            >
              <span className="text-accent">Drag to draw</span>
              <button
                type="button"
                onClick={clear}
                data-cursor="pointer"
                className="flex items-center gap-1 rounded border border-border/50 px-2 py-1 text-xs hover:border-accent/40"
                aria-label="Clear drawing"
              >
                <Eraser size={14} className="text-muted" />
                Clear
              </button>
              <button
                type="button"
                onClick={() => setActive(false)}
                data-cursor="pointer"
                className="rounded p-1 hover:bg-accent/10"
                aria-label="Close sketch mode"
              >
                <X size={16} className="text-muted" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
