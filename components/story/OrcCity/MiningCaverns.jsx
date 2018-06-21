import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ProgressBar } from "react-bootstrap";
import { errorNotification, successNotification } from "../../../assets/functions/notifications";
import { makeTrue, mineStoryCrystal, activateTomeOfRage } from "../../../state/actions/story/actions-story";
import Dialogue from "../Dialogue";


class MiningCavern extends Component {
  handleClick() {
    if(this.props.story.mineRemaining <= 0){
      successNotification("You succesfully mine out the shining Arcanic Crystal.");
      this.props.makeTrue("crystalMined");
    }
    if(this.props.mining.miningBonus >= 20){
      this.props.mineStoryCrystal();
    }
    else{
      errorNotification("You need a Mining Bonus of 20 to pick at this crystal.");
    }
}

  render() {
    return (
       <div>
        <h1 className="story-header">Mining Caverns</h1>
        <Dialogue
            show={true}
            buttonMessage = "Approach Shining Crystal"
            popUpHeader = "..."
            popUpMessage = "The crystal starts shining brighter and brighter as you approach it."
            onClickFunction = {() => this.props.makeTrue("crystalApproached")}
            popUpButtonText="Ok"
            /> 
        <div>
          <Button disabled={this.props.story.crystalMined} onClick={() => this.handleClick()} bsStyle="primary" className={this.props.story.crystalApproached ? "story-button" : "dont-show"} >
            Swing Pickaxe at Crystal
          </Button>
          <ProgressBar className={this.props.story.crystalApproached ? "chop-progress-bar" : "dont-show"} now={this.props.story.mineRemaining} />
        </div>
        <Dialogue
            show={this.props.story.crystalMined}
            buttonMessage = "Inspect Crystal"
            popUpHeader = "..."
            popUpMessage = "As you inspect the crystal it grows blindingly bright! You feel a strange essence pour into you"
            onClickFunction = {() => this.props.makeTrue("crystalInspected")}
            popUpButtonText="Absorb Essence"
            /> 
        <Dialogue
            show={this.props.story.crystalInspected}
            buttonMessage = "Inspect Hands"
            popUpHeader = "..."
            popUpMessage = "You look down at your hands and their is gold etchings around your palms. You feel your mind unravel mysteries of great power. That ancient Arcanic Crystal had the knowledge of a Tome inside of it. A Tome is an ancient book that taught the ways of controlling Arcanic Enery. This tome is called the Tome of Rage. Your Arcanic Blasts will do 50% more damage but cost 50% more Arcana now!"
            onClickFunction = {() => {
              if(!this.props.story.tomeOfRageActivated){
                this.props.makeTrue("tomeOfRageActivated"); 
                this.props.activateTomeOfRage();
                successNotification("The Tome of Rage is activated in your mind! You feel tremendous power in your hands!");
              }
              
              }}
            popUpButtonText="Leave"
            /> 
       
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  story: state.story,
  mining: state.mining,
})

const mapDispatchToProps = {
  makeTrue: makeTrue,
  mineStoryCrystal: mineStoryCrystal,
  activateTomeOfRage: activateTomeOfRage,
}

export default connect(mapStateToProps, mapDispatchToProps)(MiningCavern)
