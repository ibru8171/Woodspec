import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsFillAwardFill, BsFillLightningFill, BsFillHeartFill } from 'react-icons/bs';

const SpecialtiesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardStyle = (index) => ({
    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
    position: 'relative', // Add relative positioning to the card
  });

  const centeredIconStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '3rem',
    opacity: 0.1,
    zIndex: 1,
  };

  const textContainerStyle = {
    position: 'relative',
    zIndex: 2,
  };

  return (
    <section id="our-specialties" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5" style={{ fontFamily: '-moz-initial', fontSize: '2.5rem', color: '#333' }}>
          Our Specialties
        </h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card
              className="h-100 text-center"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              style={cardStyle(0)}
            >
              <div style={centeredIconStyle}>
                <BsFillAwardFill style={{ color: '#f39c12' }} />
              </div>
              <Card.Body style={textContainerStyle}>
                <BsFillAwardFill style={{ fontSize: '3rem', marginBottom: '1rem', color: '#f39c12' }} />
                <Card.Title style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>Award-Winning Designs</Card.Title>
                <Card.Text style={{ fontFamily: '-moz-initial' }}>
                  Our award-winning designs are a testament to our commitment to excellence and innovation in the industry.
                  We specialize in creating bespoke spaces that not only meet but exceed our clients' expectations.
                  Through meticulous attention to detail and creative vision, we transform ideas into stunning realities.
                  Whether it's modern aesthetics, sustainable practices, or timeless elegance, our designs consistently stand out,
                  earning recognition for their ingenuity and craftsmanship.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card
              className="h-100 text-center"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              style={cardStyle(1)}
            >
              <div style={centeredIconStyle}>
                <BsFillLightningFill style={{ color: '#3498db' }} />
              </div>
              <Card.Body style={textContainerStyle}>
                <BsFillLightningFill style={{ fontSize: '3rem', marginBottom: '1rem', color: '#3498db' }} />
                <Card.Title style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>Quick Turnaround</Card.Title>
                <Card.Text style={{ fontFamily: '-moz-initial' }}>
                  We pride ourselves on our ability to deliver projects swiftly without compromising on quality or attention to detail.
                  Our streamlined processes and efficient project management ensure that timelines are met while maintaining our high standards.
                  From initial concept to final execution, we prioritize efficiency without sacrificing the creativity and craftsmanship that define our work.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card
              className="h-100 text-center"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              style={cardStyle(2)}
            >
              <div style={centeredIconStyle}>
                <BsFillHeartFill style={{ color: '#e74c3c' }} />
              </div>
              <Card.Body style={textContainerStyle}>
                <BsFillHeartFill style={{ fontSize: '3rem', marginBottom: '1rem', color: '#e74c3c' }} />
                <Card.Title style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>Client-Centric Approach</Card.Title>
                <Card.Text style={{ fontFamily: '-moz-initial' }}>
                  At the heart of our practice is a client-centric approach where we prioritize understanding and fulfilling our clients' unique needs and desires.
                  We collaborate closely with our clients throughout the design process, ensuring that their vision is realized in every detail.
                  From the initial consultation to the final walkthrough, we are dedicated to delivering personalized solutions that exceed expectations and create lasting relationships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SpecialtiesSection;
