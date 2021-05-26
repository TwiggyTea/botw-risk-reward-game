import React from 'react';

const ScoreScreen = ({score}) => {
    return (
        <div className="score-screen">
            <h1 id="score-screen-message">Nice job!
            You live to fight another day!</h1>
            <h1 id="score-screen-score">SCORE: {score}</h1>
        </div>
    );
};

export default ScoreScreen;