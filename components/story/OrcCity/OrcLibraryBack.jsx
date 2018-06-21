import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ProgressBar } from "react-bootstrap";
import { errorNotification, successNotification } from "../../../assets/functions/notifications";
import { makeTrue, decideToPayChildren, blastSteelWall } from "../../../state/actions/story/actions-story";
import Dialogue from "../Dialogue";
import Popup from "reactjs-popup";

class MiningCavern extends Component {
  handleClick() {
    if(this.props.arcania.currentArcana >= 1){
      this.props.blastSteelWall(this.props.arcania.currentArcana);
      successNotification("You concentrate your power and blast at the wall!");
      if(this.props.story.steelWallRemaining <= 0) {
        successNotification("You succesfully blast a chunk in the wall to escape!");
      this.props.makeTrue("steelWallDestroyed");
      }
    }
    else{
      errorNotification("You need Arcana to blast at the wall!");
    }
}

  render() {
    return (
       <div>
        <h1 className="story-header">Orc Library Back</h1>
        <Dialogue
            show={!this.props.story.orcChildrenFound}
            buttonMessage = "Approach Steel Wall"
            popUpHeader = "..."
            popUpMessage = "You approach a large steel wall at the back of the library. Agor and Stif are swiftly approaching and this wall seems impenetrable...unless. You stare at your hands and hatch a plan..."
            onClickFunction = {() => this.props.makeTrue("steelWallApproached")}
            popUpButtonText="Ok"
            /> 
        <div className={this.props.story.steelWallApproached && !this.props.story.steelWallDestroyed ? " " : "dont-show"}>
          <Button  onClick={() => this.handleClick()} bsStyle="primary" className="story-button">
            Blast at Wall
          </Button>
          <ProgressBar className="chop-progress-bar" now={this.props.story.steelWallRemaining} />
        </div>
        <Dialogue
            show={this.props.story.steelWallDestroyed && !this.props.story.orcChildrenFound}
            buttonMessage = "Escape Orc Library"
            popUpHeader = "..."
            popUpMessage = "You blast a hole with your Arcanic Energy clean through the steel wall. You feel very weak however. You run and escape Agor and Stig. You find a horse out behind a house in the outskirts of town. You attempt to get on the horse but three small orc children approach you."
            onClickFunction = {() => this.props.makeTrue("orcChildrenFound")}
            popUpButtonText="Ok"
            /> 
        <Dialogue
            show={this.props.story.orcChildrenFound && !this.props.story.orcChildrenSpokenTo}
            buttonMessage = "Speak with Orc Children"
            popUpHeader = "Orc Children"
            popUpMessage = "You human. Der is watch out for you. Big reward if found. 100 gold coinos. My orc daddy have your head once we turn in hahahaha."
            onClickFunction = {() => {
              this.props.makeTrue("orcChildrenSpokenTo")
              }
            }
            popUpButtonText="Wait..."
            /> 
        <span className={this.props.story.orcChildrenSpokenTo && !(this.props.story.decideToPayChildren || this.props.story.decideToKillChildren) ? " " : "dont-show"} >
            <Popup 
                trigger={<Button className="story-button"bsStyle="primary">Negotiate with Orc Children</Button>}
                modal
                closeOnDocumentClick>
                {close => (
                    <div className="pop-up">
                    <div className="story-button-header">Orc Children</div>
                    <div className="story-button-text" >Hmmm..Reward for find you is 100 gold coinos. Plus show of seeing my daddy chop your stupid human head off. hahahah...But orc need coinos. How about you give us 300 coinos and we don't tell anyone.</div>
                    <Button 
                        onClick=
                        {() =>
                            {
                            if(this.props.inventory.goldCount >= 300){
                                this.props.makeTrue("decideToPayChildren") ;
                                this.props.decideToPayChildren();
                                close();
                            }
                            else{
                                errorNotification("You do not have 300 gold!");
                                close();
                            }
                            
                            }
                        } 
                        bsStyle="primary" 
                        className="pop-up-button">
                            Fine take this 300 gold and go
                        </Button>
                        <Button 
                        onClick=
                        {() =>
                            {
                            this.props.makeTrue("decideToKillChildren") ;
                            close();
                            }
                        } 
                        bsStyle="primary" 
                        className="pop-up-button">
                            Or I could just take your heads!
                        </Button>
                </div>
                )}
                
            </Popup>
        </span>
        <Button href="/fightOrcChild1" disabled={this.props.story.orcChild1Defeated}  bsStyle="primary" className={this.props.story.decideToKillChildren ? "story-button" : "dont-show"} >
            Fight Orc Child 1
        </Button>
        <Button href="/fightOrcChild2" disabled={this.props.story.orcChild2Defeated}  bsStyle="primary" className={this.props.story.decideToKillChildren ? "story-button" : "dont-show"} >
            Fight Orc Child 2
        </Button>
        <Button href="/fightOrcChild3" disabled={this.props.story.orcChild3Defeated}  bsStyle="primary" className={this.props.story.decideToKillChildren ? "story-button" : "dont-show"} >
            Fight Orc Child 3
        </Button>
        <Dialogue
            show={(this.props.story.orcChild1Defeated && this.props.story.orcChild2Defeated && this.props.story.orcChild3Defeated) || this.props.story.decideToPayChildren}
            buttonMessage = "Hop on Horse"
            popUpHeader = "..."
            popUpMessage = "You hop on the horse and flee the city as fast as you can...You remember Dr. Magnus was from Magecliff and head towards that direction."
            onClickFunction = {() => {
                this.props.makeTrue("orcCityEscaped");
                this.props.history.push("/");
                }}
            popUpButtonText="Escape Orc City"
            /> 
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  story: state.story,
  arcania: state.arcania,

})

const mapDispatchToProps = {
  makeTrue: makeTrue,
  decideToPayChildren: decideToPayChildren,
  blastSteelWall: blastSteelWall,
}

export default connect(mapStateToProps, mapDispatchToProps)(MiningCavern)
