import React, { Component } from 'react';
import EnemyHealthBar from "../../train/combat/EnemyHealthBar";
import HeroHealthBar from "../../train/combat/HeroHealthBar";
import { connect } from "react-redux";
import FightButtons from "../../train/combat/FightButtons";
import { makeTrue } from "../../../state/actions/story/actions-story";
import { bindActionCreators } from "redux";

class FightBandit2 extends Component {
    componentDidMount() {
        var checkIfBandit2Dead = setInterval(() => {
            if(this.props.enemies.bandit2.currentHealth <= 0){
                this.props.makeTrue("bandit2Killed");
                this.props.history.push("/banditCamp");
                clearInterval(checkIfBandit2Dead);
            }
        }, 1000);
    }
    render() {
    return (
 
      <div className="fight">
        <EnemyHealthBar name={this.props.enemies.bandit2.name} currentHealth={this.props.enemies.bandit2.currentHealth} maxHealth={this.props.enemies.bandit2.maxHealth} />
        <FightButtons enemy={this.props.enemies.bandit2}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FightBandit2)