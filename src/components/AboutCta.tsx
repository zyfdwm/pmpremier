import React from 'react';
import styles from './CtaBanner.module.css';

export default function AboutCta() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h2>Ready to architect your success?</h2>
            <p>Connect with our consultants for a private review of your financial structure.</p>
          </div>
          <div className={styles.action}>
            <button className={styles.primaryBtn}>Schedule Consultation</button>
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
