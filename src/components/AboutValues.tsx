import React from 'react';
import styles from './AboutValues.module.css';

export default function AboutValues() {
  const values = [
    {
      letter: "P",
      title: "Professional",
      body: "Exhibiting the highest standards of conduct and specialized expertise in every interaction."
    },
    {
      letter: "R",
      title: "Respect",
      body: "Valuing the diverse perspectives and goals of our clients and global partners."
    },
    {
      letter: "E",
      title: "Ethical",
      body: "Upholding transparency and moral clarity as the bedrock of our financial architecture."
    },
    {
      letter: "M",
      title: "Mastery",
      body: "Relentless pursuit of technical perfection and innovative structural strategy."
    },
    {
      letter: "I",
      title: "Integrity",
      body: "Unwavering honesty and consistency in our actions, values, and principles."
    },
    {
      letter: "E",
      title: "Excellence",
      body: "Going beyond expectations to deliver superior results and strategic clarity."
    },
    {
      letter: "R",
      title: "Responsibility",
      body: "Taking ownership of our impact on client success and industry standards."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>FOUNDATIONAL PILLARS</div>
          <h2 className={styles.headline}>Our Core Values</h2>
        </div>

        <div className={styles.grid}>
          {values.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.letter}>{item.letter}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
