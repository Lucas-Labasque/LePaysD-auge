import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      type: 'Concert',
      date: 'Ven. 22 Avril • 20h00',
      title: 'Soirée Acoustique Normande',
      desc: 'Venez découvrir notre duo de guitares pour une ambiance chaleureuse et intimiste.',
      status: 'Sur réservation'
    },
    {
      id: 2,
      type: 'Karaoké',
      date: 'Sam. 30 Mai • 21h00',
      title: 'La Grande Soirée Karaoké',
      desc: 'Chauffez vos cordes vocales, ce soir c\'est vous la star du Pays d\'Auge !',
      status: 'Places limitées'
    },
    {
      id: 3,
      type: 'Menu spécial',
      date: 'Jeu. 4 Mai',
      title: 'Dîner thématique d\'Automne',
      desc: 'Un menu unique pensé autour des produits de saison (champignons, courges, gibier).',
      status: 'À venir'
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Sur réservation': return 'badge-warning';
      case 'Places limitées': return 'badge-danger';
      case 'À venir': return 'badge-success';
      default: return '';
    }
  };

  return (
    <section className="events section-padding" id="evenements">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Des soirées qui font vivre Vouzeron</h2>
          <p className="section-subtitle">
            Concerts, karaoké, soirées à thème... Retrouvez ici nos prochains rendez-vous.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="event-card animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="event-header">
                <span className="event-type">{event.type}</span>
                <span className={`event-status ${getStatusClass(event.status)}`}>{event.status}</span>
              </div>
              <div className="event-body">
                <p className="event-date">{event.date}</p>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.desc}</p>
              </div>
              <div className="event-footer">
                <a href="#reserver" className="btn btn-outline" style={{ width: '100%' }}>Réserver</a>
              </div>
            </div>
          ))}
        </div>

        <div className="events-info text-center mt-12">
          <p className="events-note">
            Les événements sont annoncés régulièrement sur nos réseaux sociaux. Pensez à réserver à l'avance !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
