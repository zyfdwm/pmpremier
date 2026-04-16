import React from 'react';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h2>Begin Your Strategy Session</h2>
            <p>Schedule a confidential consultation with our lead partners to discuss your specific taxation and structural needs.</p>
          </div>
          <div className={styles.action}>
            <button className={styles.primaryBtn}>Request a Consultation</button>
          </div>
          
          <div className={styles.graphicOverlay}>
            <div className={styles.chevronLarge}></div>
            <div className={styles.chevronSmall}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
