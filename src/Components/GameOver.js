import React from 'react';
import { Link, Route } from 'react-router-dom'

const GameOver = ({setScore, setMaxMonsters}) => {

    const resetGame = () => {
        setScore(0)
        setMaxMonsters(1)
    }

    return (
        <div className="game-over">
            <h1 id="game-over-text">
                GAME OVER
            </h1>
        <div id="play-again-button-container">
            <Link to="/">
                <button onClick={resetGame()} id="play-again-button">PLAY AGAIN?</button>
            </Link>
        </div>
        </div>
    );
};

export default GameOver;