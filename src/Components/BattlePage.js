import React, { useState, useEffect, useRef } from 'react';
import EnemyCard from './EnemyCard'
import HeroCard from './HeroCard'
import MonsterData from '../MonsterData.json'
import { Route, Redirect } from 'react-router-dom'
import { render } from '@testing-library/react';


const BattlePage = ({currentMonster, setCurrentMonster, heroWeapon, heroHealth, setHeroHealth, score, setScore, monstersAhead, setMaxMonsters, maxMonsters}) => {

    const [redirect, setRedirect] = useState({url: null})
    const [damageDone, setDamageDone] = useState()
    const [isHurt, setIsHurt] = useState(false)
    let counter = useRef(1)
    let ranNum = Math.floor(Math.random() * MonsterData.length)
    let selection = MonsterData[ranNum]

    useEffect(() => {
        const tempMax = maxMonsters
        setHeroHealth([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        setMaxMonsters(tempMax + 1)
        }, [])

    useEffect(() => {
        
    }, [redirect])

    useEffect(() => {
        const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${selection.id}`;
    
        fetch(url)
            .then(res => res.json())
            .then(res => {
                res.data.attack = selection.attack
                res.data.health = selection.health
                res.data.name = selection.name
                setCurrentMonster(res.data)
            })
            .then(() => setDamageDone(0))
            .catch(err => {
                console.error(err);
            });
        }, [])


    useEffect(() => {

            if (currentMonster?.health <= damageDone) {

                setScore(score + (currentMonster.health * currentMonster.attack))

                if (counter.current >= monstersAhead) {
                    setRedirect({url: '/equipment-select'})
                } else {setRedirect({url: 'new battle'})
                    counter.current++}
                }
    }, [damageDone])

    const roundPassage = () => {

        setIsHurt(true)
        setTimeout(() => {
            setIsHurt(false)
        }, 700)

        if (currentMonster?.health <= damageDone) {

            setScore(score + (currentMonster.health * currentMonster.attack))

            if (counter.current >= monstersAhead) {
                setRedirect({url: '/equipment-select'})
            } else {setRedirect({url: 'new battle'})
                counter.current++}
        }

        if (currentMonster?.health > damageDone && heroHealth.length > 0) {

            let currentHealth;
    
            for (let i = 1; i <= currentMonster.attack; i++) {
                currentHealth = heroHealth.length - i
                if (currentHealth > 0) {
                    setHeroHealth(Array(currentHealth).fill(0))
                } else {
                    setRedirect({url: 'game-over'})
                    return
                }
            }
            setDamageDone(damageDone + heroWeapon.attack)}
    }

    if (heroWeapon === undefined) {
        return <Redirect to="/" />
    }

    if (currentMonster === undefined) {
        return <h1>LOADING...</h1>
    }

    if (redirect.url) {

        if (redirect.url == 'new battle') {
            const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${selection.id}`;
    
        fetch(url)
            .then(res => res.json())
            .then(res => {
                res.data.attack = selection.attack
                res.data.health = selection.health
                res.data.name = selection.name
                setCurrentMonster(res.data)
            })
            .then(() => setDamageDone(0))
            .catch(err => {
                console.error(err);
            })
            setRedirect({url: null})
        } else {
            return <Redirect to={redirect.url} />
        }
    }

    return (
        <div className="battle-page">
            <h1 id="game-score">SCORE: {score}</h1>
            <EnemyCard currentMonster={currentMonster} damageDone={damageDone} isHurt={isHurt} setIsHurt={setIsHurt}/>
            <button id="hit-button" onClick={() => roundPassage()}>HIT!</button>
            <HeroCard heroWeapon={heroWeapon} heroHealth={heroHealth} setHeroHealth={setHeroHealth}/>
        </div>
    );
};

export default BattlePage;