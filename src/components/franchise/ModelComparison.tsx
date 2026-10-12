import React, { useState } from 'react';
import { FRANCHISE_MODELS } from '../../data/franchiseData';
import { CheckCircle2, UserCheck, Briefcase } from 'lucide-react';

export const ModelComparison: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'foco' | 'fofo'>('foco');
  const foco = FRANCHISE_MODELS.foco;
  const fofo = FRANCHISE_MODELS.fofo;

  return (
    <section className="section" id="models" aria-label="Compare FOCO and FOFO Franchise Models">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <Briefcase size={14} />
            <span>Investment Structure Comparison</span>
          </span>
          <h2>Two Ways to Partner: FOCO vs FOFO.</h2>
          <p className="section-lede">
            Same artisanal ice cream, same store standards, and the identical operating system. The difference is who manages the day-to-day operations and how returns are distributed.
          </p>
        </div>

        {/* Model Switcher Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div className="model-toggle-strip" role="tablist">
            <button
              role="tab"
              aria-selected={selectedModel === 'foco'}
              onClick={() => setSelectedModel('foco')}
              className={`model-tab-btn ${selectedModel === 'foco' ? 'active' : ''}`}
            >
              FOCO (Company Operated)
            </button>
            <button
              role="tab"
              aria-selected={selectedModel === 'fofo'}
              onClick={() => setSelectedModel('fofo')}
              className={`model-tab-btn ${selectedModel === 'fofo' ? 'active' : ''}`}
            >
              FOFO (Franchisee Operated)
            </button>
          </div>
        </div>

        {/* Highlight Card for Currently Selected Model */}
        <div style={{ backgroundColor: '#FAF4EB', borderRadius: 'var(--radius-lg)', padding: '32px', border: '1px solid var(--color-line)', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span className="badge badge-plum">
              {selectedModel === 'foco' ? foco.name : fofo.name}
            </span>
            <span style={{ fontSize: '0.875rem', color: 'var(--color-mauve)', fontWeight: 600 }}>
              {selectedModel === 'foco' ? foco.shortName : fofo.shortName}
            </span>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
            {selectedModel === 'foco' ? foco.tagline : fofo.tagline}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
              <b style={{ color: 'var(--color-plum)', display: 'block', fontSize: '0.875rem', marginBottom: '6px' }}>What You Invest</b>
              <p style={{ color: 'var(--color-soft)', fontSize: '0.875rem', margin: 0 }}>
                {selectedModel === 'foco' ? foco.capitalRole : fofo.capitalRole}
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
              <b style={{ color: 'var(--color-plum)', display: 'block', fontSize: '0.875rem', marginBottom: '6px' }}>Your Returns</b>
              <p style={{ color: 'var(--color-soft)', fontSize: '0.875rem', margin: 0 }}>
                {selectedModel === 'foco' ? foco.investorPayout : fofo.investorPayout}
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
              <b style={{ color: 'var(--color-plum)', display: 'block', fontSize: '0.875rem', marginBottom: '6px' }}>Ideal Profile</b>
              <p style={{ color: 'var(--color-soft)', fontSize: '0.875rem', margin: 0 }}>
                {selectedModel === 'foco' ? foco.idealProfile : fofo.idealProfile}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Side-by-Side Matrix Table */}
        <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>Side-by-Side Responsibility & Commercial Matrix</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="matrix-table" aria-label="FOCO vs FOFO Detailed Comparison">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Parameter</th>
                <th style={{ width: '37.5%' }}>FOCO (Company Operated)</th>
                <th style={{ width: '37.5%' }}>FOFO (Franchisee Operated)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="matrix-feature">Operating Commitment</td>
                <td>Hands-off. 0 hours/week required in parlour.</td>
                <td>Active owner-operator or owner + dedicated manager.</td>
              </tr>
              <tr>
                <td className="matrix-feature">Staffing & Payroll</td>
                <td>Hired, trained, and paid by Scoopful.</td>
                <td>Employed by partner; trained on-site by Scoopful.</td>
              </tr>
              <tr>
                <td className="matrix-feature">Store Lease & Electricity</td>
                <td>Paid monthly by Scoopful directly.</td>
                <td>Paid by franchise partner directly.</td>
              </tr>
              <tr>
                <td className="matrix-feature">Investor Earnings</td>
                <td>5% net sales (Months 1–3) ramping to 12% monthly NEFT.</td>
                <td>100% of store operating profit after overheads.</td>
              </tr>
              <tr>
                <td className="matrix-feature">Scoopful Brand Royalties</td>
                <td>None (Scoopful retains remaining operational share).</td>
                <td>6% brand royalty + 2% central marketing fund on sales.</td>
              </tr>
              <tr>
                <td className="matrix-feature">Operating Deficit Risk</td>
                <td>Carried by Scoopful. Payout tied to gross sales.</td>
                <td>Carried by franchise partner.</td>
              </tr>
              <tr>
                <td className="matrix-feature">Contract & Exit Terms</td>
                <td>5-year term. Scoopful buys back assets at depreciated value; deposit returned.</td>
                <td>5-year term (3-year lock-in). Partner retains equipment upon unbranding.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
