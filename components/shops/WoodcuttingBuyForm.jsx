import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import "../../css/EatForm.css";
import { buyFromWoodcuttingShop } from "../../state/actions/shops/actions-woodcutting-shop";
import { errorNotification, successNotification } from '../../assets/functions/notifications';


class WoodcuttingBuyForm extends Component {
  constructor(props){
    super(props);

    this.state = {
        logBuyPrice: 13,
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(amtToBuy) {
    let totalCost = amtToBuy * this.state.logBuyPrice;
    if(this.props.inventory.goldCount >= totalCost){
        let amtYouCanStore = this.props.inventory.maxLogCount - this.props.inventory.logCount;
        if(amtToBuy <= amtYouCanStore){
            if(amtToBuy === 1){
                successNotification("You successfully buy a Log for " + this.state.logBuyPrice + " gold!");
                this.props.buyFromWoodcuttingShop(this.props.woodcuttingShop.log);
            }
            else{
                successNotification("You successfully buy " + amtToBuy + " Logs for " + totalCost + " gold!");
                for(let i = 0; i < amtToBuy; i++){
                    this.props.buyFromWoodcuttingShop(this.props.woodcuttingShop.log);
                }   
            }   
        }
        else{
            errorNotification("You cannot store that many Logs.");
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
               
                        className="woodcutting-route-button"
                       
                        bsStyle="success" 
                        bsSize="large" block>Buy Logs</Button>}
          modal
          closeOnDocumentClick>
          {close => (
            <div className="pop-up">
            <div className="story-button-text" >
              <div>How many Logs would you like to buy?</div>
              <Button onClick={() => this.handleClick(1)} className="eat-form-button" bsStyle="default">1</Button>
              <Button onClick={() => this.handleClick(5)} className="eat-form-button" bsStyle="default">5</Button>
              <Button onClick={() => this.handleClick(10)} className="eat-form-button" bsStyle="default">10</Button>
              <Button onClick={close} className="eat-form-button-close" bsStyle="light">Close</Button>
              <div className="eat-form-current-food" >Current Logs: {this.props.inventory.logCount}/{this.props.inventory.maxLogCount}</div>
              <div className="eat-form-current-food" >Log Price: {this.state.logBuyPrice}</div>
            </div>
          </div>
          )}
          
        </Popup>
    )
  }
}

const mapStateToProps = (state) => ({
    inventory: state.inventory,
    woodcuttingShop: state.woodcuttingShop,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    buyFromWoodcuttingShop: buyFromWoodcuttingShop,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WoodcuttingBuyForm)
