import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import image1 from '../../../images/banner/1.jpg';
import image2 from '../../../images/banner/2.jpg';
import image3 from '../../../images/banner/3.jpg';
import './Banner.css'

const Banner = () => {
            return (
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>WelCome To Bangladesh</h3>
                            <p>Enjoy The Pure Natural Beauty</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 height"
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>WelCome To Bangladesh</h3>
                            <p>Enjoy The Pure Natural Beauty</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>WelCome To Bangladesh</h3>
                            <p>Enjoy The Pure Natural Beauty</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            );
        
};

export default Banner;