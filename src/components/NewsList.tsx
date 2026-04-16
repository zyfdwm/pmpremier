"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsList.module.css';

interface Article {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const ALL_ARTICLES: Article[] = [
  {
    id: 1,
    category: "DIGITAL TAX",
    date: "March 22, 2024",
    title: "Understanding the Shifts in European Digital Services Tax (DST)",
    description: "As digital economies evolve, we dissect the latest legislative updates across France, Italy, and Spain to help firms mitigate risk.",
    image: "/digital_assets.png"
  },
  {
    id: 2,
    category: "PERFORMANCE",
    date: "May 12, 2024",
    title: "Quarterly Fiscal Review: Q1 2024 Performance Benchmarks",
    description: "Our internal audit reveals steady growth trends despite regulatory headwinds in the APAC region. A detailed look at the metrics.",
    image: "/wealth_market.png"
  },
  {
    id: 3,
    category: "STRATEGY",
    date: "August 10, 2024",
    title: "Strategic Partnership with Global Compliance Alliance",
    description: "PM Premier joins forces with leading compliance tech firms to streamline reporting processes for our high-net-worth clients.",
    image: "/cfo_tax.png"
  },
  {
    id: 4,
    category: "TAX PLANNING",
    date: "February 15, 2024",
    title: "Corporate Tax Strategy in the Era of Global Minimum Tax",
    description: "Analyzing the impact of Pillar Two on multinational corporations and the steps needed to ensure operational readiness.",
    image: "/cfo_tax.png"
  },
  {
    id: 5,
    category: "REGULATION",
    date: "April 05, 2024",
    title: "Impact of New Carbon Pricing Regulations on Industrial Supply Chains",
    description: "How shifting environmental policies are redefining cost structures for manufacturing firms across Southeast Asia.",
    image: "/wealth_market.png"
  },
  {
    id: 6,
    category: "AUDIT",
    date: "June 18, 2024",
    title: "Transparency in Sustainability Reporting: Current Standards and Future Trends",
    description: "Exploring the convergence of financial and ESG reporting standards and what it means for public company disclosures.",
    image: "/digital_assets.png"
  },
  {
    id: 7,
    category: "MARKET INSIGHTS",
    date: "July 24, 2024",
    title: "Navigating Interest Rate Volatility: Treasury Management Tips",
    description: "Essential strategies for CFOs to manage liquidity and debt obligations amidst shifting central bank policies.",
    image: "/wealth_market.png"
  }
];

const ARTICLES_PER_PAGE = 3;

export default function NewsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(ALL_ARTICLES.length / ARTICLES_PER_PAGE);

  // Logic to slice articles per page
  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = ALL_ARTICLES.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' }); // Scroll slightly up to the list top
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header and Tabs */}
        <div className={styles.header}>
          <h2 className={styles.title}>Our Insight</h2>
          <div className={styles.tabs}>
            <div className={`${styles.tab} ${styles.tabActive}`}>Recent</div>
          </div>
        </div>

        {/* List of Articles */}
        <div className={styles.list}>
          {currentArticles.map((article) => (
            <Link href={`/news/${article.id}`} key={article.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.category}>{article.category}</span>
                  <span className={styles.date}>{article.date}</span>
                </div>
                
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.description}>{article.description}</p>
                
                <div className={styles.arrowBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Numbered Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${styles.pageBtn} ${currentPage === page ? styles.pageActive : ''}`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
