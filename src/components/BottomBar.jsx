import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem} from "react-bootstrap";
import "../css/BottomBar.css";

export default class BottomBar extends Component {
  render() {
    return (
      <Navbar  fixedBottom className="bottom-container" inverse>
          <Navbar.Header className="bottom-bar-header">
            Gandozia
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey="1" title="World" href="#" id={"World"}>
              <MenuItem className="center-align" eventKey="1.1" href="/">Overview</MenuItem>
              <MenuItem className="center-align" eventKey="1.2" href="/shops">Shops</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey="2" title="Hero" href="#" id={"Hero"}>
              <MenuItem className="center-align" eventKey="2.1" href="/skills">Skills</MenuItem>
              <MenuItem className="center-align" eventKey="2.2" href="/equipment">Equipment</MenuItem>
              <MenuItem className="center-align" eventKey="2.3" href="/inventory">Inventory</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey="3" title="Train" href="#" id={"Train"}>
              <MenuItem className="center-align" eventKey="3.1" href="/combat">Combat</MenuItem>
              <MenuItem className="center-align" eventKey="3.2" href="/arcania">Arcania</MenuItem>
              <MenuItem className="center-align" eventKey="3.3" href="/hunting">Hunting</MenuItem>
              <MenuItem className="center-align" eventKey="3.4" href="/woodcutting">Woodcutting</MenuItem>
              <MenuItem className="center-align" eventKey="3.5" href="/mining">Mining</MenuItem>
            </NavDropdown>
          </Nav>
      </Navbar>
    )
  }
}
