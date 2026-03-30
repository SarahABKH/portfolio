'use client';

import { useCallback, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';
import helloAnimation from '@/assets/lottie/hello.json';

type HeroMascotProps = {
  prefersReducedMotion?: boolean | null;
};

/**
 * Lottie animation via `lottie-react`. Replace `src/assets/lottie/hello.json`
 * or change the import below.
 */
export function HeroMascot({ prefersReducedMotion }: HeroMascotProps) {
  const reduce = Boolean(prefersReducedMotion);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const applyReducedMotion = useCallback(() => {
    const ctrl = lottieRef.current;
    if (!ctrl) return;
    if (reduce) {
      ctrl.pause();
      ctrl.goToAndStop(0, true);
    } else {
      ctrl.play();
    }
  }, [reduce]);

  useEffect(() => {
    applyReducedMotion();
  }, [applyReducedMotion]);

  return (
    <div
      className="pointer-events-none select-none flex h-36 w-44 shrink-0 items-center justify-center md:h-44 md:w-52 [&_svg]:max-h-full [&_svg]:max-w-full"
      aria-hidden
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={helloAnimation}
        loop
        className="h-full w-full"
        onDOMLoaded={applyReducedMotion}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid meet',
        }}
      />
    </div>
  );
}
