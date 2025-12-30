import React from 'react';
import GlossyCard from '../components/GlossyCard';

export default function Privacy() {
  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <GlossyCard>
        <h1 style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Privacy Policy</h1>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            Information We Collect
          </h2>
          <p style={{ color: 'rgba(229,231,235,0.8)', lineHeight: 1.8 }}>
            When you create a paste, we store the content you provide along with a timestamp. We do not collect any
            personal information such as names, emails, or IP addresses.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            How We Use Your Data
          </h2>
          <p style={{ color: 'rgba(229,231,235,0.8)', lineHeight: 1.8 }}>
            Your paste content is stored in our database to allow you to access and share it. We do not use your data
            for any other purpose, and we do not sell or share your data with third parties.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            Data Security
          </h2>
          <p style={{ color: 'rgba(229,231,235,0.8)', lineHeight: 1.8 }}>
            We take reasonable steps to protect your data from unauthorized access, alteration, or disclosure. However,
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            Changes to This Policy
          </h2>
          <p style={{ color: 'rgba(229,231,235,0.8)', lineHeight: 1.8 }}>
            We may update this privacy policy from time to time. We encourage you to review this policy periodically for
            any changes.
          </p>
        </section>
      </GlossyCard>
    </div>
  );
}
