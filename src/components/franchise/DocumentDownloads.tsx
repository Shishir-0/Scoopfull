import React from 'react';
import { DOWNLOADABLE_GUIDES } from '../../data/franchiseData';
import { FileText, Download } from 'lucide-react';

export const DocumentDownloads: React.FC = () => {
  return (
    <section className="section" id="guides" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-line)' }}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <FileText size={14} />
            <span>Official Investor Documentation</span>
          </span>
          <h2>Download the Comprehensive 2026 Guides.</h2>
          <p className="section-lede">
            Every figure, financial line item, setup bill of quantities, and contractual assumption documented in plain numbers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {DOWNLOADABLE_GUIDES.map((doc) => (
            <div
              key={doc.id}
              style={{
                backgroundColor: '#FAF5ED',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 24px',
                border: '1px solid var(--color-line)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'var(--color-lilac)', color: 'var(--color-plum)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FileText size={20} />
                  </div>
                  <span className="badge badge-plum" style={{ fontSize: '0.6875rem' }}>
                    PDF · {doc.size}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--color-plum)' }}>
                  {doc.title}
                </h3>

                <p style={{ color: 'var(--color-soft)', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '20px' }}>
                  {doc.description}
                </p>
              </div>

              <a
                href={doc.url}
                download={doc.filename}
                className="btn btn-outline btn-sm"
                style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
              >
                <Download size={14} />
                <span>Download ({doc.size})</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
