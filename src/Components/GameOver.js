import React from 'react';
import { Link, Route } from 'react-router-dom'

const GameOver = () => {

    const resetGame = () => {

    }

    return (
        <div className="game-over">
            <h1 id="game-over-text">
                GAME OVER
            </h1>
        <div id="play-again-button-container">
            <Link to="/">
                <button id="play-again-button">PLAY AGAIN?</button>
            </Link>
        </div>
        </div>
    );
};

export default GameOver;