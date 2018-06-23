import React, { Component } from 'react';
import { connect } from 'react-redux';
import { absorbCrystal, restoreToFull } from '../../../state/actions/combat/actions-fighting';
import Popup from "reactjs-popup";
import { bindActionCreators } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import { Button } from "react-bootstrap";
import "../../../css/EatForm.css";
import { errorNotification, successNotification } from '../../../assets/functions/notifications';

class AbsorbForm extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(amtToAbsorb) {
    if(this.props.arcania.currentArcana < this.props.arcania.maxArcana){
      if(this.props.inventory.crystalCount >= amtToAbsorb){
        var restoreAmt = this.props.arcania.crystalRestoreAmount;
        var totalRestore = restoreAmt * amtToAbsorb;
        var arcanaNeededForFullArcana = this.props.arcania.maxArcana - this.props.arcania.currentArcana;
        if(totalRestore > arcanaNeededForFullArcana){
          this.props.restoreToFull(amtToAbsorb);
          successNotification("You absorb some food and fully replenish your arcana!");
        }
        else{
          this.props.absorbCrystal(amtToAbsorb, restoreAmt);
          successNotification("You absorb " + amtToAbsorb + " food and restore " + totalRestore + " arcana");
        }
      }
      else{
        errorNotification("You do not have " + amtToAbsorb + " Arcanic Crystals!");
      }
    }
    else{
      errorNotification("You are already at full Arcana!");
    }
   
  }
  
  render() {
    return (
       <Popup 
          trigger={<Button className="eat-food-button" bsStyle="primary" >Absorb Crystals</Button>}
          modal
          closeOnDocumentClick>
          {close => (
            <div className="pop-up">
            <div className="story-button-text" >
              <div>How many crystals would you like to absorb?</div>
              <Button onClick={() => this.handleClick(1)} className="eat-form-button" bsStyle="default">1</Button>
              <Button onClick={() => this.handleClick(5)} className="eat-form-button" bsStyle="default">5</Button>
              <Button onClick={() => this.handleClick(10)} className="eat-form-button" bsStyle="default">10</Button>
              <Button onClick={close} className="eat-form-button-close" bsStyle="light">Close</Button>
              <div className="eat-form-current-food" >Current Crystals: {this.props.inventory.crystalCount} /{this.props.inventory.maxCrystalCount}</div>
            </div>
          </div>
          )}
          
        </Popup>
    )
  }
}

const mapStateToProps = (state) => ({
    inventory: state.inventory,
    arcania: state.arcania,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    absorbCrystal: absorbCrystal,
    restoreToFull: restoreToFull,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AbsorbForm)
