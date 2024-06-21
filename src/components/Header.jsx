import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoImg from '../assets/logo.png';

const Header = () => {
    const navLinkStyle = {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        transition: 'color 0.3s ease',
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
                        {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((text, index) => (
                            <Nav.Link
                                href={`#${text.toLowerCase().replace(' ', '')}`}
                                key={index}
                                style={navLinkStyle}
                                onMouseEnter={e => e.currentTarget.style.color = navLinkHoverStyle.color}
                                onMouseLeave={e => e.currentTarget.style.color = navLinkStyle.color}
                            >
                                {text}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
