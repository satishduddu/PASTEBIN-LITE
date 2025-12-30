import React from 'react';
import { Link } from 'lucide-react';

export function Header({ onNavigate }: { onNavigate: (path: string) => void }) {
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md glass-card border-b border-white/6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('/')}>
          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-black/30 neon-outline" aria-hidden>
            <Link className="w-5 h-5 text-neon-text text-[--neon]" />
          </div>
          <div>
            <div className="text-lg font-bold neon-text">Pastebin Lite</div>
            <div className="text-xs text-white/40">Share. Secure. Fast.</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => onNavigate('/')} className="text-white/70 hover:text-white transition">Home</button>
          <button onClick={() => onNavigate('/try')} className="text-white/70 hover:text-white transition">Try Now</button>
          <button onClick={() => onNavigate('/company')} className="text-white/70 hover:text-white transition">Company</button>
          <button onClick={() => onNavigate('/about')} className="text-white/70 hover:text-white transition">About</button>
          <button onClick={() => onNavigate('/contact')} className="text-white/70 hover:text-white transition">Contact</button>
          <button onClick={() => onNavigate('/terms')} className="text-white/70 hover:text-white transition">Terms</button>
          <button onClick={() => onNavigate('/privacy')} className="text-white/70 hover:text-white transition">Privacy</button>

          <button onClick={() => onNavigate('/follow')} className="text-white/70 hover:text-white transition">Follow</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
