import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const EquipmentSelectCard = ({equipment, setHeroWeapon}) => {

    if (equipment === undefined) {
        return <h1>LOADING...</h1>
    }

    let ranNum = Math.floor(Math.random() * equipment.data.length)

    for (let i = false; i === false; i) {
        if (equipment.data[ranNum].attack < 1) {
            ranNum = Math.floor(Math.random() * equipment.data.length)
        } else {
            i = true
        }
    }

    let selection = equipment.data[ranNum]

    return (
        <div className="equipment-select-card">
            <img src={selection.image} alt="" className="equipment-select-image"/>
            <h5 className="equipment-select-name">{selection.name}</h5>
            <p className="equipment-select-description">{selection.description}</p>
            <Link to="/fight-or-flee">
            <button onClick={() => setHeroWeapon(selection)}>Choose Weapon</button>
            </Link>
        </div>
    );
};

export default EquipmentSelectCard;