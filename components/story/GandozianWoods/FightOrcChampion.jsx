import React, { Component } from 'react';
import EnemyHealthBar from "../../train/combat/EnemyHealthBar";
import HeroHealthBar from "../../train/combat/HeroHealthBar";
import { connect } from "react-redux";
import FightButtons from "../../train/combat/FightButtons";
import { makeTrue } from "../../../state/actions/story/actions-story.js";
import { bindActionCreators } from "redux";
import "../../../css/Fight.css";

class FightOrcChampion extends Component {
    componentDidMount() {
        var checkIfOrcChampionDead = setInterval(() => {
            if(this.props.enemies.orcChampion.currentHealth <= 0){
                this.props.makeTrue("orcChampionDefeated")
                this.props.history.push("/orcCityGates");
                clearInterval(checkIfOrcChampionDead);
            }
        }, 1000);
    }
    render() {
    return (
 
      <div className="fight">
        <EnemyHealthBar name={this.props.enemies.orcChampion.name} currentHealth={this.props.enemies.orcChampion.currentHealth} maxHealth={this.props.enemies.orcChampion.maxHealth} />
        <FightButtons enemy={this.props.enemies.orcChampion}/>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        makeTrue: makeTrue,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FightOrcChampion)