import React, { useEffect } from 'react';

const EquipmentSelectCard = ({equipment}) => {

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
        <div>
            <img src={selection.image} alt="" />
            <h5>{selection.name}</h5>
            <h2>{selection.attack}</h2>
            <p>{selection.description}</p>
        </div>
    );
};

export default EquipmentSelectCard;