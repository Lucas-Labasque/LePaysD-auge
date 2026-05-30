import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('no-scroll', !isMobileMenuOpen);
  };

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'La carte', href: '#carte' },
    { label: 'Le lieu', href: '#lieu' },
    { label: 'Événements', href: '#evenements' },
    { label: 'Groupes', href: '#groupes' },
    { label: 'Infos', href: '#infos' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <a href="#accueil" className="logo">
          <span className="logo-title">Le Pays d'Auge</span>
          <span className="logo-subtitle">Restaurant · Bar · Terrasse</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-actions">
          <a href="#reserver" className="btn btn-primary btn-sm header-cta">
            Réserver
          </a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="mobile-nav-link" onClick={toggleMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer">
            <a href="tel:+33248514798" className="btn btn-outline" style={{width: '100%'}}>
              <Phone size={18} /> 02 48 51 47 98
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
