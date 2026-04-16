import React from 'react';
import styles from './Standards.module.css';

export default function Standards() {
  return (
    <section className={styles.standardsSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.headline}>The PREMIER Standard</h2>
          <p className={styles.bodyText}>
            PM Premier isn’t just a consultancy; we are an anchor of stability. We work in a structure that ensures the highest standards of professional service and adherence to integrity.
          </p>
          
          <div className={styles.callout}>
            <div className={styles.calloutIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </div>
            <div className={styles.calloutContent}>
              <h4>Uncompromising Integrity</h4>
              <p>Our ethics are non-negotiable. We operate with radical transparency in every audit and assessment.</p>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.cardsGrid}>
            <div className={`${styles.card} ${styles.cardAccent}`}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Deep Expertise</h3>
              <p className={styles.cardBody}>
                <strong>Mastery in Service.</strong> Our team of experienced professionals combines knowledge and innovation to assist clients in every aspect of taxation and auditing.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Results Driven</h3>
              <p className={styles.cardBody}>
                <strong>Excellence &amp; Respect.</strong> We measure success through the positive impact we create for our stakeholders and the nation.
              </p>
            </div>
          </div>

          <div className={styles.featuredCard}>
            <h3>Future-Proof Regulation Monitoring</h3>
            <p>
              Stay ahead of the 'Global Minimum Tax' and ESG reporting requirements with our proactive monitoring systems.
            </p>
            <button className={styles.featuredBtn}>Download Outlook 2024</button>
            <div className={styles.featuredGraphic}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                 <polyline points="4 17 10 11 4 5"></polyline>
                 <line x1="12" y1="19" x2="20" y2="19"></line>
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
