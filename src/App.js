import React, { useEffect, useState } from "react";
import './App.css';
import BattlePage from './Components/BattlePage'
import EquipmentSelectPage from './Components/EquipmentSelectPage'
import StartPage from './Components/StartPage'
import AboutPage from './Components/AboutPage'
import FightOrFlee from './Components/FightOrFlee'
import ScoreScreen from './Components/ScoreScreen'
import GameOver from './Components/GameOver'
import { Link, Route } from 'react-router-dom'

function App() {

  const [currentMonster, setCurrentMonster] = useState()
  const [equipment, setEquipment] = useState()
  const [heroWeapon, setHeroWeapon] = useState()
  const [score, setScore] = useState(0)
  const [heroHealth, setHeroHealth] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [monstersAhead, setMonstersAhead] = useState(3)
  const [maxMonsters, setMaxMonsters] = useState(1)

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

      <Link to="/game-over">
      <button>GAME OVER</button>
      </Link>


      <Route path="/" exact render={() => 
            <StartPage/>}/>

  <Route path="/about" exact render={() => 
              <AboutPage/>}/>

      <Route path="/equipment-select" render={() => 
            <EquipmentSelectPage equipment={equipment} setEquipment={setEquipment} setHeroWeapon={setHeroWeapon}/>}/>

      <Route path="/fight-or-flee" render={() => 
            <FightOrFlee heroHealth={heroHealth} setHeroHealth={setHeroHealth} monstersAhead={monstersAhead} setMonstersAhead={setMonstersAhead} maxMonsters={maxMonsters} setMaxMonsters={setMaxMonsters}/>}/>

      <Route path="/score-screen" render={() => 
            <ScoreScreen score={score}/>}/>

      <Route path="/game-over" render={() => 
                  <GameOver score={score}/>}/>

      <Route path="/battle" render={() => {
        return (
          <div>
            <BattlePage currentMonster={currentMonster} setCurrentMonster={setCurrentMonster} heroWeapon={heroWeapon} heroHealth={heroHealth} setHeroHealth={setHeroHealth} score={score} setScore={setScore} monstersAhead={monstersAhead} setMonstersAhead={setMonstersAhead} maxMonsters={maxMonsters} setMaxMonsters={setMaxMonsters}/>
          </div>
        )
      }     
            }/>
    </div>
  );
}

export default App;
