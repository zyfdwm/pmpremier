"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './WorkStats.module.css';

interface StatCounterProps {
  target: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

/**
 * Animated Counter Component
 */
function StatCounter({ target, duration, suffix = "", prefix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return (
    <div ref={countRef} className={styles.number}>
      {prefix}{count}{suffix}
    </div>
  );
}

/**
 * WorkStats component
 * Showcases key firm metrics in a dark animated banner.
 */
export default function WorkStats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          {/* Background Graphic */}
          <div className={styles.graphic}>
            <div className={styles.pill}></div>
            <div className={styles.pill}></div>
            <div className={styles.pill}></div>
          </div>

          <div className={styles.statItem}>
            <StatCounter target={25} duration={2000} suffix="+" />
            <div className={styles.label}>Years of Global Consulting</div>
          </div>

          <div className={styles.statItem}>
            <StatCounter target={500} duration={2000} suffix="+" />
            <div className={styles.label}>Complex Entities Managed</div>
          </div>

          <div className={styles.statItem}>
            <StatCounter target={2} duration={2000} prefix="$" suffix="B+" />
            <div className={styles.label}>Client Assets Optimized</div>
          </div>
        </div>
      </div>
    </section>
  );
}
