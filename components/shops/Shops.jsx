import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import "../../css/Shops.css"

export default class Shops extends Component {
  render() {
    return (
        <div className="well button-well shop-well">
            <h1 className="well-header shop-header" >Gandozia Shops</h1>
            <Button className="combat-route-button" href="/combatShop" bsStyle="danger" bsSize="large" block>
                Combat Shop
            </Button>
            <Button className="arcania-route-button" href="/arcaniaShop" bsStyle="warning" bsSize="large" block >
                Arcania Shop
            </Button>
            <Button className="hunting-routing-button" href="/huntingShop" bsStyle="danger" bsSize="large" block>
                Hunting Shop
            </Button>
            <Button className="woodcutting-route-button" href="/woodcuttingShop" bsStyle="success" bsSize="large" block>
                Woodcutting Shop
            </Button>
            <Button className="mining-shop-route-button" href="./miningShop" bsStyle="primary" bsSize="large" block>
                Mining Shop
            </Button>
        </div>
    )
  }
}



