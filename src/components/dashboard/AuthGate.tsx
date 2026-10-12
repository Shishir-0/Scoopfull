import React, { useState } from 'react';
import { Lock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface AuthGateProps {
  onAuthenticated: () => void;
}

export const AuthGate: React.FC<AuthGateProps> = ({ onAuthenticated }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === 'scoopful2026' || pin.trim().toLowerCase() === 'scoopful' || pin.trim() === '1234') {
      onAuthenticated();
    } else {
      setError(true);
    }
  };

  return (
    <div className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '480px' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '40px 32px', border: '1px solid var(--color-line)', boxShadow: 'var(--shadow-lg)', textAlign: 'center' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-lilac)', color: 'var(--color-plum)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <Lock size={28} />
          </div>

          <span className="badge badge-plum" style={{ marginBottom: '10px' }}>
            Internal Concept MVP
          </span>

          <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Partner Lead Management Portal</h2>
          <p style={{ color: 'var(--color-soft)', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '24px' }}>
            This interface is an operational proof-of-concept developed by ANSTAT demonstrating how Scoopful could qualify, manage, and track commercial inquiries.
          </p>

          <form onSubmit={handleUnlock}>
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label className="form-label" htmlFor="access-pin">Demonstration Access PIN</label>
              <input
                id="access-pin"
                type="password"
                className={`form-input ${error ? 'has-error' : ''}`}
                placeholder="Enter demo PIN (or click button below)"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError(false);
                }}
              />
              {error && (
                <div className="form-error" style={{ marginTop: '6px' }}>
                  Incorrect PIN. Use demo shortcut below.
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-plum" style={{ width: '100%', marginBottom: '14px', justifyContent: 'center' }}>
              <span>Enter Portal</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={onAuthenticated}
              className="btn btn-gold"
              style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
            >
              <Sparkles size={16} />
              <span>1-Click Instant Demo Access (Reviewer Mode)</span>
            </button>
          </form>

          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-line)', fontSize: '0.75rem', color: 'var(--color-muted)' }}>
            PIN hint: <code>scoopful2026</code> · Protected environment
          </div>
        </div>
      </div>
    </div>
  );
};
