"use client";

import React from 'react';
import styles from './WorkPayroll.module.css';

/**
 * WorkPayroll component
 * Showcases integrated payroll solutions in a high-end dark card.
 */
export default function WorkPayroll() {
  const features = [
    { 
      name: "Data Privacy", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    { 
      name: "Timely Payments", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    { 
      name: "Tax Deductions", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-4"/><path d="M8 15h8"/>
        </svg>
      )
    },
    { 
      name: "Reporting", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.label}>Operational Efficiency</div>
          
          <h2 className={styles.headline}>Integrated Payroll Solutions</h2>
          
          <p className={styles.bodyText}>
            We assist your company in the payroll process by managing employee databases, 
            income components, and tax calculations. Our service ensures all data is 
            integrated into accurate payroll calculations so you can focus on growth.
          </p>
          
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.iconBox}>
                  {feature.icon}
                </div>
                <span className={styles.featureName}>{feature.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
