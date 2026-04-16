"use client";

import React from 'react';
import styles from './WorkTpDoc.module.css';

/**
 * WorkTpDoc component
 * Showcases Transfer Pricing Documentation in a split layout with a bento grid.
 */
export default function WorkTpDoc() {
  const cards = [
    {
      title: "Master File (MF)",
      body: "Global overview of the group's business operations and transfer pricing policies.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      )
    },
    {
      title: "Local File (LF)",
      body: "Detailed transactional documentation specific to local jurisdiction operations.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
        </svg>
      )
    },
    {
      title: "Country-by-Country Reporting (CbCR)",
      body: "Aggregate tax and financial data per jurisdiction for transparency across global operations.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      isWide: true
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <div className={styles.label}>Compliance & Risk Management</div>
            <h2 className={styles.headline}>Transfer Pricing Documentation (TP DOC)</h2>
            <p className={styles.bodyText}>
              Transfer Pricing Documentation is required by law to substantiate intercompany 
              business transactions and pricing. Properly structured documentation builds a 
              robust defense for your transfer pricing policies and significantly mitigates 
              the risk of disputes with tax authorities.
            </p>
            
            <div className={styles.infoBox}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </div>
              <p className={styles.infoText}>
                Our documentation helps prevent the shift of burden of proof to the taxpayer 
                and protects your organization from double taxation.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            <div className={styles.bentoGrid}>
              {cards.map((card, index) => (
                <div key={index} className={`${styles.card} ${card.isWide ? styles.wideCard : ''}`}>
                  <div className={styles.iconWrapper}>
                    {card.icon}
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardBody}>{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
