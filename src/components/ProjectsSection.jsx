<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectsSection = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Simulate the fadeIn animation after a delay
        const timeout = setTimeout(() => {
            setFadeIn(true);
        }, 500); // Adjust delay as needed

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="vision" className="py-3">
            <Container>
                <h2 className="text-center mb-5" style={{ fontFamily: "-moz-initial",fontSize:"35px" }}>Our Vision</h2>
                
                <Row className={`mt-5 ${fadeIn ? 'fade-in' : ''}`}>
                    <Col>
                    <p className="text-center" style={{fontFamily:"-moz-initial"}}>
                        At Our Vision, we are driven by a passion for creating transformative spaces that enrich lives and inspire communities. 
                        With a deep-seated commitment to design excellence, we strive to redefine aesthetics and functionality in every project we undertake.
                    </p>
                    <p className="text-center" style={{fontFamily:"-moz-initial"}}>
                        Our philosophy revolves around meticulous craftsmanship and innovative solutions tailored to meet the unique needs of each client. 
                        From initial consultation to final implementation, we ensure a seamless journey characterized by creativity, transparency, and unparalleled attention to detail.
                    </p>
                    <p className="text-center" style={{fontFamily:"-moz-initial"}}>
                        We specialize in crafting environments that harmonize beauty with practicality, fostering environments where people thrive and experiences are enhanced. 
                        Whether it’s designing sustainable living spaces, revitalizing historical landmarks, or creating cutting-edge commercial interiors, Our Vision sets the benchmark for design innovation and client satisfaction.
                    </p>
                    <p className="text-center" style={{fontFamily:"-moz-initial"}}>
                        Our portfolio speaks volumes about our expertise and dedication. It showcases a diverse range of projects, each a testament to our ability to exceed expectations and deliver enduring value. 
                        We invite you to explore our gallery and discover how we transform ideas into remarkable realities, enriching lives and leaving a lasting legacy of exceptional design.
                    </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProjectsSection;
=======
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectsSection = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Simulate the fadeIn animation after a delay
        const timeout = setTimeout(() => {
            setFadeIn(true);
        }, 500); // Adjust delay as needed

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="vision" className="py-3">
            <Container>
                <h2 className="text-center mb-5" style={{ fontFamily: "-moz-initial",fontSize:"35px" }}>Our Vision</h2>
                
                <Row className={`mt-5 ${fadeIn ? 'fade-in' : ''}`}>
                    <Col>
                    <p className="text-center" style={{fontFamily:"-moz-initial"}}>
                        At Our Vision, we are driven by a passion for creating transformative spaces that enrich lives and inspire communities. 
                        With a deep-seated commitment to design excellence, we strive to redefine aesthetics and functionality in every project we undertake.
                    </p>
                    <p className="text-center" style={{fontFamily:"-moz-initial"}}>
                        Our philosophy revolves around meticulous craftsmanship and innovative solutions tailored to meet the unique needs of each client. 
                        From initial consultation to final implementation, we ensure a seamless journey characterized by creativity, transparency, and unparalleled attention to detail.
                    </p>
                    <p className="text-center" style={{fontFamily:"-moz-initial"}}>
                        We specialize in crafting environments that harmonize beauty with practicality, fostering environments where people thrive and experiences are enhanced. 
                        Whether it’s designing sustainable living spaces, revitalizing historical landmarks, or creating cutting-edge commercial interiors, Our Vision sets the benchmark for design innovation and client satisfaction.
                    </p>
                    <p className="text-center" style={{fontFamily:"-moz-initial"}}>
                        Our portfolio speaks volumes about our expertise and dedication. It showcases a diverse range of projects, each a testament to our ability to exceed expectations and deliver enduring value. 
                        We invite you to explore our gallery and discover how we transform ideas into remarkable realities, enriching lives and leaving a lasting legacy of exceptional design.
                    </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProjectsSection;
>>>>>>> master
