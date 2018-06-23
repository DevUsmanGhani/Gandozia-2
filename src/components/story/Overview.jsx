import React, { Component } from 'react';
import "../../css/Story.css";
import "../../css/Overview.css";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Overview extends Component {
  render() {
    return (
          <Grid>
            <Row >
              <Col xs={4}>
                <div className=" gandozian-woods-well" >
                  <div className="gandozian-woods-header" >Gandozian Woods</div>
                  <Button bsStyle="success" className="overview-button" href="/manTiedToTree">
                    Man Tied to Tree
                  </Button>
                  <Button href="/banditCamp" bsStyle="success" className={this.props.story.banditCampFound ? "overview-button" : "dont-show"}>
                    Bandit Camp
                  </Button>
                  <Button href="/orcCityGates" bsStyle="success" className={this.props.story.orcCityGatesFound ? "overview-button" : "dont-show"}>
                    Orc City Gates
                  </Button>
                </div>
              </Col>
              <Col xs={4}>
                <div className={this.props.story.orcCityFound ? " orc-city-well" : "dont-show"}>
                  <div className="orc-city-header">Orc City</div>
                  <Button bsStyle="primary" className="overview-button orc-city-button" href="/miningCaverns">
                    Mining Caverns
                  </Button>
                  <Button bsStyle="primary" className={this.props.story.tomeOfRageActivated ? "overview-button orc-city-button" : "dont-show"} href="/orcLibrary">
                    Orc Library
                  </Button>
                  <Button bsStyle="primary" className={this.props.story.foundByAgorAndStig ? "overview-button orc-city-button" : "dont-show"} href="/orcLibraryBack">
                    Orc Library Back
                  </Button>
                </div>
              </Col>
              
            </Row>
            

          </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    story: state.story,
  }
}

export default connect(mapStateToProps)(Overview)