import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    // Replace 'your-whatsapp-number' with your actual WhatsApp number
    const whatsappNumber = '+919744118272';
    const message = encodeURIComponent('Hello! I am interested in your interior design services.');

    // Function to open WhatsApp with the provided number and message
    const openWhatsApp = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            window.open(`whatsapp://send?phone=${whatsappNumber}&text=${message}`, '_blank');
        } else {
            window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank');
        }
    };

    return (
        <footer style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '30px 0',
            fontSize: '16px',
            width: '100%',
            textAlign: 'left',
        }}>
            <Container>
                <h2 className="text-center mb-5" style={{ fontFamily: "-moz-initial" }}>Contact Us</h2>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5>Visit Us</h5>
                        <p>Metro Pillar No.112, CM Building No.231<br />Companypady, Aluva - 6, Pin - 683106</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Email Us</h5>
                        <p>woodspecprolink@gmail.com</p>
                        <h5>Call Us</h5>
                        <p>+91 9544430756 , +91 9544430754</p>
                    </Col>
                    <Col md={4} className="mb-4">
                    <h4 style={{ color: '#ffc107', fontSize: '1.5rem', marginBottom: '20px' }}>Social Media</h4>
                        {/* Add your social media icons here */}
                        <div className="social-icons">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="mb-4">
                      
                    </Col>
                    <Col md={4} className="text-lg-right">
                        {/* WhatsApp Icon fixed to the middle right */}
                        <div style={{ position: 'fixed', bottom: '50%', right: '20px', zIndex: 1000 }}>
                            <a href="#" onClick={openWhatsApp} className="social-icon">
                                <i className="fab fa-whatsapp fa-lg"></i> {/* Font Awesome WhatsApp icon */}
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
