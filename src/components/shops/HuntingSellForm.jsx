import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import "../../css/EatForm.css";
import { sellFromHuntingShop } from "../../state/actions/shops/actions-hunting-shop";
import { errorNotification, successNotification } from '../../assets/functions/notifications';


class HuntingSellForm extends Component {
  constructor(props){
    super(props);

    this.state = {
        foodSellPrice: 12,
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(amtToSell) {
    if(this.props.inventory.foodCount >= amtToSell){
        let goldRecieved = amtToSell * this.state.foodSellPrice;
        this.props.sellFromHuntingShop(amtToSell, this.state.foodSellPrice);
        successNotification("You successfully sell " + amtToSell + " food for " + goldRecieved + " gold!");
    }
    else{
        errorNotification("You do not have " + amtToSell + " food!");
    }
      
   
  }
  
  render() {
    return (
       <Popup 
          trigger={<Button 
               
                        className="hunting-routing-button"
                       
                        bsStyle="danger" 
                        bsSize="large" block>Sell Food</Button>}
          modal
          closeOnDocumentClick>
          {close => (
            <div className="pop-up">
            <div className="story-button-text" >
              <div>How many food would you like to sell?</div>
              <Button onClick={() => this.handleClick(1)} className="eat-form-button" bsStyle="default">1</Button>
              <Button onClick={() => this.handleClick(5)} className="eat-form-button" bsStyle="default">5</Button>
              <Button onClick={() => this.handleClick(10)} className="eat-form-button" bsStyle="default">10</Button>
              <Button onClick={close} className="eat-form-button-close" bsStyle="light">Close</Button>
              <div className="eat-form-current-food" >Current Food: {this.props.inventory.foodCount}/{this.props.inventory.maxFoodCount}</div>
              <div className="eat-form-current-food" >Food Price: {this.state.foodSellPrice}</div>
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
    sellFromHuntingShop: sellFromHuntingShop,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HuntingSellForm)
