import React,{ useState } from 'react';

const EnemyCard = ({currentMonster, damageDone, isHurt, setIsHurt}) => {

    const healthPercent = ((currentMonster.health - damageDone) * 100 / currentMonster.health)


    return (
        <div className="enemy-card">

            {!isHurt ? <img id="monster-image" src={currentMonster.image} alt="" /> : <img id="monster-image" className="animate-hit" src={currentMonster.image} alt="" />}

            <h3 id="monster-name">{currentMonster.name}</h3>

            <div className="progress">
                <div id="monster-health-bar" className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${healthPercent}%`}}></div>
            </div>

            <p id="monster-description">{currentMonster.description}</p>
        </div>
    );
};

export default EnemyCard;