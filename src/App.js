import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';

import Footer from './components/Footer';

const App = () => (
    <>
        <Header />
        <HeroSection />
   
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
           

        <Footer />
    </>
);

export default App;
