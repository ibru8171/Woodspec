import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import SpecialtiesSection from './components/Speciality';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import ServicesPage from './components/Custom';

const App = () => (
    <>
        <Header />
        <HeroSection />

        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        
        <ServicesPage />
        <SpecialtiesSection />
        <TestimonialsSection />


        <Footer />
    </>
);

export default App;
