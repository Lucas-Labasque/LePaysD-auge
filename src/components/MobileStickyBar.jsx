import React from 'react';
import { Phone, MapPin, CalendarDays } from 'lucide-react';
import { siteConfig } from '../data/config';
import './MobileStickyBar.css';

const MobileStickyBar = () => {
  return (
    <div className="mobile-sticky-bar">
      <a href={`tel:${siteConfig.phoneLink}`} className="sticky-action">
        <Phone size={20} />
        <span>Appeler</span>
      </a>
      <a href="#reserver" className="sticky-action primary">
        <CalendarDays size={20} />
        <span>Réserver</span>
      </a>
      <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="sticky-action">
        <MapPin size={20} />
        <span>Itinéraire</span>
      </a>
    </div>
  );
};

export default MobileStickyBar;
