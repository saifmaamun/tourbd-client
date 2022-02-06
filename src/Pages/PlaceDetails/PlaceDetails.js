import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
        <div>
            <h5>{description}</h5>
            <Link to={`/order/${_id}`}>
                <Button>order</Button>
            </Link>
        </div>
    );
};

export default PlaceDetails;