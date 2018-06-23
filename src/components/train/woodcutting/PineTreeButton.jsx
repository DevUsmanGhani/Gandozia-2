import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import  getRandomInt from "../../../assets/functions/getRandomInt";
import { chopLog } from "../../../state/actions/skills/actions-woodcutting";
import "../../../css/Woodcutting.css";

class PineTreeButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Pine Tree",
            buttonActive: true,
            class: "woodcutting-button pine",
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.inventory.logCount < this.props.inventory.maxLogCount){
            this.setState({
                buttonActive: false,
            });
        
            var woodcuttingBonus = this.props.woodcutting.woodcuttingBonus;
            var successThreshold = getRandomInt(1, 100);
            if(woodcuttingBonus >= successThreshold) {
                this.setState({
                text: "+1 Log!",
                class: "woodcutting-button woodcutting-success"});
                this.props.chopLog(1);
            }
            else{this.setState({
                text: "XXXX",
                class: "woodcutting-button woodcutting-failure"})
            }
            let respawnTime = getRandomInt(10000,17500);
            setTimeout(() => {
                this.setState({
                buttonActive: true,
                class: "woodcutting-button pine",
                text: "Pine Tree"
                })
            }, respawnTime);
        }
        else{
            alert("Your Log Bag is full!");
        }
    }
   
        
    
    render() {
        return (
        <Button onClick={() => this.handleClick()} disabled={!this.state.buttonActive} className={this.state.class} bsSize="large" bsStyle="success">
            {this.state.text}
        </Button>
        )
    }
}

function mapStateToProps(state){
    return{
      woodcutting: state.woodcutting,
      inventory: state.inventory,
    }
  }
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
      chopLog: chopLog,
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PineTreeButton)