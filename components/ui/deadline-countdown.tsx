'use client';

import { useState, useEffect } from 'react';

const DEADLINE = new Date('2026-03-31T23:59:59-05:00'); // Jamaica time (EST)

export default function DeadlineCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.total <= 0) return null;

  return (
    <div className="w-full bg-gradient-to-r from-red-700 to-red-600 text-white py-3 px-4">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <span className="text-sm font-medium">
          March 31 payroll deadline:
        </span>
        <div className="flex items-center gap-2">
          <TimeBlock value={timeLeft.days} label="days" />
          <span className="text-lg font-bold">:</span>
          <TimeBlock value={timeLeft.hours} label="hrs" />
          <span className="text-lg font-bold">:</span>
          <TimeBlock value={timeLeft.minutes} label="min" />
          <span className="text-lg font-bold">:</span>
          <TimeBlock value={timeLeft.seconds} label="sec" />
        </div>
        <a
          href="/march-31-payroll-deadline-jamaica"
          className="text-sm font-semibold underline hover:no-underline whitespace-nowrap"
        >
          Get compliant now &rarr;
        </a>
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="bg-red-900/50 rounded px-2 py-0.5 text-lg font-bold tabular-nums min-w-[2.5rem] text-center">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-wider opacity-80">{label}</span>
    </div>
  );
}

function getTimeLeft() {
  const now = new Date();
  const total = DEADLINE.getTime() - now.getTime();
  return {
    total,
    days: Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((total / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((total / 1000) % 60)),
  };
}
