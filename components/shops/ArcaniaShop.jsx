import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { buyFromArcaniaShop } from "../../state/actions/shops/actions-arcania-shop"
import { errorNotification } from "../../assets/functions/notifications";


class ArcaniaShop extends Component {
    
    handleClick(item){
        if(this.props.inventory.goldCount >= item.cost) {
            this.props.buyFromArcaniaShop(item);
        }
        else{
            errorNotification("You do not have enough gold to purchase " + item.name);
        }
    }

  render() {
    return (
      <div className="well button-well shop-well">
            <h1 className="well-header arcania-header" >Arcania Shop</h1>
            {Object.keys(this.props.arcaniaShop).map((key) => {
                const buyableItem = this.props.arcaniaShop[key];
                if(buyableItem.visible === true){
                    return <Button 
                        key={buyableItem.name}
                        className="arcania-route-button"
                        onClick={() => this.handleClick(buyableItem)} 
                        bsStyle="warning" 
                        bsSize="large" block>
                            Buy {buyableItem.name + " "}
                            <span className={this.props.inventory.goldCount >= buyableItem.cost ? "green-text" : "red-text"}>
                            ({buyableItem.cost} gold) 
                            </span>
                        </Button>
                }
                else return null;
                
            })}
            <Button href="/shops" bsStyle="warning" bsSize="large" block>Back</Button>
    </div>
    )
  }
}

function mapStateToProps(state){
    return {
        arcania: state.arcania,
        inventory: state.inventory,
        arcaniaShop: state.arcaniaShop,
    };
}
 

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        buyFromArcaniaShop: buyFromArcaniaShop,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArcaniaShop)
