"use client";

import React from 'react';
import styles from './RegulationLibrary.module.css';

interface FilterState {
  categories: string[];
  status: 'In Force' | 'Rescinded';
  year: string;
  types: string[];
}

interface RegulationSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  isOpen?: boolean;
}

const CATEGORIES = [
  { id: 'pph', label: 'PPh (Income Tax)' },
  { id: 'ppn', label: 'PPN / VAT' },
  { id: 'kup', label: 'KUP (Procedures)' },
  { id: 'pbb', label: 'PBB (Property)' },
];

const INSTRUMENT_TYPES = [
  { id: 'uu', label: 'Undang-Undang (Law)' },
  { id: 'pp', label: 'Peraturan Pemerintah' },
  { id: 'pmk', label: 'PMK (Ministry Decree)' },
  { id: 'se', label: 'Circular Letter (SE)' },
];

export default function RegulationSidebar({ filters, onFilterChange, isOpen }: RegulationSidebarProps) {
  const handleCategoryToggle = (id: string) => {
    const newCategories = filters.categories.includes(id)
      ? filters.categories.filter(c => c !== id)
      : [...filters.categories, id];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleStatusChange = (status: 'In Force' | 'Rescinded') => {
    onFilterChange({ ...filters, status });
  };

  const handleYearChange = (year: string) => {
    onFilterChange({ ...filters, year });
  };

  const handleTypeToggle = (id: string) => {
    const newTypes = filters.types.includes(id)
      ? filters.types.filter(t => t !== id)
      : [...filters.types, id];
    onFilterChange({ ...filters, types: newTypes });
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarActive : ''}`}>
      <div className={styles.sidebarTitle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
        REFINE LIBRARY
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Regulation Category</label>
        <div className={styles.checkboxGroup}>
          {CATEGORIES.map(cat => (
            <label key={cat.id} className={styles.checkboxItem}>
              <input 
                type="checkbox" 
                checked={filters.categories.includes(cat.id)}
                onChange={() => handleCategoryToggle(cat.id)}
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Validity Status</label>
        <div className={styles.statusToggle}>
          <button 
            className={`${styles.statusBtn} ${filters.status === 'In Force' ? styles.btnActiveInForce : ''}`}
            onClick={() => handleStatusChange('In Force')}
          >
            IN FORCE
          </button>
          <button 
            className={`${styles.statusBtn} ${filters.status === 'Rescinded' ? styles.btnActiveRescinded : ''}`}
            onClick={() => handleStatusChange('Rescinded')}
          >
            RESCINDED
          </button>
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Publication Year</label>
        <select 
          className={styles.select}
          value={filters.year}
          onChange={(e) => handleYearChange(e.target.value)}
        >
          <option value="all">All Years</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Instrument Type</label>
        <div className={styles.checkboxGroup}>
          {INSTRUMENT_TYPES.map(type => (
            <label key={type.id} className={styles.checkboxItem}>
              <input 
                type="radio" 
                name="instrumentType"
                checked={filters.types.includes(type.id)}
                onChange={() => handleTypeToggle(type.id)}
              />
              {type.label}
            </label>
          ))}
        </div>
      </div>

      <button className={styles.applyBtn}>APPLY FILTERS</button>
    </aside>
  );
}
