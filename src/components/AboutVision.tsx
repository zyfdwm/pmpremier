import React from 'react';
import styles from './AboutVision.module.css';

export default function AboutVision() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Core Architecture</h2>
          <p className={styles.subHeadline}>
            "Our mission is to architect financial security through uncompromising precision and visionary strategy."
          </p>
        </div>

        <div className={styles.grid}>
          {/* Vision Card */}
          <div className={styles.card}>
            <div className={styles.cardLabel}>Strategic Goal</div>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Vision</h3>
            <p className={styles.cardBody}>
              To be a Professional, Master, Premier, and trusted Tax Consultant Firm that brings a positive impact to the company and the country.
            </p>
          </div>

          {/* Mission Card */}
          <div className={styles.card}>
            <div className={styles.cardLabel}>Core Commitment</div>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Mission Statement</h3>
            <p className={styles.cardBody}>
              Our commitment is to provide the best service with objectivity, communicative, and informative approaches, making clients wise and compliant in their tax obligations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
