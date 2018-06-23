import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import "../../css/EatForm.css";
import { buyFromMiningShop } from "../../state/actions/shops/actions-mining-shop";
import { errorNotification, successNotification } from '../../assets/functions/notifications';


class MiningBuyForm extends Component {
  constructor(props){
    super(props);

    this.state = {
        crystalBuyPrice: 20,
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(amtToBuy) {
    let totalCost = amtToBuy * this.state.crystalBuyPrice;
    if(this.props.inventory.goldCount >= totalCost){
        let amtYouCanStore = this.props.inventory.maxCrystalCount - this.props.inventory.crystalCount;
        if(amtToBuy <= amtYouCanStore){
            if(amtToBuy === 1){
                successNotification("You successfully buy an Arcanic Crystal for " + this.state.crystalBuyPrice + " gold!");
                this.props.buyFromMiningShop(this.props.miningShop.arcanicCrystal);
            }
            else{
                successNotification("You successfully buy " + amtToBuy + " Arcanic Crystals for " + totalCost + " gold!");
                for(let i = 0; i < amtToBuy; i++){
                    this.props.buyFromMiningShop(this.props.miningShop.arcanicCrystal);
                }   
            }   
        }
        else{
            errorNotification("You cannot store that many Arcanic Crystals.");
        }
        
       
    }
    else{
        errorNotification("You do not have enough gold to purchase this many Arcanic Crystals.");
    }     
   
  }
  
  render() {
    return (
       <Popup 
          trigger={<Button 
               
                        className="mining-shop-route-button"
                       
                        bsStyle="primary" 
                        bsSize="large" block>Buy Crystals</Button>}
          modal
          closeOnDocumentClick>
          {close => (
            <div className="pop-up">
            <div className="story-button-text" >
              <div>How many Arcanic Crystals would you like to buy?</div>
              <Button onClick={() => this.handleClick(1)} className="eat-form-button" bsStyle="default">1</Button>
              <Button onClick={() => this.handleClick(5)} className="eat-form-button" bsStyle="default">5</Button>
              <Button onClick={() => this.handleClick(10)} className="eat-form-button" bsStyle="default">10</Button>
              <Button onClick={close} className="eat-form-button-close" bsStyle="light">Close</Button>
              <div className="eat-form-current-food" >Current Crystals: {this.props.inventory.crystalCount}/{this.props.inventory.maxCrystalCount}</div>
              <div className="eat-form-current-food" >Crystal Price: {this.state.crystalBuyPrice}</div>
            </div>
          </div>
          )}
          
        </Popup>
    )
  }
}

const mapStateToProps = (state) => ({
    inventory: state.inventory,
    miningShop: state.miningShop,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    buyFromMiningShop: buyFromMiningShop,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MiningBuyForm)
