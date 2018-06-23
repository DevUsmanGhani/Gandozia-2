import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import "../../css/EatForm.css";
import { buyFromHuntingShop } from "../../state/actions/shops/actions-hunting-shop";
import { errorNotification, successNotification } from '../../assets/functions/notifications';


class HuntingBuyForm extends Component {
  constructor(props){
    super(props);

    this.state = {
        foodBuyPrice: 15,
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(amtToBuy) {
    let totalCost = amtToBuy * this.state.foodBuyPrice;
    if(this.props.inventory.goldCount >= totalCost){
        let amtYouCanStore = this.props.inventory.maxFoodCount - this.props.inventory.foodCount;
        if(amtToBuy <= amtYouCanStore){
            if(amtToBuy === 1){
                successNotification("You successfully buy a Food for " + this.state.foodBuyPrice + " gold!");
                this.props.buyFromHuntingShop(this.props.huntingShop.food);
            }
            else{
                successNotification("You successfully buy " + amtToBuy + " Food for " + totalCost + " gold!");
                for(let i = 0; i < amtToBuy; i++){
                    this.props.buyFromHuntingShop(this.props.huntingShop.food);
                }   
            }   
        }
        else{
            errorNotification("You cannot store that much Food.");
        }
        
       
    }
    else{
        errorNotification("You do not have enough gold to purchase this much Food.");
    }     
   
  }
  
  render() {
    return (
       <Popup 
          trigger={<Button 
               
                        className="hunting-routing-button"
                       
                        bsStyle="danger" 
                        bsSize="large" block>Buy Food</Button>}
          modal
          closeOnDocumentClick>
          {close => (
            <div className="pop-up">
            <div className="story-button-text" >
              <div>How many Food would you like to buy?</div>
              <Button onClick={() => this.handleClick(1)} className="eat-form-button" bsStyle="default">1</Button>
              <Button onClick={() => this.handleClick(5)} className="eat-form-button" bsStyle="default">5</Button>
              <Button onClick={() => this.handleClick(10)} className="eat-form-button" bsStyle="default">10</Button>
              <Button onClick={close} className="eat-form-button-close" bsStyle="light">Close</Button>
              <div className="eat-form-current-food" >Current Food: {this.props.inventory.foodCount}/{this.props.inventory.maxFoodCount}</div>
              <div className="eat-form-current-food" >Food Price: {this.state.foodBuyPrice}</div>
            </div>
          </div>
          )}
          
        </Popup>
    )
  }
}

const mapStateToProps = (state) => ({
    inventory: state.inventory,
    huntingShop: state.huntingShop,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    buyFromHuntingShop: buyFromHuntingShop,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HuntingBuyForm)
