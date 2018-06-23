import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buyFromMiningShop, sellFromMiningShop } from "../../state/actions/shops/actions-mining-shop"
import "../../css/Shops.css";
import { successNotification, errorNotification } from "../../assets/functions/notifications";
import MiningSellForm from "./MiningSellForm";
import MiningBuyForm from "./MiningBuyForm";


class MiningShop extends Component {
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(item){
        if(this.props.inventory.goldCount >= item.cost) {
                this.props.buyFromMiningShop(item);
                successNotification("You purchase a " + item.name + " from the shop.")
        }
        else{
           errorNotification("You do not have enough gold to purchase " + item.name) ;
        }
    } 
  render() {
    
    return (

     <div className="well button-well shop-well">
            <h1 className="well-header mining-header" >Mining Shop</h1>
            {Object.keys(this.props.miningShop).map((key) => {
                const buyableItem = this.props.miningShop[key];
                if(buyableItem.visible === true && buyableItem.name !== "Arcanic Crystal"){
                    return <Button 
                        key={buyableItem.name}
                        onClick={() => this.handleClick(buyableItem)} 
                        className="mining-shop-route-button"
                        bsStyle="primary" 
                        bsSize="large" block>
                            {buyableItem.name + " "}
                            <span className={this.props.inventory.goldCount >= buyableItem.cost ? "green-text" : "red-text"}>
                            ({buyableItem.cost} gold) 
                            </span>
                        </Button>
                }
                else return null;
                
            })}
            <MiningBuyForm />
            <MiningSellForm />
            <Button href="/shops" bsStyle="primary" bsSize="large" block>Back</Button>
    </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        miningShop: state.miningShop,
        inventory: state.inventory,
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        buyFromMiningShop: buyFromMiningShop,
        sellFromMiningShop: sellFromMiningShop,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MiningShop)