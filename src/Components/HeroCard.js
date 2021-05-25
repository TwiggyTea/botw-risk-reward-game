import React from 'react';
import heart from './heart.svg'

const HeroCard = ({heroWeapon, heroHealth, setHeroHealth}) => {

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
            <h1>Health: </h1>
            <div id="health-bar">{heroHealth.map((healthNum) => <img src={heart} alt="" />)}</div>
            <h1>{heroHealth.length}</h1>
            <img src={heroWeapon.image} alt="" />
            <h2>{heroWeapon.name}</h2>
        </div>
    );
};

export default HeroCard;