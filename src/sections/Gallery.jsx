import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/salle-interieure-tables-dressees.webp', alt: 'La salle de restaurant' },
    { id: 2, src: '/images/cocktail-mojito-terrasse.webp', alt: 'Cocktail en terrasse' },
    { id: 3, src: '/images/plat-steak-frites-salade.webp', alt: 'Notre fameux steak frites' },
    { id: 4, src: '/images/bar-escalier-colimacon-interieur.webp', alt: 'Le bar et son ambiance' },
    { id: 5, src: '/images/table-verres-vin-dresses.webp', alt: 'Une table dressée pour la soirée' },
    { id: 6, src: '/images/salle-table-toile-de-jouy.webp', alt: 'Coin intime avec toile de Jouy' }
  ];

  return (
    <section className="gallery section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">L'ambiance du Pays d'Auge</h2>
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div 
              key={img.id} 
              className={`gallery-item animate-fade-up ${index === 0 || index === 3 ? 'large' : ''}`}
              style={{ animationDelay: `${0.1 * (index % 3)}s` }}
            >
              <img src={img.src} alt={img.alt} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-caption">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
