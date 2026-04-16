"use client";

import React from 'react';
import styles from './WorkServices.module.css';

/**
 * WorkServices component
 * Implements a Bento Grid layout for the Service Capabilities section.
 */
export default function WorkServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Service Capabilities</h2>
          <p className={styles.subtitle}>
            Systematic expertise applied across four strategic pillars of modern financial management.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card 1: Taxes (Tall Card) */}
          <div className={`${styles.card} ${styles.cardTaxes}`}>
            <div className={styles.iconArea}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Taxes</h3>
            <p className={styles.cardBody}>
              We provide Tax Compliance, Advisory, Planning, Review, Refund, and Dispute resolution to ensure your business navigates shifting global regulations effectively.
            </p>
            <div className={styles.bulletList}>
              <div className={styles.bulletItem}><span className={styles.bulletMark}></span> Tax Compliance</div>
              <div className={styles.bulletItem}><span className={styles.bulletMark}></span> Review & Refund</div>
              <div className={styles.bulletItem}><span className={styles.bulletMark}></span> Dispute Resolution</div>
            </div>
          </div>

          {/* Card 2: Education (Wide Card) */}
          <div className={`${styles.card} ${styles.cardEducation}`}>
            <div className={styles.iconArea}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Education</h3>
            <p className={styles.cardBody}>
              We provide training programs tailored to your needs, ensuring your employees gain the latest regulatory knowledge and skills to implement programs in company activities.
            </p>
          </div>

          {/* Card 3: Audit (Square Card) */}
          <div className={`${styles.card} ${styles.cardAudit}`}>
            <div className={styles.iconArea}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Audit</h3>
            <p className={styles.cardBody}>
              We ensure financial statements are relevant, understandable, comparable, and reliable, providing the transparency needed for public and stakeholder confidence.
            </p>
          </div>

          {/* Card 4: Compliance (Square Card) */}
          <div className={`${styles.card} ${styles.cardCompliance}`}>
            <div className={styles.iconArea}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Global Compliance</h3>
            <p className={styles.cardBody}>
              Advanced structural optimization ensuring maximum efficiency in a shifting regulatory landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
