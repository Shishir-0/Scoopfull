import React from 'react';
import { Scale, Flame, Award, ShieldCheck } from 'lucide-react';

export const BrandDifferentiators: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FAF6EF', borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <Award size={14} />
            <span>The Scoopful Standard</span>
          </span>
          <h2>Three Commitments We Never Compromise On.</h2>
          <p className="section-lede">
            In an industry flooded with industrial pre-mixes, artificial concentrates, and synthetic foaming agents, we built Scoopful around strict artisanal culinary principles.
          </p>
        </div>

        <div className="diff-grid">
          {/* Commitment 1 */}
          <div className="diff-card">
            <div className="diff-number">01</div>
            <h3>Real Ingredients, Zero Flavour Shortcuts</h3>
            <p>
              We source single-origin Van Houten Dutch cocoa, real Ratnagiri Alphonso mango pulp, and genuine in-house roasted Iranian pistachios. If a flavour is called Strawberry or Sitaphal, it contains real fruit flesh, not artificial laboratory aroma chemicals.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: 'var(--color-mauve)', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>Certified 100% Preservative Free</span>
            </div>
          </div>

          {/* Commitment 2 */}
          <div className="diff-card">
            <div className="diff-number">02</div>
            <h3>Micro-Batches with In-Kitchen Supervision</h3>
            <p>
              Every single churn is produced in small micro-batches of under 50 litres to ensure immaculate overrun control and silky ice crystal structure. A dedicated Scoopful production lead is physically present on every single run before packaging.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: 'var(--color-mauve)', fontWeight: 600 }}>
              <Flame size={16} />
              <span>Proprietary Churn Curves</span>
            </div>
          </div>

          {/* Commitment 3 */}
          <div className="diff-card">
            <div className="diff-number">03</div>
            <h3>Weighed to Exactly 80 Grams, Not Guessed</h3>
            <p>
              Standard parlours scoop erratically between 55g and 90g depending on who is serving. At Scoopful, every counter is equipped with precision digital scales. Every single scoop served is calibrated to exactly 80 grams so the density is always uniform.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: 'var(--color-mauve)', fontWeight: 600 }}>
              <Scale size={16} />
              <span>Calibrated Counter Scales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
