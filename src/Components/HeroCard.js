import React from 'react';

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
            <h1>Health: {heroHealth}</h1>
            <h1>{heroHealth.length}</h1>
            <img src={heroWeapon.image} alt="" />
            <h2>{heroWeapon.name}</h2>
            <h2>{heroWeapon.attack}</h2>
        </div>
    );
};

export default HeroCard;