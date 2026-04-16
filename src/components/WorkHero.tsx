"use client";

import React from 'react';
import styles from './WorkHero.module.css';

/**
 * WorkHero component for the "Our Work" page.
 * Features a high-contrast dark theme with gold accents.
 */
export default function WorkHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Architecting <span className={styles.highlight}>Compliance</span> & Growth.
          </h1>
          <p className={styles.subheadline}>
            We deliver high-impact tax strategies, audit reliability, and professional education for complex entities.
          </p>
        </div>
      </div>
      
      {/* Graphic Overlay based on Screenshot */}
      <div className={styles.graphicOverlay}>
        <div className={styles.pill}></div>
        <div className={styles.pill}></div>
        <div className={styles.pill}></div>
      </div>
    </section>
  );
}
