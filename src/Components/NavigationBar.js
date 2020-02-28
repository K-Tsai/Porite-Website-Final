import React from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import PoriteLogo from '../pictures/PoriteLogo.png';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="#EA2900" variant="light">
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src={PoriteLogo}
            id="poriteLogo"
            className="d-inline-block align-top"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#equipment">Network</Nav.Link>
            <Nav.Link href="#technology">Technology</Nav.Link>
            <Nav.Link href="#safety">Safety</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Porite" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;