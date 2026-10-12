import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <img
              src="/img/scoopful-logo.png"
              alt="Scoopful"
              width="120"
              height="44"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.95 }}
            />
            <p>
              Small-batch, handcrafted artisanal ice cream from Bengaluru. Real Alphonso mangoes, Van Houten cocoa, and calibrated 80g scoops.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem' }}>
              <a href="tel:+919019414130" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E2D3E9' }}>
                <Phone size={14} />
                <span>+91 90194 14130 (Revanth Dinesh)</span>
              </a>
              <a href="mailto:scoopsnswirlsicecream@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E2D3E9' }}>
                <Mail size={14} />
                <span>scoopsnswirlsicecream@gmail.com</span>
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C3AFCE' }}>
                <MapPin size={14} />
                <span>Rajajinagar, Bengaluru, Karnataka</span>
              </span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="footer-col-title">Artisanal Menu</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="/#flavours"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                    setTimeout(() => document.getElementById('flavours')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="footer-link"
                >
                  25+ Handcrafted Flavours
                </a>
              </li>
              <li>
                <a
                  href="/#flavours"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                    setTimeout(() => document.getElementById('flavours')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="footer-link"
                >
                  Takeaway Glass Jars
                </a>
              </li>
              <li>
                <a
                  href="/#flavours"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                    setTimeout(() => document.getElementById('flavours')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="footer-link"
                >
                  Sugar-Free Range (Zero Preservatives)
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/scoopfulicecream/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                >
                  <span>Instagram</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Commercial Partners Column */}
          <div>
            <h4 className="footer-col-title">Commercial Hub</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="/franchise"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/franchise');
                  }}
                  className="footer-link"
                >
                  Franchise (FOCO & FOFO)
                </a>
              </li>
              <li>
                <a
                  href="/franchise#founding"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/franchise');
                    setTimeout(() => document.getElementById('founding')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="footer-link"
                >
                  Founding Programme (&lt;₹10 Lakhs)
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/partners');
                  }}
                  className="footer-link"
                >
                  Café Freezer Revenue Share
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/partners');
                  }}
                  className="footer-link"
                >
                  Territory Distribution (Up to 50%)
                </a>
              </li>
              <li>
                <a
                  href="/partner-dashboard"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/partner-dashboard');
                  }}
                  className="footer-link"
                  style={{ color: 'var(--color-gold)', fontWeight: 600 }}
                >
                  Lead Management Portal (MVP)
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="footer-col-title">Company & Trust</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="/#story"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                    setTimeout(() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="footer-link"
                >
                  Our Origin Story
                </a>
              </li>
              <li>
                <a
                  href="/#outlets"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                    setTimeout(() => document.getElementById('outlets')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="footer-link"
                >
                  Bengaluru Outlets
                </a>
              </li>
              <li>
                <a
                  href="/#cares"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                    setTimeout(() => document.getElementById('cares')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="footer-link"
                >
                  ScoopfulCares (Robin Hood Army)
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/privacy-policy');
                  }}
                  className="footer-link"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/terms');
                  }}
                  className="footer-link"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 Scoops N Swirls Ice Cream LLP. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={14} color="var(--color-gold)" />
            <span>Digital Experience & Conversion Architecture Refinement concept by ANSTAT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
