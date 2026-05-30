import React from 'react';
import { ChefHat, Sun, Wine, Users, CalendarHeart } from 'lucide-react';
import './FeaturesBar.css';

const FeaturesBar = () => {
  const features = [
    { icon: <ChefHat size={32} strokeWidth={1.5} />, text: 'Produits frais & maison' },
    { icon: <Sun size={32} strokeWidth={1.5} />, text: 'Terrasse conviviale' },
    { icon: <Wine size={32} strokeWidth={1.5} />, text: 'Bar ouvert' },
    { icon: <Users size={32} strokeWidth={1.5} />, text: 'Salle groupe 8 à 16 pers.' },
    { icon: <CalendarHeart size={32} strokeWidth={1.5} />, text: 'Événements réguliers' },
  ];

  return (
    <section className="features-bar">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-up" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <p className="feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
