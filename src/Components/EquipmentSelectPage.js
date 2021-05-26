import React, { useEffect } from 'react';
import EquipmentSelectCard from './EquipmentSelectCard'

const EquipmentSelectPage = ({ equipment, setEquipment, setHeroWeapon}) => {

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
        <div className="equipment-select-page">
            <h1 id="equipment-select-text">Choose your weapon!</h1>
            <EquipmentSelectCard equipment={equipment} setHeroWeapon={setHeroWeapon}/>
            <EquipmentSelectCard equipment={equipment} setHeroWeapon={setHeroWeapon}/>
            <EquipmentSelectCard equipment={equipment} setHeroWeapon={setHeroWeapon}/>
        </div>
    );
};

export default EquipmentSelectPage;