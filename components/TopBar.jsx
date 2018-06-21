import React, { Component } from 'react';
import { Navbar, ProgressBar } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { restoreHealth, restoreArcana, die } from "../state/actions/combat/actions-fighting";
import { withRouter } from "react-router-dom";
import "../css/TopBar.css";




class TopBar extends Component {
    componentDidMount() {
        this.checkIfDead = setInterval(() => {
            if(this.props.combat.currentHealth <= 0){
              this.props.history.push("/");
              this.props.die();
    
              setTimeout(() => {
                alert("You awaken in a badly damaged state. Some of your things are missing.")
              }, 1000)
            }
          }, 1000)
    }
    
    
    render() {
        
        var healthPercent = this.props.combat.currentHealth / this.props.combat.maxHealth * 100;
        var arcanaPercent = this.props.arcania.currentArcana / this.props.arcania.maxArcana * 100;
        return (
            <Navbar inverse>
                <div className="top-container">
                    <div>
                        <span className={healthPercent >= 50 ? "green-text": "red-text"} >Health: {this.props.combat.currentHealth}/{this.props.combat.maxHealth} </span>
                    </div>
                    <ProgressBar>
                        <ProgressBar striped active bsStyle={healthPercent >= 50  ? "success" : "danger"} now={healthPercent}>
                        </ProgressBar>
                    </ProgressBar>

                    <div>
                        <span className="arcana-number">Arcana: {Math.floor(this.props.arcania.currentArcana)}/{this.props.arcania.maxArcana}</span>
                    </div>
                    <ProgressBar>
                        <ProgressBar striped active bsStyle="warning" now={arcanaPercent}>
                        </ProgressBar>
                    </ProgressBar>
                    <span className="gold-number"> Gold: {this.props.inventory.goldCount}</span>
                </div>
            </Navbar>
        )
    }
 }

function mapStateToProps(state) {
    return{
        inventory: state.inventory,
        combat: state.combat,
        arcania: state.arcania,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        restoreHealth: restoreHealth,
        restoreArcana: restoreArcana,
        die: die,
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar))

