import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import { makeTrue } from "../../../state/actions/story/actions-story";
import Dialogue from "../Dialogue";


class MiningCavern extends Component {
 
  render() {
    return (
       <div>
        <h1 className="story-header">Orc Library</h1>
        <Dialogue
            show={!this.props.story.libraryMasterDefeated}
            buttonMessage = "Approach Library Master"
            popUpHeader = "Library Master"
            popUpMessage = "Hell human...wait what is this? You removed the Ancient Arcanic Crystal? And those markings around your hands...I knew this day would have to come. Prepare to die!"
            onClickFunction = {() => this.props.makeTrue("libraryMasterApproached")}
            popUpButtonText="Wait..wha-"
            /> 
        <Button href="/fightLibraryMaster" disabled={this.props.story.libraryMasterDefeated}  bsStyle="primary" className={this.props.story.libraryMasterApproached ? "story-button" : "dont-show"} >
            Fight Library Master
        </Button>
        <Dialogue
            disabled={this.props.story.libraryMasterBodyLooted}
            show={this.props.story.libraryMasterDefeated}
            buttonMessage = "Check Body"
            popUpHeader = "..."
            popUpMessage = "You find a diary in the body of the Library Master!"
            onClickFunction = {() => this.props.makeTrue("libraryMasterBodyLooted")}
            popUpButtonText="Take Diary"
            /> 
        <Dialogue
            show={this.props.story.libraryMasterBodyLooted}
            buttonMessage = "Read Diary"
            popUpHeader = "Library Master's Diary"
            popUpMessage = "I have noticed the Ancient Crystal in the cavern glowing bright. The Arcanic Born must be here. I know this crystal will draw him to it. Lord Mikvel has had me here for 10 years waiting for the Arcanic Born to arrive. Finally, it appears I will be completing my duty soon."
            onClickFunction = {() => {
              this.props.makeTrue("libraryMasterDiaryRead")
              }
            }
            popUpButtonText="Close Diary"
            /> 
        <Dialogue
            show={this.props.story.libraryMasterDiaryRead}
            buttonMessage="Turn Around"
            popUpHeader="Agor and Stig"
            popUpMessage="PUNY HUMAN! WE LET YOU INTO OUR GREAT CITY AND YOU SLAY OUR LIBRARY MASTER. YOU WILL PAY WITH BLOOD. GET HIM!!"
            onClickFunction= {() => {
                this.props.makeTrue("foundByAgorAndStig");
                this.props.history.push("/orcLibraryBack");
            }}
            popUpButtonText="Run to Back of Orc Library"
            />
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  story: state.story,

})

const mapDispatchToProps = {
  makeTrue: makeTrue,
}

export default connect(mapStateToProps, mapDispatchToProps)(MiningCavern)
