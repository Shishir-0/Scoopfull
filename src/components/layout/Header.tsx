import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Briefcase, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenOrderModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <>
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            className="header-logo-link"
            aria-label="Scoopful — Back to Homepage"
          >
            <img
              src="/img/scoopful-logo.png"
              alt="Scoopful Handcrafted Ice Cream"
              className="header-logo-img"
              width="110"
              height="40"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
              }}
              className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
            >
              Home
            </a>
            <a
              href="/#flavours"
              onClick={(e) => {
                e.preventDefault();
                if (currentPath !== '/') {
                  onNavigate('/');
                  setTimeout(() => {
                    document.getElementById('flavours')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('flavours')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="nav-link"
            >
              Flavours
            </a>
            <a
              href="/#story"
              onClick={(e) => {
                e.preventDefault();
                if (currentPath !== '/') {
                  onNavigate('/');
                  setTimeout(() => {
                    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="nav-link"
            >
              Our Story
            </a>
            <a
              href="/#outlets"
              onClick={(e) => {
                e.preventDefault();
                if (currentPath !== '/') {
                  onNavigate('/');
                  setTimeout(() => {
                    document.getElementById('outlets')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('outlets')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="nav-link"
            >
              Outlets
            </a>
            <a
              href="/franchise"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/franchise');
              }}
              className={`nav-link ${currentPath === '/franchise' ? 'active' : ''}`}
            >
              Franchise
            </a>
            <a
              href="/partners"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/partners');
              }}
              className={`nav-link ${currentPath === '/partners' ? 'active' : ''}`}
            >
              Partner Hub
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <button
              onClick={() => handleLinkClick('/partner-dashboard')}
              className="btn btn-outline btn-sm"
              style={{ display: currentPath === '/partner-dashboard' ? 'none' : 'inline-flex' }}
              title="Open Concept Partner CRM & Lead Management Portal"
            >
              <Briefcase size={14} />
              <span>Partner Portal</span>
            </button>

            <button
              onClick={onOpenOrderModal}
              className="btn btn-gold btn-sm"
              aria-label="Order Ice Cream in Bengaluru"
            >
              <ShoppingBag size={15} />
              <span>Order Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img
              src="/img/scoopful-logo.png"
              alt="Scoopful"
              width="100"
              height="36"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-plum)' }}
              aria-label="Close Navigation"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-drawer-links">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
              }}
              className="mobile-nav-item"
            >
              Home
            </a>
            <a
              href="/#flavours"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
                setTimeout(() => document.getElementById('flavours')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="mobile-nav-item"
            >
              Flavours (25+ SKUs)
            </a>
            <a
              href="/#story"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
                setTimeout(() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="mobile-nav-item"
            >
              Our Story & Craft
            </a>
            <a
              href="/#outlets"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
                setTimeout(() => document.getElementById('outlets')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="mobile-nav-item"
            >
              Bengaluru Outlets
            </a>
            <a
              href="/franchise"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/franchise');
              }}
              className="mobile-nav-item"
            >
              Franchise Opportunities
            </a>
            <a
              href="/partners"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/partners');
              }}
              className="mobile-nav-item"
            >
              Partner Hub (All Programmes)
            </a>
            <a
              href="/partner-dashboard"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/partner-dashboard');
              }}
              className="mobile-nav-item"
              style={{ color: 'var(--color-mauve)', fontWeight: 600 }}
            >
              Partner Lead Dashboard (MVP)
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenOrderModal();
            }}
            className="btn btn-gold"
            style={{ width: '100%' }}
          >
            <ShoppingBag size={16} />
            <span>Order Ice Cream</span>
          </button>
        </div>
      </div>
    </>
  );
};
