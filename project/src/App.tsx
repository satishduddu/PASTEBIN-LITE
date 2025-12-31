import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ViewPaste } from './components/ViewPaste';
import Home from './pages/Home';
import TryNow from './pages/TryNow';
import Company from './pages/Company';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Paste from './pages/Paste';
import Follow from './pages/Follow';

const API_URL = (() => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  if (supabaseUrl) {
    return `${supabaseUrl}/functions/v1`;
  }
  // Fallback for local dev without env var
  return 'http://localhost:54321/functions/v1';
})();

type Route =
  | { type: 'home' }
  | { type: 'try' }
  | { type: 'company' }
  | { type: 'about' }
  | { type: 'contact' }
  | { type: 'terms' }
  | { type: 'privacy' }
  | { type: 'paste'; id: string }
  | { type: 'view'; id: string }
  | { type: 'follow' };

function App() {
  const [route, setRoute] = useState<Route>({ type: 'home' });

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const pasteMatch = path.match(/^\/paste\/([^/]+)$/);
      const viewMatch = path.match(/^\/p\/([^/]+)$/);

      if (pasteMatch) {
        setRoute({ type: 'paste', id: pasteMatch[1] });
        return;
      }

      if (viewMatch) {
        setRoute({ type: 'view', id: viewMatch[1] });
        return;
      }

      if (path === '/try') return setRoute({ type: 'try' });
      if (path === '/company') return setRoute({ type: 'company' });
      if (path === '/about') return setRoute({ type: 'about' });
      if (path === '/contact') return setRoute({ type: 'contact' });
      if (path === '/terms') return setRoute({ type: 'terms' });
      if (path === '/privacy') return setRoute({ type: 'privacy' });
      if (path === '/follow') return setRoute({ type: 'follow' });

      setRoute({ type: 'home' });
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    const ev = new PopStateEvent('popstate');
    window.dispatchEvent(ev);
  };

  return (
    <div className="min-h-screen relative">
      <div className="animated-grid" />
      <Header onNavigate={navigate} />

      <div className="py-12 px-4">
        {route.type === 'home' && <Home onNavigate={navigate} />}
        {route.type === 'try' && <TryNow apiUrl={API_URL} onNavigate={navigate} />}
        {route.type === 'company' && <Company />}
        {route.type === 'about' && <About />}
        {route.type === 'contact' && <Contact />}
        {route.type === 'terms' && <Terms />}
        {route.type === 'privacy' && <Privacy />}
        {route.type === 'paste' && (
          <ViewPaste pasteId={route.id} apiUrl={API_URL} onBack={() => navigate('/')} />
        )}
        {route.type === 'follow' && <Follow />}
        {route.type === 'view' && (
          <ViewPaste pasteId={route.id} apiUrl={API_URL} onBack={() => navigate('/')} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
