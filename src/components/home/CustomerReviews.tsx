import React from 'react';
import { REVIEWS, CustomerReview } from '../../data/reviewsData';
import { Star, MessageCircle, ExternalLink } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FAF5ED', borderTop: '1px solid var(--color-line)' }} aria-label="Customer Reviews">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <MessageCircle size={14} />
            <span>Verified Customer Feedback</span>
          </span>
          <h2>4.8 Stars Across 200+ Bengaluru Reviews.</h2>
          <p className="section-lede">
            Real feedback from local food lovers, dessert regulars, and family diners across Rajajinagar, Sahakarnagar, and Sarjapur.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((rev: CustomerReview) => (
            <div key={rev.id} className="review-card">
              <div className="review-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--color-gold)" color="var(--color-gold)" />
                ))}
              </div>

              <blockquote className="review-quote">
                “{rev.quote}”
              </blockquote>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <div>
                  <div className="review-author">{rev.author}</div>
                  <div className="review-meta">{rev.location}</div>
                </div>
                <span className="badge badge-plum" style={{ fontSize: '0.6875rem' }}>
                  {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Third Party Verification Strip */}
        <div style={{ marginTop: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.875rem', color: 'var(--color-soft)' }}>
          <span>Read all verified reviews:</span>
          <a
            href="https://share.google/SEZgqIIKLXwIXUWTM"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600, color: 'var(--color-plum)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Google Reviews (4.8★)</span>
            <ExternalLink size={13} />
          </a>
          <span>·</span>
          <a
            href="https://www.zomato.com/bangalore/scoopful-1-rajajinagar-bangalore"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600, color: 'var(--color-plum)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Zomato</span>
            <ExternalLink size={13} />
          </a>
          <span>·</span>
          <a
            href="https://www.swiggy.com/menu/1052063?source=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600, color: 'var(--color-plum)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Swiggy</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};
