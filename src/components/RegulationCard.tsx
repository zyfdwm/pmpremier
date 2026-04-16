"use client";

import React from 'react';
import styles from './RegulationLibrary.module.css';

export interface Regulation {
  id: string;
  category: string;
  status: 'In Force' | 'Rescinded';
  number: string;
  date: string;
  title: string;
  summary: string;
  type: string;
  pdfUrl: string;
}

interface RegulationCardProps {
  regulation: Regulation;
}

export default function RegulationCard({ regulation }: RegulationCardProps) {
  const isRescinded = regulation.status === 'Rescinded';

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.categoryTag}`}>
            {regulation.category}
          </span>
          <span className={`${styles.tag} ${isRescinded ? styles.rescindedTag : styles.inForceTag}`}>
            <span className={styles.statusDot}></span>
            {regulation.status.toUpperCase()}
          </span>
        </div>
        <div className={styles.meta}>
          <span className={styles.regInfo}>Regulation No: {regulation.number} &bull; Published: {regulation.date}</span>
        </div>
      </div>

      <h3 className={styles.regTitle}>{regulation.title}</h3>
      <p className={styles.regSummary}>{regulation.summary}</p>

      <div className={styles.cardActions}>
        <button className={styles.actionBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          VIEW DETAILS
        </button>
        <a href={regulation.pdfUrl} download className={styles.actionBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          DOWNLOAD PDF
        </a>
      </div>
    </div>
  );
}
