"use client";

import React from 'react';
import styles from './NewsHero.module.css';

/**
 * NewsHero component
 * High-end editorial header for the News & Insights page.
 */
export default function NewsHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.line}></span>
            <span className={styles.eyebrow}>Editorial Insights</span>
          </div>
          
          <h1 className={styles.headline}>
            News & <span className={styles.highlight}>Insights.</span>
          </h1>
          
          <p className={styles.subheadline}>
            Synthesizing complex legislative shifts into actionable intelligence. 
            Stay ahead of global fiscal transformations with our expert analysis.
          </p>
        </div>
      </div>
    </section>
  );
}
