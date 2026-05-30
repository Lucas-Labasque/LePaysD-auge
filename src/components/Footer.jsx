import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../data/config';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">{siteConfig.restaurantName}</h2>
          <p className="footer-tagline">Restaurant · Bar · Terrasse à Vouzeron</p>
          <p className="footer-desc">Une table chaleureuse au cœur de Vouzeron, entre cuisine maison, produits frais et esprit normand.</p>
        </div>

        <div className="footer-contact">
          <h3 className="footer-title">Contact & Accès</h3>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} />
              <span>{siteConfig.address}, {siteConfig.zipCode} {siteConfig.city}</span>
            </li>
            <li>
              <Phone size={18} />
              <a href={`tel:${siteConfig.phoneLink}`}>{siteConfig.phone}</a>
            </li>
            <li>
              <Mail size={18} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>

        <div className="footer-nav-col">
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-nav-list">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#carte">La carte</a></li>
            <li><a href="#lieu">Le lieu</a></li>
            <li><a href="#evenements">Événements</a></li>
            <li><a href="#groupes">Groupes</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3 className="footer-title">Suivez-nous</h3>
          <div className="social-links">
            <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {siteConfig.restaurantName}. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#mentions-legales">Mentions légales</a>
            <a href="#confidentialite">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
