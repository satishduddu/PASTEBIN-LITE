import React, { useState } from 'react';
import { Link, Menu, X } from 'lucide-react';

export function Header({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [open, setOpen] = useState(false);

  const navItems: { label: string; path: string }[] = [
    { label: 'Home', path: '/' },
    { label: 'Try Now', path: '/try' },
    { label: 'Company', path: '/company' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Terms', path: '/terms' },
    { label: 'Privacy', path: '/privacy' },
    { label: 'Follow', path: '/follow' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md glass-card border-b border-white/6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { onNavigate('/'); setOpen(false); }}>
          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-black/30 neon-outline" aria-hidden>
            <Link className="w-5 h-5 text-neon-text" />
          </div>
          <div>
            <div className="text-lg font-bold neon-text">Pastebin Lite</div>
            <div className="text-xs text-white/40">Share. Secure. Fast.</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((n) => (
            <button key={n.path} onClick={() => onNavigate(n.path)} className="text-white/70 hover:text-white transition">
              {n.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md neon-outline"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-black/20 border border-white/6 rounded-md p-3 flex flex-col gap-2 glass-card">
            {navItems.map((n) => (
              <button
                key={n.path}
                onClick={() => { onNavigate(n.path); setOpen(false); }}
                className="text-left text-white/70 hover:text-white transition p-2 rounded-md"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
