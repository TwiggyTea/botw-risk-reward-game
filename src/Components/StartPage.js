import React from 'react';
import { Link } from 'react-router-dom'



const StartPage = () => {
    return (
        <div className="start-page">
            <h1 id="title">FIGHT OR FLEE?</h1>
            <div id="start-button-container">
                <Link to="/equipment-select">
                <button id="start-button">START</button>
                </Link>
                <Link to="/about">
                <button id="about-button">ABOUT</button>
                </Link>
            </div>
        </div>
    );
};

export default StartPage;