import React from 'react';
import styles from './AboutStory.module.css';

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left Column (Main Card) */}
        <div className={styles.mainCard}>
          <div className={styles.mainCardContent}>
            <h2 className={styles.mainHeadline}>Our Story</h2>
            <p className={styles.mainBody}>
              PM Premier Consulting stands as the highest excellence tax and business consulting firm in Indonesia. By combining knowledge, experience, innovation, and commitment, we assist clients in terms of taxation, business, and auditing of corporate financial statements. We ensure proper implementation in accordance with applicable regulations to create order and compliance.
            </p>
          </div>
          <div>
            <div className={styles.divider}></div>
            <div className={styles.statsHighlight}>
              <span className={styles.statsNumber}>15+</span>
              <span className={styles.statsLabel}>Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Top Row */}
          <div className={styles.topRow}>
            <div className={`${styles.whiteCard} ${styles.whiteCardAccent}`}>
              <h3 className={styles.cardTitle}>Evolution of Precision</h3>
              <p className={styles.cardBody}>
                Our journey began in 2009 with a singular focus: simplifying the complex. We realized that corporate tax isn't just about compliance; it's about building a robust foundation for future growth.
              </p>
            </div>

            <div className={styles.whiteCard}>
              <h3 className={styles.cardTitle}>The Premier Standard</h3>
              <p className={styles.cardBody}>
                Today, we serve as the strategic backbone for organizations globally, blending traditional accounting rigor with contemporary financial technology to provide unmatched clarity.
              </p>
            </div>
          </div>

          {/* Bottom Commitment Card */}
          <div className={styles.commitmentCard}>
            <div className={styles.commitmentIcon}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18"></path>
                <path d="M3 10h18"></path>
                <path d="M5 6l7-3 7 3"></path>
                <path d="M4 10v11"></path>
                <path d="M20 10v11"></path>
                <path d="M8 14v3"></path>
                <path d="M12 14v3"></path>
                <path d="M16 14v3"></path>
              </svg>
            </div>
            <div className={styles.commitmentText}>
              <h3>Our Commitment</h3>
              <p>
                We commit to the absolute success of our clients. Every line of code in our calculators and every word of our advice is measured against the highest ethical and professional standards in the industry.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
