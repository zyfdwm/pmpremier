"use client";

import React, { useState } from 'react';
import styles from './AboutLeadership.module.css';

const leaders = [
  {
    name: "Marcus V. Sterling",
    role: "Managing Director",
    bio: "With over 25 years in private equity tax structure, Marcus oversees our strategic direction and high-net-worth portfolio.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Elena Thorne",
    role: "Head of Tax Policy",
    bio: "A former legislative advisor, Elena specializes in international regulation and complex compliance frameworks.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Julian Park",
    role: "Partner, Corporate Audit",
    bio: "Julian leads our audit defense division, bringing a rigorous analytical approach to corporate risk mitigation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Chief Operating Officer",
    bio: "Driving international scale and operational excellence across our pan-Asian strategy and service delivery.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "David Ardianto",
    role: "Strategic Business Advisor",
    bio: "Specializing in emerging markets and corporate restructuring, David bridges the gap between local policy and global growth.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Linda Watkins",
    role: "Head of Global Compliance",
    bio: "Expert in cross-border tax transparency and regulatory ethics, ensuring our clients maintain impeccable standards.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop"
  }
];

export default function AboutLeadership() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + 3 < leaders.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const prevSlide = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };

  // Calculate percentage offset
  const offset = (startIndex / leaders.length) * 100;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <div className={styles.headerText}>
            <h2 className={styles.headline}>Leadership</h2>
            <p className={styles.subHeadline}>
              Guided by industry veterans with a combined century of expertise in international taxation and structural finance.
            </p>
          </div>
          
          <div className={styles.controls}>
            <button 
              className={styles.navBtn} 
              onClick={prevSlide} 
              disabled={startIndex === 0}
              aria-label="Previous team members"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              className={styles.navBtn} 
              onClick={nextSlide} 
              disabled={startIndex + 3 >= leaders.length}
              aria-label="Next team members"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.gridWindow}>
          <div 
            className={styles.track}
            style={{ 
              transform: `translateX(calc(-${offset}% - 0.5rem))` 
            }}
          >
            {leaders.map((leader, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.card}>
                  <div className={styles.imageArea}>
                    <img src={leader.image} alt={leader.name} loading="lazy" />
                  </div>
                  <div className={styles.infoArea}>
                    <span className={styles.role}>{leader.role}</span>
                    <h3 className={styles.name}>{leader.name}</h3>
                    <p className={styles.bio}>{leader.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
