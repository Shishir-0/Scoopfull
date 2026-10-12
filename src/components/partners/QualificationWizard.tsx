import React, { useState } from 'react';
import { LeadProgramme, InvestmentRange, QualificationFormData, Lead } from '../../types/lead';
import { LeadStorageService } from '../../services/leadStorageService';
import { WhatsAppService } from '../../services/whatsappService';
import { CheckCircle2, ArrowRight, ArrowLeft, MessageSquare, Briefcase, AlertCircle, Sparkles } from 'lucide-react';

interface QualificationWizardProps {
  initialProgramme?: LeadProgramme;
  sourcePage?: 'partner_hub' | 'franchise_page';
  onNavigateToDashboard?: () => void;
}

export const QualificationWizard: React.FC<QualificationWizardProps> = ({
  initialProgramme = 'franchise_foco',
  sourcePage = 'partner_hub',
  onNavigateToDashboard
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdLead, setCreatedLead] = useState<Lead | null>(null);

  // Form State
  const [formData, setFormData] = useState<QualificationFormData>({
    programme: initialProgramme,
    fullName: '',
    phone: '',
    email: '',
    city: '',
    area: '',
    investmentRange: '10l_to_25l',
    siteStatus: 'scouting',
    siteSqFt: '',
    timeline: 'within_30_days',
    notes: ''
  });

  // Validation Error State
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync initial programme if prop changes
  React.useEffect(() => {
    if (initialProgramme) {
      setFormData(prev => ({ ...prev, programme: initialProgramme }));
    }
  }, [initialProgramme]);

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your target city.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: document.getElementById('qualification-form')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Guaranteed persistence to resilient LeadStorageService
      const newLead = LeadStorageService.createLead(formData, sourcePage);
      setCreatedLead(newLead);
      setIsSubmitting(false);
    } catch (err) {
      console.error('Error creating lead:', err);
      setIsSubmitting(false);
      setErrors({ form: 'An unexpected error occurred. Please try again.' });
    }
  };

  if (createdLead) {
    const whatsappUrl = WhatsAppService.getPartnerQualificationUrl(createdLead);

    return (
      <section id="qualification-form" className="section" style={{ backgroundColor: '#FAF6EF', borderTop: '1px solid var(--color-line)' }}>
        <div className="container">
          <div className="wizard-card" style={{ textAlign: 'center', maxWidth: '680px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-success-bg)', color: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle2 size={36} />
            </div>

            <span className="badge badge-success" style={{ marginBottom: '12px' }}>
              Enquiry Successfully Captured & Qualified
            </span>

            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
              Thank You, {createdLead.fullName.split(' ')[0]}!
            </h2>

            <p style={{ color: 'var(--color-soft)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Your partnership qualification has been assigned Lead Reference ID <b style={{ color: 'var(--color-plum)' }}>{createdLead.id}</b> and safely stored in Scoopful’s lead pipeline.
            </p>

            <div style={{ backgroundColor: '#FAF3E8', borderRadius: 'var(--radius-md)', padding: '20px', border: '1px solid var(--color-line)', textAlign: 'left', marginBottom: '28px', fontSize: '0.875rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>LEAD REF</span>
                  <b style={{ color: 'var(--color-plum)', fontFamily: 'monospace' }}>{createdLead.id}</b>
                </div>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>PROGRAMME</span>
                  <b>{createdLead.programme.replace(/_/g, ' ').toUpperCase()}</b>
                </div>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>CITY</span>
                  <b>{createdLead.city} {createdLead.area ? `(${createdLead.area})` : ''}</b>
                </div>
                <div>
                  <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.75rem' }}>STATUS</span>
                  <b style={{ color: 'var(--color-success)' }}>NEW / IN QUEUE</b>
                </div>
              </div>
            </div>

            {/* Smart Next Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-lg"
                style={{ width: '100%', justifyContent: 'center', gap: '10px' }}
              >
                <MessageSquare size={18} />
                <span>Continue on WhatsApp with Pre-filled Lead ID</span>
              </a>

              {onNavigateToDashboard && (
                <button
                  onClick={onNavigateToDashboard}
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
                >
                  <Briefcase size={16} />
                  <span>Inspect This Lead in the Partner Management Dashboard</span>
                </button>
              )}
            </div>

            <p style={{ marginTop: '20px', fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
              A confirmation email will also be transmitted to {createdLead.email}. Founder Revanth Dinesh typically reviews inquiries within 24 business hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="qualification-form" className="section" style={{ backgroundColor: '#FAF6EF', borderTop: '1px solid var(--color-line)' }}>
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="section-eyebrow">
            <Sparkles size={14} />
            <span>Structured Qualification</span>
          </span>
          <h2>Express Your Commercial Interest.</h2>
          <p className="section-lede">
            Step 1 captures your identity and target geography. Step 2 qualifies your commercial timeline so we can prepare relevant unit economics before our discovery call.
          </p>
        </div>

        <div className="wizard-card">
          {/* Progress Indicator */}
          <div className="wizard-steps-indicator" aria-label="Form Progress">
            <div className={`wizard-step-node ${step >= 1 ? 'active' : ''}`}>
              <div className="wizard-step-num">1</div>
              <span>Identity & Programme</span>
            </div>
            <div style={{ height: '2px', backgroundColor: step === 2 ? 'var(--color-plum)' : 'var(--color-line)', flexGrow: 1, margin: '0 16px' }} />
            <div className={`wizard-step-node ${step === 2 ? 'active' : ''}`}>
              <div className="wizard-step-num">2</div>
              <span>Commercial Readiness</span>
            </div>
          </div>

          {errors.form && (
            <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-danger-bg)', color: 'var(--color-danger)', borderRadius: 'var(--radius-sm)', marginBottom: '20px', fontSize: '0.875rem' }}>
              {errors.form}
            </div>
          )}

          {step === 1 ? (
            /* STEP 1: IDENTITY & PROGRAMME */
            <form onSubmit={handleNext} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="programme-select">Partnership Programme Interested In *</label>
                <select
                  id="programme-select"
                  className="form-select"
                  value={formData.programme}
                  onChange={(e) => setFormData({ ...formData, programme: e.target.value as LeadProgramme })}
                >
                  <option value="franchise_foco">Franchise: FOCO Model (You invest, Scoopful operates)</option>
                  <option value="franchise_fofo">Franchise: FOFO Model (You operate with our system)</option>
                  <option value="founding_partner">Founding Partner Programme (All-in &lt;₹10 Lakhs, 12 slots)</option>
                  <option value="cafe_freezer">Café Freezer Programme (Zero upfront investment, revenue share)</option>
                  <option value="distributor">Territory Distribution (Exclusive zone rights, up to 50% margin)</option>
                  <option value="horeca_bulk">HORECA & Bulk Supply (4L foodservice tubs)</option>
                  <option value="white_label">White-Label OEM Manufacturing (Custom formulations from 50L)</option>
                </select>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                    placeholder="e.g. Siddharth Rao"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                  {errors.fullName && <div className="form-error" role="alert"><AlertCircle size={12} /><span>{errors.fullName}</span></div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Mobile Phone (with WhatsApp) *</label>
                  <input
                    id="phone"
                    type="tel"
                    className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    placeholder="+91 98450 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  {errors.phone && <div className="form-error" role="alert"><AlertCircle size={12} /><span>{errors.phone}</span></div>}
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Business or Personal Email *</label>
                  <input
                    id="email"
                    type="email"
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    placeholder="siddharth@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  {errors.email && <div className="form-error" role="alert"><AlertCircle size={12} /><span>{errors.email}</span></div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="city">Target City / District *</label>
                  <input
                    id="city"
                    type="text"
                    className={`form-input ${errors.city ? 'has-error' : ''}`}
                    placeholder="e.g. Bengaluru, Mysuru, Chennai, Pune"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                  {errors.city && <div className="form-error" role="alert"><AlertCircle size={12} /><span>{errors.city}</span></div>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="area">Preferred Neighbourhood or Area (Optional)</label>
                <input
                  id="area"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Indiranagar 100ft Road, Koramangala 4th Block"
                  value={formData.area || ''}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                <button type="submit" className="btn btn-gold btn-lg">
                  <span>Continue to Step 2: Commercial Readiness</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          ) : (
            /* STEP 2: COMMERCIAL READINESS */
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="investmentRange">Allocated Capital Range *</label>
                  <select
                    id="investmentRange"
                    className="form-select"
                    value={formData.investmentRange}
                    onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value as InvestmentRange })}
                  >
                    <option value="under_10l">Under ₹10 Lakhs (Founding slots / Café / Small distributor)</option>
                    <option value="10l_to_25l">₹10 Lakhs – ₹25 Lakhs (Compact Parlour setup)</option>
                    <option value="25l_to_40l">₹25 Lakhs – ₹40 Lakhs (Signature Parlour / Multi-unit)</option>
                    <option value="above_40l">Above ₹40 Lakhs (Territory Master / City Superstocker)</option>
                    <option value="not_applicable">Not Applicable (Café freezer revenue share / OEM)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="timeline">Expected Launch Timeline *</label>
                  <select
                    id="timeline"
                    className="form-select"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value as any })}
                  >
                    <option value="immediate">Immediate (Ready to sign LOI within 14 days)</option>
                    <option value="within_30_days">Within 30 Days (Evaluating locations)</option>
                    <option value="1_to_3_months">1 to 3 Months (Capital arrangement phase)</option>
                    <option value="exploring">Exploring / Initial Market Research</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="siteStatus">Commercial Site Status *</label>
                  <select
                    id="siteStatus"
                    className="form-select"
                    value={formData.siteStatus}
                    onChange={(e) => setFormData({ ...formData, siteStatus: e.target.value as any })}
                  >
                    <option value="have_site">I already own or lease a retail commercial site</option>
                    <option value="scouting">Actively scouting target properties</option>
                    <option value="need_assistance">Require Scoopful assistance for site scouting</option>
                    <option value="not_applicable">Not Applicable (Café operating / Distribution warehouse)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="siteSqFt">Approximate Carpet Area (if site known)</label>
                  <input
                    id="siteSqFt"
                    type="text"
                    className="form-input"
                    placeholder="e.g. 250 sq ft ground floor, 650 sq ft"
                    value={formData.siteSqFt || ''}
                    onChange={(e) => setFormData({ ...formData, siteSqFt: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="notes">Additional Background or Questions (Optional)</label>
                <textarea
                  id="notes"
                  className="form-textarea"
                  rows={3}
                  placeholder="Share details about your F&B experience, existing business, or specific queries on payback models."
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '28px', flexWrap: 'wrap', gap: '14px' }}>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn btn-outline"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Step 1</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-gold btn-lg"
                >
                  {isSubmitting ? 'Registering Enquiry...' : 'Submit Qualification & Generate Lead ID'}
                  <ArrowRight size={16} />
                </button>
              </div>

              <div style={{ marginTop: '16px', fontSize: '0.8125rem', color: 'var(--color-muted)', textAlign: 'center' }}>
                Submissions are stored securely in Scoopful’s lead repository. We do not sell data to third parties.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
