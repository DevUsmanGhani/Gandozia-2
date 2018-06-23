import React, { Component } from 'react';
import EnemyHealthBar from "./EnemyHealthBar";
import HeroHealthBar from "./HeroHealthBar";
import { connect } from "react-redux";
import FightButtons from "./FightButtons";

class FightCyclops extends Component {
  render() {

      
    return (
      <div className="fight">
        <EnemyHealthBar name={this.props.enemies.cyclops.name} currentHealth={this.props.enemies.cyclops.currentHealth} maxHealth={this.props.enemies.cyclops.maxHealth} />
        <FightButtons enemy={this.props.enemies.cyclops}/>
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

export default connect(mapStateToProps)(FightCyclops)