import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            A STRATEGIC FINANCIAL PARTNER
          </div>
          <h1 className={styles.headline}>
            Professional, Master, and Premier Trusted <span className={styles.highlight}>Tax</span> Consultant Firm.
          </h1>
          <p className={styles.subheadline}>
            We provide expert services in business and taxation designed to bring a positive impact to your company and the country through rigorous compliance and innovative strategy.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>Request a Consultation</button>
            <button className={styles.secondaryBtn}>
              Our Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div className={styles.imageColumn}>
          <div className={styles.imageCard}>
            <div className={styles.statsOverlay}>
              <h3>98.4%</h3>
              <p>CLIENT RETENTION RATE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
