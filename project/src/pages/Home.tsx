import React from 'react';
import GlossyCard from '../components/GlossyCard';
import GlossyButton from '../components/GlossyButton';

export default function Home() {
  return (
    <div style={{ padding: '2rem 0' }}>
      <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 className="hero-title">Share Code & Text Instantly</h1>
        <p className="hero-sub">
          Pastebin Lite is the simplest way to share code snippets, error messages, and text online. No login required.
        </p>
        <GlossyButton style={{ marginTop: '1rem' }}>
          <a href="/try" style={{ textDecoration: 'none', color: 'inherit' }}>
            Try It Now →
          </a>
        </GlossyButton>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <GlossyCard style={{ textAlign: 'center', animation: 'float 3s ease-in-out infinite' }}>
          <div className="icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            ⚡
          </div>
          <h3 style={{ margin: '0.5rem 0', color: 'var(--muted)' }}>Lightning Fast</h3>
          <p style={{ color: 'rgba(57,255,20,0.9)' }}>Share your code instantly with a unique URL</p>
        </GlossyCard>
        <GlossyCard style={{ textAlign: 'center', animation: 'float 3s ease-in-out 0.2s infinite' }}>
          <div className="icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            🔒
          </div>
          <h3 style={{ margin: '0.5rem 0', color: 'var(--muted)' }}>Simple & Secure</h3>
          <p style={{ color: 'rgba(57,255,20,0.9)' }}>No signup required, private by design</p>
        </GlossyCard>
        <GlossyCard style={{ textAlign: 'center', animation: 'float 3s ease-in-out 0.4s infinite' }}>
          <div className="icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            💾
          </div>
          <h3 style={{ margin: '0.5rem 0', color: 'var(--muted)' }}>Browser Storage</h3>
          <p style={{ color: 'rgba(57,255,20,0.9)' }}>Your data stays safe and private</p>
        </GlossyCard>
      </section>

      <section style={{ textAlign: 'center' }}>
        <GlossyCard style={{ display: 'inline-block', textAlign: 'center' }}>
          <h2 style={{ margin: 0, color: 'var(--muted)', fontSize: '1.25rem' }}>Ready to share?</h2>
          <p style={{ color: 'rgba(57,255,20,0.9)', marginTop: '.5rem' }}>
            Create a paste and get a shareable link in seconds
          </p>
          <div style={{ marginTop: '.75rem' }}>
            <GlossyButton>
              <a href="/try" style={{ textDecoration: 'none', color: 'inherit' }}>
                Start Creating
              </a>
            </GlossyButton>
          </div>
        </GlossyCard>
      </section>
    </div>
  );
}
