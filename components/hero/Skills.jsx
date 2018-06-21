import React, { Component } from 'react';
import SkillSlot from "./SkillSlot";
import { connect } from "react-redux";
import "../../css/Skills.css";


class Skills extends Component {
    renderSkills(){
      var propArray=[this.props.combat, this.props.arcania, this.props.hunting, this.props.woodcutting, this.props.mining]; 
      return (
        propArray.map(skill => <SkillSlot  key={skill.name} skill={skill.name} exp={skill.exp} expNeeded={skill.expNeeded} level={skill.level} />)
      )
    }
  render() {
    return(
      <div>
        <h1 className="skills-header">Skills</h1>
        <div className="well skills-container">
          {this.renderSkills()}
        </div>

      </div>
      
    )
   
   
  }
}

function mapStateToProps(state) {
    return {
        combat: state.combat,
        arcania: state.arcania,
        hunting: state.hunting,
        woodcutting: state.woodcutting,
        mining: state.mining,
    }
}


export default connect(mapStateToProps)(Skills)