import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { chopLog } from "../../../state/actions/skills/actions-woodcutting";
import  getRandomInt from "../../../assets/functions/getRandomInt";
import "../../../css/Woodcutting.css";

class OakTreeButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Oak Tree",
            buttonActive: true,
            style: "success",
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.woodcutting.level >= 10){
            if(this.props.inventory.logCount < this.props.inventory.maxLogCount){
                this.setState({
                  buttonActive: false,
                });
            
                var woodcuttingBonus = this.props.woodcutting.woodcuttingBonus;
                var successThreshold = getRandomInt(1, 100);
                if(woodcuttingBonus >= successThreshold) {
                  this.setState({
                    text: "+2 Logs!",
                    style: "success"});
                    this.props.chopLog(2);
                }
                else{this.setState({
                    text: "XXXX",
                    style: "danger"})
                }
                var respawnTime = getRandomInt(10000, 20000);
                setTimeout(() => {
                  this.setState({
                    buttonActive: true,
                    style: "primary",
                    text: "Oak Tree"
                  })
                }, respawnTime);
              }
              else{
                alert("Your Log Bag is full!");
              }
        }
        else{
            alert("You need a woodcutting level of 10 to chop Oak Trees.")
        }
        
    }
    render() {
        return (
        <Button onClick={() => this.handleClick()} disabled={!this.state.buttonActive} className="woodcutting-button oak" bsSize="large" bsStyle={this.state.style}>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(OakTreeButton)