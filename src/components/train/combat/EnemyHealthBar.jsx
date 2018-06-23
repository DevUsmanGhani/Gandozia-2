import React, { Component } from 'react';
import { ProgressBar } from "react-bootstrap";

export default class EnemyHealthBar extends Component {
  render() {
    var healthPercent = this.props.currentHealth / this.props.maxHealth * 100;
    return (
      <div className = "enemy-health-bar">
        <div className="enemy-name-container"><span className="enemy-name">{this.props.name}</span></div>
        <div className="health-numbers">
          <span className="black">Health: </span>
          <span className={healthPercent >= 50 ? "green-text" : "red-text"}>{this.props.currentHealth}/{this.props.maxHealth}</span>
          <ProgressBar>
          <ProgressBar striped active bsStyle={healthPercent >= 50  ? "success" : "danger"} now={healthPercent}>
          </ProgressBar>
          </ProgressBar>
        </div>

        
      </div>
    )
  }
}

