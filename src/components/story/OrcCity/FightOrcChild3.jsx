import React, { Component } from 'react';
import EnemyHealthBar from "../../train/combat/EnemyHealthBar";
import HeroHealthBar from "../../train/combat/HeroHealthBar";
import { connect } from "react-redux";
import FightButtons from "../../train/combat/FightButtons";
import { makeTrue } from "../../../state/actions/story/actions-story.js";
import { bindActionCreators } from "redux";
import "../../../css/Fight.css";

class FightOrcChild3 extends Component {
    componentDidMount() {
        var checkIfOrcChild3Dead = setInterval(() => {
            if(this.props.enemies.orcChild3.currentHealth <= 0){
                this.props.makeTrue("orcChild3Defeated")
                this.props.history.push("/orcLibraryBack");
                clearInterval(checkIfOrcChild3Dead);
            }
        }, 1000);
    }
    render() {
    return (
 
      <div className="fight">
        <EnemyHealthBar name={this.props.enemies.orcChild3.name} currentHealth={this.props.enemies.orcChild3.currentHealth} maxHealth={this.props.enemies.orcChild3.maxHealth} />
        <FightButtons enemy={this.props.enemies.orcChild3}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FightOrcChild3)