import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buyFromHuntingShop, sellFromHuntingShop } from "../../state/actions/shops/actions-hunting-shop"
import "../../css/Shops.css";
import { successNotification, errorNotification } from "../../assets/functions/notifications";
import HuntingBuyForm from "./HuntingBuyForm";
import  HuntingSellForm  from './HuntingSellForm';

class HuntingShop extends Component {
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(item){
        if(this.props.inventory.goldCount >= item.cost) {
                this.props.buyFromHuntingShop(item);
                successNotification("You purchase a " + item.name + " from the shop.");
        }
        else{
           errorNotification("You do not have enough gold to purchase " + item.name);
        }
    } 
  render() {
    
    return (

     <div className="well button-well shop-well">
            <h1 className="well-header hunting-header" >Hunting Shop</h1>
            {Object.keys(this.props.huntingShop).map((key) => {
                const buyableItem = this.props.huntingShop[key];
                if(buyableItem.visible === true && buyableItem.name !== "Food"){
                    return <Button 
                        key={buyableItem.name}
                        className="hunting-routing-button"
                        onClick={() => this.handleClick(buyableItem)} 
                        bsStyle="danger" 
                        bsSize="large" block>
                            Buy {buyableItem.name + " "}
                            <span className={this.props.inventory.goldCount >= buyableItem.cost ? "green-text" : "red-text"}>
                            ({buyableItem.cost} gold) 
                            </span>
                        </Button>
                }
                else return null;
                
            })}
            <HuntingBuyForm />
            <HuntingSellForm />
            <Button href="/shops" bsStyle="danger" bsSize="large" block>Back</Button>
    </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        huntingShop: state.huntingShop,
        inventory: state.inventory,
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        buyFromHuntingShop: buyFromHuntingShop,
        sellFromHuntingShop: sellFromHuntingShop,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HuntingShop)