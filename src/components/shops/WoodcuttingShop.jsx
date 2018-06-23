import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buyFromWoodcuttingShop, sellFromWoodcuttingShop } from "../../state/actions/shops/actions-woodcutting-shop"
import "../../css/Shops.css";
import { successNotification, errorNotification} from "../../assets/functions/notifications";
import WoodcuttingSellForm from "./WoodcuttingSellForm";
import WoodcuttingBuyForm from "./WoodcuttingBuyForm";


class WoodcuttingShop extends Component {
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);

    }
    
    
    handleClick(item){
        if(this.props.inventory.goldCount >= item.cost) {      
                this.props.buyFromWoodcuttingShop(item);
                successNotification("You purchase a " + item.name + " from the shop.")
            }
        else{
           errorNotification("You do not have enough gold to purchase " + item.name) ;
        }
    } 
  render() {
    
    return (

     <div className="well shop-well">
            <h1 className="well-header woodcutting-header" >Woodcutting Shop</h1>
            {Object.keys(this.props.woodcuttingShop).map((key) => {
                const buyableItem = this.props.woodcuttingShop[key];
                if(buyableItem.visible === true && buyableItem.name !== "Log"){
                    return <Button 
                        key={buyableItem.name}
                        className="woodcutting-route-button"
                        onClick={() => this.handleClick(buyableItem)} 
                        bsStyle="success" 
                        bsSize="large" block>
                            {buyableItem.name + " "}
                            <span className={this.props.inventory.goldCount >= buyableItem.cost ? "green-text" : "red-text"}>
                            ({buyableItem.cost} gold) 
                            </span>
                        </Button>
                }
                else return null;
                
            })}
            <WoodcuttingBuyForm />
            <WoodcuttingSellForm />
            <Button href="/shops" bsStyle="success" active bsSize="large" block>Back</Button>
    </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        woodcuttingShop: state.woodcuttingShop,
        inventory: state.inventory,
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        buyFromWoodcuttingShop: buyFromWoodcuttingShop,
        sellFromWoodcuttingShop: sellFromWoodcuttingShop,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WoodcuttingShop)