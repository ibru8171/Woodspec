import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import interiorImage from '../assets/bedroom.jpg'; // Correct path to your images
import furnitureImage from '../assets/int.jpg';
import renovationImage from '../assets/4872a53e70083aac16e5db7750a706a6.jpg';

const ServicesSection = () => (
    <section id="services" className="py-5 bg-light">
        <Container>
            <h2 className="text-center mb-5" style={{ fontFamily: "-moz-initial" }}>Our Services</h2>
            <Row>
                <Col md={4} className="mb-4">
                    <Card style={{ width: '18rem', backgroundImage: `url(${furnitureImage})`, backgroundSize: 'cover', color: 'red',height:"70vh" }}>
                        <Card.Body>
                            <Card.Title>Interior Design</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Interior Design</Card.Subtitle>
                            <Card.Text>
                                From concept to execution, we create interior designs that reflect your style and enhance your living spaces.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card style={{ width: '18rem', backgroundImage: `url(${interiorImage})`, backgroundSize: 'cover', color: 'white',height:"70vh" }}>
                        <Card.Body>
                            <Card.Title>Furniture Design</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Furniture Design</Card.Subtitle>
                            <Card.Text>
                                Crafting bespoke furniture pieces that are functional, durable, and aesthetically pleasing.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card style={{ width: '18rem', backgroundImage: `url(${renovationImage})`, backgroundSize: 'cover', color: 'white',height:"70vh" }}>
                        <Card.Body>
                            <Card.Title>Home and Office Renovation</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Renovation</Card.Subtitle>
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
