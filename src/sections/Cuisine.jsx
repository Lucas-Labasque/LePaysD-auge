import React from 'react';
import './Cuisine.css';

// Using a placeholder or the generated image path
const cuisineImages = {
  saison: '/images/entree-betteraves-fromage-blanc.webp',
  menus: '/images/plat-steak-frites-vue-cote.webp',
  suggestions: '/images/dessert-pain-perdu-glace-caramel.webp',
  local: '/images/plat-burger-maison-frites.webp'
};

const Cuisine = () => {
  const cards = [
    { title: 'Carte de saison', img: cuisineImages.saison },
    { title: 'Menus', img: cuisineImages.menus },
    { title: 'Suggestions du moment', img: cuisineImages.suggestions },
    { title: 'Produits locaux', img: cuisineImages.local }
  ];

  return (
    <section className="cuisine section-padding" id="cuisine">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Une cuisine maison, fraîche et généreuse</h2>
          <p className="section-subtitle">
            La carte évolue selon les saisons, les produits disponibles et les envies du moment.
          </p>
        </div>

        <div className="cuisine-grid">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="cuisine-card animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="cuisine-img-wrapper">
                <img src={card.img} alt={card.title} className="cuisine-img" />
              </div>
              <div className="cuisine-card-content">
                <h3 className="cuisine-card-title">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="cuisine-footer">
          <p className="cuisine-text">
            Une cuisine simple, sincère et travaillée, pensée pour les repas du midi, les dîners entre proches et les moments conviviaux.
          </p>
          <a href="#carte" className="btn btn-primary">Découvrir la carte</a>
        </div>
      </div>
    </section>
  );
};

export default Cuisine;
