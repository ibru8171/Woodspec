<<<<<<< HEAD
import React from 'react';
import { Container } from 'react-bootstrap';

const servicesData = [
    {
        title: 'Customized Budget Packages',
        description: 'We offer customized budget packages to suit the unique needs and preferences of our clients. Our packages are designed to provide maximum value without compromising on quality.',
        position: { top: '13%', left: '28%' }
    },
    {
        title: 'On Time Delivery',
        description: 'We ensure timely delivery of all projects, maintaining high standards of quality and attention to detail. Our efficient project management guarantees deadlines are met without sacrificing excellence.',
        position: { top: '20%', right: '5%' }
    },
    {
        title: '1000+ Color Options',
        description: 'With over 1000 color options, we provide an extensive range of choices to help you find the perfect palette for your space. Our selections cater to various styles and preferences.',
        position: { bottom: '15%', left: '5%' }
    },
    {
        title: '10 Year Warranty on Plyboards',
        description: 'We offer a 10-year warranty on our plyboards, ensuring durability and peace of mind. Our commitment to quality is reflected in the long-term assurance we provide to our clients.',
        position: { bottom: '10%', right: '28%' }
    }
];

const ServicesPage = () => (
    <section id="woodspec" className="py-5 bg-light">
        <Container fluid>
            <h2 className="text-center mb-5" style={{ fontFamily: '-moz-initial', fontSize: '2.5rem', fontWeight: "bold", color: '#333' }} >What We Offer</h2>
            <div className="service-background">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="service-point"
                        style={{
                            top: service.position.top,
                            right: service.position.right,
                            bottom: service.position.bottom,
                            left: service.position.left
                        }}
                    >
                        <div className="service-title" style={{ fontFamily: "-moz-initial" }}>{service.title}</div>
                        <div className="service-description" style={{ fontFamily: "-moz-initial" }}>{service.description}</div>
                    </div>
                ))}
            </div>
        </Container>
        <style jsx>{`
            .service-background {
                position: relative;
                background-image: url('https://www.fashiontrendsetter.com/v2/wp-content/uploads/2022/01/Bobbi-Beck-Dark-Japandi-Wallpaper-Trends-Feat.jpg'); /* Replace with actual image URL */
                background-size: cover;
                background-position: center;
                height: 100vh;
            }
            .service-point {
                position: absolute;
                background: rgba(255, 255, 255, 0.9); /* White background with slight transparency */
                color: black;
                padding: 20px;
                border-radius: 10px;
                text-shadow: none; /* Remove text shadow */
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for better readability */
                transition: transform 0.3s, opacity 0.3s;
                width: 45%; /* Adjust as needed */
                max-width: 300px; /* Adjust as needed */
            }
            .service-point .service-title {
                font-family: sans-serif;
                font-weight: bold;
                font-size: 2.5rem;
                margin-bottom: 10px;
            }
            .service-point .service-description {
                font-family: Arial;
                opacity: 0.2;
            }
            .service-point:hover {
                transform: scale(1.3);
            }
            .service-point:hover .service-description {
                opacity: 1;
            }

            /* Media Queries for Responsiveness */
            @media (max-width: 1200px) {
                .service-point {
                    width: 45%;
                }
            }
            @media (max-width: 992px) {
                .service-point {
                    width: 50%;
                }
            }
            @media (max-width: 768px) {
                .service-background {
                    height: auto;
                    padding: 20px;
                }
                .service-point {
                    position: static;
                    margin: 20px auto;
                    width: 80%;
                }
                .service-point .service-title {
                    font-size: 1.2rem;
                }
                .service-point .service-description {
                    font-size: 0.9rem;
                    opacity: 1;
                }
            }
            @media (max-width: 576px) {
                .service-point {
                    width: 100%;
                }
                .service-point .service-title {
                    font-size: 1rem;
                }
                .service-point .service-description {
                    font-size: 0.8rem;
                    opacity: 2;
                }
            }
        `}</style>
    </section>
);

