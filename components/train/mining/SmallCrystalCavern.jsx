import React, { Component } from 'react';
import MiningButton from "./MiningButton";
import { ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";

class SmallCrystalCavern extends Component {
    
    render() {
        var buttons = [];
        for(let i = 0; i < 25; i++) {
            buttons.push(<MiningButton crystalDropAmount={1} key={i} />)
        }
        return (
        <div className="mining-container">
            <h1 className="mining-header">Small Crystal Cavern</h1>
            <ButtonGroup>
                {buttons} 
            </ButtonGroup>
            <div className="mining-info">
                <span>Arcanic Crystals: {this.props.inventory.crystalCount}/{this.props.inventory.maxCrystalCount}</span>
                <span> Mining Bonus: {this.props.mining.miningBonus}</span>
            </div>     
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
      mining: state.mining,
      inventory: state.inventory,
    }
  }

export default connect(mapStateToProps)(SmallCrystalCavern)