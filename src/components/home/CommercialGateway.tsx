import React from 'react';
import { Store, Coffee, Truck, ArrowRight, ShieldCheck } from 'lucide-react';

interface CommercialGatewayProps {
  onNavigateToFranchise: () => void;
  onNavigateToPartners: () => void;
}

export const CommercialGateway: React.FC<CommercialGatewayProps> = ({
  onNavigateToFranchise,
  onNavigateToPartners
}) => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-vanilla)', borderTop: '1px solid var(--color-line)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '3rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="section-eyebrow">
              <Store size={14} />
              <span>Commercial & Expansion Gateways</span>
            </span>
            <h2>Grow with Scoopful Across South India & Maharashtra.</h2>
            <p className="section-lede">
              Whether you are an HNI seeking a hands-off FOCO parlour investment, an entrepreneur opening your own parlour, or a café owner wanting a zero-investment branded freezer.
            </p>
          </div>

          <button onClick={onNavigateToPartners} className="btn btn-plum">
            <span>Explore All 5 Programmes</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {/* Gateway 1: Franchise */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '32px 24px', border: '1px solid var(--color-line)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--color-lilac)', color: 'var(--color-plum)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Store size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Franchise Parlours</h3>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', lineHeight: '1.5', marginBottom: '20px', flexGrow: 1 }}>
              Two ways to partner: FOCO (you invest, Scoopful operates) or FOFO (you run it with our full system). Founding Partner Programme all-in under ₹10 Lakhs.
            </p>
            <button
              onClick={onNavigateToFranchise}
              className="btn btn-outline btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>See Franchise Models</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Gateway 2: Cafe Programme */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '32px 24px', border: '1px solid var(--color-line)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--color-cream)', color: 'var(--color-gold-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Coffee size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Café Freezer Placement</h3>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', lineHeight: '1.5', marginBottom: '20px', flexGrow: 1 }}>
              Zero upfront investment. We install and maintain a branded Scoopful display freezer in your café with full inventory and settle net revenue every 7 days via NEFT.
            </p>
            <button
              onClick={onNavigateToPartners}
              className="btn btn-outline btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Café Programme Details</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Gateway 3: Distribution */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '32px 24px', border: '1px solid var(--color-line)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--color-lilac)', color: 'var(--color-plum)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Truck size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Territory Distribution</h3>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', lineHeight: '1.5', marginBottom: '20px', flexGrow: 1 }}>
              Exclusive territory rights starting from ₹50,000. Up to 30% margin for standard distributors and up to 50% for high-volume Superstockers.
            </p>
            <button
              onClick={onNavigateToPartners}
              className="btn btn-outline btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Apply for Distribution</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
