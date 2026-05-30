import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileStickyBar from './components/MobileStickyBar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import FeaturesBar from './sections/FeaturesBar';
import Storytelling from './sections/Storytelling';
import Cuisine from './sections/Cuisine';
import MenuTabs from './sections/MenuTabs';
import LifeStyle from './sections/LifeStyle';
import Events from './sections/Events';
import Groups from './sections/Groups';
import Reviews from './sections/Reviews';
import Gallery from './sections/Gallery';
import Location from './sections/Location';
import FinalCTA from './sections/FinalCTA';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <FeaturesBar />
        <Storytelling />
        <Cuisine />
        <MenuTabs />
        <LifeStyle />
        <Events />
        <Groups />
        <Reviews />
        <Gallery />
        <Location />
        <FinalCTA />
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  );
}

export default App;
