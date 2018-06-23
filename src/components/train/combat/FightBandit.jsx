import React, { Component } from 'react';
import EnemyHealthBar from "./EnemyHealthBar";
import HeroHealthBar from "./HeroHealthBar";
import { connect } from "react-redux";
import FightButtons from "./FightButtons";

class FightBandit extends Component {
  render() {

      
    return (
 
      <div className="fight">
        <EnemyHealthBar name={this.props.enemies.bandit.name} currentHealth={this.props.enemies.bandit.currentHealth} maxHealth={this.props.enemies.bandit.maxHealth} />
        <FightButtons enemy={this.props.enemies.bandit}/>
        <HeroHealthBar currentHealth={this.props.combat.currentHealth} maxHealth={this.props.combat.maxHealth} />
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        combat: state.combat,
        inventory: state.inventory,
        enemies: state.enemies,
        arcania: state.arcania,
    }
}

export default connect(mapStateToProps)(FightBandit)