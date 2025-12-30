import React from 'react';
import GlossyCard from '../components/GlossyCard';

export default function Follow() {
  const socials = [
    { name: 'Instagram', href: 'https://instagram.com', emoji: '📸' },
    { name: 'Facebook', href: 'https://facebook.com', emoji: '👍' },
    { name: 'Twitter', href: 'https://twitter.com', emoji: '🐦' },
    { name: 'Telegram', href: 'https://telegram.org', emoji: '✈️' },
    { name: 'Email', href: 'mailto:info@example.com', emoji: '✉️' },
    { name: 'Phone', href: 'tel:+1234567890', emoji: '📞' },
  ];

  return (
    <div style={{ padding: '3rem 1rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--neon)', marginBottom: '0.5rem' }}>Follow</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Connect with us on your favorite platform</p>

        <GlossyCard style={{ padding: '2rem' }}>
          <div className="social-row" style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            {socials.map((s, i) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="social-icon"
                style={{ animationDelay: `${i * 120}ms`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 88, height: 88, borderRadius: 14, textDecoration: 'none', background: 'rgba(0,0,0,0.35)', color: 'var(--neon)' }}
                aria-label={s.name}
              >
                <span style={{ fontSize: 26 }}>{s.emoji}</span>
                <span style={{ marginLeft: 8, fontSize: 14, color: 'var(--muted)' }}>{s.name}</span>
              </a>
            ))}
          </div>
        </GlossyCard>
      </div>
    </div>
  );
}
