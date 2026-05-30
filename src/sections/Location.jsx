import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '../data/config';
import './Location.css';

const Location = () => {
  return (
    <section className="location section-padding" id="infos">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Nous trouver</h2>
        </div>

        <div className="location-grid">
          <div className="location-info animate-fade-up">
            <div className="info-card">
              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <div>
                  <h4 className="info-title">Adresse</h4>
                  <p className="info-text">{siteConfig.address}<br/>{siteConfig.zipCode} {siteConfig.city}</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <h4 className="info-title">Téléphone</h4>
                  <a href={`tel:${siteConfig.phoneLink}`} className="info-text hover-link">{siteConfig.phone}</a>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" size={24} />
                <div>
                  <h4 className="info-title">Email</h4>
                  <a href={`mailto:${siteConfig.email}`} className="info-text hover-link">{siteConfig.email}</a>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" size={24} />
                <div style={{width: '100%'}}>
                  <h4 className="info-title">Horaires du moment</h4>
                  <ul className="hours-list">
                    {siteConfig.openingHours.map((hour, index) => (
                      <li key={index} className="hours-item">
                        <span className="hours-day">{hour.days}</span>
                        <span className="hours-time">{hour.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="location-actions">
              <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{flex: 1}}>
                Itinéraire
              </a>
              <a href="#reserver" className="btn btn-primary" style={{flex: 1}}>
                Réserver
              </a>
            </div>
          </div>

          <div className="location-map animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.8879685165683!2d2.059296311681284!3d47.23824427103853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fa90d565ccaa7b%3A0xe67be846e4b85c13!2s18%20Pl.%20de%20l'Eglise%2C%2018330%20Vouzeron!5e0!3m2!1sfr!2sfr!4v1714151234567!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Google Maps Le Pays d'Auge"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
