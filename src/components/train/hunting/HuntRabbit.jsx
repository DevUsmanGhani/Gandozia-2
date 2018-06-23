import React, { Component } from 'react';
import RabbitButton from "./RabbitButton";
import { ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux"


class HuntRabbit extends Component {

  render() {
    var field = [];
    for(let i = 0; i < 25; i++){
        field.push(<RabbitButton />)
    }
    return (
      <div className="hunting-container">
            <h1 className="hunting-header" >Hunt Rabbits</h1>
            <ButtonGroup >
                {field} 
            </ButtonGroup>
            <div className="hunting-info">
                <span>Food: {this.props.inventory.foodCount}/{this.props.inventory.maxFoodCount}</span>
                <span> Hunting Bonus: {this.props.hunting.huntingBonus}</span>
            </div>     
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
      hunting: state.hunting,
      inventory: state.inventory,
    }
  }


export default connect(mapStateToProps)(HuntRabbit)
