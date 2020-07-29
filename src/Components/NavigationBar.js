import React from 'react';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import PoriteLogo from '../pictures/PoriteLogo.png';
import {Link} from 'react-router-dom';
import "./NavigationBar.css"
class NavigationBar extends React.Component {
  render() {
    return (
        <Navbar collapseOnSelect light="true" expand="md" bg="#EA2900">
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src={PoriteLogo}
              id="poriteLogo"
              className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler" />
          <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>  
              <Nav.Link href="/network">Network</Nav.Link>
              <Nav.Link href="/technology">Technology</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavigationBar;