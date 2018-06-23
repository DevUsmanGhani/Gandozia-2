import React, { Component } from 'react';
import EnemyHealthBar from "../../train/combat/EnemyHealthBar";
import HeroHealthBar from "../../train/combat/HeroHealthBar";
import { connect } from "react-redux";
import FightButtons from "../../train/combat/FightButtons";
import { makeTrue } from "../../../state/actions/story/actions-story.js";
import { bindActionCreators } from "redux";
import "../../../css/Fight.css";

class FightLibraryMaster extends Component {
    componentDidMount() {
        var checkIfLibraryMasterDead = setInterval(() => {
            if(this.props.enemies.libraryMaster.currentHealth <= 0){
                this.props.makeTrue("libraryMasterDefeated")
                this.props.history.push("/orcLibrary");
                clearInterval(checkIfLibraryMasterDead);
            }
        }, 1000);
    }
    render() {
    return (
 
      <div className="fight">
        <EnemyHealthBar name={this.props.enemies.libraryMaster.name} currentHealth={this.props.enemies.libraryMaster.currentHealth} maxHealth={this.props.enemies.libraryMaster.maxHealth} />
        <FightButtons enemy={this.props.enemies.libraryMaster}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FightLibraryMaster)