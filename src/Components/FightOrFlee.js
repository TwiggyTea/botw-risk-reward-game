import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const FightOrFlee = ({monstersAhead, setMonstersAhead, maxMonsters, setMaxMonsters}) => {

useEffect(() => {
    setMonstersAhead(Math.floor(Math.random() * maxMonsters) + 2)
}, [])

    return (
        <div className="fight-or-flee-page">

            <h1 id="monsters-ahead">There are {monstersAhead} monsters ahead, do you want to ...</h1>

            <div id="fight-flee-container">
                <Link to="/battle">
                <button id="fight-button">FIGHT!</button>
                </Link>
                OR
                <Link to="/score-screen">
                <button id="flee-button">FLEE!</button>
                </Link>
            </div>
        </div>
    );
};

export default FightOrFlee;