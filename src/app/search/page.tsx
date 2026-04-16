'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <main className="container" style={{ padding: '80px 24px', minHeight: '60vh' }}>
      <div style={{ padding: '1rem', background: 'var(--accent-light)', borderRadius: '8px', color: 'var(--primary)', marginBottom: '2rem' }}>
        <strong>Simulasi Halaman Dinamis</strong>: Ini membuktikan navigasi antar halaman berfungsi lembut!
      </div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Search Results</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        Menampilkan hasil pencarian untuk: <strong>&quot;{query}&quot;</strong>
      </p>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<main style={{ padding: '80px 24px', minHeight: '60vh' }}>Loading...</main>}>
      <SearchResults />
    </Suspense>
  );
}
