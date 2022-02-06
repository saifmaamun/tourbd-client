import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orderedItems, setOrderedItems] = useState([]);
    useEffect(() => {
        fetch('https://limitless-ridge-49943.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item => item.userEmail === user.email)
                setOrderedItems(filtered)
            })
    }, []);

    console.log(orderedItems.placeName)

    // delete function
    const handleDelete = id => {
        const url = `https://limitless-ridge-49943.herokuapp.com/orders/${id}`
        if (window.confirm("wanna delete this item?")) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orderedItems.filter(orderedItem => orderedItem._id !== id)
                    setOrderedItems(remaining)
                })
        }
    }


    return (
        <Container>
            <h1 className="my-5 place-text">{user.displayName}'s orders</h1>
            {orderedItems.length!==0 ? 
                <Container>
                    {
                        orderedItems.map(orderedItem => <div
                            key={orderedItem._id}>
                            <Row className="m-5 border border-light shadow-sm p-3 rounded">
                                <Col md={8}>
                                    <div className="text-start">
                                        <h1>Place: {orderedItem.placeName}</h1>
                                        <h5>Traveler: {orderedItem.userName}</h5>
                                        <h5>Email: {orderedItem.userEmail}</h5>
                                        <h5>Total Cost: ${orderedItem.cost}/Per Person  ||  for 1 week</h5>
                                    </div>
                                </Col>
                                <Col className="text-center mt-5 pt-3" md={4}>
                                    <button className="btn button text-light px-4 py-2  fw-bold" onClick={() => handleDelete(orderedItem._id)}>Remove</button>
                                </Col>
                            </Row>
                        </div>)
                    }
                </Container>
                :
                <div>
                    <h4>check our tourist spots</h4>
                    <h1>no item in your name</h1>
                <Link to='/places'> go choose</Link>
                </div>
        }
        </Container>
    );
};

export default MyOrder;