import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    const { name, description, img, cost } = order;
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
            <h5>{description}</h5>
            <h6>{user.displayName}</h6>
            <div className="book-trip">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={name} {...register("placeName", { required: true })} placeholder={name} />
                    <input defaultValue={displayName} {...register("userName", { required: true })} placeholder={displayName} />
                    <input defaultValue={email} {...register("userEmail", { required: true })} placeholder={email} />
                    <input defaultValue={cost} type="number" {...register("cost", { required: true })} placeholder={cost} />
                    <button className="btn btn-dark px-5" type="submit">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default Order;