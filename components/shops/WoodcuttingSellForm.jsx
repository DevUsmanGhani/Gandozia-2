import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import "../../css/EatForm.css";
import { sellFromWoodcuttingShop } from "../../state/actions/shops/actions-woodcutting-shop";
import { errorNotification, successNotification } from '../../assets/functions/notifications';


class WoodcuttingSellForm extends Component {
  constructor(props){
    super(props);

    this.state = {
        logSellPrice: 9,
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(amtToSell) {
    if(this.props.inventory.logCount >= amtToSell){
        let goldRecieved = amtToSell * this.state.logSellPrice;
        this.props.sellFromWoodcuttingShop(amtToSell, this.state.logSellPrice);
        successNotification("You successfully sell " + amtToSell + " logs for " + goldRecieved + " gold!");
    }
    else{
        errorNotification("You do not have " + amtToSell + " Logs!");
    }
      
   
  }
  
  render() {
    return (
       <Popup 
          trigger={<Button 
               
                        className="woodcutting-route-button"
                       
                        bsStyle="success" 
                        bsSize="large" block>Sell Logs</Button>}
          modal
          closeOnDocumentClick>
          {close => (
            <div className="pop-up">
            <div className="story-button-text" >
              <div>How many Logs would you like to sell?</div>
              <Button onClick={() => this.handleClick(1)} className="eat-form-button" bsStyle="default">1</Button>
              <Button onClick={() => this.handleClick(5)} className="eat-form-button" bsStyle="default">5</Button>
              <Button onClick={() => this.handleClick(10)} className="eat-form-button" bsStyle="default">10</Button>
              <Button onClick={close} className="eat-form-button-close" bsStyle="light">Close</Button>
              <div className="eat-form-current-food" >Current Logs: {this.props.inventory.logCount}/{this.props.inventory.maxLogCount}</div>
              <div className="eat-form-current-food" >Log Price: {this.state.logSellPrice}</div>
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
    sellFromWoodcuttingShop: sellFromWoodcuttingShop,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WoodcuttingSellForm)
