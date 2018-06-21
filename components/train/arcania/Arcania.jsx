import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import "../../../css/Arcania.css";
import { connect } from "react-redux";
import {  errorNotification, infoNotification } from "../../../assets/functions/notifications";

class Arcania extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleInfoClick = this.handleInfoClick.bind(this);
    }

    handleInfoClick(name) {
        switch(name){
            case "transmuteLogs" : {
                infoNotification("You may attempt to transmute your logs into gold. This will use Arcania and there is a chance for failure.");
                break;
            }
            default: {
                return;
            }
        }
    }
    handleClick(name) {
        switch(name){
            case "transmuteLogs": {
                this.props.history.push("/" + name);
                break;
            }
            case "a": {
                if(this.props.arcania.level >= 10){
                    this.props.history.push("/" + name);
                }
                else{
                   errorNotification("You need an Arcania level of 10 to enter here.")
                }
                break;
            }
            case "b": {
                if(this.props.arcania.level >= 20){
                    this.props.history.push("/" + name);
                }
                else{
                   errorNotification("You need an Arcania level of 20 to enter here.")
                }
                break;
            }
            case "c": {
                if(this.props.arcania.level >= 30){
                    this.props.history.push("/" + name);
                }
                else{
                   errorNotification("You need an Arcania level of 30 to enter here.")
                }
                break;
            }
            case "d": {
                if(this.props.arcania.level >= 40){
                    this.props.history.push("/" + name);
                }
                else{
                   errorNotification("You need an Arcania level of 40 to enter here.")
                }
                break;
            }
            default:
                return;
        }
    }
  render() {
    return (
      <div className="well arcania-well">
            <h1 className="well-header arcania-header" >Arcania</h1>
            <Button className="arcania-button" onClick={() => this.handleClick("transmuteLogs")} bsStyle="warning" bsSize="large" block>
                Transmute Logs
            </Button>
            <Button onClick={() => this.handleInfoClick("transmuteLogs")} className="arcania-info-button" bsStyle="default" bsSize="large">
                Info
            </Button>
            <Button className="arcania-button"  onClick={() => this.handleClick("a")} bsStyle="warning" bsSize="large" block>
                Blast Rocks
            </Button>
            <Button className="arcania-info-button" bsStyle="default" bsSize="large">
                Info
            </Button>
            <Button className="arcania-button" onClick={() => this.handleClick("b")} bsStyle="warning" bsSize="large" block>
                Blast Trees
            </Button>
            <Button className="arcania-info-button" bsStyle="default" bsSize="large">
                Info
            </Button>
            <Button className="arcania-button" onClick={() => this.handleClick("c")} bsStyle="warning" bsSize="large" block>
                Blast Boulders
            </Button>
            <Button className="arcania-info-button" bsStyle="default" bsSize="large">
                Info
            </Button>
            <Button className="arcania-button" onClick={() => this.handleClick("d")} bsStyle="warning" bsSize="large" block>
                Blast Mountains
            </Button>
            <Button className="arcania-info-button" bsStyle="default" bsSize="large">
                Info
            </Button>
            
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        arcania: state.arcania,
    }
}

export default connect(mapStateToProps)(Arcania)