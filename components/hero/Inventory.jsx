import React, { Component } from 'react';
import { connect } from "react-redux";
import "../../css/Inventory.css";
import { eatFood, absorbCrystal } from "../../state/actions/combat/actions-fighting";
import { bindActionCreators } from "redux";
import  EatForm from '../train/combat/EatForm';
import AbsorbForm from '../train/combat/AbsorbForm';

class Inventory extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type) {
        switch(type){
            case "EAT_FOOD": {
                if(this.props.inventory.foodCount > 0){
                    if(this.props.combat.currentHealth < this.props.combat.maxHealth){
                        var healAmount = this.props.combat.foodHealAmount;
                        if(this.props.combat.currentHealth + healAmount > this.props.combat.maxHealth) {
                            healAmount = this.props.combat.maxHealth - this.props.combat.currentHealth;
                            alert("You eat some food and fully restore your health.")
                        }
                        else{
                            alert("You eat some food and restore some health.");
                        }
                        this.props.eatFood(1, healAmount);    
                    }
                    else{
                        alert("You are already at full health!");
                    }
                }
                else{
                    alert("You don't have any food!");
                }
                break;
            }
            case "ABSORB_CRYSTAL": {
                if(this.props.inventory.crystalCount > 0){
                    if(this.props.arcania.currentArcana < this.props.arcania.maxArcana){
                        var restoreAmount = this.props.arcania.crystalRestoreAmount;
                        if(this.props.arcania.currentArcana + restoreAmount > this.props.arcania.maxArcana) {
                            restoreAmount = this.props.arcania.maxArcana - this.props.arcania.currentArcana;
                            alert("You absorb a crystal and fully restore your Arcana.")
                        }
                        else{
                            alert("You absorb a crystal and restore some Arcana.");
                        }
                        this.props.absorbCrystal(1, restoreAmount);
                    }
                    else{
                        alert("You are already at full Arcana!");
                    }
                }
                else{
                    alert("You don't have any crystals!");
                }
                break;
            }
            default: {
                return null;
            }
        }
    }
  render() {
    return (
      <div>
         <div id="inventory-header">Inventory</div> 
         <div id="inventory">
             <div id="inventory-hunting">
                 <div>
                    <span>Food: </span>
                    <span className="hunting-item">{this.props.inventory.foodCount}/{this.props.inventory.maxFoodCount}</span>
                    <EatForm />
                    <span className="pull-right bonus">Hunting Bonus: {this.props.hunting.huntingBonus}</span>
                </div>
                <div>
                    <span>Hunting Bow: </span>
                    <span className="hunting-item">{this.props.inventory.bow}</span>
                </div>
                <div>
                    <span>Food Chest: </span>
                    <span className="hunting-item">{this.props.inventory.foodChest}</span>
                </div>

             </div>
             <div id="inventory-woodcutting">
                 <div>
                    <span>Logs: </span>
                    <span className="woodcutting-item">{this.props.inventory.logCount}/{this.props.inventory.maxLogCount}</span>
                    <span className="pull-right bonus">Woodcutting Bonus: {this.props.woodcutting.woodcuttingBonus}</span>
                 </div>
                 <div>
                    <span>Hatchet: </span>
                    <span className="woodcutting-item">{this.props.inventory.hatchet}</span>
                </div>
                <div>
                    <span>Log Bag: </span>
                    <span className="woodcutting-item">{this.props.inventory.logBag}</span>
                </div>
            </div>
             <div id="inventory-mining">
                <div>
                    <span>Arcanic Crystals: </span>
                    <span className="mining-item">{this.props.inventory.crystalCount}/{this.props.inventory.maxCrystalCount}</span>
                    <AbsorbForm />
                    <span className="pull-right bonus">Mining Bonus: {this.props.mining.miningBonus}</span>
                </div>
                <div>
                    <span>Pickaxe: </span>
                    <span className="mining-item">{this.props.inventory.pickaxe}</span>
                </div>
                <div>
                    <span>Crystal Pouch: </span>
                    <span className="mining-item">{this.props.inventory.crystalPouch}</span>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

function mapStateToProps(state){
    return{
        inventory: state.inventory,
        woodcutting: state.woodcutting,
        hunting: state.hunting,
        mining: state.mining,
        combat: state.combat,
        arcania: state.arcania,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        eatFood: eatFood,
        absorbCrystal: absorbCrystal,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)