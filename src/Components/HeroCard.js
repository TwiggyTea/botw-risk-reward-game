import React from 'react';
import heart from './heart.svg'

const HeroCard = ({heroWeapon, heroHealth}) => {

    if (heroWeapon === undefined) {
        return (        
        <div className="hero-card">
            <h2>No Weapon Equiped</h2>
            <h2>0 atk</h2>
        </div>
        );
    }

    return (
        <div className="hero-card">
            <div id="health-bar">{heroHealth.map((healthNum) => <img className="heart" src={heart} alt="" />)}</div>
            <img id="hero-weapon-image" src={heroWeapon.image} alt="" />
            <h2 id="hero-weapon-name">{heroWeapon.name}</h2>
        </div>
    );
};

export default HeroCard;