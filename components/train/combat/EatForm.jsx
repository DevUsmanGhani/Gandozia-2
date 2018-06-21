import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eatFood, healToFull } from '../../../state/actions/combat/actions-fighting';
import Popup from "reactjs-popup";
import { bindActionCreators } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import { Button } from "react-bootstrap";
import "../../../css/EatForm.css";
import { errorNotification, successNotification } from '../../../assets/functions/notifications';

class EatForm extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(amtToEat) {
    if(this.props.combat.currentHealth < this.props.combat.maxHealth){
      if(this.props.inventory.foodCount >= amtToEat){
        var healAmt = 10;
        var totalHeal = healAmt * amtToEat;
        var healthNeededToFullHp = this.props.combat.maxHealth - this.props.combat.currentHealth;
        if(totalHeal > healthNeededToFullHp){
          this.props.healToFull(amtToEat);
          successNotification("You eat some food and fully replenish your health!");
        }
        else{
          this.props.eatFood(amtToEat, healAmt);
          successNotification("You eat " + amtToEat + " food and heal " + totalHeal + " health");
        }
      }
      else{
        errorNotification("You do not have " + amtToEat + " food!");
      }
    }
    else{
      errorNotification("You are already at full health!");
    }
   
  }
  
  render() {
    return (
       <Popup 
          trigger={<Button className="eat-food-button" bsStyle="primary" >Eat Food</Button>}
          modal
          closeOnDocumentClick>
          {close => (
            <div className="pop-up">
            <div className="story-button-text" >
              <div>How many food would you like to eat?</div>
              <Button onClick={() => this.handleClick(1)} className="eat-form-button" bsStyle="default">1</Button>
              <Button onClick={() => this.handleClick(5)} className="eat-form-button" bsStyle="default">5</Button>
              <Button onClick={() => this.handleClick(10)} className="eat-form-button" bsStyle="default">10</Button>
              <Button onClick={close} className="eat-form-button-close" bsStyle="light">Close</Button>
              <div className="eat-form-current-food" >Current Food: {this.props.inventory.foodCount} /{this.props.inventory.maxFoodCount}</div>
            </div>
          </div>
          )}
          
        </Popup>
    )
  }
}

const mapStateToProps = (state) => ({
    inventory: state.inventory,
    combat: state.combat,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    eatFood: eatFood,
    healToFull: healToFull,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EatForm)
