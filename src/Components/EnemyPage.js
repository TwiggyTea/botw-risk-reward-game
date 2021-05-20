import React, { useEffect } from 'react';
import EnemyCard from './EnemyCard'
import MonsterData from '../MonsterData.json'

const EnemyPage = ({currentMonster, setCurrentMonster}) => {


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

    return (
        <div>
            <EnemyCard currentMonster={currentMonster}/>
        </div>
    );
};

export default EnemyPage;