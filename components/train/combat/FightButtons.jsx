import React, { Component } from 'react';
import { ButtonGroup, Button } from "react-bootstrap";
import { attackEnemy, blastEnemy, killAndLoot, takeDamage } from "../../../state/actions/combat/actions-fighting";
import "../../../css/Fight.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import getRandomInt from "../../../assets/functions/getRandomInt";
import { toast } from "react-toastify";


class FightButtons extends Component {
    constructor(props){
        super(props);

        this.state = {
            buttonsDisabled: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.kill = this.kill.bind(this);
        this.enemyAttack = this.enemyAttack.bind(this);

    }
    notify(text, type){
        this.toastId = toast(text, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2700,
            closeButton: false,
            closeOnClick: false,
            pauseOnHover: false,
            type: type,
            hideProgressBar: true,
        })
  
    }

    noArcanaNotify(){
        if(!toast.isActive(this.toastId)){
            this.toastId = toast("You do not have enough Arcana to perform this move.", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                pauseOnHover: false,
                type: "info",
                hideProgressBar: true,
            })
        }   
    }
    kill(){
        var goldDrop = getRandomInt(this.props.enemy.minGoldDrop, this.props.enemy.maxGoldDrop);
        this.props.killAndLoot(this.props.enemy.id, goldDrop);
        this.notify("You kill the " + this.props.enemy.name + ".\nYou find " + goldDrop + " gold on the body!", "success");   
    }

    enemyAttack(){
        if(this.props.enemy.currentHealth > 0 ) {
            let enemyHitChance = this.props.enemy.hitChance - this.props.combat.blockChance;
            let roll = getRandomInt(1,100);
            if (enemyHitChance >= roll) {
                let damage = getRandomInt(this.props.enemy.minDamage, this.props.enemy.maxDamage);
                
                this.notify("The " + this.props.enemy.name + " strikes you for " + damage + " damage.", "error");
                setTimeout(() => {
                    this.props.takeDamage(damage);    
                }, 500);
            }
            else {
                this.notify("The " + this.props.enemy.name + " strikes at you and misses.", "warning");
            }
        }
    }
        

    handleClick(type){
        if(!this.state.buttonsDisabled){
            this.setState({buttonsDisabled: true});
        switch(type){
            case "ACCURATE_ATTACK": {
                    let hitChance = this.props.combat.hitChance - this.props.enemy.blockChance * 1.3;
                    let roll = getRandomInt(1, 100);
                    if(hitChance >= roll){
                        let damage = getRandomInt(this.props.combat.minDamage, this.props.combat.maxDamage);
                        if(damage >= this.props.enemy.currentHealth){
                            this.props.attackEnemy(this.props.enemy.id, this.props.enemy.currentHealth);
                            this.kill();
                        }
                        else{
                            this.notify("You strike the " + this.props.enemy.name + " for " + damage + " damage!", "success");
                            this.props.attackEnemy(this.props.enemy.id, damage);
                            setTimeout(this.enemyAttack, 3000);
                        }                       
                    }
                    else{
                        this.notify("You strike and miss the " + this.props.enemy.name, "warning");
                        setTimeout(this.enemyAttack, 3000);
                    }       
                }
                break;
            case "HEAVY_ATTACK": {
                    let hitChance = (this.props.combat.hitChance) - this.props.enemy.blockChance;
                    let roll = getRandomInt(1, 100);
                    if(hitChance >= roll){
                        let dmgBonus = (this.props.combat.maxDamage + this.props.combat.maxDamage)/2 * .3 + 1;
                        let minDamage = this.props.combat.minDamage + dmgBonus ;
                        let maxDamage = this.props.combat.maxDamage + dmgBonus;
                        let damage = Math.round(getRandomInt(minDamage, maxDamage));
                        if(damage >= this.props.enemy.currentHealth){
                            this.props.attackEnemy(this.props.enemy.id, this.props.enemy.currentHealth);
                            this.kill();
                        }
                        else{
                            this.notify("You strike the " + this.props.enemy.name + " for " + damage + " damage!", "success");
                            this.props.attackEnemy(this.props.enemy.id, damage);
                            setTimeout(this.enemyAttack, 3000);
                        }                       
                    }
                    else{
                        this.notify("You strike and miss the " + this.props.enemy.name, "warning");
                        setTimeout(this.enemyAttack, 3000);
                    }       
                }
                break;
            case "BLAST_ENEMY": {
                    if(this.props.arcania.currentArcana >= 5){
                        if(this.props.arcania.blastDamage >= this.props.enemy.currentHealth){
                            this.kill();
                        }
                        else{
                            this.notify("You blast the " + this.props.enemy.name + " for " + this.props.arcania.blastDamage + " damage!", "warning");
                            this.props.blastEnemy(this.props.enemy.id, this.props.arcania.blastDamage, this.props.arcania.blastArcanaCost);
                            setTimeout(this.enemyAttack, 3000);
                        }     
                    }
                    else{
                        this.noArcanaNotify();
                        this.setState({buttonsDisabled: false,})
                    }  
                    break;
            }                 
            default:    
                return;         
        }
        setTimeout(() => {
            this.setState({buttonsDisabled: false,})
        }, 6000);
        }
        
    }     

        
    
  render() {
    
    var accHitChance = Math.round((this.props.combat.hitChance  - this.props.enemy.blockChance) * 1.3);
    var heavyHitChance = this.props.combat.hitChance - this.props.enemy.blockChance;
    if(heavyHitChance > 100) {heavyHitChance = 100};
    if(accHitChance > 100) {accHitChance = 100};
    var accMinDamage = Math.round(this.props.combat.minDamage);
    var accMaxDamage = Math.round(this.props.combat.maxDamage);
    var heavyDmgBonus = ((this.props.combat.maxDamage + this.props.combat.minDamage)/2) * .3 + 1;
    var heavyMinDamage = Math.round(accMinDamage + heavyDmgBonus);
    var heavyMaxDamage = Math.round(accMaxDamage + heavyDmgBonus);


    return (
      <ButtonGroup className="fight-buttons">
        <Button  className="battle-button" disabled={this.state.buttonsDisabled} active onClick={() => this.handleClick("ACCURATE_ATTACK")} bsStyle="primary" >
            <div className="atk-header">Accurate Attack</div>
            <div className="atk-info">
                <div>HitChance: {accHitChance}%</div>
                <div>Damage: {accMinDamage}-{accMaxDamage}</div>
            </div>       
        </Button>
        <Button   className="battle-button" disabled={this.state.buttonsDisabled} active onClick={() => this.handleClick("HEAVY_ATTACK")} bsStyle="danger">
            <div className="atk-header">Heavy Attack</div>
            <div className="atk-info">
                <div>HitChance: {heavyHitChance}%</div>
                <div>Damage: {heavyMinDamage}-{heavyMaxDamage}</div>
            </div>
        </Button>
        <Button  className="battle-button" disabled={this.state.buttonsDisabled}  active onClick={() => this.handleClick("BLAST_ENEMY")} bsStyle="warning" >
            <div className="atk-header">Arcanic Blast</div>
            <div className="atk-info">
                <div>Cost: {this.props.arcania.blastArcanaCost}</div>
                <div>Damage: {this.props.arcania.blastDamage}</div>
            </div>
        </Button>
      </ButtonGroup>
    )
  }
}

function mapStateToProps(state){
    return{
        combat: state.combat,
        arcania: state.arcania,
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        attackEnemy: attackEnemy,
        blastEnemy: blastEnemy,
        killAndLoot: killAndLoot,
        takeDamage: takeDamage,
    }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(FightButtons)