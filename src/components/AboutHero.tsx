import React from 'react';
import Image from 'next/image';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>
            ARCHITECTS OF FINANCIAL CLARITY
          </div>
          <h1 className={styles.headline}>
            Professionalism and Trust Born from <span style={{ color: "var(--accent)" }}>Integrity</span>.
          </h1>
          <p className={styles.subheadline}>
            At PM Premier Consulting, we view business and tax consulting as an essential pillar for corporate growth, requiring precision, foresight, and a commitment to excellence.
          </p>
        </div>
        
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/about_office.png" 
              alt="PM Premier Consulting Elegant Office" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
