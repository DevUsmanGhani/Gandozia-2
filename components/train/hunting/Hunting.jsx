import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { errorNotification } from "../../../assets/functions/notifications";

class Hunting extends Component {
    
    handleClick(preyName) {
        switch(preyName){
            case "huntRabbit":{
                this.props.history.push("/huntRabbit");
                break;
            }
            case "huntDeer": {
                if(this.props.woodcutting.level >= 20){
                    this.props.history.push("/huntDeer");
                }
                else{
                    errorNotification("You must have a Hunting level of 10 to hunt deer.");
                }
                break;
            }
            case "huntMountainLion": {
                if(this.props.woodcutting.level >= 20){
                    this.props.history.push("/huntMountainLion");
                }
                else{
                    errorNotification("You must have a Hunting level of 10 to hunt lions.");
                }
                break;
            }
            case "huntMammoth": {
                if(this.props.woodcutting.level >= 30){
                    this.props.history.push("/huntMammoth");
                }
                else{
                    errorNotification("You must have a Hunting level of 30 to hunt mammoths.");
                }
                break;
            }
            case "huntDragon": {
                if(this.props.woodcutting.level >= 40){
                    this.props.history.push("/huntDragon");
                }
                else{
                    errorNotification("You must have a Hunting level of 40 to hunt dragons.");
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
      <div className="well button-well hunting-well">
            <h1 className="well-header hunting-header " >Hunting</h1>
            <Button className="hunting-routing-button" onClick={() => this.handleClick("huntRabbit")} bsStyle="danger" bsSize="large" block>
                Hunt Rabbit
            </Button>
            <Button className="hunting-routing-button" onClick={() => this.handleClick("huntDeer")} bsStyle="danger" bsSize="large" block>
                Hunt Deer
            </Button>
            <Button className="hunting-routing-button" onClick={() => this.handleClick("huntMountainLion")} bsStyle="danger" bsSize="large" block>
                Hunt Mountain Lion
            </Button>
            <Button className="hunting-routing-button" onClick={() => this.handleClick("huntMammoth")} bsStyle="danger" bsSize="large" block>
                Hunt Mammoth
            </Button>
            <Button className="hunting-routing-button" onClick={() => this.handleClick("huntDragon")} bsStyle="danger" bsSize="large" block>
                Hunt Dragons
            </Button>
            
        </div>
    )
  }
}

function mapStateToProps(state){
    return{
        woodcutting: state.woodcutting,
    }
}

export default connect(mapStateToProps)(Hunting)