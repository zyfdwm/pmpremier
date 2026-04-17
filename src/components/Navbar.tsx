"use client";

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Close menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoWrapper}>
              <Image 
                src="/logo-desktop.png" 
                alt="PM Premier" 
                width={180} 
                height={40} 
                priority
                className={styles.logoDesktop}
              />
              <Image 
                src="/logo-mobile.png" 
                alt="PM Premier" 
                width={40} 
                height={40} 
                priority
                className={styles.logoMobile}
              />
            </div>
          </Link>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navContent} ${isMenuOpen ? styles.showMenu : ''}`}>
          <ul className={styles.navLinks}>
            <li className={pathname === '/' ? styles.active : ''}><Link href="/">Home</Link></li>
            <li className={pathname === '/work' ? styles.active : ''}><Link href="/work">Our Work</Link></li>
            <li className={pathname === '/news' ? styles.active : ''}><Link href="/news">News &amp; Articles</Link></li>
            <li className={pathname === '/regulation' ? styles.active : ''}><Link href="/regulation">Regulation</Link></li>
            <li className={pathname === '/calculator' ? styles.active : ''}><Link href="/calculator">Tax Calculator</Link></li>
            <li className={pathname === '/about' ? styles.active : ''}><Link href="/about">About Us</Link></li>
          </ul>

          <div className={styles.actions}>
            <form className={styles.searchBox} onSubmit={handleSearch}>
              <button type="submit" aria-label="Search" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <input 
                type="text" 
                placeholder="Quick Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <button className={styles.contactBtn}>Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
