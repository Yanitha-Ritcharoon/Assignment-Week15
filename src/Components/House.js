//component to represent the resource

import React from 'react';
import { useState } from 'react';
import EditHouse from './Edit-house';

const House = ({ house }) => {
    const[myHouse, setMyHouse] = useState(house)
    const handleEdit = (house) => {
        setMyHouse(house);
    };
    console.log(house);

    return (
        <div>
            <h2>{myHouse.name}</h2>
            <EditHouse house={house} onEdit={handleEdit} />
        </div>
    );
};

export default House;
