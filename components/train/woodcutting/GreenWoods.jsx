import React, { Component } from 'react';
import OakTreeButton from "./OakTreeButton"
import PineTreeButton from "./PineTreeButton";
import { ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";

class MineSmallCrystals extends Component {
    
    render() {
        var buttons = [];
        var oaks = [3,7,9,10,19,20,21]
        for(let i = 0; i < 25; i++) {
            if(oaks.includes(i)) {
                buttons.push(<OakTreeButton key={i} />);
            }
            else{
                buttons.push(<PineTreeButton key={i} />);
            }
        }
        return (
        <div className="woodcutting-container">
            <h1 className="woodcutting-header" >Green Woods</h1>
            <ButtonGroup className="woodcutting-button-toolbar">
                {buttons} 
            </ButtonGroup>
            <div className="woodcutting-info">
                <span> Logs: {this.props.inventory.logCount}/{this.props.inventory.maxLogCount}</span>
                <span> Woodcutting Bonus: {this.props.woodcutting.woodcuttingBonus}</span>
            </div>     
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
      woodcutting: state.woodcutting,
      inventory: state.inventory,
    }
  }

export default connect(mapStateToProps)(MineSmallCrystals)