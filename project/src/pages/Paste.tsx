import React from 'react';
import GlossyCard from '../components/GlossyCard';
import GlossyButton from '../components/GlossyButton';

export default function Paste() {
  const [paste, setContent] = React.useState<any>(null);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    // In a real app, fetch from API based on pasteId
    const mockPaste = {
      id: 'abc123',
      title: 'Example Paste',
      content: 'console.log("Hello, World!");',
      createdAt: new Date().toISOString(),
    };
    setContent(mockPaste);
  }, []);

  const handleCopy = () => {
    if (paste) {
      navigator.clipboard.writeText(paste.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this paste?')) {
      // In a real app, delete via API
      window.location.href = '/';
    }
  };

  if (!paste) {
    return <div className="container" style={{ padding: '2rem' }}>Loading...</div>;
  }

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <GlossyCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
          <div>
            <h1 style={{ margin: 0, marginBottom: '0.5rem', color: 'var(--muted)' }}>{paste.title}</h1>
            <p style={{ color: 'rgba(229,231,235,0.6)', fontSize: '0.9rem', margin: 0 }}>
              Created: {new Date(paste.createdAt).toLocaleString()}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <GlossyButton onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</GlossyButton>
            <GlossyButton onClick={handleDelete} style={{ background: 'rgba(239, 68, 68, 0.3)' }}>
              Delete
            </GlossyButton>
          </div>
        </div>

        <pre style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', overflowX: 'auto', color: '#e5e7eb' }}>
          <code>{paste.content}</code>
        </pre>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(229,231,235,0.6)', marginBottom: '1rem' }}>
            Share this link: <code style={{ color: 'var(--accent)' }}>{window.location.href}</code>
          </p>
        </div>
      </GlossyCard>
    </div>
  );
}
