import React from 'react';
import { OUTLETS, UPCOMING_AREAS, Outlet } from '../../data/outletsData';
import { MapPin, Clock, Star, ExternalLink, Navigation, Compass } from 'lucide-react';
import { WhatsAppService } from '../../services/whatsappService';

interface OutletFinderProps {
  onNavigateToFranchise: () => void;
}

export const OutletFinder: React.FC<OutletFinderProps> = ({ onNavigateToFranchise }) => {
  return (
    <section id="outlets" className="section" aria-label="Visit Scoopful in Bengaluru">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <MapPin size={14} />
            <span>Bengaluru Locations</span>
          </span>
          <h2>Visit Our Parlours in Bengaluru.</h2>
          <p className="section-lede">
            Step into our warm wooden counters for freshly churned scoops, sundaes, and takeaway jars. Open seven days a week across major city hubs.
          </p>
        </div>

        {/* Operating Outlets Grid */}
        <div className="outlets-grid">
          {OUTLETS.map((outlet: Outlet) => (
            <div key={outlet.id} className="outlet-card">
              <div className="outlet-badge">
                <span className="badge badge-plum">{outlet.zone}</span>
              </div>

              <h3 className="outlet-name">{outlet.name}</h3>
              <p className="outlet-address">{outlet.address}</p>

              <div className="outlet-hours">
                <Clock size={14} />
                <span>{outlet.hours}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                  <Star size={12} fill="var(--color-gold-ink)" color="var(--color-gold-ink)" />
                  <span>{outlet.googleRating}★ on Google</span>
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
                  ({outlet.reviewCount}+ reviews)
                </span>
              </div>

              <div className="outlet-links">
                {outlet.googleMapUrl && (
                  <a
                    href={outlet.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ flex: 1, gap: '6px' }}
                  >
                    <Navigation size={13} />
                    <span>Directions</span>
                  </a>
                )}

                {outlet.swiggyUrl && (
                  <a
                    href={outlet.swiggyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm"
                    style={{ flex: 1, gap: '6px' }}
                  >
                    <ExternalLink size={13} />
                    <span>Swiggy</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Expansion Zones Box */}
        <div className="upcoming-box">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-mauve)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '6px' }}>
                <Compass size={16} />
                <span>Expansion Roadmap</span>
              </div>
              <h3 style={{ marginBottom: '8px' }}>Coming to More Neighbourhoods in Bengaluru</h3>
              <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', lineHeight: '1.5' }}>
                We are actively scouting prime retail locations across high-footfall high streets and IT residential corridors in Bengaluru:
              </p>

              <div className="upcoming-tags">
                {UPCOMING_AREAS.map((area: string) => (
                  <span key={area} className="upcoming-tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '240px' }}>
              <a
                href={`https://wa.me/919019414130?text=${encodeURIComponent("Hi Scoopful! I'd love to see a Scoopful outlet in my neighbourhood.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Request Your Area on WhatsApp
              </a>

              <button
                onClick={onNavigateToFranchise}
                className="btn btn-plum btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Open a Parlour Yourself
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
