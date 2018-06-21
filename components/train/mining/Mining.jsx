import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import {  errorNotification } from "../../../assets/functions/notifications";

class Mining extends Component {
    
    handleClick(cavernName) {
        switch(cavernName){
            case "smallCrystalCavern":{
                this.props.history.push("/smallCrystalCavern");
                break;
            }
            case "arcanicCavern": {
                if(this.props.mining.level >= 20){
                    this.props.history.push("/arcanicCavern");
                }
                else{
                    errorNotification("You must have a Mining level of 10 to enter the Arcanic Cavern.");
                }
                break;
            }
            case "shiningCavern": {
                if(this.props.mining.level >= 20){
                    this.props.history.push("/shiningCavern");
                }
                else{
                    errorNotification("You must have a Mining level of 20 to enter the Shining Cavern.");
                }
                break;
            }
            case "holyCavern": {
                if(this.props.mining.level >= 30){
                    this.props.history.push("/holyCavern");
                }
                else{
                    errorNotification("You must have a Mining level of 30 to enter the Holy Cavern.");
                }
                break;
            }
            case "superiorArcanicCavern": {
                if(this.props.mining.level >= 40){
                    this.props.history.push("/superiorArcanicCavern.");
                }
                else{
                    errorNotification("You must have a Mining level of 40 to enter the Superior Arcanic Cavern.");
                }
                break;
            }
            default:{
                break;
            }
        }
    }
  render() {
    return (
      <div className="well mining-well">
            <h1 className="well-header mining-main-header" >Mining</h1>
            <Button className="mining-route-button" onClick={() => this.handleClick("smallCrystalCavern")} bsStyle="warning" bsSize="large" block>
                Small Crystal Cavern
            </Button>
            <Button className="mining-route-button" onClick={() => this.handleClick("arcanicCavern")} bsStyle="warning" bsSize="large" block>
                Arcanic Cavern
            </Button>
            <Button className="mining-route-button" onClick={() => this.handleClick("shiningCavern")} bsStyle="warning" bsSize="large" block>
                Shining Cavern
            </Button>
            <Button className="mining-route-button" onClick={() => this.handleClick("holyCavern")} bsStyle="warning" bsSize="large" block>
                Holy Cavern
            </Button>
            <Button className="mining-route-button" onClick={() => this.handleClick("superiorArcanicCavern")} bsStyle="warning" bsSize="large" block>
                Superior Arcanic Cavern
            </Button>
            
        </div>
    )
  }
}

function mapStateToProps(state){
    return {
        mining: state.mining,
    }
}

export default connect(mapStateToProps)(Mining)