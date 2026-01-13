'use client';

import { useEffect } from 'react';
import WorkshopsPage from '../page';

/**
 * Client wrapper for /workshops/schedule route.
 * Renders the existing workshops page and scrolls to the schedule section.
 *
 * This provides a clean, shareable URL alternative to /workshops#schedule.
 * Hash fragments break on social platforms and are hard to communicate verbally.
 */
export default function WorkshopsScheduleClient() {
  useEffect(() => {
    const el = document.getElementById('schedule');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return <WorkshopsPage />;
}
