import React from 'react';
import { Clock, Phone } from 'lucide-react';
import { siteConfig } from '../data/config';
import './Hero.css';

// We will use the generated image path here once it's available. For now, a placeholder or the intended path.
const heroBgPath = '/images/grande-salle-lumineuse-colombages.png';

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBgPath})` }}>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <h1 className="hero-title">Le Pays d'Auge, une table chaleureuse au cœur de Vouzeron</h1>
          <p className="hero-subtitle">
            Cuisine maison, produits frais, terrasse, bar et événements — un peu de Normandie en Sologne.
          </p>

          <div className="hero-actions">
            <a href="#reserver" className="btn btn-primary">Réserver une table</a>
            <a href="#carte" className="btn btn-secondary">Voir la carte</a>
          </div>

          <div className="hero-badges">
            <span className="badge">18 Place de l'Église</span>
            <span className="badge">Cuisine maison</span>
            <span className="badge">Terrasse & bar</span>
            <span className="badge">Groupes sur réservation</span>
            <span className="badge">Événements</span>
          </div>
        </div>

        <div className="hero-quick-info animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="quick-info-card">
            <div className="quick-info-item">
              <Clock className="icon" size={20} />
              <div>
                <span className="label">Horaires du jour</span>
                <span className="value">12:00 - 14:00 | 19:00 - 22:00</span>
              </div>
            </div>
            <div className="quick-info-item">
              <Phone className="icon" size={20} />
              <div>
                <span className="label">Réservation</span>
                <a href={`tel:${siteConfig.phoneLink}`} className="value">{siteConfig.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
