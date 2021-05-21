import React, { useEffect, useState } from "react";
import './App.css';
import BattlePage from './Components/BattlePage'
import EquipmentSelectPage from './Components/EquipmentSelectPage'
import StartPage from './Components/StartPage'
import FightOrFlee from './Components/FightOrFlee'
import { Link, Route } from 'react-router-dom'

function App() {

  const [currentMonster, setCurrentMonster] = useState()
  const [equipment, setEquipment] = useState()
  const [heroWeapon, setHeroWeapon] = useState()
  const [heroHealth, setHeroHealth] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
  console.log(heroWeapon)

  return (
    <div>

      <Link to="/">
      <button>START PAGE</button>
      </Link>

      <Link to="/equipment-select">
      <button>EQUIPMENT SELECT</button>
      </Link>


      <Link to="/fight-or-flee">
      <button>FIGHT OR FLEE</button>
      </Link>

      <Link to="/battle">
      <button>BATTLE</button>
      </Link>


      <Route path="/" exact render={() => 
            <StartPage/>}/>

      <Route path="/equipment-select" render={() => 
            <EquipmentSelectPage equipment={equipment} setEquipment={setEquipment} setHeroWeapon={setHeroWeapon}/>}/>

      <Route path="/fight-or-flee" render={() => 
            <FightOrFlee/>}/>

      <Route path="/battle" render={() => {
        return (
          <div>
            <BattlePage currentMonster={currentMonster} setCurrentMonster={setCurrentMonster} heroWeapon={heroWeapon} heroHealth={heroHealth} setHeroHealth={setHeroHealth}/>
          </div>
        )
      }     
            }/>
    </div>
  );
}

export default App;
