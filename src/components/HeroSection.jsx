import React from 'react';
import { Container } from 'react-bootstrap';
import backgroundImage from '../assets/Dark-living-room-scheme.jpg';

const HeroSection = () => (
    <div
        className="hero-section text-center"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
        }}
    >
        <Container>
            <h1 style={{ fontFamily: "-moz-initial", fontSize: '3rem' }}> Woodspec Interiors</h1>
            <p style={{ fontSize: '1.5rem', fontFamily: "-moz-initial" }}>Transforming Spaces, Creating Comfort</p>
            <h4 style={{ fontSize: '1.5rem', fontFamily: "-moz-initial" }}>Explore Now</h4> {/* Adjusted font size */}
            <a href="#about"><i className="fa-solid fa-chevron-down fs-4" style={{color:"white"}}></i></a>
        </Container>
    </div>
);

export default HeroSection;
