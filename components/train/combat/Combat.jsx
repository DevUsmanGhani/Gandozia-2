import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";




class Combat extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        alert(e.name + "\nHealth: " + e.currentHealth + "/" + e.maxHealth 
        + "\nDamage: " + e.minDamage + "-" + e.maxDamage 
        + "\nHit Chance: " + e.hitChance + "\nBlock Chance: " + e.blockChance
        + "\nGold Drop " + e.minGoldDrop + "-" + e.maxGoldDrop);
    }
   
  render() {
    var enemies = [this.props.enemies.goblin, this.props.enemies.bandit, this.props.enemies.orc, this.props.enemies.cyclops];
    return (
      <div className="well combat-well">
            <h1 className="well-header combat-header" >Combat</h1>
            {enemies.map(enemy => {
                return (<div>
                            <Button className="combat-button" href={"/fight" + enemy.name} bsStyle="danger" bsSize="large" block>
                                Fight {enemy.name}
                            </Button>
                            <Button className="combat-info" bsSize="large" bsStyle="secondary" onClick={()=>this.handleClick(enemy)}>
                                Info
                            </Button>
                        </div>
                )
                })}
            <Button className="combat-more-button" href="/combat2" bsStyle="danger" bsSize="large" block>
                More
            </Button>
        </div>
    )
  }
}

function mapStateToProps(state){
    return{
        enemies: state.enemies,
    }
}

export default connect(mapStateToProps)(Combat)