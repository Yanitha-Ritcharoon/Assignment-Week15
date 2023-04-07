// render a form for entering the details of a new house and make a POST request to the API to create the new house.

import React, { useState } from 'react';
import axios from 'axios';

const AddHouse = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');


    const handleSubmit = event => {
        event.preventDefault();

        axios.post('https://ancient-taiga-31359.herokuapp.com/api/houses', {
            name: name,
            description: description,
            price: price
        })
        .then(response => {
            onAdd(response.data);
            setName('');
            setDescription('');
            setPrice('');
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={event => setName(event.target.value)} />
            </label>
            <button type="submit" className='btn btn-success'>Add</button>
        </form>
    );
};

export default AddHouse;