import React from 'react';
import { Container } from 'react-bootstrap';
import backgroundImage from '../assets/homeBg.jpg';
import heroImage from '../assets/WOODSPEC_LOGO-01.png';

const HeroSection = () => {
    // Function to determine the appropriate maxWidth based on screen size
    const getResponsiveImageStyle = () => {
        const isMobile = window.innerWidth <= 768; // You can adjust this breakpoint
        return {
            maxWidth: isMobile ? '90%' : '35%', // 90% for mobile, 35% for larger screens
            height: 'auto',
            marginBottom: '10px'
        };
    };

    return (
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
            <Container className="mb-5 text-center">
                <img 
                    src={heroImage} 
                    alt="Woodspec Interiors Logo and Text" 
                    style={getResponsiveImageStyle()} // Apply dynamic styling
                />
                <h4 style={{ fontSize: '1.5rem', fontFamily: "-moz-initial" }}>Explore Now</h4>
                <a href="#about"><i className="fa-solid fa-chevron-down fs-4" style={{color:"white"}}></i></a>
            </Container>
        </div>
    );
};

export default HeroSection;
