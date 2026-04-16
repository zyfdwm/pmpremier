"use client";

import React, { useState, useMemo } from 'react';
import styles from './RegulationLibrary.module.css';
import RegulationCard, { Regulation } from './RegulationCard';
import RegulationSidebar from './RegulationSidebar';

const MOCK_REGULATIONS: Regulation[] = [
  {
    id: '1',
    category: 'PPN / VAT',
    status: 'In Force',
    number: 'PMK-143/PMK.03/2023',
    date: '12 Dec 2023',
    title: 'Adjustment of Value Added Tax Rates on Domestic Electronic Goods and Digital Services Utilization',
    summary: 'This regulation details the technical implementation of VAT rate adjustments for domestic electronic products following the Harmonization of Tax Regulations Law (UU HPP), outlining specific categories and compliance deadlines for registered providers.',
    type: 'pmk',
    pdfUrl: '#'
  },
  {
    id: '2',
    category: 'PPh (Income Tax)',
    status: 'Rescinded',
    number: 'PMK-20/PMK.03/2022',
    date: '05 Feb 2022',
    title: 'Temporary Fiscal Incentives for Export-Oriented Manufacturing Industries during Global Supply Chain Disruption',
    summary: 'Technical guidelines for the provision of Income Tax Art 21 incentives borne by the Government for employees in designated industrial sectors facing structural challenges due to shifting global trade dynamics.',
    type: 'pmk',
    pdfUrl: '#'
  },
  {
    id: '3',
    category: 'PBB (Property)',
    status: 'In Force',
    number: 'PMK-186/PMK.03/2023',
    date: '28 Oct 2023',
    title: 'Revised Procedures for Assessment and Collection of Land and Building Tax for Forestry and Plantation Sectors',
    summary: 'Updated documentation requirements and calculation formulas for the assessment of land and building tax (PBB-P3) specifically for enterprises operating within restricted forestry concessions.',
    type: 'pmk',
    pdfUrl: '#'
  },
  {
    id: '4',
    category: 'KUP (Procedures)',
    status: 'In Force',
    number: 'UU-7/2021',
    date: '29 Oct 2021',
    title: 'Harmonization of Tax Regulations (UU HPP)',
    summary: 'A comprehensive reform of the Indonesian tax system covering income tax, VAT, voluntary disclosure programs, carbon tax, and tax procedures.',
    type: 'uu',
    pdfUrl: '#'
  },
  {
    id: '5',
    category: 'PPN / VAT',
    status: 'In Force',
    number: 'PMK-69/PMK.03/2022',
    date: '01 Apr 2022',
    title: 'Value Added Tax on Financial Technology Services',
    summary: 'Guidelines for the imposition of VAT on various fintech services including P2P lending, e-wallets, and payment gateways.',
    type: 'pmk',
    pdfUrl: '#'
  },
  {
    id: '6',
    category: 'PPh (Income Tax)',
    status: 'In Force',
    number: 'PP-55/2022',
    date: '20 Dec 2022',
    title: 'Adjustments in the Field of Income Tax',
    summary: 'Implementing regulation for UU HPP regarding changes to income tax layers and benefits-in-kind (natura).',
    type: 'pp',
    pdfUrl: '#'
  },
  {
    id: '7',
    category: 'PPN / VAT',
    status: 'In Force',
    number: 'SE-01/PJ/2024',
    date: '15 Jan 2024',
    title: 'Guidelines for VAT Audit on Property Developers',
    summary: 'Circular letter providing specific audit focus points for property development projects and construction services.',
    type: 'se',
    pdfUrl: '#'
  },
  {
    id: '8',
    category: 'KUP (Procedures)',
    status: 'In Force',
    number: 'PMK-112/PMK.03/2022',
    date: '01 Jul 2022',
    title: 'Implementation of Single Identity Number (NIK) as NPWP',
    summary: 'Procedures for the transition and use of national ID numbers as tax identifiers for individual taxpayers.',
    type: 'pmk',
    pdfUrl: '#'
  },
  {
    id: '9',
    category: 'PPh (Income Tax)',
    status: 'In Force',
    number: 'PMK-168/2023',
    date: '29 Dec 2023',
    title: 'New Article 21 Income Tax Calculation (TER)',
    summary: 'Simplification of salary-based income tax withholding using the Monthly Effective Rate (TER) mechanism.',
    type: 'pmk',
    pdfUrl: '#'
  },
  {
    id: '10',
    category: 'PBB (Property)',
    status: 'In Force',
    number: 'PP-35/2023',
    date: '16 Jun 2023',
    title: 'Regional Taxes and Levies (PDRD)',
    summary: 'Regulation covering local government authority to collect property and land transfer taxes.',
    type: 'pp',
    pdfUrl: '#'
  },
  {
    id: '11',
    category: 'PPN / VAT',
    status: 'Rescinded',
    number: 'PMK-48/PMK.03/2020',
    date: '05 May 2020',
    title: 'VAT on Digital Goods and Services (Netflix/Spotify Tax)',
    summary: 'Initial regulation for digital economy VAT, now superseded by newer guidelines under UU HPP.',
    type: 'pmk',
    pdfUrl: '#'
  },
  {
    id: '12',
    category: 'PPh (Income Tax)',
    status: 'In Force',
    number: 'SE-02/PJ/2024',
    date: '10 Feb 2024',
    title: 'Corporate Income Tax Returns Handling for 2023 Fiscal Year',
    summary: 'Internal guidelines for tax officers on processing and auditing 2023 corporate tax filings.',
    type: 'se',
    pdfUrl: '#'
  }
];

