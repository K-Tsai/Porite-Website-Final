import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import PoriteLogo from '../pictures/PoriteLogo.png';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {
  render() {
    return (
      <div class ="container">
        <Navbar inverse fixedTop expand="lg" bg="#EA2900" variant="light">
          <Link to= "/">
            <Navbar.Brand>
              <img
                alt="Logo"
                src={PoriteLogo}
                id="poriteLogo"
                className="d-inline-block align-top"/>
            </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/network">Network</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default NavigationBar;