import React from 'react';
import GlossyCard from '../components/GlossyCard';

export default function Terms() {
  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <GlossyCard>
        <h1 style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Terms of Service</h1>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            Acceptance of Terms
          </h2>
          <p style={{ color: 'rgba(229,231,235,0.8)', lineHeight: 1.8 }}>
            By using Pastebin Lite, you agree to be bound by these terms and conditions. If you do not agree to these
            terms, please do not use our service.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            User Responsibilities
          </h2>
          <p style={{ color: 'rgba(229,231,235,0.8)', lineHeight: 1.8 }}>
            You are responsible for the content you post on Pastebin Lite. You agree not to post any illegal,
            defamatory, or offensive content. We reserve the right to remove any content that violates these terms.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            Limitation of Liability
          </h2>
          <p style={{ color: 'rgba(229,231,235,0.8)', lineHeight: 1.8 }}>
            Pastebin Lite is provided "as is" without any warranties. We are not liable for any damages arising from your
            use of this service.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-2)', marginBottom: '0.5rem' }}>
            Changes to Terms
          </h2>
          <p style={{ color: 'rgba(229,231,235,0.8)', lineHeight: 1.8 }}>
            We may update these terms at any time. Your continued use of Pastebin Lite following the posting of revised
            terms means you accept and agree to the changes.
          </p>
        </section>
      </GlossyCard>
    </div>
  );
}
