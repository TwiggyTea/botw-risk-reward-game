import React, { useState, useEffect, useRef } from 'react';
import EnemyCard from './EnemyCard'
import HeroCard from './HeroCard'
import MonsterData from '../MonsterData.json'
import { Route, Redirect } from 'react-router-dom'

// const battle = (monster, health, weapon ) => {

//     let damageDone = 0

//     while (monster.health > damageDone && health.length > 0) {
        
//             console.log(monster.health)
//             console.log(damageDone)
//             console.log(health)
    
//             for (let i = 0; i < monster.attack; i++) {
//                 health.pop()
//             }
//             damageDone += weapon.attack
//         }

//     if (health.length <= 0) {
//         console.log('you lose')
//     }

//     if (monster.health <= damageDone) {
//         console.log('you win');
//         <Redirect to="/fight-or-flee"/>
        
//     }

// }

const BattlePage = ({currentMonster, setCurrentMonster, heroWeapon, heroHealth, setHeroHealth}) => {

    const [damageDone, setDamageDone] = useState()
    let counter = useRef(0)
    let ranNum = Math.floor(Math.random() * MonsterData.length)
    let selection = MonsterData[ranNum]

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
                    counter.current++
            }, 5000 * counter)
        }

    useEffect(() => {
        
        setTimeout(() => {
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
                counter.current++
        }, 1500)

    }, [damageDone])

    if (currentMonster === undefined) {
        return <h1>LOADING...</h1>
    }

    // battle(currentMonster, heroHealth, heroWeapon)

    return (
        <div>
            <h1>{damageDone}</h1>
            <EnemyCard currentMonster={currentMonster}/>
            <HeroCard heroWeapon={heroWeapon} heroHealth={heroHealth} setHeroHealth={setHeroHealth}/>
        </div>
    );
};

export default BattlePage;