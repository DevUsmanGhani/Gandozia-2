import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { errorNotification } from "../../../assets/functions/notifications";

class Woodcutting extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(forestName) {
        switch(forestName){
            case "greenWoods":{
                this.props.history.push("/greenWoods");
                break;
            }
            case "burlyOaks": {
                if(this.props.woodcutting.level >= 10){
                    this.props.history.push("/burlyOaks");
                }
                else{
                    errorNotification("You must have a Woodcutting level of 10 to enter Burly Oaks.");
                }
                break;
            }
            case "mossSwamp": {
                if(this.props.woodcutting.level >= 20){
                    this.props.history.push("/mossSwamp");
                }
                else{
                    errorNotification("You must have a Woodcutting level of 20 to enter The Moss Swamp.");
                }
                break;
            }
            case "crookedForest": {
                if(this.props.woodcutting.level >= 30){
                    this.props.history.push("/crookedForest");
                }
                else{
                    errorNotification("You must have a Woodcutting level of 30 to enter The Crooked Forest.");
                }
                break;
            }
            case "elvenTreeForest": {
                if(this.props.woodcutting.level >= 40){
                    this.props.history.push("/elvenTreeForest");
                }
                else{
                    errorNotification("You must have a Woodcutting level of 40 to enter The Elven Tree Forest.");
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
      <div className="well woodcutting-well">
            <h1 className="well-header woodcutting-header" >Woodcutting</h1>
            <Button className="woodcutting-route-button" onClick={() => this.handleClick("greenWoods")} bsStyle="success" bsSize="large" block>
                Green Woods
            </Button>
            <Button className="woodcutting-route-button" onClick={() => this.handleClick("burlyOaks")} bsStyle="success" bsSize="large" block>
                Burly Oaks
            </Button>
            <Button className="woodcutting-route-button" onClick={() => this.handleClick("mossSwamp")} bsStyle="success" bsSize="large" block>
                Moss Swamp
            </Button>
            <Button className="woodcutting-route-button" onClick={() => this.handleClick("crookedForest")} bsStyle="success" bsSize="large" block>
                Crooked Forest
            </Button>
            <Button className="woodcutting-route-button" onClick={() => this.handleClick("elvenTreeForest")} bsStyle="success" bsSize="large" block>
                Elven Tree Forest
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

  export default connect(mapStateToProps)(Woodcutting)