import React from 'react';

export default async function SearchPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.q || '';

  return (
    <main className="container" style={{ padding: '80px 24px', minHeight: '60vh' }}>
      <div style={{ padding: '1rem', background: 'var(--accent-light)', borderRadius: '8px', color: 'var(--primary)', marginBottom: '2rem' }}>
        <strong>Simulasi Halaman Dinamis</strong>: Ini membuktikan navigasi antar halaman berfungsi lembut!
      </div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Search Results</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        Menampilkan hasil pencarian untuk: <strong>"{query}"</strong>
      </p>
    </main>
  );
}
