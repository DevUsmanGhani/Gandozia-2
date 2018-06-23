import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buyFromCombatShop } from "../../state/actions/shops/actions-combat-shop"
import "../../css/Shops.css";
import "../../css/Combat.css";
import { errorNotification } from "../../assets/functions/notifications";


class CombatShop extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item){
        if(this.props.inventory.goldCount >= item.cost) {
            this.props.buyFromCombatShop(item);
        }
        else{
           errorNotification("You do not have enough gold to purchase " + item.name) ;
        }
    } 
  render() {
    
    return (

     <div className="well button-well shop-well">
            <h1 className="well-header combat-header" >Combat Shop</h1>
            {Object.keys(this.props.combatShop).map((key) => {
                const buyableItem = this.props.combatShop[key];
                if(buyableItem.visible === true){
                    return <Button 
                        key={buyableItem.name}
                        onClick={() => this.handleClick(buyableItem)} 
                        className="combat-route-button"
                        bsStyle="danger" 
                        bsSize="large" block>
                            Buy {buyableItem.name + " "}
                            <span className={this.props.inventory.goldCount >= buyableItem.cost ? "green-text" : "red-text-alt"}>
                            ({buyableItem.cost} gold) 
                            </span>
                        </Button>
                }
                else return null;
                
            })}
            <Button href="/shops" bsStyle="danger" bsSize="large" block>Back</Button>
    </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        combatShop: state.combatShop,
        combat: state.combat,
        inventory: state.inventory,
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        buyFromCombatShop: buyFromCombatShop,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CombatShop)