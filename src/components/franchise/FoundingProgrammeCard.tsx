import React from 'react';
import { Sparkles, Download, CheckCircle, AlertCircle } from 'lucide-react';

export const FoundingProgrammeCard: React.FC = () => {
  return (
    <section className="section" id="founding" style={{ backgroundColor: '#FAF6EE', borderTop: '1px solid var(--color-line)' }}>
      <div className="container">
        <div className="section-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge badge-gold">
              <Sparkles size={12} />
              <span>Limited to 12 Outlets</span>
            </span>
            <span className="badge badge-plum">Special Locked Terms</span>
          </div>
          <h2>Start Lean: The Founding Partner Programme.</h2>
          <p className="section-lede">
            Our very first wave of expansion parlours open under exclusive commercial conditions: all-in under ₹10 Lakhs (including setup, franchise fees, and lease security deposit) with commercial terms locked for five years.
          </p>
        </div>

        <div className="format-cards-grid">
          {/* Format 1: Food Court Counter */}
          <div className="format-card featured">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="badge badge-plum">Format A</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-plum)', fontFamily: 'var(--font-serif)' }}>
                ₹7.6L – ₹8.4L all-in
              </span>
            </div>

            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>Food Court Counter</h3>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', marginBottom: '16px' }}>
              Compact high-efficiency scoop station engineered for high-density food courts in premium shopping malls, tech corridors, and major university campuses.
            </p>

            <div className="format-specs">
              <div>
                <span className="spec-label">Carpet Area:</span>
                <div className="spec-val">100 – 200 sq ft</div>
              </div>
              <div>
                <span className="spec-label">Ideal Setting:</span>
                <div className="spec-val">Malls & IT Tech Parks</div>
              </div>
              <div>
                <span className="spec-label">Team Required:</span>
                <div className="spec-val">About 3 staff members</div>
              </div>
              <div>
                <span className="spec-label">Seating:</span>
                <div className="spec-val">Shared food court seating</div>
              </div>
              <div>
                <span className="spec-label">FOFO Payback (Est.):</span>
                <div className="spec-val" style={{ color: 'var(--color-success)' }}>~9 Months</div>
              </div>
              <div>
                <span className="spec-label">FOCO Payback (Est.):</span>
                <div className="spec-val" style={{ color: 'var(--color-mauve)' }}>~14 Months</div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>Average ticket: ₹140–₹150</span>
              <a
                href="/downloads/scoopful-founding-partner-programme-2026.pdf"
                download
                className="btn btn-outline btn-sm"
              >
                <Download size={14} />
                <span>Download Prospectus</span>
              </a>
            </div>
          </div>

          {/* Format 2: QSR Scoop Bar */}
          <div className="format-card featured">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="badge badge-plum">Format B</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-plum)', fontFamily: 'var(--font-serif)' }}>
                ₹8.9L – ₹9.9L all-in
              </span>
            </div>

            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>QSR Scoop Bar</h3>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', marginBottom: '16px' }}>
              Ground-floor streetside scoop bar with high evening pedestrian footfall, branded awning, and rapid takeaway service.
            </p>

            <div className="format-specs">
              <div>
                <span className="spec-label">Carpet Area:</span>
                <div className="spec-val">150 – 300 sq ft</div>
              </div>
              <div>
                <span className="spec-label">Ideal Setting:</span>
                <div className="spec-val">High-street retail & dining strips</div>
              </div>
              <div>
                <span className="spec-label">Team Required:</span>
                <div className="spec-val">About 4 staff members</div>
              </div>
              <div>
                <span className="spec-label">Seating:</span>
                <div className="spec-val">High-stool ledge & quick takeaway</div>
              </div>
              <div>
                <span className="spec-label">FOFO Payback (Est.):</span>
                <div className="spec-val" style={{ color: 'var(--color-success)' }}>~11 Months</div>
              </div>
              <div>
                <span className="spec-label">FOCO Payback (Est.):</span>
                <div className="spec-val" style={{ color: 'var(--color-mauve)' }}>~17 Months</div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>Average ticket: ₹140–₹150</span>
              <a
                href="/downloads/scoopful-founding-partner-programme-2026.pdf"
                download
                className="btn btn-outline btn-sm"
              >
                <Download size={14} />
                <span>Download Prospectus</span>
              </a>
            </div>
          </div>
        </div>

        {/* Realistic Commercial Disclaimer */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '16px 20px', backgroundColor: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)', fontSize: '0.8125rem', color: 'var(--color-soft)' }}>
          <AlertCircle size={16} color="var(--color-mauve)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            <b>Factual Note on Payback Estimates:</b> Payback calculations exclude the refundable lease security deposit and assume average billing size of ₹140–₹150 ramping up over 6–9 months. Actual performance varies with site footfall and local execution. Scoopful provides transparent unit economics in the official prospectus.
          </span>
        </div>
      </div>
    </section>
  );
};
