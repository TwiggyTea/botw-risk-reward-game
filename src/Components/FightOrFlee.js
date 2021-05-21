import React from 'react';
import { Link } from 'react-router-dom'

const FightOrFlee = () => {
    return (
        <div>
            <Link to="/battle">
            <button>FIGHT</button>
            </Link>
            or
            <Link to="/score-screen">
            <button>FLEE</button>
            </Link>
        </div>
    );
};

export default FightOrFlee;