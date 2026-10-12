import React from 'react';
import { ShoppingBag, ArrowDown, Star, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
  onExploreFlavours: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal, onExploreFlavours }) => {
  return (
    <section className="hero-section" aria-label="Welcome to Scoopful">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Copy */}
          <div className="hero-copy">
            <div className="hero-badge-strip">
              <span className="badge badge-gold">
                <Sparkles size={12} />
                <span>Handcrafted in Bengaluru</span>
              </span>
              <span className="badge badge-plum">
                <Star size={12} fill="var(--color-gold)" color="var(--color-gold)" />
                <span>4.8 Google Rating (200+ Reviews)</span>
              </span>
            </div>

            <h1 className="hero-title">
              Pure Magic in <span>Every Single Scoop.</span>
            </h1>

            <p className="hero-lede">
              Small-batch artisanal ice cream crafted with real Ratnagiri Alphonso mangoes, Van Houten Dutch cocoa, and roasted pistachios. No artificial shortcuts, zero preservatives, and every scoop is weighed to exactly 80 grams.
            </p>

            <div className="hero-actions">
              <button onClick={onOpenOrderModal} className="btn btn-gold btn-lg">
                <ShoppingBag size={18} />
                <span>Order Now (Bengaluru)</span>
              </button>

              <button onClick={onExploreFlavours} className="btn btn-outline btn-lg">
                <span>Explore Flavours</span>
                <ArrowDown size={16} />
              </button>
            </div>

            {/* Factual Proof Metrics */}
            <div className="hero-metrics">
              <div className="metric-item">
                <b>25+</b>
                <span>Artisanal SKUs & Jars</span>
              </div>
              <div className="metric-item">
                <b>80g</b>
                <span>Calibrated Scoop Weight</span>
              </div>
              <div className="metric-item">
                <b>4.8★</b>
                <span>Google Verified Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual-card">
            <div className="hero-image-wrap">
              <img
                src="/img/hero-honey-sundae.jpg"
                alt="Honey being poured over three scoops of Scoopful ice cream topped with pistachios and dry fruit, in a wooden bowl"
                width="1200"
                height="1440"
                fetchPriority="high"
              />
              <div className="hero-image-caption">
                <div>
                  <div className="caption-title">Royal Honey & Nut Sundae</div>
                  <div className="caption-sub">Three scoops topped with toasted cashews and forest honey</div>
                </div>
                <button
                  onClick={onOpenOrderModal}
                  className="btn btn-gold btn-sm"
                  style={{ padding: '6px 14px', fontSize: '0.8125rem' }}
                >
                  Order This
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
