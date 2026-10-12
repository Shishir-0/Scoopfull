import React from 'react';
import { Download, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface FranchiseHeroProps {
  onScrollToEnquiry: () => void;
}

export const FranchiseHero: React.FC<FranchiseHeroProps> = ({ onScrollToEnquiry }) => {
  return (
    <section className="section" style={{ backgroundColor: '#FAF3E8', borderBottom: '1px solid var(--color-line)', paddingTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="badge badge-plum">Franchise Programme 2026</span>
              <span className="badge badge-gold">South India, Pune & Mumbai</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', marginBottom: '18px', lineHeight: 1.12 }}>
              Own a Scoopful Parlour in Plain Numbers.
            </h1>

            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--color-soft)', lineHeight: 1.6, marginBottom: '28px' }}>
              Handcrafted ice cream, a parlour people genuinely want to sit in, and the complete operating system behind it: proprietary recipes, 10-day counter training, hygiene audits, centralized supply chain, and live delivery listings.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
              <button onClick={onScrollToEnquiry} className="btn btn-gold btn-lg">
                <span>Start Qualification Enquiry</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="/downloads/scoopful-franchise-partner-guide-2026.pdf"
                download
                className="btn btn-outline btn-lg"
              >
                <Download size={16} />
                <span>Partner Guide (PDF 4.0 MB)</span>
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.875rem', color: 'var(--color-soft)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="var(--color-mauve)" />
                <span>Two Models: FOCO & FOFO</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={16} color="var(--color-mauve)" />
                <span>Founding Slots Under ₹10 Lakhs</span>
              </div>
            </div>
          </div>

          <div>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-line)', aspectRatio: '4/3.2' }}>
              <img
                src="/img/cover_dusk.jpg"
                alt="A Scoopful parlour on a street corner at dusk, lit warmly from inside"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
