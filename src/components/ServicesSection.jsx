<<<<<<< HEAD
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import interiorImage from '../assets/bedroom.jpg'; // Correct path to your images
import furnitureImage from '../assets/int.jpg';
import renovationImage from '../assets/4872a53e70083aac16e5db7750a706a6.jpg';

const cardContainerStyle = {
    position: 'relative',
    width: '22rem',
    height: '50vh',
    overflow: 'hidden',
    color: 'white',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
};

const cardImageStyle = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

const cardHoverTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    borderRadius: '10px',
    width: '80%',
};

const cardHoverTextVisibleStyle = {
    opacity: 1,
};

const ServicesSection = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    return (
        <section id="services" className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-5" style={{ fontFamily: "-moz-initial" }}>Our Services</h2>
                <Row>
                    {[{
                        title: "Interior Design",
                        subtitle: "Interior Design",
                        text: "From concept to execution, we create interior designs that reflect your style and enhance your living spaces.",
                        image: furnitureImage
                    }, {
                        title: "Furniture Design",
                        subtitle: "Furniture Design",
                        text: "Crafting bespoke furniture pieces that are functional, durable, and aesthetically pleasing.",
                        image: interiorImage
                    }, {
                        title: "Home and Office Renovation",
                        subtitle: "Renovation",
                        text: "Choose us for innovative home renovation services and breathe new life into your home or office space.",
                        image: renovationImage
                    }].map((service, index) => (
                        <Col
                            key={index}
                            md={4}
                            className="mb-4"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div style={cardContainerStyle}>
                                <div style={{ ...cardImageStyle, backgroundImage: `url(${service.image})` }}></div>
                                <div
                                    style={{
                                        ...cardHoverTextStyle,
                                        ...(hoveredIndex === index ? cardHoverTextVisibleStyle : {})
                                    }}
                                >
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{service.subtitle}</Card.Subtitle>
                                    <Card.Text>{service.text}</Card.Text>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ServicesSection;
=======
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import interiorImage from '../assets/bedroom.jpg'; // Correct path to your images
import furnitureImage from '../assets/int.jpg';
import renovationImage from '../assets/4872a53e70083aac16e5db7750a706a6.jpg';

const cardContainerStyle = {
    position: 'relative',
    width: '22rem',
    height: '50vh',
    overflow: 'hidden',
    color: 'white',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
};

const cardImageStyle = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

const cardHoverTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    borderRadius: '10px',
    width: '80%',
};

const cardHoverTextVisibleStyle = {
    opacity: 1,
};

const ServicesSection = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    return (
        <section id="services" className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-5" style={{ fontFamily: "-moz-initial" }}>Our Services</h2>
                <Row>
                    {[{
                        title: "Interior Design",
                        text:  "From concept to execution, we create interior designs that reflect your style and enhance your living spaces.",
                        image: furnitureImage
                    }, {
                        title: "Furniture Design",
                        text: "Crafting bespoke furniture pieces that are functional, durable, and aesthetically pleasing.",
                        image: interiorImage
                    }, {
                        title: "Home and Office Renovation",
                        text: "Choose us for innovative home renovation services and breathe new life into your home or office space.",
                        image: renovationImage
                    }].map((service, index) => (
                        <Col
                            key={index}
                            md={4}
                            className="mb-4"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div style={cardContainerStyle}>
                                <div style={{ ...cardImageStyle, backgroundImage: `url(${service.image})` }}></div>
                                <div
                                    style={{
                                        ...cardHoverTextStyle,
                                        ...(hoveredIndex === index ? cardHoverTextVisibleStyle : {})
                                    }}
                                >
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{service.subtitle}</Card.Subtitle>
                                    <Card.Text>{service.text}</Card.Text>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ServicesSection;
>>>>>>> master
