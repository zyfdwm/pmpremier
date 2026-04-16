import React from 'react';
import Image from 'next/image';
import styles from './Services.module.css';
import Link from 'next/link';

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.headline}>Our Core Expertise</h2>
            <p className={styles.subheadline}>
              We integrate local regulatory knowledge with global tax trends to provide robust, future-proof solutions.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/corporate_boardroom.png"
                alt="Corporate Tax"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
              <div className={styles.iconBadge}>
                {/* Briefcase Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Corporate Tax</h3>
              <p className={styles.cardBody}>
                Comprehensive Tax Solutions. From Tax Compliance and Planning to Advisory and Dispute Resolution, we ensure your business remains compliant and optimized.
              </p>
              <Link href="/corporate-tax" className={styles.cardLink}>
                Explore Corporate Solutions ↗
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/private_wealth_lounge.png"
                alt="Audit & Assurance"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
              <div className={styles.iconBadge}>
                {/* Document Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Audit &amp; Assurance</h3>
              <p className={styles.cardBody}>
                Reliable Financial Auditing. We provide audit reports that serve as the basis of public confidence, ensuring statements are relevant, understandable, and comparable.
              </p>
              <Link href="/audit-assurance" className={styles.cardLink}>
                Explore Audit Services ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
