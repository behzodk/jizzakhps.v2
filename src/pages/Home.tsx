import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import PresidentSection from '../components/PresidentSection';
import AboutSection from '../components/AboutSection';
import NewsSection from '../components/NewsSection';
import EducationSection from '../components/EducationSection';
import PartnersSection from '../components/PartnersSection';
import GallerySection from '../components/GallerySection';

const Home: React.FC = () => {
  return (
    <div className="index">
      <Header />
      <main>
        <HeroSection />
        <PresidentSection />
        <AboutSection />
        <NewsSection />
        <EducationSection />
        <PartnersSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
