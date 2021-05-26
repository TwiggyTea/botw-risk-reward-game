import React from 'react';
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <div className="about-page">
            <p id="about-text">
                This is a game about managing risk and reward!
                Your goal is to gain as many points as you can by defeating monsters, without losing all of your hearts.
                <br />
                <br />
                First you will choose a weapon. 
                Then you have to choose if you fight the monsters ahead, or if you flee.
                <br />
                <br />
                If you flee, your run ends and you get to keep all of your points!
                <br />
                <br />
                If you decide to fight there will be a set number of monsters ahead of you, and you must keep battling until all the monsters are defeated, or you lose your hearts.
                <br />
                If you defeat all of the monsters you restore your health and you will once again choose a weapon and decide if you fight or flee.
                <br />
                If you lose all of your hearts, that is game over! Your run ends and you lose all of your points!
                <br />
                <br />
                Your goal is to keep fighting as long as you can, and flee at just the right moment.
                <br />
                Good luck!
            </p>
            <Link to="/">
            <button id="back-button">back</button>
            </Link>
        </div>
    );
};

export default AboutPage;