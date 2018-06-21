import React, { Component } from 'react';
import EnemyHealthBar from "../../train/combat/EnemyHealthBar";
import HeroHealthBar from "../../train/combat/HeroHealthBar";
import { connect } from "react-redux";
import FightButtons from "../../train/combat/FightButtons";
import { makeTrue } from "../../../state/actions/story/actions-story.js";
import { bindActionCreators } from "redux";

class FightBanditChief extends Component {
    componentDidMount() {
        var checkIfBanditChiefDead = setInterval(() => {
            if(this.props.enemies.banditChief.currentHealth <= 0){
                this.props.makeTrue("banditChiefKilled");
                this.props.makeTrue("orcCityGatesFound")
                this.props.history.push("/banditCamp");
                clearInterval(checkIfBanditChiefDead);
            }
        }, 1000);
    }
    render() {
    return (
 
      <div className="fight">
        <EnemyHealthBar name={this.props.enemies.banditChief.name} currentHealth={this.props.enemies.banditChief.currentHealth} maxHealth={this.props.enemies.banditChief.maxHealth} />
        <FightButtons enemy={this.props.enemies.banditChief}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FightBanditChief)