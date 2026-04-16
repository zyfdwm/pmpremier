"use client";

import React, { useState } from 'react';
import styles from './RegulationHero.module.css';

interface RegulationHeroProps {
  onSearch?: (query: string) => void;
}

export default function RegulationHero({ onSearch }: RegulationHeroProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Tax Regulation Database</h1>
        <p className={styles.description}>
          Search and access the latest tax regulations, government decrees, and circular 
          letters from the Ministry of Finance and DG of Taxes.
        </p>
        
        <div className={styles.searchWrapper}>
          <form className={styles.searchBox} onSubmit={handleSubmit}>
            <div className={styles.searchIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input 
              type="text" 
              className={styles.input}
              placeholder="Search by keywords, regulation number, or year..."
              value={query}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
