import React from 'react';
import { Star } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const tags = [
    "Bons produits",
    "Service rapide",
    "Restaurant très propre",
    "Patrons gentils et agréables",
    "Serveur agréable",
    "Accueil chaleureux"
  ];

  const reviews = [
    {
      id: 1,
      title: "Un agréable moment à Vouzeron",
      text: "De passage dans la région, nous avons découvert cette adresse. Très belle surprise ! Cuisine faite maison, cadre charmant et accueil au top.",
      author: "Marie L."
    },
    {
      id: 2,
      title: "Des bons produits et un service rapide",
      text: "Idéal pour le déjeuner. Le menu du jour est excellent, les assiettes sont généreuses et le service est souriant.",
      author: "Thomas D."
    },
    {
      id: 3,
      title: "Une équipe gentille et agréable",
      text: "Théo et son équipe sont adorables, on se sent tout de suite à l'aise. La terrasse est un vrai plus aux beaux jours.",
      author: "Sophie R."
    }
  ];

  return (
    <section className="reviews section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Ce que nos clients apprécient</h2>
        </div>

        <div className="reviews-tags animate-fade-up">
          {tags.map((tag, index) => (
            <span key={index} className="review-tag">{tag}</span>
          ))}
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="review-card animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" stroke="none" />
                ))}
              </div>
              <h3 className="review-title">"{review.title}"</h3>
              <p className="review-text">{review.text}</p>
              <p className="review-author">— {review.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '40px' }}>
          <a href="#" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Voir tous les avis</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
