import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ProgressBar } from "react-bootstrap";
import getRandomInt from "../../../assets/functions/getRandomInt";
import "../../../css/Arcania.css";
import { transmuteLog } from "../../../state/actions/skills/actions-arcania";
import { bindActionCreators } from "redux";
import { successNotification, errorNotification } from "../../../assets/functions/notifications";

class TransmuteLogs extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentPower: 0,
        }

        this.addPower = this.addPower.bind(this);
        this.removePower = this.removePower.bind(this);

    }


    addPower() {
        
            if(this.state.currentPower < 100){
                if((this.props.arcania.currentArcana * 20) >= (this.state.currentPower + 20)){
                    this.setState({
                        currentPower: this.state.currentPower + 20,
                    });
                }
                else{
                    errorNotification("You don't have enough arcana");
                }
            }     
    }
    removePower() {
        if(this.state.currentPower > 0){
            this.setState({
                currentPower: this.state.currentPower - 20,
            })
        } 
    }

    handleClick() {
        if(this.props.inventory.logCount > 0){
            if(this.state.currentPower > 0){
                let roll = getRandomInt(1,100);
                if(this.state.currentPower >= roll){
                    let goldAmt = getRandomInt(10,20);
                    let arcaniaAmt = this.state.currentPower / 20;
                    successNotification("You successfully transmute a log into " + goldAmt + " gold!");
                    this.props.transmuteLog(goldAmt, arcaniaAmt);
                    this.setState({currentPower: 0});
                }
                else{
                    errorNotification("You fail at transmuting the log.");
                }
            }
            else{
                errorNotification("You must use some Arcanic Energy to transmute the log.");
            }
        }
        else{
            errorNotification("You do not have any logs to transmute!");
        }
       
        
    }
  render() {
    return (
      <div>
        <h1 >Transmute Logs</h1>
        
        <div className="transmute-logs-container well transmute-logs-well">
            <div className="transmute-logs-info-container">
                <span className="transmute-logs-arcana-count">
                        Arcana: {Math.floor(this.props.arcania.currentArcana)}/{this.props.arcania.maxArcana}
                </span>  
                <span className="transmute-logs-log-count">
                        Logs: {this.props.inventory.logCount}/{this.props.inventory.logCount}
                </span>  
            </div>
            
            <ProgressBar className="transmute-logs-progress-bar">
                <ProgressBar striped active  now={this.state.currentPower}>
                </ProgressBar>
            </ProgressBar>
            <Button onClick={() => this.addPower()} className="transmute-logs-button" bsSize="large" bsStyle="success">
                Add
            </Button>
            <Button onClick={() => this.removePower()} className="transmute-logs-button" bsSize="large" bsStyle="danger">
                Remove
            </Button>
            <div>
                <span className="transmute-logs-arcana-to-be-used">
                    Arcana Cost: {this.state.currentPower / 20}
                </span>
                <span className="transmute-logs-success-chance">
                    Success Chance: {this.state.currentPower}%
                </span>
            </div>
            <br />
            <Button onClick={() => this.handleClick()}className="transmute-logs-transmute-button" bsStyle="warning" bsSize="large" >
                <div>
                    Transmute
                </div>
                <div>
                    Log
                </div>
            </Button>
             
       
            
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
        inventory: state.inventory,   
        arcania: state.arcania, 
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        transmuteLog: transmuteLog,
    }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(TransmuteLogs)