export default ServicesPage;
=======
import React from 'react';
import { Container } from 'react-bootstrap';

const servicesData = [
    {
        title: 'Customized Budget Packages',
        description: 'We offer customized budget packages to suit the unique needs and preferences of our clients. Our packages are designed to provide maximum value without compromising on quality.',
        position: { top: '13%', left: '28%' }
    },
    {
        title: 'On Time Delivery',
        description: 'We ensure timely delivery of all projects, maintaining high standards of quality and attention to detail. Our efficient project management guarantees deadlines are met without sacrificing excellence.',
        position: { top: '20%', right: '5%' }
    },
    {
        title: '1000+ Color Options',
        description: 'With over 1000 color options, we provide an extensive range of choices to help you find the perfect palette for your space. Our selections cater to various styles and preferences.',
        position: { bottom: '15%', left: '5%' }
    },
    {
        title: '10 Year Warranty on Plyboards',
        description: 'We offer a 10-year warranty on our plyboards, ensuring durability and peace of mind. Our commitment to quality is reflected in the long-term assurance we provide to our clients.',
        position: { bottom: '10%', right: '28%' }
    }
];

const ServicesPage = () => (
    <section id="woodspec" className="py-5 bg-light">
        <Container fluid>
            <h2 className="text-center mb-5" style={{ fontFamily: '-moz-initial', fontSize: '2.5rem', fontWeight: "bold", color: '#333' }} >What We Offer</h2>
            <div className="service-background">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="service-point"
                        style={{
                            top: service.position.top,
                            right: service.position.right,
                            bottom: service.position.bottom,
                            left: service.position.left
                        }}
                    >
                        <div className="service-title" style={{ fontFamily: "-moz-initial" }}>{service.title}</div>
                        <div className="service-description" style={{ fontFamily: "-moz-initial" }}>{service.description}</div>
                    </div>
                ))}
            </div>
        </Container>
        <style jsx>{`
            .service-background {
                position: relative;
                background-image: url('https://www.fashiontrendsetter.com/v2/wp-content/uploads/2022/01/Bobbi-Beck-Dark-Japandi-Wallpaper-Trends-Feat.jpg'); /* Replace with actual image URL */
                background-size: cover;
                background-position: center;
                height: 100vh;
            }
            .service-point {
                position: absolute;
                background: rgba(255, 255, 255, 0.9); /* White background with slight transparency */
                color: black;
                padding: 20px;
                border-radius: 10px;
                text-shadow: none; /* Remove text shadow */
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for better readability */
                transition: transform 0.3s, opacity 0.3s;
                width: 45%; /* Adjust as needed */
                max-width: 300px; /* Adjust as needed */
            }
            .service-point .service-title {
                font-family: sans-serif;
                font-weight: bold;
                font-size: 2.5rem;
                margin-bottom: 10px;
            }
            .service-point .service-description {
                font-family: Arial;
                opacity: 0.2;
            }
            .service-point:hover {
                transform: scale(1.3);
            }
            .service-point:hover .service-description {
                opacity: 1;
            }

            /* Media Queries for Responsiveness */
            @media (max-width: 1200px) {
                .service-point {
                    width: 45%;
                }
            }
            @media (max-width: 992px) {
                .service-point {
                    width: 50%;
                }
            }
            @media (max-width: 768px) {
                .service-background {
                    height: auto;
                    padding: 20px;
                }
                .service-point {
                    position: static;
                    margin: 20px auto;
                    width: 80%;
                }
                .service-point .service-title {
                    font-size: 1.2rem;
                }
                .service-point .service-description {
                    font-size: 0.9rem;
                    opacity: 1;
                }
            }
            @media (max-width: 576px) {
                .service-point {
                    width: 100%;
                }
                .service-point .service-title {
                    font-size: 1rem;
                }
                .service-point .service-description {
                    font-size: 0.8rem;
                    opacity: 2;
                }
            }
        `}</style>
    </section>
);

export default ServicesPage;
>>>>>>> master
