import React from 'react';
import { Store, Coffee, Truck, UtensilsCrossed, Package, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { LeadProgramme } from '../../types/lead';

interface PartnerProgrammesProps {
  onSelectProgramme: (programme: LeadProgramme) => void;
}

export const PartnerProgrammes: React.FC<PartnerProgrammesProps> = ({ onSelectProgramme }) => {
  return (
    <section className="section" id="programmes" aria-label="Commercial Programmes">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <Store size={14} />
            <span>Structured Business Pathways</span>
          </span>
          <h2>A Partnership Model Built for Your Scale.</h2>
          <p className="section-lede">
            From zero-capital café freezer placements to multi-unit franchise parlours and exclusive regional territory distribution.
          </p>
        </div>

        <div className="programmes-grid">
          {/* Programme 1: Franchise Parlours */}
          <div className="programme-card">
            <div className="programme-card-icon">
              <Store size={24} />
            </div>
            <span className="badge badge-plum" style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
              Retail Parlours
            </span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Franchise Parlour (FOCO & FOFO)</h3>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', lineHeight: '1.5', marginBottom: '16px', flexGrow: 1 }}>
              Invest in a proven brand with complete operational support or operate your own parlour with our systems. Founding slots under ₹10 Lakhs.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-cocoa)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Founding models from ₹7.6L all-in</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>FOCO 12% sales share / FOFO 100% profit</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>2 km protected geographic exclusivity</span>
              </li>
            </ul>
            <button
              onClick={() => onSelectProgramme('franchise_foco')}
              className="btn btn-gold btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Apply for Franchise</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Programme 2: Cafe Freezer Revenue Share */}
          <div className="programme-card">
            <div className="programme-card-icon" style={{ backgroundColor: 'var(--color-cream)', color: 'var(--color-gold-ink)' }}>
              <Coffee size={24} />
            </div>
            <span className="badge badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
              Zero Capital Investment
            </span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Café Freezer Programme</h3>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', lineHeight: '1.5', marginBottom: '16px', flexGrow: 1 }}>
              We install a branded display freezer in your café, supply all stock, and split retail sales. You ring up sales on your POS with zero inventory risk.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-cocoa)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Branded freezer delivered & maintained by us</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Weekly 7-day NEFT settlement with SKU reports</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>30-day exit clause, no lock-in</span>
              </li>
            </ul>
            <button
              onClick={() => onSelectProgramme('cafe_freezer')}
              className="btn btn-outline btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Partner Your Café</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Programme 3: Territory Distribution */}
          <div className="programme-card">
            <div className="programme-card-icon">
              <Truck size={24} />
            </div>
            <span className="badge badge-plum" style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
              Up to 50% Margins
            </span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Territory Distributor Network</h3>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', lineHeight: '1.5', marginBottom: '16px', flexGrow: 1 }}>
              Own exclusive distribution rights in your district or city. 30% margin on standard distributor volumes, scaling to 50% for Superstockers.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-cocoa)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Territory agreements starting from ₹50,000</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Cold-chain SOPs & logistics training</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Co-marketing and localized collateral</span>
              </li>
            </ul>
            <button
              onClick={() => onSelectProgramme('distributor')}
              className="btn btn-outline btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Apply as Distributor</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Programme 4: HORECA & Bulk Supply */}
          <div className="programme-card">
            <div className="programme-card-icon">
              <UtensilsCrossed size={24} />
            </div>
            <span className="badge badge-plum" style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
              Hospitality Supply
            </span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>HORECA & Kitchen Formats</h3>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', lineHeight: '1.5', marginBottom: '16px', flexGrow: 1 }}>
              Supplying fine dining restaurants, premium hotels, and banquet caterers with 4-litre kitchen-ready formats across 6 regular and 5 sugar-free SKUs.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-cocoa)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Volume tiered pricing & scheduled restock</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Sugar-free diabetic formulations available</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>No minimum lock-in on trial shipments</span>
              </li>
            </ul>
            <button
              onClick={() => onSelectProgramme('horeca_bulk')}
              className="btn btn-outline btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Enquire for HORECA</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Programme 5: White Label & Custom Formulation */}
          <div className="programme-card">
            <div className="programme-card-icon">
              <Package size={24} />
            </div>
            <span className="badge badge-plum" style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
              OEM & Private Label
            </span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>White-Label Manufacturing</h3>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', lineHeight: '1.5', marginBottom: '16px', flexGrow: 1 }}>
              Your brand name on our artisanal ice cream recipes. Custom flavour formulation, co-packing, and nutritional profiling starting from 50L MOQ.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-cocoa)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Concept-to-sample turnaround in 2–4 weeks</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Mutual Non-Disclosure Agreement (NDA)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="var(--color-success)" />
                <span>Custom dietary variants (vegan, stevia-sweetened)</span>
              </li>
            </ul>
            <button
              onClick={() => onSelectProgramme('white_label')}
              className="btn btn-outline btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Discuss White Label</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
