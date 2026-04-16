"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './RegulationSlider.module.css';

/**
 * Data Structure ready for future Notion API mapping
 */
interface RegulationItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  reportLink: string;
  category: string;
}

const MOCK_REGULATIONS: RegulationItem[] = [
  {
    id: "reg-1",
    category: "REGULATION UPDATES",
    date: "March 28, 2024",
    title: "The 2024 Global Minimum Tax Framework: Navigating Pillar Two Compliance",
    summary: "An exhaustive breakdown of the OECD's latest directives and how they impact multinational corporate structures in the upcoming fiscal year.",
    imageUrl: "/cfo_tax.png",
    reportLink: "#"
  },
  {
    id: "reg-2",
    category: "TAX POLICY",
    date: "April 15, 2024",
    title: "New Digital Services Tax (DST) Amendments in Southeast Asia",
    summary: "A comparative analysis of the latest DST implementation strategies across emerging markets and their implications for cross-border tech services.",
    imageUrl: "/digital_assets.png",
    reportLink: "#"
  },
  {
    id: "reg-3",
    category: "COMPLIANCE",
    date: "May 02, 2024",
    title: "Carbon Border Adjustment Mechanism (CBAM): Readiness Roadmap",
    summary: "Prepare your organization for the next phase of CBAM reporting requirements with our detailed step-by-step roadmap for industrial exporters.",
    imageUrl: "/wealth_market.png",
    reportLink: "#"
  }
];

export default function RegulationSlider() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Simple auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % MOCK_REGULATIONS.length);
      setIsAnimating(false);
    }, 400); // Match CSS transition duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + MOCK_REGULATIONS.length) % MOCK_REGULATIONS.length);
      setIsAnimating(false);
    }, 400);
  };

  const current = MOCK_REGULATIONS[index];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          <div className={`${styles.slide} ${isAnimating ? styles.fade : ''}`}>
            <div className={styles.imageCol}>
              <Image 
                src={current.imageUrl} 
                alt={current.title} 
                fill 
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.contentCol}>
              <div className={styles.header}>
                <span className={styles.eyebrow}>{current.category}</span>
                <span className={styles.dot}></span>
                <span className={styles.date}>{current.date}</span>
              </div>

              <h2 className={styles.headline}>{current.title}</h2>
              <p className={styles.summary}>{current.summary}</p>

              <Link href={current.reportLink} className={styles.link}>
                Access Full Report
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className={styles.controls}>
            <button onClick={handlePrev} className={styles.navBtn} aria-label="Previous Slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button onClick={handleNext} className={styles.navBtn} aria-label="Next Slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
