import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

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
        <div>
            <h1>add spot</h1>
            <div className="add-trip">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder='Name' />
                    <textarea {...register("description", { required: true })} placeholder='Details' />
                    <input {...register("thumbnail", { required: true })} placeholder='Banner Image' />
                    <input {...register("img", { required: true })} placeholder='Thumbnail Image' />
                    <input type="number" {...register("cost", { required: true })} placeholder='Cost' />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddSpot;