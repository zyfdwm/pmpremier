import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1 - Brand */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <Link href="/">
                <Image 
                  src="/logo-desktop.png" 
                  alt="PM Premier" 
                  width={180} 
                  height={40} 
                  className={styles.footerLogo}
                />
              </Link>
            </div>
            <p className={styles.description}>
              Bespoke consultancy for those who demand precision and strategy in their financial operations.
            </p>
            <div className={styles.icons}>
              {/* Globe Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              {/* Briefcase Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              {/* Mail Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>QUICK LINKS</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/work">Our Work</Link></li>
              <li><Link href="/education">Education</Link></li>
              <li><Link href="/news">News &amp; Regulation</Link></li>
            </ul>
          </div>

          {/* Column 3 - Legal & Terms */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>LEGAL &amp; TERMS</h4>
            <ul className={styles.linkList}>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Begin Your Strategy Session</h4>
            <ul className={styles.contactList}>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Central Business District (CBD) Niaga Blok B7, Sentul City - Bogor.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+62-879-65-359 | pmpremierconsulting.com</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>Mon - Sat, 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © 2024 PM Premier Consultant. All rights reserved.
          </div>
          <div className={styles.badges}>
            <span>Regulatory Entity 45291</span>
            <span>ISO 270001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
