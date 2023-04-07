import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditHouse = ({ house, onEdit }) => {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState(house.name || '');

    useEffect(() => {
        setName(house.name);
    }, [house]);

    const handleSubmit = event => {
        event.preventDefault();
        
        axios
            .put(`https://ancient-taiga-31359.herokuapp.com/api/houses/${house._id}`, {
            name: name
    
        })
        .then(response => {
            console.log(response.data);
            onEdit(response.data);
            setShowForm(false);
        })
        .catch(error => {
            console.log(error)
        });
    };

    const handleEditClick = () => {
        setShowForm(true);
    };

    const handleCancelClick = () => {
        setShowForm(false);
    };

    return (
        <>
        {!showForm && <button className='btn btn-primary' onClick={handleEditClick}>Edit</button>}
        {showForm && (
            <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                type="text" 
                value={name || ''} 
                onChange={event => setName(event.target.value)} 
                />
            </label>
            <button type="submit" className='btn btn-success'>Update</button>
            <button type="button" className='btn btn-danger' onClick={handleCancelClick}>
                Cancel
            </button>
        </form>
    )}
    </>
    );
};

export default EditHouse;
