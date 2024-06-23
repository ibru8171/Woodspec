import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO, Company ABC',
            quote: 'Working with WoodSpec has been a game-changer for us. Their attention to detail and creativity have transformed our office space beyond our expectations.',
            backgroundImage: 'https://static.vecteezy.com/system/resources/thumbnails/036/775/972/small_2x/ai-generated-modern-apartment-with-bright-sunlight-clean-and-comfortable-living-space-generated-by-ai-photo.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            position: 'Founder, XYZ Designs',
            quote: 'I hired WoodSpec for our home renovation project, and I couldn\'t be happier with the results. They listened to our needs and delivered outstanding quality.',
            backgroundImage: 'https://img.freepik.com/free-photo/view-room-interior-with-furniture-copy-space_23-2150680550.jpg',
        },
        {
            id: 3,
            name: 'Michael Johnson',
            position: 'Client',
            quote: 'The custom furniture they designed for us is not only beautiful but also functional. It fits perfectly into our home and has become a centerpiece of our living room.',
            backgroundImage: 'https://img.freepik.com/free-photo/background-with-simple-white-walls-plant_23-2151020005.jpg',
        },
    ];

    const carouselStyle = {
        marginBottom: '50px',
    };

    const testimonialTextStyle = {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: 'black',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    };

    const nameStyle = {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    };

    const positionStyle = {
        color: '#ddd',
        fontSize: '0.9rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    };

    return (
        <section id="testimonials" style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
            <Container>
                <h2 className="text-center mb-5" style={{ fontFamily: '-moz-initial', fontSize: '2.5rem', color: '#333' }}>
                    Client Testimonials
                </h2>
                <Carousel interval={4000} pause={false} indicators={false} style={carouselStyle}>
                    {testimonials.map((testimonial) => (
                        <Carousel.Item key={testimonial.id}>
                            <Row className="justify-content-center">
                                <Col md={8}>
                                    <Card className="border-0 shadow-sm text-center p-4"
                                          style={{
                                              background: '#fff',
                                              borderRadius: '10px',
                                              padding: '20px',
                                              boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                                              transition: 'transform 0.3s ease',
                                              backgroundImage: `url(${testimonial.backgroundImage})`,
                                              backgroundSize: 'cover',
                                              backgroundPosition: 'center',
                                              height: '400px', // Fixed height for the cards
                                          }}
                                    >
                                        <Card.Body style={{ padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                                            <p className="mb-4" style={testimonialTextStyle}>{testimonial.quote}</p>
                                            <h5 className="mb-1" style={nameStyle}>{testimonial.name}</h5>
                                            <p className="text-muted mb-0" style={positionStyle}>{testimonial.position}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </section>
    );
};

export default TestimonialsSection;
