import React from 'react';
import { Store, Users, Armchair, IndianRupee } from 'lucide-react';

export const FormatBreakdown: React.FC = () => {
  return (
    <section className="section" id="formats" aria-label="Standard Parlour Formats">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <Store size={14} />
            <span>Full Parlour Destinations</span>
          </span>
          <h2>Compact vs Signature Parlours.</h2>
          <p className="section-lede">
            For destination high streets and premium dining precincts. Full experiential formats serving our complete 25+ flavour library, artisan sundaes, cold coffees, and takeaway jars.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {/* Compact Parlour */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-line)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/img/day_exterior.jpg"
                alt="A compact Scoopful parlour on a high street with a striped awning"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span className="badge badge-plum" style={{ position: 'absolute', top: '14px', left: '14px' }}>
                Compact Parlour (500–999 sq ft)
              </span>
            </div>

            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>Compact Parlour Format</h3>
              <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', marginBottom: '20px' }}>
                Ideal for neighborhood high streets and destination market strips. Provides an intimate parlour ambiance with dedicated seating for couples and small groups.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', padding: '16px 0', borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)', fontSize: '0.875rem', marginBottom: '20px' }}>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Dine-In Seating</span>
                  <b style={{ color: 'var(--color-plum)' }}>12 – 16 Seats</b>
                </div>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Staff Strength</span>
                  <b style={{ color: 'var(--color-plum)' }}>~6 Team Members</b>
                </div>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Franchise Fee</span>
                  <b style={{ color: 'var(--color-plum)' }}>FOCO ₹7L | FOFO ₹4L + GST</b>
                </div>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Fitout & Equipment</span>
                  <b style={{ color: 'var(--color-plum)' }}>₹19.5L – ₹24.5L</b>
                </div>
              </div>

              <div style={{ marginTop: 'auto', fontSize: '0.8125rem', color: 'var(--color-soft)' }}>
                Includes 2 km protected exclusive territory for compliant operators.
              </div>
            </div>
          </div>

          {/* Signature Parlour */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-line)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/img/wide_interior.jpg"
                alt="Inside a Signature Scoopful parlour: walnut counter, lavender arches, lit logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span className="badge badge-gold" style={{ position: 'absolute', top: '14px', left: '14px' }}>
                Signature Parlour (1,000+ sq ft)
              </span>
            </div>

            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>Signature Parlour Destination</h3>
              <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', marginBottom: '20px' }}>
                The flagship brand experience for landmark city junctions. Features an expansive walnut service counter, waffle cone baking station, and comfortable lounge banquettes.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', padding: '16px 0', borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)', fontSize: '0.875rem', marginBottom: '20px' }}>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Dine-In Seating</span>
                  <b style={{ color: 'var(--color-plum)' }}>28 – 32 Lounge Seats</b>
                </div>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Staff Strength</span>
                  <b style={{ color: 'var(--color-plum)' }}>~9 Team Members</b>
                </div>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Franchise Fee</span>
                  <b style={{ color: 'var(--color-plum)' }}>FOCO ₹8L | FOFO ₹5L + GST</b>
                </div>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>Fitout & Equipment</span>
                  <b style={{ color: 'var(--color-plum)' }}>₹25.8L – ₹32.8L</b>
                </div>
              </div>

              <div style={{ marginTop: 'auto', fontSize: '0.8125rem', color: 'var(--color-soft)' }}>
                Targeted at premium metro high streets with high evening dessert footfall.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
