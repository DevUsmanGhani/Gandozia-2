import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { bindActionCreators } from "redux";
import { restoreHealth, restoreArcana } from "./state/actions/combat/actions-fighting";
import { levelUp } from "./state/actions/skills";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import './App.css';
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";

import Shops from "./components//shops/Shops";
import CombatShop from "./components/shops/CombatShop";
import HuntingShop from "./components/shops/HuntingShop";
import WoodcuttingShop from "./components/shops/WoodcuttingShop"
import MiningShop from "./components/shops/MiningShop";

import Woodcutting from "./components/train/woodcutting/Woodcutting";
import GreenWoods from "./components/train/woodcutting/GreenWoods";

import Arcania from "./components/train/arcania/Arcania";

import Combat from "./components/train/combat/Combat";
import FightGoblin from "./components/train/combat/FightGoblin";
import FightBandit from "./components/train/combat/FightBandit";
import FightOrc from "./components/train/combat/FightOrc";
import FightCyclops from "./components/train/combat/FightCyclops";

import Hunting from "./components/train/hunting/Hunting";
import HuntRabbit from './components/train/hunting/HuntRabbit';

import Mining from "./components/train/mining/Mining";
import SmallCrystalCavern from "./components/train/mining/SmallCrystalCavern";

import Skills from './components/hero/Skills';
import Equipment from "./components/hero/Equipment";
import Inventory from './components/hero/Inventory';
import  TransmuteLogs  from './components/train/arcania/TransmuteLogs';
import  ArcaniaShop  from './components/shops/ArcaniaShop';

import Overview from "./components/story/Overview";
import ManTiedToTree from './components/story/GandozianWoods/ManTiedToTree';
import  BanditCamp  from './components/story/GandozianWoods/BanditCamp';
import FightBandit1 from "./components/story/GandozianWoods/FightBandit1";
import FightBandit2 from './components/story/GandozianWoods/FightBandit2';
import FightBanditChief from './components/story/GandozianWoods/FightBanditChief';
import  OrcCityGates  from './components/story/GandozianWoods/OrcCityGates';
import FightOrcChampion from './components/story/GandozianWoods/FightOrcChampion';
import MiningCaverns from './components/story/OrcCity/MiningCaverns';
import OrcLibrary from './components/story/OrcCity/OrcLibrary';
import FightLibraryMaster from './components/story/OrcCity/FightLibraryMaster';
import OrcLibraryBack from './components/story/OrcCity/OrcLibraryBack';
import FightOrcChild1 from './components/story/OrcCity/FightOrcChild1';
import FightOrcChild2 from './components/story/OrcCity/FightOrcChild2';
import FightOrcChild3 from './components/story/OrcCity/FightOrcChild3';


class App extends React.Component {
      
    componentDidMount() {
      this.autoRestoreHealth = setInterval(() => {
        if(this.props.combat.currentHealth < this.props.combat.maxHealth) {
          this.props.restoreHealth(this.props.combat.autoHealBonus);
        }    
      }, 2000);
      this.autoRestoreArcana = setInterval(() => {
          if(this.props.arcania.currentArcana < this.props.arcania.maxArcana) {
            this.props.restoreArcana(this.props.arcania.autoRestoreBonus);
          }        
      }, 1000);

      this.checkForLevelUp = setInterval(() => {
        let skillsArray = [this.props.combat, this.props.arcania, this.props.hunting, this.props.woodcutting, this.props.mining];
        for(var i in skillsArray){
          if(skillsArray[i].exp >= skillsArray[i].expNeeded){
            this.props.levelUp(skillsArray[i].name);
            toast.info(
              "Congratulations you have achieved " + skillsArray[i].name + " level " + (skillsArray[i].level + 1) + "!",
              {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 10000,
              }
            );
          }
        }
      }, 1000);
    }

    render() {
      return(
        <Router>
          <div className="app-container">
            <TopBar />
            <div >
            
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Overview} />
            <Route path={`${process.env.PUBLIC_URL}/manTiedToTree`} component={ManTiedToTree} />
            <Route path="/banditCamp" component={BanditCamp} />
            <Route path="/fightBandit1" component={FightBandit1} />
            <Route path="/fightBandit2" component={FightBandit2} />
            <Route path="/fightBanditChief" component={FightBanditChief} />
            <Route path="/orcCityGates" component={OrcCityGates} />
            <Route path="/fightOrcChampion" component={FightOrcChampion} />
            <Route path="/miningCaverns" component={MiningCaverns} />
            <Route path="/orcLibrary" component={OrcLibrary} />
            <Route path="/fightLibraryMaster" component={FightLibraryMaster} />
            <Route path="/orcLibraryBack" component={OrcLibraryBack} />
            <Route path="/fightOrcChild1" component={FightOrcChild1} />
            <Route path="/fightOrcChild2" component={FightOrcChild2} />
            <Route path="/fightOrcChild3" component={FightOrcChild3} />

            <Route path="/shops" component={Shops} />
            <Route path="/combatShop" component={CombatShop} />
            <Route path="/arcaniaShop" component={ArcaniaShop} />
            <Route path="/huntingShop" component={HuntingShop} />
            <Route path="/woodcuttingShop" component={WoodcuttingShop} />
            <Route path="/miningShop" component={MiningShop} />
           
            <Route path="/skills" component={Skills} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/inventory" component={Inventory} />
            
            <Route path="/woodcutting" component={Woodcutting} />
            <Route path="/greenWoods" component={GreenWoods} />
            
            <Route path="/combat" component={Combat} />
            <Route path="/fightGoblin" component={FightGoblin} />
            <Route path="/fightBandit" component={FightBandit} />
            <Route path="/fightOrc" component={FightOrc} />
            <Route path="/fightCyclops" component={FightCyclops} />
           
            <Route path="/arcania" component={Arcania} />
            <Route path="/transmuteLogs" component={TransmuteLogs} />
            
            <Route path="/mining" component={Mining} />
            <Route path="/smallCrystalCavern" component={SmallCrystalCavern} />
            
            <Route path="/hunting" component={Hunting} />
            <Route path="/huntRabbit" component={HuntRabbit} />
            
            </div>
            <BottomBar />  
          </div>
        </Router>
      )
    }
  }

  function mapStateToProps(state) {
    return{
      combat: state.combat,
      arcania: state.arcania,
      hunting: state.hunting,
      woodcutting: state.woodcutting,
      mining: state.mining
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        restoreHealth: restoreHealth,
        restoreArcana: restoreArcana,
        levelUp: levelUp,
    }, dispatch)
    
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App)