import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import "../../css/EatForm.css";
import { sellFromMiningShop } from "../../state/actions/shops/actions-mining-shop";
import { errorNotification, successNotification } from '../../assets/functions/notifications';


class MiningSellForm extends Component {
  constructor(props){
    super(props);

    this.state = {
        crystalSellPrice: 13,
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(amtToSell) {
    if(this.props.inventory.crystalCount >= amtToSell){
        let goldRecieved = amtToSell * this.state.crystalSellPrice;
        this.props.sellFromMiningShop(amtToSell, this.state.crystalSellPrice);
        if(amtToSell === 1){
            successNotification("You successfully sell an Arcanic Crystal for " + this.state.crystalSellPrice + " gold!");
        }
        else{
            successNotification("You successfully sell " + amtToSell + " crystals for " + goldRecieved + " gold!");
        }   
    }
    else{
        errorNotification("You do not have " + amtToSell + " crystals!");
    }
      
   
  }
  
  render() {
    return (
       <Popup 
          trigger={<Button 
               
                        className="mining-shop-route-button"
                       
                        bsStyle="primary" 
                        bsSize="large" block>Sell Crystals</Button>}
          modal
          closeOnDocumentClick>
          {close => (
            <div className="pop-up">
            <div className="story-button-text" >
              <div>How many Arcanic Crystals would you like to sell?</div>
              <Button onClick={() => this.handleClick(1)} className="eat-form-button" bsStyle="default">1</Button>
              <Button onClick={() => this.handleClick(5)} className="eat-form-button" bsStyle="default">5</Button>
              <Button onClick={() => this.handleClick(10)} className="eat-form-button" bsStyle="default">10</Button>
              <Button onClick={close} className="eat-form-button-close" bsStyle="light">Close</Button>
              <div className="eat-form-current-food" >Current Crystals: {this.props.inventory.crystalCount}/{this.props.inventory.maxCrystalCount}</div>
              <div className="eat-form-current-food" >Crystal Price: {this.state.crystalSellPrice}</div>
            </div>
          </div>
          )}
          
        </Popup>
    )
  }
}

const mapStateToProps = (state) => ({
    inventory: state.inventory,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sellFromMiningShop: sellFromMiningShop,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MiningSellForm)
