import React, { useState } from 'react';
import GlossyCard from '../components/GlossyCard';
import GlossyButton from '../components/GlossyButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <GlossyCard>
        <h1 style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Contact Us</h1>

        <p style={{ color: 'rgba(229,231,235,0.8)', lineHeight: 1.8 }}>
          We'd love to hear from you. For support, partnerships, or general inquiries, reach out using the information
          below or send us a message.
        </p>

        <section style={{ marginTop: '1rem' }}>
          <h2 style={{ color: 'var(--primary-2)', marginBottom: '.5rem' }}>Contact Details</h2>
          <p style={{ color: 'rgba(57,255,20,0.9)', lineHeight: 1.6 }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@example.com" style={{ color: 'var(--primary-2)', textDecoration: 'none' }}>
              info@example.com
            </a>
          </p>
          <p style={{ color: 'rgba(57,255,20,0.9)', lineHeight: 1.6 }}>
            <strong>Website:</strong>{' '}
            <a href="https://example.com" style={{ color: 'var(--primary-2)', textDecoration: 'none' }}>
              https://example.com
            </a>
          </p>
        </section>

        <section style={{ marginTop: '1rem' }}>
          <h2 style={{ color: 'var(--primary-2)', marginBottom: '.5rem' }}>Send Us a Message</h2>
          <form style={{ display: 'grid', gap: '.75rem' }} onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
            />
            <GlossyButton type="submit">Send Message</GlossyButton>
          </form>
        </section>
      </GlossyCard>
    </div>
  );
}
