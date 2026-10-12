import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'How do I decide between the FOCO and FOFO model?',
    a: 'FOCO is engineered for investors with capital who want a passive, hands-off income stream tied to top-line gross sales without managing staff, leases, or suppliers. FOFO is designed for hands-on entrepreneurs or experienced restaurateurs who wish to operate the store daily and keep 100% of outlet operating profits.'
  },
  {
    q: 'In FOCO, do I pay store rent or staff salaries?',
    a: 'No. Scoopful directly pays store rent, team salaries, electricity, and daily consumables. Your monthly investor payout is calculated strictly as a percentage of gross net sales (5% in months 1–3, then 12% from month 4 onwards), not on net profit. Operating losses are carried entirely by Scoopful.'
  },
  {
    q: 'Are revenue or payback returns guaranteed?',
    a: 'No. Authentic F&B success depends on footfall, customer experience, and prime location. Scoopful does not make artificial return guarantees. We present conservative and realistic financial projections based on average ticket sizes (₹140–₹180) in our downloadable prospectuses so you can make an informed commercial decision.'
  },
  {
    q: 'What brand fees and royalties apply to FOFO parlours?',
    a: 'FOFO partners pay a central 6% brand royalty plus a 2% central marketing fund on monthly net sales (dine-in, takeaway, and delivery platforms before GST). Scoopful does not charge hidden markups on raw materials.'
  },
  {
    q: 'Can I add outside items or change flavour pricing at my parlour?',
    a: 'No. Scoopful centrally supplies all ice creams, toppings, and packaging, and sets uniform customer pricing across all outlets. This ensures brand integrity, quality compliance, and consistent customer expectations.'
  },
  {
    q: 'What is the contract term and how does exit work?',
    a: 'The standard agreement is 5 years, renewable upon mutual consent. FOFO carries a 3-year initial lock-in; at exit, Scoopful unbrands the parlour and all equipment remains yours. Under FOCO, investors can transfer their slot with Scoopful holding the first right of refusal, or exit at depreciated asset value with the lease deposit refunded.'
  }
];

export const FranchiseFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" id="faq" style={{ backgroundColor: '#FAF6EF', borderTop: '1px solid var(--color-line)' }}>
      <div className="container-editorial">
        <div className="section-head" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="section-eyebrow">
            <HelpCircle size={14} />
            <span>Clear Commercial Answers</span>
          </span>
          <h2>Questions Prospective Partners Ask First.</h2>
          <p className="section-lede">
            Transparent answers on investment terms, operating boundaries, and commercial expectations.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-line)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', color: 'var(--color-plum)', fontWeight: 600 }}>
                    {faq.q}
                  </span>
                  <span style={{ color: 'var(--color-mauve)', flexShrink: 0 }}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 20px', color: 'var(--color-soft)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
