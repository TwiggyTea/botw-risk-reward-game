import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const FightOrFlee = ({monstersAhead, setMonstersAhead, maxMonsters, setMaxMonsters}) => {

useEffect(() => {
    setMonstersAhead(Math.floor(Math.random() * maxMonsters) + 2)
}, [])

    return (
        <div>

            <h1>There are {monstersAhead} monsters ahead, do you want to ...</h1>

            <Link to="/battle">
            <button>FIGHT!</button>
            </Link>
            or
            <Link to="/score-screen">
            <button>FLEE!</button>
            </Link>
        </div>
    );
};

export default FightOrFlee;