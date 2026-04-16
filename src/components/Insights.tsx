import React from 'react';
import Image from 'next/image';
import styles from './Insights.module.css';
import Link from 'next/link';

export default function Insights() {
  const articles = [
    {
      category: "REGULATORY UPDATE",
      title: "Navigating the 2024 Corporate Tax Amendments: What CFOs Need to Know",
      date: "Mar 12, 2024",
      readTime: "6 min read",
      image: "/cfo_tax.png"
    },
    {
      category: "STRATEGY",
      title: "Wealth Preservation in Volatile Markets: A Cross-Border Perspective",
      date: "Feb 28, 2024",
      readTime: "8 min read",
      image: "/wealth_market.png"
    },
    {
      category: "MARKET INSIGHTS",
      title: "Digital Assets and Taxation: Decoding the Latest Global Guidelines",
      date: "Feb 15, 2024",
      readTime: "10 min read",
      image: "/digital_assets.png"
    }
  ];

  return (
    <section className={styles.insightsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.headline}>Regulatory Insights</h2>
            <p className={styles.subheadline}>
              Stay informed with the latest developments in tax regulations and economic conditions.
            </p>
          </div>
          <Link href="/insights" className={styles.viewAll}>
            VIEW ALL ARTICLES ↗
          </Link>
        </div>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <Link href="#" key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image} 
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{article.category}</span>
                <h3 className={styles.title}>{article.title}</h3>
                <div className={styles.meta}>
                  <span>{article.date}</span>
                  <span className={styles.bullet}>&bull;</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
