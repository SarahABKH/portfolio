'use client';
import { useTimeOfDay } from '@/hooks/useTimeOfDay';
import { useEffect } from 'react';

export function TimeOfDayProvider({ children }: { children: React.ReactNode }) {
  const timeOfDay = useTimeOfDay();

  useEffect(() => {
    document.body.classList.remove('time-morning', 'time-afternoon', 'time-evening', 'time-night');
    document.body.classList.add(`time-${timeOfDay}`);
  }, [timeOfDay]);

  return <>{children}</>;
}
