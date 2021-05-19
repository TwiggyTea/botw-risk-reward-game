import React, { useEffect, useState } from "react";
import './App.css';
import EnemyPage from './Components/EnemyPage'
import EquipmentSelectPage from './Components/EquipmentSelectPage'

function App() {

  const [currentMonster, setCurrentMonster] = useState()
  const [equipment, setEquipment] = useState()

  return (
    <div>
      <EnemyPage currentMonster={currentMonster} setCurrentMonster={setCurrentMonster}/>
      <EquipmentSelectPage equipment={equipment} setEquipment={setEquipment}/>
    </div>
  );
}

export default App;
