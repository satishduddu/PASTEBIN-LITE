import React, { useState } from 'react';
import GlossyCard from '../components/GlossyCard';
import GlossyButton from '../components/GlossyButton';

export default function TryNow({ apiUrl }: { apiUrl: string }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      alert('Please enter some content');
      return;
    }

    setLoading(true);
    try {
      // In a real app, submit to API
      const paste = { id: Math.random().toString(36).slice(2), title: title || 'Untitled', content };
      window.location.href = `/paste/${paste.id}`;
    } catch (error) {
      console.error('Error creating paste:', error);
      alert('Failed to create paste');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 className="hero-title">Create a Paste</h1>
      <p className="hero-sub">Share your code or text instantly</p>

      <GlossyCard style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--muted)' }}>
              Title (Optional)
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your paste a title..."
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--muted)' }}>
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste your code or text here..."
              rows={12}
              style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <GlossyButton type="submit" disabled={loading}>
              {loading ? 'Creating...' : 'Create Paste'}
            </GlossyButton>
          </div>
        </form>
      </GlossyCard>
    </div>
  );
}
