'use client';
import { useEffect, useState } from 'react';

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

export function useTimeOfDay(): TimeOfDay {
  const [time, setTime] = useState<TimeOfDay>('morning');

  useEffect(() => {
    const hour = new Date().getHours();
    let timeOfDay: TimeOfDay;

    if (hour >= 5 && hour < 12) {
      timeOfDay = 'morning';
    } else if (hour >= 12 && hour < 17) {
      timeOfDay = 'afternoon';
    } else if (hour >= 17 && hour < 21) {
      timeOfDay = 'evening';
    } else {
      timeOfDay = 'night';
    }

    setTime(timeOfDay);
  }, []);

  return time;
}
