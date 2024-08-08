import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    const navLinkStyle = {
        color: 'white',
        fontWeight: 'bold', // Set font weight to bold for header style
        fontFamily: 'Arial, sans-serif', // Use a common header font style
        fontSize: '18px',
        transition: 'color 0.3s ease, background-color 0.3s ease', // Smooth transition for color and background
        margin: '0 15px',  // Space between links
        cursor: 'pointer',  // Better UX
        padding: '10px 15px', // Padding for the rounded effect
        borderRadius: '25px' // Rounded corners
    };

    const navLinkHoverStyle = {
        color: 'white', // Text color on hover
        backgroundColor: '#ff6347', // Orange background on hover
    };

    return (
        <Navbar expand="lg" variant="light" style={{ backgroundColor: 'transparent', position: 'absolute', marginTop: '10px', width: '100%', zIndex: 10 }}>
            <Container>
                <Navbar.Brand href="#home" className="mx-auto">
                    {/* Add logo or branding here if needed */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="justify-content-center">
                    <Nav className="mx-auto"> {/* Center the nav items */}
                        {['Home', 'About', 'Services', 'Gallery', 'Vision', 'Contact Us'].map((text, index) => (
                            <Nav.Item key={index}>
                                <ScrollLink
                                    to={text.toLowerCase().replace(' ', '')}
                                    smooth={true}
                                    duration={500}
                                    style={navLinkStyle}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = navLinkHoverStyle.color;
                                        e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = navLinkStyle.color;
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    {text}
                                </ScrollLink>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
