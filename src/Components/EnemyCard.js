import React from 'react';

const EnemyCard = ({currentMonster}) => {

    return (
        <div className="enemy-card">
            <img src={currentMonster.image} alt="" />
            <h3>{currentMonster.name}</h3>
            <p>{currentMonster.description}</p>
        </div>
    );
};

export default EnemyCard;