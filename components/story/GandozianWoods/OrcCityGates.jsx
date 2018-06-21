import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import { errorNotification, successNotification } from "../../../assets/functions/notifications";
import { makeTrue, orcTrial1Passed, orcTrial2Passed } from "../../../state/actions/story/actions-story";
import { bindActionCreators } from "redux";
import Dialogue from "../Dialogue.jsx";
import "../../../css/Story.css";

class OrcCityGates extends Component {
  
  attemptTrial1() {
    if(this.props.inventory.foodCount >= 10){
      successNotification("You turn in 10 prey and pass the first trial!");
      this.props.makeTrue("orcTrial1Passed");
      this.props.orcTrial1Passed();
    }
    else{
      errorNotification("You do not have 10 prey to offer.")
    }
  }
  attemptTrial2() {
    if(this.props.inventory.crystalCount >= 10){
      successNotification("You turn in 10 Arcanic Crystals and pass the second trial!");
      this.props.makeTrue("orcTrial2Passed");
      this.props.orcTrial2Passed();
    }
    else{
      errorNotification("You do not have 10 Arcanic Crystals.")
    }
  }

  render() {
    return (
        <div>
          <h1 className="story-header">Orc City Gates</h1>

          <Dialogue 
            show={!this.props.story.trialLeaderSpokenTo}
            buttonMessage="Approach City Gates"
            popUpHeader="Orc Chieftian"
            popUpMessage="What human doing here? Human want entry to great Orc City?? HAHAHA... Orc do not let any puny human into great Orc City.
                Must pass the trials if human want in."
            onClickFunction={() => this.props.makeTrue("orcCityGatesApproached")}
            popUpButtonText="I will pass the trials." />
      
          <Dialogue 
            show={this.props.story.orcCityGatesApproached } 
            buttonMessage="Speak with Trial Leader" 
            popUpHeader="Trial Leader" 
            popUpMessage="All outsiders must pass Trials of the Orcs to enter great Orc City. Outsider must bring me ten head of prey he hunt and 10 shiny crystal he mine.
                Then he will be given chance to duel the Orc Champion. No outsider passed trial in many years. Good look puny human."
            onClickFunction={() => this.props.makeTrue("trialLeaderSpokenTo")} />
            
          <Dialogue
            show={this.props.story.trialLeaderSpokenTo && !this.props.story.orcTrial1Passed}
            buttonMessage = "Trial 1"
            popUpHeader = "Trial Leader"
            popUpMessage="Do you have 10 heads of pray for me human?"
            onClickFunction = {() => this.attemptTrial1()} 
            popUpButtonText="Turn in prey" />
          <Dialogue   
            show={this.props.story.trialLeaderSpokenTo && !this.props.story.orcTrial2Passed}
            buttonMessage = "Trial 2"
            popUpHeader = "Trial Leader"
            popUpMessage="Do you have 10 shiny crystals for me human?"
            onClickFunction = {() => this.attemptTrial2()} 
            popUpButtonText="Turn in crystals" />
          <Dialogue
            show={this.props.story.orcTrial1Passed && this.props.story.orcTrial2Passed && !this.props.story.orcChampionDefeated}
            buttonMessage = "Speak with Orc Champion"
            popUpHeader = "Orc Champion"
            popUpMessage = "Impressive...You have passed the trials so far human. However, prepare to meet your greatest challenge yet. Defeat me in battle and you may have passage to the great Orc City!"
            onClickFunction = {() => this.props.makeTrue("orcChampionSpokenTo")}
            popUpButtonText="I accept your challenge" />
          <Button href="fightOrcChampion" className={this.props.story.orcChampionSpokenTo ? "story-button" : "dont-show"} bsStyle="primary" bsSize="large">
            Fight Orc Champion
          </Button>
          <Dialogue
            show={this.props.story.orcChampionDefeated}
            buttonMessage = "Speak with Orc Champion"
            popUpHeader = "Orc Champion"
            popUpMessage = "I yield! You have bested me human. We orc may be vicious warrior but we keep our side of bargain. You may enter grand Orc City"
            onClickFunction = {() => this.props.makeTrue("orcCityFound")}
            popUpButtonText="Thank you my friend."
            />
        </div>  
    )
  }
}

const mapStateToProps = (state) => ({
  woodcutting: state.woodcutting,
  story: state.story,
  inventory: state.inventory,
})

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    makeTrue: makeTrue,
    orcTrial1Passed: orcTrial1Passed,
    orcTrial2Passed: orcTrial2Passed,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrcCityGates)
