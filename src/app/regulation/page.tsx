"use client";

import React, { useState } from 'react';
import RegulationHero from '@/components/RegulationHero';
import RegulationLibrary from '@/components/RegulationLibrary';
import Newsletter from '@/components/Newsletter';
import RegulationSlider from '@/components/RegulationSlider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

export default function RegulationPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  return (
    <main>
      <RegulationHero onSearch={handleSearch} />
      <RegulationLibrary initialSearchQuery={searchQuery} />
      <Newsletter />
    </main>
  );
}
