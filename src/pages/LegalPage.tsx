import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, FileText } from 'lucide-react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
  onBackToHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy', onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <main className="section" style={{ backgroundColor: 'var(--color-vanilla)', minHeight: '80vh' }}>
      <div className="container-editorial">
        <button
          onClick={onBackToHome}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '24px', paddingLeft: 0, color: 'var(--color-mauve)' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Scoopful Home</span>
        </button>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`btn ${activeTab === 'privacy' ? 'btn-plum' : 'btn-outline'} btn-sm`}
          >
            <ShieldCheck size={14} />
            <span>Privacy Policy</span>
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`btn ${activeTab === 'terms' ? 'btn-plum' : 'btn-outline'} btn-sm`}
          >
            <FileText size={14} />
            <span>Terms & Conditions</span>
          </button>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: 'clamp(24px, 5vw, 44px)', border: '1px solid var(--color-line)', boxShadow: 'var(--shadow-sm)' }}>
          {activeTab === 'privacy' ? (
            <article>
              <span className="badge badge-plum" style={{ marginBottom: '12px' }}>Last Updated: September 2026</span>
              <h1 style={{ fontSize: '2.25rem', marginBottom: '20px' }}>Privacy Policy</h1>
              
              <p style={{ color: 'var(--color-soft)', marginBottom: '24px' }}>
                Scoopful ("we", "us", "our") is operated by <b>Scoops N Swirls Ice Cream LLP</b>, based in Bengaluru, India. This document explains what information we collect through www.scoopful.in, why, and what choices you have.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '8px' }}>1. What We Collect</h3>
              <p style={{ color: 'var(--color-soft)' }}>
                We keep data collection deliberately minimal:
              </p>
              <ul style={{ paddingLeft: '24px', color: 'var(--color-soft)', marginBottom: '16px' }}>
                <li><b>Contact and qualification form submissions:</b> Your name, email, phone number, city, and optional commercial background, only if you choose to submit an inquiry through this site.</li>
                <li><b>WhatsApp, phone, or email inquiries:</b> Direct messages sent to us are subject to WhatsApp’s and your email provider’s own privacy terms.</li>
                <li><b>Basic site analytics:</b> Page views and usage patterns to ensure responsive performance and usability.</li>
              </ul>
              <p style={{ color: 'var(--color-soft)' }}>
                We do not collect customer credit card or payment information on this site. Consumer orders are fulfilled through WhatsApp, Swiggy, or Zomato, each governed by that respective platform’s privacy policy.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '8px' }}>2. How We Use Information</h3>
              <ul style={{ paddingLeft: '24px', color: 'var(--color-soft)', marginBottom: '16px' }}>
                <li>To respond promptly to retail orders, franchise evaluations, or commercial partnership inquiries.</li>
                <li>To understand which flavours and parlour locations communities desire most.</li>
                <li><b>We never sell or rent your personal information to third parties.</b></li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '8px' }}>3. Contact & Rights</h3>
              <p style={{ color: 'var(--color-soft)' }}>
                You may request a copy of the information we hold about you or request deletion by writing to <a href="mailto:scoopsnswirlsicecream@gmail.com" style={{ color: 'var(--color-mauve)', fontWeight: 600 }}>scoopsnswirlsicecream@gmail.com</a> or calling <a href="tel:+919019414130" style={{ color: 'var(--color-mauve)', fontWeight: 600 }}>+91 90194 14130</a>.
              </p>
            </article>
          ) : (
            <article>
              <span className="badge badge-plum" style={{ marginBottom: '12px' }}>Last Updated: September 2026</span>
              <h1 style={{ fontSize: '2.25rem', marginBottom: '20px' }}>Terms & Conditions</h1>

              <p style={{ color: 'var(--color-soft)', marginBottom: '24px' }}>
                These terms govern your use of www.scoopful.in, operated by <b>Scoops N Swirls Ice Cream LLP</b> ("Scoopful", "we", "us"). By using this site, you agree to them.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '8px' }}>1. Orders & Deliveries</h3>
              <p style={{ color: 'var(--color-soft)' }}>
                Orders placed via WhatsApp, Swiggy, or Zomato are subject to that platform’s ordering, payment, and delivery policies. We reserve the right to decline or cancel an order if an item is out of stock or if refrigerated cold-chain delivery is infeasible for your delivery radius.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '8px' }}>2. Pricing & Commercial Indicators</h3>
              <p style={{ color: 'var(--color-soft)' }}>
                Prices shown across our channels are in Indian Rupees (₹). Details on this site regarding the Café Programme, distributor margins, franchise terms, HORECA supply, and white-label manufacturing are indicative and commercial in nature — not a binding offer. Final binding terms are executed in a written agreement between Scoopful and the partner.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '8px' }}>3. Food Safety & Allergens</h3>
              <p style={{ color: 'var(--color-soft)' }}>
                Our artisanal ice creams are churned in a kitchen facility that handles nuts (pistachios, almonds, cashews), dairy, and gluten. If you have an acute food allergy, please consult with our team directly before placing an order.
              </p>

              <h3 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '8px' }}>4. Intellectual Property & Governing Law</h3>
              <p style={{ color: 'var(--color-soft)' }}>
                The Scoopful trademark, recipes, flavour names, and visual designs belong exclusively to Scoops N Swirls Ice Cream LLP. These terms are governed by the laws of India, under the jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </article>
          )}
        </div>
      </div>
    </main>
  );
};
