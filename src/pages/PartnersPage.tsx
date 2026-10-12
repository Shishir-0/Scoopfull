import React, { useState } from 'react';
import { PartnerProgrammes } from '../components/partners/PartnerProgrammes';
import { QualificationWizard } from '../components/partners/QualificationWizard';
import { LeadProgramme } from '../types/lead';
import { Briefcase, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface PartnersPageProps {
  onNavigateToDashboard: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigateToDashboard }) => {
  const [selectedProgramme, setSelectedProgramme] = useState<LeadProgramme>('franchise_foco');

  const handleSelectProgramme = (programme: LeadProgramme) => {
    setSelectedProgramme(programme);
    document.getElementById('qualification-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main role="main">
      {/* Hub Hero */}
      <section className="section" style={{ backgroundColor: '#FAF3E8', borderBottom: '1px solid var(--color-line)', paddingTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="badge badge-plum">Commercial Acquisition Hub</span>
              <span className="badge badge-gold">South India & Maharashtra</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', marginBottom: '16px', lineHeight: 1.15 }}>
              Scale with Scoopful: Structured Partnerships.
            </h1>

            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--color-soft)', lineHeight: 1.6, marginBottom: '28px' }}>
              We partner with high-calibre retail franchisees, visionary café operators, regional dairy distributors, and fine-dining HORECA accounts. Select your commercial pathway below to start the structured qualification journey.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => document.getElementById('programmes')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-gold btn-lg"
              >
                <span>View All 5 Programmes</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onNavigateToDashboard}
                className="btn btn-outline btn-lg"
              >
                <Briefcase size={16} />
                <span>Partner Lead Dashboard Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Programmes Grid */}
      <PartnerProgrammes onSelectProgramme={handleSelectProgramme} />

      {/* Structured Qualification Wizard */}
      <QualificationWizard
        initialProgramme={selectedProgramme}
        sourcePage="partner_hub"
        onNavigateToDashboard={onNavigateToDashboard}
      />

      {/* Direct Contact Bar */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-line)', padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Prefer Direct Executive Communication?</h3>
              <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', margin: 0 }}>
                For large multi-unit master franchises, corporate gifting contracts above ₹1 Lakh, or OEM formulation:
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="tel:+919019414130" className="btn btn-outline btn-sm">
                <Phone size={14} />
                <span>+91 90194 14130 (Revanth)</span>
              </a>

              <a href="mailto:scoopsnswirlsicecream@gmail.com" className="btn btn-outline btn-sm">
                <Mail size={14} />
                <span>scoopsnswirlsicecream@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
