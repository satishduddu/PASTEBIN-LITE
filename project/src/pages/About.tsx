import React from 'react';
import GlossyCard from '../components/GlossyCard';

export default function About() {
  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <GlossyCard>
        <h1 style={{ marginBottom: '1.5rem', color: 'var(--muted)' }}>About Pastebin Lite</h1>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2bf304' }}>What is Pastebin Lite?</h2>
          <p style={{ color: '#e5e7eb', lineHeight: '1.8', marginBottom: '1rem' }}>
            Pastebin Lite is a lightweight, fast, and free service for sharing code snippets, error messages, and text
            online. Unlike other pastebin services, Pastebin Lite requires no signup, no accounts, and no complicated
            registration processes.
          </p>
          <p style={{ color: '#e5e7eb', lineHeight: '1.8' }}>
            Simply paste your content, click create, and share the generated link. It's that simple!
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2bf304' }}>Why We Built It</h2>
          <p style={{ color: '#e5e7eb', lineHeight: '1.8' }}>
            We created Pastebin Lite because we wanted a service that was truly simple and focused. No unnecessary
            features, no ads, no tracking—just a clean, fast way to share code and text with others.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2bf304' }}>Key Features</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.75rem 0', color: '#e5e7eb', borderBottom: '1px solid #1e293b' }}>
              ⚡ <strong>Instant Sharing:</strong> Create a paste and get a shareable link in seconds
            </li>
            <li style={{ padding: '0.75rem 0', color: '#e5e7eb', borderBottom: '1px solid #1e293b' }}>
              🔒 <strong>Private by Default:</strong> No login required, your data stays private
            </li>
            <li style={{ padding: '0.75rem 0', color: '#e5e7eb', borderBottom: '1px solid #1e293b' }}>
              ⚙️ <strong>No Configuration:</strong> Start sharing in seconds with zero setup
            </li>
            <li style={{ padding: '0.75rem 0', color: '#e5e7eb' }}>
              🌐 <strong>Works Everywhere:</strong> Share links across any platform
            </li>
          </ul>
        </section>
      </GlossyCard>
    </div>
  );
}
