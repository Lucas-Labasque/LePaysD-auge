import React from 'react';
import './Groups.css';
import { siteConfig } from '../data/config';

// Reusing hero image for the group section or a new placeholder
const groupImgPath = '/images/salle-panoramique-colombages.jpg';

const Groups = () => {
  return (
    <section className="groups section-padding" id="groupes">
      <div className="container">
        <div className="groups-container">
          <div className="groups-content animate-fade-up">
            <h2 className="section-title text-white">Une salle à l'étage pour vos groupes et réunions</h2>
            <p className="groups-desc text-white-opacity">
              Le restaurant met à disposition une salle à l'étage pour les réunions, séminaires et repas de groupe, de 8 à 16 personnes. La réservation est obligatoire et un menu groupe peut être personnalisé selon vos besoins.
            </p>
            
            <ul className="groups-features">
              <li>8 à 16 personnes</li>
              <li>Matin et/ou après-midi</li>
              <li>Menu groupe personnalisable</li>
              <li>Réservation obligatoire</li>
              <li>Repas sur place</li>
            </ul>

            <div className="groups-actions">
              <a href={`tel:${siteConfig.phoneLink}`} className="btn btn-secondary">
                Appeler le restaurant
              </a>
            </div>
          </div>
          
          <div className="groups-form-wrapper animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="groups-form-card">
              <h3 className="form-title">Organiser un repas de groupe</h3>
              <form className="groups-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Nom / Société</label>
                  <input type="text" id="name" placeholder="Votre nom" required />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input type="tel" id="phone" placeholder="06..." required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Nombre de personnes</label>
                    <select id="guests">
                      <option value="8-10">8 à 10 personnes</option>
                      <option value="11-14">11 à 14 personnes</option>
                      <option value="15-16">15 à 16 personnes</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Date souhaitée</label>
                  <input type="date" id="date" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message (besoins, type d'événement)</label>
                  <textarea id="message" rows="3" placeholder="Précisez votre demande..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Groups;
