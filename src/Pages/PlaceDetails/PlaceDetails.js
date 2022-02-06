import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const PlaceDetails = () => {
    const { id } = useParams();
    const [place, setPlace] = useState({})
    const { name, description, thumbnail, img, cost, _id } = place;
    useEffect(() => { 
        fetch(`https://limitless-ridge-49943.herokuapp.com/placeDetails/${id}`)
            .then(res => res.json())
        .then(data=>setPlace(data))
    },[])
    return (
        <Container fluid className="my-5 py-4">
            <Container className="my-5">
                <Row className="d-flex align-items-center">
                    <Col md={3} sm={12}>
                        <img className="w-100" src={thumbnail} alt="" srcset="" />
                    </Col>
                    <Col className="ps-5 text-start" md={9} sm={12}>
                        <h2>{ name}</h2>
                        <h5>{description}</h5>
                        <h5>Cost: ${cost}/per person</h5>
                        <h5> For: 1 week</h5>
                    </Col>
                    <Link to={`/order/${_id}`}>
                        <button className="btn button text-light px-5 fw-bold">Pick</button>
                    </Link>
                </Row>
            </Container>
        </Container>
    );
};

export default PlaceDetails;