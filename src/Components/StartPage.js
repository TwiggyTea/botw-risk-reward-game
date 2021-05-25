import React from 'react';
import AboutPage from './AboutPage'
import { Link } from 'react-router-dom'



const StartPage = () => {
    return (
        <div>
            <Link to="/equipment-select">
            <button>START</button>
            </Link>
            <Link to="/about">
            <button>ABOUT</button>
            </Link>
        </div>
    );
};

export default StartPage;