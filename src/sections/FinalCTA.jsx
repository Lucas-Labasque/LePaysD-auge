import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../data/config';
import './FinalCTA.css';

const finalBgPath = '/images/salle-table-dressee-assiettes-murales.webp';

const FinalCTA = () => {
  return (
    <section className="final-cta" id="reserver">
      <div className="final-cta-bg" style={{ backgroundImage: `url(${finalBgPath})` }}></div>
      <div className="final-cta-overlay"></div>
      
      <div className="container final-cta-container">
        <div className="final-cta-content animate-fade-up">
          <h2 className="final-cta-title">Réservez votre table au Pays d'Auge</h2>
          <p className="final-cta-text">
            Déjeuner, dîner, terrasse, groupe ou soirée : appelez-nous et venez partager un moment simple, frais et chaleureux au cœur de Vouzeron.
          </p>
          
          <div className="final-cta-actions">
            <a href={`tel:${siteConfig.phoneLink}`} className="btn btn-primary btn-large">
              <Phone size={20} /> Appeler maintenant
            </a>
            <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
              <MapPin size={20} /> Obtenir l'itinéraire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
