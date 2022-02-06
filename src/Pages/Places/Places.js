import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Place from '../Place/Place';
import './Places.css'

const Places = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://limitless-ridge-49943.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (

        <Container className="my-5">
            <h1 className="place-text my-5 pt-5">Choose Where You Want To Visit</h1>
            <Row>
                    {
                        places.map(place => <Place
                            key={place._id}
                            place={place}
                            ></Place>)
                        }
            </Row>
        </Container>
    );
};

export default Places;