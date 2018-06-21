import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";
import "../../css/Story.css";

export default class Dialogue extends Component {

  render() {
      
    return (
    <span className={this.props.show ? " " : "dont-show"} >
     <Popup 
          trigger={<Button className="story-button"bsStyle="primary" >{this.props.buttonMessage}</Button>}
          modal
          closeOnDocumentClick>
          {close => (
            <div className="pop-up">
            <div className="story-button-header">{this.props.popUpHeader}</div>
            <div className="story-button-text" >{this.props.popUpMessage}</div>
            <Button 
                onClick=
                {() =>
                    {
                    this.props.onClickFunction() ;
                    close();
                    }
                } 
                bsStyle="primary" 
                className="pop-up-button">
                    {this.props.popUpButtonText}
                </Button>
          </div>
          )}
          
        </Popup>
        </span>
    )
  }
}

Dialogue.defaultProps = {
    popUpButtonText: "Ok",
    onClickFunction: () => 0,
  
}

