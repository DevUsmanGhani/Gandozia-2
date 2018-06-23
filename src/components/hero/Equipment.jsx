import React, { Component } from 'react';
import { connect } from "react-redux";
import "../../css/Equipment.css";
import { Grid, Row, Col } from "react-bootstrap";

class Equipment extends Component {
  render() {
    return (
      <div>
        <div id="equipment-header" >Equipment</div>
        <Grid className="equipment-container">
            <Row className="equipment-items">
                <Col xs={6}>
                    <div className="well weapon-armor-well">
                        <div className="weapon-armor-header" >Weapon/Armor</div>
                        <br />
                        <div className="weapon-armor-container">
                            <div className="w-a"><span className="w-a-type">Weapon: </span><span className="w-a-item">{this.props.inventory.weapon}</span></div>
                            <div className="w-a"><span className="w-a-type">Armor: </span><span className="w-a-item">{this.props.inventory.armor}</span></div>
                            <div className="w-a"><span className="w-a-type">Helmet: </span><span className="w-a-item">{this.props.inventory.helmet}</span></div>
                            <div className="w-a"><span className="w-a-type">Amulet: </span><span className="w-a-item">{this.props.inventory.amulet}</span></div>
                        </div>
                    </div>
                </Col>
                <Col xs={6}>
                    <div className="well jewelry-well">
                        <div className="jewelry-header" >Jewelry</div>
                        <br />
                        <div className="jewelry-container">
                            <div className="jewelry"><span className="jewelry-type">Ring: </span><span className="jewelry-item">{this.props.inventory.ring}</span></div>
                            <div className="jewelry"><span className="jewelry-type">Talisman: </span><span className="jewelry-item">{this.props.inventory.talisman}</span></div>
                            <div className="jewelry"><span className="jewelry-type">Cape: </span><span className="jewelry-item">{this.props.inventory.cape}</span></div>
                            <div className="jewelry">
                                <span className="jewelry-type">Tomes: </span>
                                <span className="jewelry-item"> {(this.props.inventory.tome).map((tome) => {
                                    return <span>{tome}, </span>})}
                                </span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="equipment-stats">
                <Col xs={6}>
                    <div className="well combat-stats-container">
                        <div className="combat-stats-header">
                            Combat Stats
                        </div>
                        <div className="c-s-container">
                            <div className="combat-stat">Damage: {this.props.combat.minDamage}-{this.props.combat.maxDamage}</div>
                            <div className="combat-stat">Hit Chance: {this.props.combat.hitChance}%</div>
                            <div className="combat-stat">Block Chance: {this.props.combat.blockChance}%</div>
                            <div className="combat-stat">Auto Heal: {this.props.combat.autoHealBonus}/s</div>
                        </div>
                    </div>
                </Col>
                <Col xs={6}>
                <div className="well arcania-stats-container">
                        <div className="arcania-stats-header">
                            Arcania Stats
                        </div>
                        <div className="a-s-container">
                            <div className="arcania-stat">Damage: {this.props.arcania.blastDamage}</div>
                            <div className="arcania-stat">Hit Chance: 100%</div>
                            <div className="arcania-stat">Arcana Cost: {this.props.arcania.blastArcanaCost}</div>
                            <div className="arcania-stat">Arcana Restore: {this.props.arcania.autoRestoreBonus}/s</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        inventory: state.inventory,
        combat: state.combat,
        arcania: state.arcania,
    }
}

export default connect(mapStateToProps)(Equipment)