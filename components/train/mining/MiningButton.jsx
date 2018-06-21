import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import  getRandomInt from "../../../assets/functions/getRandomInt";
import { mineCrystal } from "../../../state/actions/skills/actions-mining";
import "../../../css/Mining.css";

class MiningButton extends Component {
  constructor(props){
    super(props);
    this.state ={
      buttonActive : true,
      text: "Mine",
      style: "warning"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.props.inventory.crystalCount < this.props.inventory.maxCrystalCount){
      this.setState({
        buttonActive: false,
      });
  
      var miningBonus = this.props.mining.miningBonus;
      var successThreshold = getRandomInt(1, 100);
      if(miningBonus >= successThreshold) {
        this.setState({
          text: "+1 Crystal!",
          style: "success"});
          this.props.mineCrystal(1);
      }
      else{this.setState({
          text: "XXXX",
          style: "danger"})
      }
      var respawnTime = getRandomInt(5000, 15000);
      setTimeout(() => {
        this.setState({
          buttonActive: true,
          style: "warning",
          text: "Mine"
        })
      }, respawnTime);
    }
    else{
      alert("You're Crystal Pouch is full!");
    }
    
    
  }
  render() {
    return (
      <Button disabled={!this.state.buttonActive} onClick={() => this.handleClick()} className="mining-button" bsStyle={this.state.style} bsSize="large">
          {this.state.text}
      </Button>
    )
  }
}

function mapStateToProps(state){
  return{
    mining: state.mining,
    inventory: state.inventory,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    mineCrystal: mineCrystal,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MiningButton)