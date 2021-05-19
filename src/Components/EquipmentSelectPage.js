import React, { useEffect } from 'react';
import EquipmentSelectCard from './EquipmentSelectCard'

const EquipmentSelectPage = ({ equipment, setEquipment}) => {

    useEffect(() => {
        const url = `https://botw-compendium.herokuapp.com/api/v2/category/equipment`;
    
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setEquipment(res)
            })
            .catch(err => {
                console.error(err);
            });
        }, [])

    return (
        <div>
            <EquipmentSelectCard equipment={equipment}/>
            <EquipmentSelectCard equipment={equipment}/>
            <EquipmentSelectCard equipment={equipment}/>
        </div>
    );
};

export default EquipmentSelectPage;