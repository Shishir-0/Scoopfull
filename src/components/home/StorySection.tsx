import React from 'react';
import { Heart, Compass, CheckCircle2 } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="section" aria-label="Our Origin Story">
      <div className="container">
        <div className="story-wrapper">
          <div className="story-grid">
            {/* Story Editorial */}
            <div>
              <span className="section-eyebrow">
                <Compass size={14} />
                <span>Our Heritage & Journey</span>
              </span>
              <h2>Bootstrapped from Savings. Perfected Through Craft.</h2>
              <p style={{ color: 'var(--color-soft)', fontSize: '1.0625rem', lineHeight: '1.6', marginBottom: '24px' }}>
                Scoopful didn’t start in a boardroom or with venture funding. Founder Revanth Dinesh bootstrapped the entire enterprise from personal savings with a solitary obsession: why does even expensive commercial ice cream in India taste like sweetened frozen oil?
              </p>
              <p style={{ color: 'var(--color-soft)', fontSize: '1.0625rem', lineHeight: '1.6', marginBottom: '32px' }}>
                Months went into developing recipes, calibrating dairy butterfat percentages, and testing cold-chain stability before the first scoop was ever served to the public. When Scoopful launched in Bengaluru on 2 March 2025, the initial production batch completely sold out within seven days.
              </p>

              {/* ScoopfulCares Callout */}
              <div id="cares" style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-md)', padding: '24px', border: '1px solid var(--color-line)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-mauve)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '6px' }}>
                  <Heart size={16} fill="var(--color-mauve)" />
                  <span>ScoopfulCares Initiative</span>
                </div>
                <h4 style={{ marginBottom: '6px' }}>Sharing Premium Joy with Robin Hood Army</h4>
                <p style={{ color: 'var(--color-soft)', fontSize: '0.875rem', margin: 0 }}>
                  We regularly partner with Robin Hood Army volunteers across Bengaluru on Children’s Day and brand milestones, bringing real handcrafted ice cream to orphanages, hospital communities, and underserved schools.
                </p>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="story-timeline">
              <div className="timeline-point">
                <div className="timeline-tag">Phase 1 · Foundation</div>
                <h4 className="timeline-title">A Bold Idea Takes Root</h4>
                <p className="timeline-desc">
                  Revanth invested personal savings into commercial gelato churns and spent 8 months sourcing real Alphonso pulp and Van Houten cocoa. Zero flavour shortcuts from day zero.
                </p>
              </div>

              <div className="timeline-point">
                <div className="timeline-tag">Phase 2 · 2 March 2025</div>
                <h4 className="timeline-title">Official Bengaluru Launch</h4>
                <p className="timeline-desc">
                  Doors opened to immediate acclaim. Word of mouth across Bengaluru food communities resulted in completely sold-out inventory within the first 7 days.
                </p>
              </div>

              <div className="timeline-point">
                <div className="timeline-tag">Phase 3 · Resilience</div>
                <h4 className="timeline-title">Mastering the Cold Chain</h4>
                <p className="timeline-desc">
                  Overcoming summer grid fluctuations by engineering dedicated refrigerated delivery indents and insulated temperature-locked packaging for doorstep delivery.
                </p>
              </div>

              <div className="timeline-point">
                <div className="timeline-tag">Phase 4 · Today & Beyond</div>
                <h4 className="timeline-title">4.8 Stars and Strategic Scale</h4>
                <p className="timeline-desc">
                  Over 200+ verified 5-star Google reviews, three operating Bengaluru outlets, and opening structured franchise opportunities across South India, Pune, and Mumbai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
