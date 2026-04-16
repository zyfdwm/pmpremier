"use client";

import React from 'react';
import Image from 'next/image';
import styles from './WorkOutcomes.module.css';

/**
 * WorkOutcomes component
 * Showcases Why Choose PM Premier using a case-study/strategic outcome layout.
 */
export default function WorkOutcomes() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={styles.topTitle}>
          <div className={styles.eyebrow}>Strategic Value</div>
          <h2 className={styles.mainTitle}>Strategic Outcomes</h2>
        </div>

        <div className={styles.layout}>
          {/* Image Column */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/strategic_outcome.jpg"
                alt="Strategic Corporate Architecture"
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className={styles.contentCol}>
            <div className={styles.contentLabel}>
              <span className={styles.line}></span>
              SUCCESS STORIES
            </div>

            <h3 className={styles.contentHeadline}>Why Choose PM Premier?</h3>

            <p className={styles.description}>
              We run and develop businesses that prioritize professionalism.
              A reliable, experienced, and able team in synergy with clients
              makes us PREMIER in service, because we always make quality
              a habit, not just an action.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statVal}>98%</div>
                <div className={styles.statLabel}>Compliance Accuracy</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statVal}>20Y+</div>
                <div className={styles.statLabel}>Proven Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
