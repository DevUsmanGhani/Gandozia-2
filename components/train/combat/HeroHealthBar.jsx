import React, { Component } from 'react';
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import EatForm from "./EatForm"
import AbsorbForm from "./AbsorbForm";

class HeroHealthBar extends Component {
  render() {
    var healthPercent = this.props.combat.currentHealth / this.props.combat.maxHealth * 100;
    return (
      <div className= "hero-health-bar">
        <div className="hero-name-container"><span className="hero-name">You</span></div>
        <div className="health-numbers">
          <span className="black">Health: </span>
          <span className={healthPercent >= 50 ? "green-text" : "red-text"}>{this.props.combat.currentHealth}/{this.props.combat.maxHealth}</span>
          <EatForm />
          <AbsorbForm />        
          <ProgressBar>
          <ProgressBar striped active bsStyle={healthPercent >= 50  ? "success" : "danger"} now={healthPercent}>
          </ProgressBar>
        </ProgressBar>
        </div>
       
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        combat: state.combat
    }
}

export default connect(mapStateToProps)(HeroHealthBar)
