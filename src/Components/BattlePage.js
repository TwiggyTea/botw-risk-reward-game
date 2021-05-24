import React, { useState, useEffect, useRef } from 'react';
import EnemyCard from './EnemyCard'
import HeroCard from './HeroCard'
import MonsterData from '../MonsterData.json'
import { Route, Redirect } from 'react-router-dom'
import { render } from '@testing-library/react';


const BattlePage = ({currentMonster, setCurrentMonster, heroWeapon, heroHealth, setHeroHealth, score, setScore, monstersAhead, setMaxMonsters, maxMonsters}) => {

    const [redirect, setRedirect] = useState({url: null})
    const [damageDone, setDamageDone] = useState()
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


        const battle = () => {
            setTimeout(() => {
                if (currentMonster?.health > damageDone && heroHealth.length > 0) {
        
                    console.log(currentMonster.health)
                    console.log(damageDone)
                    console.log(heroHealth)
                    console.log(counter)
            
                    for (let i = 0; i < currentMonster.attack; i++) {
                        let currentHealth = heroHealth.length - 1
                        setHeroHealth(Array(currentHealth).fill(0))
                    }
                    setDamageDone(damageDone + heroWeapon.attack)}
            }, 5000 * counter)
        }

    useEffect(() => {
        
        setTimeout(() => {

            if (currentMonster?.health <= damageDone) {

                setScore(score + (currentMonster.health * currentMonster.attack))

                if (counter.current >= monstersAhead) {
                    setRedirect({url: '/equipment-select'})
                } else {setRedirect({url: 'new battle'})
                    console.log('redirect attempted')
                    counter.current++}
            }

            if (currentMonster?.health > damageDone && heroHealth.length > 0) {
    
                console.log(currentMonster.health)
                console.log(damageDone)
                console.log(heroHealth)
                console.log(counter)

                let currentHealth;
        
                for (let i = 1; i <= currentMonster.attack; i++) {
                    console.log('monster hit')
                    currentHealth = heroHealth.length - i
                    console.log(currentHealth)
                    if (currentHealth > 0) {
                        setHeroHealth(Array(currentHealth).fill(0))
                    } else {
                        console.log('you lose')
                        return
                    }
                }
                setDamageDone(damageDone + heroWeapon.attack)}
        }, 1500)

    }, [damageDone])

    if (currentMonster === undefined) {
        return <h1>LOADING...</h1>
    }

    // battle(currentMonster, heroHealth, heroWeapon)
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
            console.log(`redirect useEffect ${redirect.url}`)
            return <Redirect to={redirect.url} />
        }
    }

    return (
        <div>
            <h1>{damageDone}</h1>
            <h1>SCORE: {score}</h1>
            <EnemyCard currentMonster={currentMonster}/>
            <HeroCard heroWeapon={heroWeapon} heroHealth={heroHealth} setHeroHealth={setHeroHealth}/>
        </div>
    );
};

export default BattlePage;