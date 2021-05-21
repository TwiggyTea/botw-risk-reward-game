import React, { useEffect } from 'react';
import EnemyCard from './EnemyCard'
import HeroCard from './HeroCard'
import MonsterData from '../MonsterData.json'



const battle = (monster, health, weapon ) => {

    let damageDone = 0

    while (monster.health > damageDone && health.length > 0) {
        
            console.log(monster.health)
            console.log(damageDone)
            console.log(health)
    
            for (let i = 0; i < monster.attack; i++) {
                health.pop()
            }
            damageDone += weapon.attack
        }

    if (health.length <= 0) {
        console.log('you lose')
    }

    if (monster.health <= damageDone) {
        console.log('you win')
    }

}

const BattlePage = ({currentMonster, setCurrentMonster, heroWeapon, heroHealth, setHeroHealth}) => {

    console.log(MonsterData)
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
                console.log(res.data)
            })
            .catch(err => {
                console.error(err);
            });
        }, [])

    if (currentMonster === undefined) {
        return <h1>LOADING...</h1>
    }

    battle(currentMonster, heroHealth, heroWeapon)

    return (
        <div>
            <EnemyCard currentMonster={currentMonster}/>
            <HeroCard heroWeapon={heroWeapon} heroHealth={heroHealth} setHeroHealth={setHeroHealth}/>
        </div>
    );
};

export default BattlePage;