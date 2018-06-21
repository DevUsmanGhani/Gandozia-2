import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import getRandomInt from "../../../assets/functions/getRandomInt";
import { bindActionCreators } from "redux";
import { catchFood } from "../../../state/actions/skills/actions-hunting";
import "../../../css/Hunting.css";

class RabbitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRabbit: false,
            text: "Rabbit",
            style: "success",
        }
        this.handleClick = this.handleClick.bind(this);
        this.showRabbit = this.showRabbit.bind(this);
    }
    showRabbit() {
        var rabbitShowChance = 4;
        var rabbitShowThreshold = getRandomInt(1, 100);
        if(rabbitShowChance >= rabbitShowThreshold){
            this.setState({
                isRabbit: true,
            })
        }
        else{
            this.setState({
                isRabbit: false,
            })
        }
    }
    handleClick() {
        if(this.props.inventory.foodCount < this.props.inventory.maxFoodCount){
            if(this.state.isRabbit === true){
                var catchChance = this.props.hunting.huntingBonus * 4;
                var catchThreshold = getRandomInt(1, 100);
                if(catchChance >= catchThreshold){
                    this.setState({
                        text: "+1 Food",
                        style: "primary",
                    })
                    this.props.catchFood(1);
                }
                else{
                    this.setState({
                        text: "Miss!",
                        style: "danger",
                    })
                }
            }
            else{
                this.setState({
                    text: "Miss!",
                    style: "danger",
                })
            }
            setTimeout(() => {          
                this.setState({text: "Rabbit", style: "success"})
            }, 1000);
        }
        else{
            alert("Your food bag is full!");
        }
        
    }
    componentDidMount() {
        setInterval(this.showRabbit, 1000);
    }
    render() {
        return (
            <Button onClick={() => this.handleClick()} className={this.state.isRabbit ? "hunting-button rabbit" : "hunting-button field"}  bsStyle={this.state.style} bsSize="large">
                {this.state.text}
            </Button>

        )
    }
}

function mapStateToProps(state){
    return{
      hunting: state.hunting,
      inventory: state.inventory,
    }
  }

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        catchFood: catchFood,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RabbitButton)
