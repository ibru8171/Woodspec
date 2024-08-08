<<<<<<< HEAD
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import aboutImage from '../assets/r-1.png'; // Assuming this is your main image
import carouselImage1 from '../assets/r-4.png'; // Import additional carousel images
import carouselImage2 from '../assets/thumb-1920-595107.jpg';
import carouselImage3 from '../assets/r-6.png';
import carouselImage4 from '../assets/wp1844398.webp';

const AboutSection = () => (
    <section id="about" className="py-5">
        <Container>
            <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', color: '#333', fontFamily: "-moz-initial" }}>
                About Woodspec Interiors
            </h2>
            <Row className="align-items-center">
                <Col lg={6}>
                    <Carousel interval={3000} pause={false}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={aboutImage}
                                alt="About Us"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carouselImage1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carouselImage2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carouselImage3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carouselImage4}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col lg={6}>
                    <p className="lead">
                        Woodspec Interiors specializes in creating bespoke interior designs that blend aesthetics with functionality. With a team of passionate designers and craftsmen, we deliver exceptional spaces tailored to meet your unique needs.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
);

export default AboutSection;
=======
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import aboutImage from '../assets/pexels-heyho-5998135.jpg';
import carouselImage1 from '../assets/pexels-heyho-5998138.jpg';
import carouselImage2 from '../assets/pexels-heyho-6527064.jpg';
import carouselImage3 from '../assets/pexels-heyho-6636309.jpg';
import carouselImage4 from '../assets/pexels-heyho-7535032.jpg';

const AboutSection = () => (
    <section id="about" className="py-5">
        <Container>
            <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', color: '#333', fontFamily: "-moz-initial" }}>
                About Woodspec Interiors
            </h2>
            <Row className="align-items-center">
                <Col lg={6}>
                    <Carousel interval={3000} pause={false}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={aboutImage}
                                alt="About Us"
                                style={{ border: '10px solid #ccc', borderRadius: '10px' }} // Add border here
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carouselImage1}
                                alt="First slide"
                                style={{ border: '10px solid #ccc', borderRadius: '10px' }} // Add border here
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carouselImage2}
                                alt="Second slide"
                                style={{ border: '10px solid #ccc', borderRadius: '10px' }} // Add border here
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carouselImage3}
                                alt="Third slide"
                                style={{ border: '10px solid #ccc', borderRadius: '10px' }} // Add border here
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carouselImage4}
                                alt="Fourth slide"
                                style={{ border: '10px solid #ccc', borderRadius: '10px' }} // Add border here
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col lg={6}>
                    <p className="lead">
                        Woodspec Interiors specializes in creating bespoke interior designs that blend aesthetics with functionality. With a team of passionate designers and craftsmen, we deliver exceptional spaces tailored to meet your unique needs.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
);

export default AboutSection;
>>>>>>> master
