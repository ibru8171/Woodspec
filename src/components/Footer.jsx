<<<<<<< HEAD
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const whatsappNumber = '+919744118272';
    const message = encodeURIComponent('Hello! I am interested in your interior design services.');

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
            backgroundImage: 'url("http://cdn.home-designing.com/wp-content/uploads/2020/11/charcoal-modular-sofa.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '30px 0',
            fontSize: '16px',
            width: '100%',
            textAlign: 'left',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the transparency as needed
            }}></div>
            <Container style={{ position: 'relative', zIndex: 1 }} id='contactus'>
                <h2 className="text-center mb-5" style={{ fontFamily: "-moz-initial" }}>Contact Us</h2>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5>Visit Us</h5>
                        <p>Metro Pillar No.112, <br /> CM Building No.231, Companypady,<br /> Aluva - 6, Pin - 683106</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Email Us</h5>
                        <p>woodspecprolink@gmail.com</p>
                        <h5>Call Us</h5>
                        <p>+91 9544430756 , +91 9544430754</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>Connect with Us</h4>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/share/dQabETGMX7fwsxJF/?mibextid=qi2Omg" className="social-icon me-2 ms-5 text-white">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" className="social-icon me-2 text-white">
                            <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com/woodspec_project?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-icon text-white">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="mb-4"></Col>
                    <Col md={4} className="text-lg-right">
                        <div style={{ position: 'fixed', bottom: '10%', right: '20px', zIndex: 1000 }}>
                            <a href="#" onClick={openWhatsApp} className="social-icon">
                                <img src="https://www.pikpng.com/pngl/b/56-561816_whatsapp-png.png" height={"50px"} width={"50px"} alt="" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="text-center mt-4" style={{ fontSize: '14px' }}>
                &copy; {new Date().getFullYear()} WoodSpec Project. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
=======
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const whatsappNumber = '+919544430754';
    const message = encodeURIComponent('Hello! I am interested in your interior design services.');

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
            backgroundImage: 'url("http://cdn.home-designing.com/wp-content/uploads/2020/11/charcoal-modular-sofa.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '30px 0',
            fontSize: '16px',
            width: '100%',
            textAlign: 'left',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the transparency as needed
            }}></div>
            <Container style={{ position: 'relative', zIndex: 1 }} id='contactus'>
                <h2 className="text-center mb-5" style={{ fontFamily: "-moz-initial" }}>Contact Us</h2>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5>Visit Us</h5>
                        <p>Metro Pillar No.112, <br /> CM Building No.231, Companypady,<br /> Aluva - 6, Pin - 683106</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Email Us</h5>
                        <a href="mailto:info@woodspecproject.com" className='text-white'>info@woodspecproject.com</a>
                        <br /><br />
                        <h5>Call Us</h5>
                        <p>+91 9544430756 , +91 9544430754</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' , fontFamily:"inherit"}}>Connect with Us</h4>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=61564078615806&mibextid=ZbWKwL" className="social-icon me-2 ms-5 text-white">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="https://youtube.com/@woodspecpro?si=_1whiGf4wC6T_ld2" className="social-icon me-3 ms-2 text-white">
                            <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com/woodspec_project?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-icon text-white">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="mb-4"></Col>
                    <Col md={4} className="text-lg-right">
                        <div style={{ position: 'fixed', bottom: '10%', right: '20px', zIndex: 1000 }}>
                            <a href="#" onClick={openWhatsApp} className="social-icon">
                                <img src="https://www.pikpng.com/pngl/b/56-561816_whatsapp-png.png" height={"50px"} width={"50px"} alt="" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="text-center mt-4" style={{ fontSize: '14px' }}>
                &copy; {new Date().getFullYear()} WoodSpec Project. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
>>>>>>> master
