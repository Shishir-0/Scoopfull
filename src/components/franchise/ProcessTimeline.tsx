import React from 'react';
import { FRANCHISE_PROCESS_STEPS } from '../../data/franchiseData';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="section" id="process" style={{ backgroundColor: '#FAF4EB', borderTop: '1px solid var(--color-line)' }}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <Calendar size={14} />
            <span>Launch Roadmap</span>
          </span>
          <h2>From First Message to Opening Day: 60–90 Days.</h2>
          <p className="section-lede">
            Our structured onboarding playbook ensures your store opens on schedule with fully trained staff, live delivery listings, and cold chain logistics operational from day one.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {FRANCHISE_PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-md)',
                padding: '24px 20px',
                border: '1px solid var(--color-line)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-mauve)' }}>
                  {step.step}
                </span>
                <span className="badge badge-plum" style={{ fontSize: '0.6875rem' }}>
                  {step.duration}
                </span>
              </div>

              <h4 style={{ fontSize: '1.0625rem', marginBottom: '8px', color: 'var(--color-plum)' }}>
                {step.title}
              </h4>

              <p style={{ color: 'var(--color-soft)', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
