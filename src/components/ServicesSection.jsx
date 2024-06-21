import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import interiorImage from '../assets/bedroom.jpg'; // Correct path to your images
import furnitureImage from '../assets/interior-design-blog-background-sm.jpg';
import renovationImage from '../assets/4872a53e70083aac16e5db7750a706a6.jpg';

const ServicesSection = () => (
    <section id="services" className="py-5 bg-light">
        <Container>
            <h2 className="text-center mb-5" style={{ fontFamily: "-moz-initial" }}>Our Services</h2>
            <Row>
                <Col md={4} className="mb-4">
                    <Card className="h-100 product-card" style={{ position: 'relative', overflow: 'hidden' }}>
                        <Card.Img variant="top" src={interiorImage} />
                        <Card.Body className="product-details" style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                            color: 'white', 
                            padding: '20px', 
                            opacity: 0, 
                            transition: 'opacity 0.2s ease' 
                        }}>
                            <Card.Title className="text-center">Interior Design</Card.Title>
                            <Card.Text>
                                From concept to execution, we create interior designs that reflect your style and enhance your living spaces.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 product-card" style={{ position: 'relative', overflow: 'hidden' }}>
                        <Card.Img variant="top" src={furnitureImage} />
                        <Card.Body className="product-details" style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                            color: 'white', 
                            padding: '20px', 
                            opacity: 0, 
                            transition: 'opacity 0.3s ease' 
                        }}>
                            <Card.Title className="text-center">Furniture Design</Card.Title>
                            <Card.Text>
                                Crafting bespoke furniture pieces that are functional, durable, and aesthetically pleasing.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 product-card" style={{ position: 'relative', overflow: 'hidden' }}>
                        <Card.Img variant="top" src={renovationImage} />
                        <Card.Body className="product-details" style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                            color: 'white', 
                            padding: '20px', 
                            opacity: 0, 
                            transition: 'opacity 0.3s ease' 
                        }}>
                            <Card.Title className="text-center">Home and Office</Card.Title>
                            <Card.Text>
                                Choose us for innovative home renovation services and breathe new life into your home or office space.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
);

export default ServicesSection;
