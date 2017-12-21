import React, { Component } from "react";
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';


const navStyle = {
    marginBottom: '0px'
}

class NavBar extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect style={navStyle}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Josh</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <Scrollchor 
                to="#portfolio" 
                className="nav-link" 
                animate={{offset: 10, duration: 700}}>Portfolio</Scrollchor>
            </NavItem>
            <NavItem eventKey={2}>
              <Scrollchor 
                to="#technology" 
                className="nav-link" 
                animate={{offset: 10, duration: 700}}>Technology</Scrollchor>
            </NavItem>
            <NavItem eventKey={3}>
              <Scrollchor 
                to="#contact" 
                className="nav-link"
                animate={{offset: 10, duration: 700}}
                >Contact</Scrollchor>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;