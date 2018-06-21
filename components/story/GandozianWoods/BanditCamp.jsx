import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";
import { makeTrue } from "../../../state/actions/story/actions-story";
import { bindActionCreators } from "redux";

class BanditCamp extends Component {
  

  render() {
    return (
      <div>
        <h1 className="story-header">Bandit Camp</h1>
        <Popup
          trigger={<Button d bsStyle="primary" className={this.props.story.bandit1Killed ? "dont-show" : "story-button"}>Talk to Bandits</Button>}
          modal
          closeOnDocumentClick>
            <div className="story-button-header">Bandit 1</div>
            <div className="story-button-text" >Stolen? How dare you come and insult us. We have no need to steal. And even if we did what
              makes you think you'd be able to get your stuff back? Hahaha...
            </div>
        </Popup>
        <Button href="/fightBandit1" disabled={this.props.story.bandit1Killed}  bsStyle="primary" className="story-button" >
          Fight Bandit 1
        </Button>
        <Button href="/fightBandit2" disabled={this.props.story.bandit2Killed}  bsStyle="primary" className="story-button" >
          Fight Bandit 2
        </Button>   
        <Button href="/fightBanditChief" 
        bsStyle="primary" 
        disabled={this.props.story.banditChiefKilled}
        className={this.props.story.bandit1Killed && this.props.story.bandit2Killed ? "story-button" : "dont-show"} >
          Fight Bandit Chief
        </Button>        
        <Popup
          trigger={<Button bsStyle="primary" className={this.props.story.banditChiefKilled ? "story-button" : "dont-show"} >Return Dr. Magnus's Research</Button>}
          modal
          closeOnDocumentClick>
            <div className="story-button-header">Dr. Magnus</div>
            <div className="story-button-text" > Wow! You took out all those bandits on your own. I can't thank you enough. Hmm..what is that glowing coming from your hands?
              Could it be?... You have the power to control Arcanic Energy! I've found strong Arcanic Signals coming from the Orc City south from here.
              You must be activating them. You should go there and see what you find.
            </div>
        </Popup>
        
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
  story: state.story,
})

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    makeTrue: makeTrue,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BanditCamp)
