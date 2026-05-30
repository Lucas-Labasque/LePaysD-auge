import React from 'react';
import './LifeStyle.css';

const lifestyleImages = {
  restaurant: '/images/salle-table-bois-toile-de-jouy.webp',
  bar: '/images/barman-preparation-cocktail-shaker.webp',
  soirees: '/images/espace-jeux-de-societe.webp',
};

const LifeStyle = () => {
  const blocks = [
    {
      id: 1,
      title: 'Restaurant',
      text: 'Pour déjeuner, dîner ou partager un repas maison dans une ambiance chaleureuse.',
      img: lifestyleImages.restaurant,
      height: 'large',
    },
    {
      id: 2,
      title: 'Bar & terrasse',
      text: 'Pour boire un verre, profiter d’une belle après-midi, jouer aux cartes ou se retrouver entre amis.',
      img: lifestyleImages.bar,
      height: 'medium',
    },
    {
      id: 3,
      title: 'Soirées & événements',
      text: 'Concerts, karaokés et rendez-vous réguliers rythment la vie du restaurant.',
      img: lifestyleImages.soirees,
      height: 'medium',
    }
  ];

  return (
    <section className="lifestyle section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Un restaurant, un bar, une terrasse… et surtout un lieu de vie</h2>
        </div>

        <div className="lifestyle-grid">
          {blocks.map((block) => (
            <div key={block.id} className={`lifestyle-card ${block.height} animate-fade-up`}>
              <div className="lifestyle-bg" style={{ backgroundImage: `url(${block.img})` }}></div>
              <div className="lifestyle-overlay"></div>
              <div className="lifestyle-content">
                <h3 className="lifestyle-title">{block.title}</h3>
                <p className="lifestyle-text">{block.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{marginTop: '40px'}}>
          <a href="#evenements" className="btn btn-primary">Voir les prochains événements</a>
        </div>
      </div>
    </section>
  );
};

export default LifeStyle;
