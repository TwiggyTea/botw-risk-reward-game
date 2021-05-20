import React, { useEffect, useState } from "react";
import './App.css';
import EnemyPage from './Components/EnemyPage'
import EquipmentSelectPage from './Components/EquipmentSelectPage'
import HeroCard from './Components/HeroCard'

function App() {

  const [currentMonster, setCurrentMonster] = useState()
  const [equipment, setEquipment] = useState()
  const [heroWeapon, setHeroWeapon] = useState()
  console.log(heroWeapon)

  return (
    <div>
      <EquipmentSelectPage equipment={equipment} setEquipment={setEquipment} setHeroWeapon={setHeroWeapon}/>
      <EnemyPage currentMonster={currentMonster} setCurrentMonster={setCurrentMonster}/>
      <HeroCard heroWeapon={heroWeapon}/>
    </div>
  );
}

export default App;
