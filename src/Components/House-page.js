import React, { useState } from 'react';
import HouseList from './House-list';
import AddHouse from './Add-house';

const HousesPage = () => {
    const [houses, setHouses] = useState([]);
    const [selectedHouse, setSelectedHouse] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const handleAddHouse = newHouse => {
        setHouses([...houses, newHouse]);
    };

    const handleDeleteHouse = deletedHouse => {
        const updatedHouses = houses.filter(house => house.id !== deletedHouse.id);
        setHouses(updatedHouses);
        setSelectedHouse(null);
        setEditMode(false);
    };

    const handleSelectHouse = house => {
        setSelectedHouse(house);
        setEditMode(true);
    };

    return (
        <div>
            <h1>Hotel Rooms</h1>
            <AddHouse onAdd={handleAddHouse} />
            <br />
            <HouseList
            houses={houses} onEdit={handleSelectHouse} onDelete={handleDeleteHouse} />
        </div>
    );
};

export default HousesPage;