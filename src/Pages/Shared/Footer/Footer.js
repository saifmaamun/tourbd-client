import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className="mt-5 nav ">
            <Container className="mt-5 pt-5">
                <Row className="text-start">
                    <Col md={3} sm={3}>
                        <Link to='/'><p className="pb-3 fs-2 fw-bold">TourBD</p></Link>
                        <p className="py-3">tourbd@mail.com</p>
                        <p className="pb-3">+880 1485 7369</p>
                    </Col>
                    <Col md={3} sm={3}>
                        <p className="pb-3 fs-3 fw-bold">Accesibility</p>
                        <p className="pb-3">Certification</p>
                        <p className="pb-3">Knowledge Base</p>
                        <p className="pb-3">Documentation</p>
                        <p className="pb-3">User Group</p>
                    </Col>
                    <Col md={3} sm={3}>
                        <p className="pb-3 fs-3 fw-bold">Pages</p>
                        <p className="pb-3">Blogs</p>
                        <p className="pb-3">Careers</p>
                        <p className="pb-3">Communities Base</p>
                        <p className="pb-3">Webinars</p>
                        <p className="pb-3">Videos</p>
                    </Col>
                    <Col md={3} sm={3}>
                        <p className="pb-5 fs-3 fw-bold">Our Address</p>
                        <div className="address ">
                            <div className="email pb-3 d-flex align-items-start">
                                <p className="fw-normal">NewMarket, New area road 04, Dhaka</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex py-5 mt-5 justify-content-between ">
                    <div className="copyright">
                        <h5 className=" fw-normal">Copyright ©2021 QuickSpace. All Rights Reserved</h5>
                    </div>
                    <div className="link d-flex">
                        <h5 className=" pe-5 fw-normal">Home</h5>
                        <h5 className=" pe-5 fw-normal">Team</h5>
                        <h5 className=" pe-5 fw-normal">Privecy policy</h5>
                        <h5 className=" fw-normal">Contact</h5>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Footer;