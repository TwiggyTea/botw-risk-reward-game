import React, { useEffect } from 'react';
import EnemyCard from './EnemyCard'

const EnemyPage = ({currentMonster, setCurrentMonster}) => {

    useEffect(() => {
        const url = `https://botw-compendium.herokuapp.com/api/v2/category/monsters`;
    
        fetch(url)
            .then(res => res.json())
            .then(res => {
                const monsterList = res.data
                let ranNum = Math.floor(Math.random() * monsterList.length)
                setCurrentMonster(monsterList[ranNum])
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