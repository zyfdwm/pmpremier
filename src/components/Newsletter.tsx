"use client";

import React, { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for newsletter subscription
    console.log('Subscribing email:', email);
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Stay Informed on Tax Changes</h2>
        <p className={styles.subtitle}>
          Subscribe to our weekly digest of the most critical tax regulation updates 
          delivered straight to your inbox.
        </p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <input 
            type="email" 
            className={styles.input}
            placeholder="Your work email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.subscribeBtn}>
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}
