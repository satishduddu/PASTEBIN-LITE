import React from 'react';
import GlossyCard from '../components/GlossyCard';

export default function Company() {
  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <GlossyCard>
        <h1 style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Company</h1>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            About Our Company
          </h2>
          <p style={{ color: 'rgba(57,255,20,0.9)', lineHeight: 1.8 }}>
            Pastebin Lite is a simple and focused platform dedicated to making it easy to share code and text online.
            We believe in keeping things simple and user-friendly.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            Our Mission
          </h2>
          <p style={{ color: 'rgba(57,255,20,0.9)', lineHeight: 1.8 }}>
            To provide a fast, simple, and reliable way for developers and users to share code snippets and text
            without any unnecessary complications.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            Our Values
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.75rem 0', color: 'rgba(57,255,20,0.9)', borderBottom: '1px solid #1e293b' }}>
              ✓ Simplicity
            </li>
            <li style={{ padding: '0.75rem 0', color: 'rgba(57,255,20,0.9)', borderBottom: '1px solid #1e293b' }}>
              ✓ Privacy
            </li>
            <li style={{ padding: '0.75rem 0', color: 'rgba(57,255,20,0.9)', borderBottom: '1px solid #1e293b' }}>
              ✓ Speed
            </li>
            <li style={{ padding: '0.75rem 0', color: 'rgba(57,255,20,0.9)' }}>
              ✓ User Focus
            </li>
          </ul>
        </section>
      </GlossyCard>
    </div>
  );
}
