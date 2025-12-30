import React from 'react';

export function Footer() {
  return (
    <footer className="sticky bottom-0 glass-card border-t border-white/6 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <a href="https://twitter.com" style={{ color: 'rgba(57,255,20,0.8)', textDecoration: 'none' }}>Twitter</a>
          <a href="https://github.com" style={{ color: 'rgba(57,255,20,0.8)', textDecoration: 'none' }}>GitHub</a>
        </div>

        <div style={{ borderTop: '1px solid rgba(57,255,20,0.1)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(57,255,20,0.6)', fontSize: '0.9rem', margin: 0 }}>
            © 2025 Pastebin Lite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
