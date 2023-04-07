// display a confirmation dialog and make a DELETE request to the API to delete the selected house.

import React from 'react';
import axios from 'axios';

const DeleteHouse = ({ house, onDelete }) => {
    const handleDelete = () => {
        console.log(house);
        if (window.confirm(`Do you want to delete ${house.name}?`)) {
            axios
            .delete(`https://ancient-taiga-31359.herokuapp.com/api/houses/${house._id}`)
            .then(() => {
                onDelete(house);
            })
            .catch(error => {
                console.log(error);
            });
        }
    };

    return (
        <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
    );
};

export default DeleteHouse;