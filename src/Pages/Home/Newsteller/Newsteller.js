import React from 'react';
import { Container } from 'react-bootstrap';
import './Newsteller.css'

const Newsteller = () => {
    return (
        <Container fluid className="news-bg">
            <Container>

            <div className="text-center my-5 py-5">
                <h2>Sign up to our newsletter</h2>
                <h4>Receive latest news, updates and many other
                    news every week.</h4>
                <div className="py-1 my-5 rounded-pill bg-white mx-auto d-flex align-items-center justify-content-between search-box">
                    <input className="ms-4 py-3 border-0" type="email" name="" placeholder="Enter your email address" />
                    <i class="fas me-3 fa-chevron-circle-right fa-2x"></i>
                </div>
            </div>
            </Container>
        </Container>
    );
};

export default Newsteller;