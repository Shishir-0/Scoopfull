import React, { useState } from 'react';
import { FLAVOURS, FlavourItem } from '../../data/flavoursData';
import { ShoppingBag, Sparkles, Check } from 'lucide-react';

interface FlavourGalleryProps {
  onSelectFlavourForOrder: (flavourName: string) => void;
}

type FilterCategory = 'all' | 'artisan' | 'indian_heritage' | 'sugar_free' | 'sundaes_jars';

export const FlavourGallery: React.FC<FlavourGalleryProps> = ({ onSelectFlavourForOrder }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredFlavours = activeCategory === 'all'
    ? FLAVOURS
    : FLAVOURS.filter(f => f.category === activeCategory);

  return (
    <section id="flavours" className="section" aria-label="Explore Scoopful Flavours">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <Sparkles size={14} />
            <span>Curated Artisanal Kitchen</span>
          </span>
          <h2>Crafted in Small Batches. Weighed to the Gram.</h2>
          <p className="section-lede">
            Every Scoopful flavour is prepared to our proprietary recipe with a dedicated Scoopful team member supervising every single production churn. No artificial flavor shortcuts, no preservatives, and never frozen weeks in advance.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flavour-filters" role="tablist" aria-label="Flavour Categories">
          <button
            role="tab"
            aria-selected={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            className={`filter-chip ${activeCategory === 'all' ? 'active' : ''}`}
          >
            All Flavours ({FLAVOURS.length})
          </button>
          <button
            role="tab"
            aria-selected={activeCategory === 'artisan'}
            onClick={() => setActiveCategory('artisan')}
            className={`filter-chip ${activeCategory === 'artisan' ? 'active' : ''}`}
          >
            Artisanal Bestsellers
          </button>
          <button
            role="tab"
            aria-selected={activeCategory === 'indian_heritage'}
            onClick={() => setActiveCategory('indian_heritage')}
            className={`filter-chip ${activeCategory === 'indian_heritage' ? 'active' : ''}`}
          >
            Indian Heritage & Regional
          </button>
          <button
            role="tab"
            aria-selected={activeCategory === 'sugar_free'}
            onClick={() => setActiveCategory('sugar_free')}
            className={`filter-chip ${activeCategory === 'sugar_free' ? 'active' : ''}`}
          >
            Sugar-Free (100% Guilt-Free)
          </button>
          <button
            role="tab"
            aria-selected={activeCategory === 'sundaes_jars'}
            onClick={() => setActiveCategory('sundaes_jars')}
            className={`filter-chip ${activeCategory === 'sundaes_jars' ? 'active' : ''}`}
          >
            Sundaes & Takeaway Jars
          </button>
        </div>

        {/* Flavour Grid */}
        <div className="flavours-grid">
          {filteredFlavours.map((flavour: FlavourItem) => (
            <article key={flavour.id} className="flavour-card">
              <div className="flavour-media">
                <img
                  src={flavour.image}
                  alt={`Scoopful ${flavour.name}`}
                  loading="lazy"
                />
                {flavour.isBestseller && (
                  <span
                    className="badge badge-gold"
                    style={{ position: 'absolute', top: '12px', left: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
                  >
                    Bestseller
                  </span>
                )}
              </div>

              <div className="flavour-card-body">
                <h3 className="flavour-card-title">{flavour.name}</h3>
                <div className="flavour-card-tagline">{flavour.tagline}</div>
                <p className="flavour-card-desc">{flavour.description}</p>

                <div className="flavour-ingredients-chips">
                  {flavour.ingredients.map((ing, idx) => (
                    <span key={idx} className="flavour-ing-tag">
                      {ing}
                    </span>
                  ))}
                </div>

                <div className="flavour-card-foot">
                  <span className="flavour-portion">{flavour.portion}</span>
                  <button
                    onClick={() => onSelectFlavourForOrder(flavour.name)}
                    className="btn btn-gold btn-sm"
                    aria-label={`Order ${flavour.name}`}
                  >
                    <ShoppingBag size={14} />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Jars Highlight Box */}
        <div style={{ marginTop: '48px', backgroundColor: '#FAF3E8', borderRadius: 'var(--radius-lg)', padding: '32px', border: '1px solid var(--color-line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="badge badge-plum" style={{ marginBottom: '8px' }}>Home Freezer Format</span>
              <h3 style={{ marginBottom: '6px' }}>Take it Home in an Individual Glass Jar.</h3>
              <p style={{ color: 'var(--color-soft)', margin: 0, maxWidth: '640px' }}>
                Available in 200ml sealed glass jars: Cookies N Cream with double Oreo crumble, Ratnagiri Alphonso Mango, and Choco Roasted Almond. Ready for doorstep delivery.
              </p>
            </div>
            <button
              onClick={() => onSelectFlavourForOrder('Takeaway Jars Assortment')}
              className="btn btn-plum"
            >
              Order Jars Box
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
