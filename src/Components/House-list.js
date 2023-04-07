// display a list of houses: make API request

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import House from './House';
import DeleteHouse from './Delete-house';

const HouseList = () => {
    const [houses, setHouses] = useState([]);

    useEffect(()=> {
        axios
        .get('https://ancient-taiga-31359.herokuapp.com/api/houses')
        .then(response => {
            setHouses(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleDelete = (house) => {
        axios
        .delete(`https://ancient-taiga-31359.herokuapp.com/api/houses/${house._id}`)
        .then(() => {
            setHouses(houses.filter( h => h.id !== house.id));
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="house-list">
            {houses.map((house) => {
                const key = house.id ? `house-${house.id}` : `house-${Math.random()}`;
            return (
                <div key={key} >
                    <House house={house} />                 
                    <DeleteHouse key={`delete-${house.id}`} house={house} onDelete={handleDelete} />
                </div>
            );
            })}
        </div>
    );
};

export default HouseList;