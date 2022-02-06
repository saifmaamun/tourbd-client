import React from 'react';
import { Card, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Place.css';

const Place = ({ place }) => {
    const { name, description, img, thumbnail, _id } = place;
    return (
        <Col className="col" xs={12} sm={6} md={4} lg={3}>
            <Link className="effect" to={`/placeDetails/${_id}`}>
                <Card className="card" >
                    <Card.Img className="size" variant="top" src={thumbnail} />
                    <div className="text">
                        <h2>{name}</h2>
                    </div>
                </Card>
                </Link>
        </Col>
    );
};

export default Place;