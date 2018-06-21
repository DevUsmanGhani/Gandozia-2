import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { Button, ProgressBar } from "react-bootstrap";
import { errorNotification, successNotification } from "../../../assets/functions/notifications";
import { makeTrue, freeMan } from "../../../state/actions/story/actions-story";
import { bindActionCreators } from "redux";

class ManTiedToTree extends Component {
  

    handleClick() {
      if(this.props.story.chopRemaining <= 0){
        successNotification("You succesfully free the man from the tree!.");
        this.props.makeTrue("manSaved");
        this.props.makeTrue("banditCampFound");
      }
      if(this.props.woodcutting.level >= 5){
        this.props.freeMan();
      }
      else{
        errorNotification("You need a Woodcutting level of 5 to help free this man.");
      }
  }
  render() {
    return (
      <div>
        <h1 className="story-header">Man Tied to Tree</h1>
        <Popup
          trigger={<Button disabled={this.props.story.manSaved} bsStyle="primary" className="story-button">Talk to Man</Button>}
          modal
          closeOnDocumentClick>
            <div className="story-button-header">Man</div>
            <div className="story-button-text" >Help! Help! They tied me up and took my belongings!</div>
        </Popup>
        <div>
          <Button disabled={this.props.story.manSaved} onClick={() => this.handleClick()} bsStyle="primary" className="story-button" >
            Chop Man Down
          </Button>
          <ProgressBar className="chop-progress-bar" now={this.props.story.chopRemaining} />
        </div>
        <Popup
          trigger={<Button  bsStyle="primary" className={this.props.story.manSaved ? "story-button" : "dont-show"} >Question Man</Button>}
          modal
          closeOnDocumentClick>
            <div className="story-button-header">Dr. Magnus</div>
            <div className="story-button-text" >Thank you stranger! I am Dr. Arius Magnus from Magecliff. I've dedicated my life to uncovering the secrets of Arcanic Energy.
              I sensed some strong Arcanic Signals from this area and had been researching here for a few weeks.  I had quite a bit of research but these damn bandits captured me and stole all of my data! If you could help me find it I would be very grateful.
            </div>
        </Popup>
        <Button href="/" bsStyle="primary" className={this.props.story.manSaved ? "story-button" : "dont-show"}>Leave</Button>
        
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
  woodcutting: state.woodcutting,
  story: state.story,
})

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    makeTrue: makeTrue,
    freeMan: freeMan,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ManTiedToTree)
