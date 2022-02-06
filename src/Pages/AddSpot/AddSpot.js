import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddSpot.css'

const AddSpot = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    reset()
                    history.push('/places')
                }
            })
    };
    return (
        <Container>
            <h1 className="place-text my-5">Add Spot Form</h1>
            <div className="add-spot">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder='Name' />
                    <textarea {...register("description", { required: true })} placeholder='Details' />
                    <input {...register("thumbnail", { required: true })} placeholder='Banner Image' />
                    <input {...register("img", { required: true })} placeholder='Thumbnail Image' />
                    <input type="number" {...register("cost", { required: true })} placeholder='Cost' />
                    <input className="button" type="submit" />
                </form>
            </div>
        </Container>
    );
};

export default AddSpot;