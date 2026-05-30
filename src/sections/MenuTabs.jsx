import React, { useState } from 'react';
import './MenuTabs.css';
import { siteConfig } from '../data/config';
import { Phone } from 'lucide-react';

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState('carte');

  const tabs = [
    { id: 'carte', label: 'Carte' },
    { id: 'menus', label: 'Menus' },
    { id: 'boissons', label: 'Boissons' },
    { id: 'suggestions', label: 'Suggestions' },
    { id: 'weekend', label: 'Week-end' },
  ];

  // Placeholder data as requested
  const menuContent = {
    carte: [
      { name: 'Entrée de saison', desc: 'Selon arrivage', price: '9€' },
      { name: 'Plat signature', desc: 'Produits locaux, sauce maison', price: '21€' },
      { name: 'Dessert du chef', desc: 'Gourmandise du moment', price: '8€' },
    ],
    menus: [
      { name: 'Menu du marché (Midi)', desc: 'Entrée + Plat + Dessert', price: '19€' },
      { name: 'Menu dégustation', desc: 'Selon l\'inspiration du chef', price: '35€' },
    ],
    boissons: [
      { name: 'Cocktail maison', desc: 'Avec ou sans alcool', price: '8€' },
      { name: 'Sélection de vins', desc: 'Au verre ou à la bouteille', price: 'dès 6€' },
      { name: 'Cidre normand', desc: 'Artisanal et brut', price: '12€' },
    ],
    suggestions: [
      { name: 'Suggestion de la semaine', desc: 'Découvrez notre création éphémère', price: '---' },
    ],
    weekend: [
      { name: 'Menu sensation', desc: 'Uniquement disponible le week-end', price: '42€' },
    ]
  };

  return (
    <section className="menu-tabs-section section-padding" id="carte">
      <div className="container">
        
        <div className="tabs-header">
          <ul className="tabs-list">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content animate-fade-up" key={activeTab}>
          <div className="menu-items">
            {menuContent[activeTab].map((item, index) => (
              <div className="menu-item" key={index}>
                <div className="menu-item-header">
                  <h4 className="menu-item-name">{item.name}</h4>
                  <div className="menu-item-dots"></div>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-footer text-center">
          <p className="menu-note">
            La carte peut évoluer selon les arrivages. Pour connaître les plats du moment, contactez-nous ou suivez nos réseaux.
          </p>
          <a href={`tel:${siteConfig.phoneLink}`} className="btn btn-outline" style={{marginTop: '24px'}}>
            <Phone size={18} /> Appeler pour connaître la carte du moment
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default MenuTabs;