interface RegulationLibraryProps {
  initialSearchQuery?: string;
}

export default function RegulationLibrary({ initialSearchQuery = '' }: RegulationLibraryProps) {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    status: 'In Force' as 'In Force' | 'Rescinded',
    year: 'all',
    types: [] as string[],
  });
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 3;

  const filteredRegulations = useMemo(() => {
    let result = MOCK_REGULATIONS.filter(reg => {
      // Filter by Search Query
      if (initialSearchQuery && !reg.title.toLowerCase().includes(initialSearchQuery.toLowerCase())) {
        return false;
      }

      // Filter by Category
      if (filters.categories.length > 0) {
        const regCatLower = reg.category.toLowerCase();
        const matches = filters.categories.some(cat => regCatLower.includes(cat));
        if (!matches) return false;
      }

      // Filter by Status
      if (reg.status !== filters.status) return false;

      // Filter by Year
      if (filters.year !== 'all' && !reg.date.includes(filters.year)) return false;

      // Filter by Type
      if (filters.types.length > 0 && !filters.types.includes(reg.type)) return false;

      return true;
    });

    // Reset to first page when filters change
    // Note: This logic is tricky inside useMemo, but we'll handle it via useEffect or setter logic
    
    return result;
  }, [filters, initialSearchQuery]);

  // Reset page when filters or search change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters, initialSearchQuery]);

  const totalPages = Math.ceil(filteredRegulations.length / ITEMS_PER_PAGE);
  const paginatedRegulations = filteredRegulations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className={styles.librarySection}>
      <div className="container">
        <div className={styles.libraryContainer}>
          <RegulationSidebar 
            filters={filters} 
            onFilterChange={setFilters} 
          />

          <div className={styles.resultsArea}>
            <div className={styles.resultsHeader}>
              <div className={styles.resultsInfo}>
                <span className={styles.showingText}>
                  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredRegulations.length)} of {filteredRegulations.length}
                </span>
                <h2>Regulations Found</h2>
              </div>
              <div className={styles.sortGroup}>
                <span className={styles.sortLabel}>SORT BY:</span>
                <select 
                  className={styles.sortSelect}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="latest">Latest Release</option>
                  <option value="oldest">Oldest Release</option>
                </select>
              </div>
            </div>

            <div className={styles.list}>
              {paginatedRegulations.length > 0 ? (
                paginatedRegulations.map(reg => (
                  <RegulationCard key={reg.id} regulation={reg} />
                ))
              ) : (
                <div style={{ padding: '40px', textAlign: 'center', color: '#999', background: '#fff', borderRadius: '8px' }}>
                  No regulations match your current filters.
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button 
                  className={styles.pageBtn} 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                >
                  PREV
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button 
                    key={i + 1}
                    className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.activePage : ''}`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  className={styles.pageBtn} 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  NEXT
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
