import React from 'react';
import { Link } from 'react-router-dom'

const ScoreScreen = ({score, setMaxMonsters, setScore}) => {

    const resetGame = () => {
        setScore(0)
        setMaxMonsters(1)
    }

    return (
        <div className="score-screen">
            <h1 id="score-screen-message">Nice job!
            You live to fight another day!</h1>
            <h1 id="score-screen-score">SCORE: {score}</h1>
            <div id="score-play-again-button-container">
            <Link to="/">
                <button onClick={() => resetGame()} id="score-play-again-button">PLAY AGAIN?</button>
            </Link>
            </div>
        </div>
    );
};

export default ScoreScreen;