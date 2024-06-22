import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoImg from '../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    const navLinkStyle = {
        color: 'white',
        fontWeight: 'light',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        transition: 'color 0.3s ease',
        margin: '0 15px',  // Add margin for space between links
        cursor: 'pointer'  // Add cursor pointer for better UX
    };

    const navLinkHoverStyle = {
        color: '#ff6347',
        textDecoration: 'underline',
    };

    return (
        <Navbar expand="lg" variant="light" style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, width: '100%', zIndex: 10 }}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logoImg} alt="logo" height="100" width="100" id='logoImg' style={{ margin: "5px", padding: "5px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="justify-content-end">
                    <Nav>
                        {['Home', 'About', 'Services', 'Projects', 'Contact us'].map((text, index) => (
                            <Nav.Item key={index}>
                                <ScrollLink
                                    to={text.toLowerCase().replace(' ', '')}
                                    smooth={true}
                                    duration={500}
                                    style={navLinkStyle}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = navLinkHoverStyle.color;
                                        e.currentTarget.style.textDecoration = navLinkHoverStyle.textDecoration;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = navLinkStyle.color;
                                        e.currentTarget.style.textDecoration = 'none';
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

