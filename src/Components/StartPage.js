import React from 'react';
import { Link } from 'react-router-dom'

const StartPage = () => {
    return (
        <div>
            <Link to="/equipment-select">
            <button>START</button>
            </Link>
        </div>
    );
};

export default StartPage;