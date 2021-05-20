import React from 'react';

const EnemyCard = ({currentMonster}) => {

    return (
        <div className="enemy-card">
            <img src={currentMonster.image} alt="" />
            <h3>{currentMonster.name}</h3>
            <h2>Health: {currentMonster.health}</h2>
            <h2>Attack: {currentMonster.attack}</h2>
            <p>{currentMonster.description}</p>
        </div>
    );
};

export default EnemyCard;