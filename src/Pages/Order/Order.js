import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';

const Order = () => {
    const { user } = useAuth();
    const { displayName, email } = user;
    const history = useHistory();
    const { id } = useParams();
    const [order, setOrder] = useState({})
    const { name, description, img,thumbnail, cost } = order;
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            placeName: name,
            userName: displayName,
            userEmail: email,
            cost: cost
        }
    });


    useEffect(() => {
        fetch(`https://limitless-ridge-49943.herokuapp.com/placeDetails/${id}`)
            .then(res => res.json())
        .then(data=>setOrder(data))
    }, [order])


// submitting
    const onSubmit = data => {
        console.log(data)
        axios.post('https://limitless-ridge-49943.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    history.push('/myorder')
                }
            })
    };








    return (
        <div>
            <div>
                <Container className="my-5">
                    <Row>
                            <Col lg={7} md={6}sm={6}>
                                <div className="mt-2 rounded">
                                    <img className=" w-50 mx-auto my-3 rounded" src={thumbnail} alt="" />
                                </div>
                                <div className="pt-3">
                                    <h1 >{name}</h1>
                                    <p>{description}</p>
                                    <br />
                                    <div className=""><span className="fs-5 fw-bold">Cost: ${cost}/per person  ||   For: 1 week</span>
                                    </div>
                                </div>
                            </Col>
                        <Col lg={5} md={6}>
                            <div className="">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className="p-3 my-2" defaultValue={name} {...register("placeName", { required: true })} placeholder={name} /> <br />
                                    <input className="p-3 my-2" defaultValue={displayName} {...register("userName", { required: true })} placeholder={displayName} /> <br />
                                    <input className="p-3 my-2" defaultValue={email} {...register("userEmail", { required: true })} placeholder={email} /> <br />
                                    <input className="p-3 mt-2 mb-4" defaultValue={cost} type="number" {...register("cost", { required: true })} placeholder={cost} /> <br />
                                    <button className="btn button py-3 text-light px-5" type="submit">Book Now</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Order;