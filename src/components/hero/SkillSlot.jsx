import React, { Component } from 'react';
import "../../css/Skills.css";

export default class SkillSlot extends Component {
  render() {
    var className = "skill skills-" + this.props.skill.toLowerCase();
    return (
      <div className={className}>
        <div>{this.props.skill}: {this.props.level}/50</div>
        <div className="skill-exp">
        EXP: {this.props.exp} | EXP Needed: {this.props.expNeeded} 
        </div>
      </div>
    )
  }
}
