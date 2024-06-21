import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProjectsSection = () => (
    <section id="projects" className="py-5">
        <Container>
            <h2 className="text-center mb-5">Our Projects</h2>
            <Row>
                <Col lg={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={require('../assets/r-6.png').default} alt="Project 1" />
                        <Card.Body>
                            <Card.Title>Modern Living Room</Card.Title>
                            <Card.Text>
                                Creating a contemporary living room that merges comfort with sophistication.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={require('../assets/interior-design-blog-background-sm.jpg').default} alt="Project 2" />
                        <Card.Body>
                            <Card.Title>Elegant Dining Area</Card.Title>
                            <Card.Text>
                                Designing an elegant dining area that invites warmth and luxury.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={require('../assets/r-4.png').default} alt="Project 3" />
                        <Card.Body>
                            <Card.Title>Cozy Bedroom Retreat</Card.Title>
                            <Card.Text>
                                Crafting a cozy bedroom retreat with bespoke furniture and serene ambiance.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
);

export default ProjectsSection;
