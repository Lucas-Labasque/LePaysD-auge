import React from 'react';
import './Storytelling.css';

const storytellingImgPath = '/images/facade-restaurant-le-pays-dauge.webp';

const Storytelling = () => {
  return (
    <section className="storytelling section-padding" id="lieu">
      <div className="container">
        <div className="storytelling-grid">
          <div className="storytelling-image-wrapper animate-fade-up">
            <img
              src={storytellingImgPath}
              alt="Théo, gérant du restaurant"
              className="storytelling-image"
            />
            <div className="storytelling-decoration"></div>
          </div>

          <div className="storytelling-content animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title">Théo, un normand en Sologne</h2>
            <p className="storytelling-text">
              Au Pays d'Auge, on vient pour une cuisine maison, mais aussi pour une ambiance. Théo a imaginé un lieu simple, généreux et vivant, où l'on peut déjeuner, dîner, boire un verre en terrasse ou se retrouver autour d'un événement.
            </p>

            <div className="quote-card">
              <p className="quote-text">« Un peu de Normandie en Sologne. »</p>
            </div>

            <a href="#carte" className="btn btn-outline" style={{ marginTop: '32px' }}>
              Découvrir notre cuisine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
