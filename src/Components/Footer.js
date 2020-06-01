import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <div className= "container">
        <div className="row">
          <div className="col">
              <h1 className='footerHeader'>Address</h1>
              <ul className= "footerList">
                <li className="Address">Porite USA</li>
                <li className="Address">1295 Combermere Dr,</li>
                <li className="Address">Troy, Michigan</li>
                <li className="Address">United States</li>
              </ul>
          </div>
          <div className="col">
              <h1 className='footerHeader'>Information</h1>
                <ul className="footerList">
                  <Link to= "/about">
                    <li className="footerColor">About</li>
                  </Link>
                  <Link to= "/products">
                    <li className="footerColor">Products</li>
                  </Link>
                  <Link to= "/network">
                    <li className="footerColor">Network</li>
                  </Link>
                  <Link to= "/technology">
                    <li className="footerColor">Technology</li>
                  </Link>
                  <Link to="/safety">
                    <li className="footerColor">Safety</li>
                  </Link>
                 </ul>
          </div>
          <div className="col">
          <h1 className='footerHeader'>Contact</h1>
              <ul className="footerList">
                <Link to= "/contact" style={{ textDecoration: 'none' }}>
                  <li className="footerColor">Email us</li>
                </Link>
                <li>(248) 597-9988</li>
              </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Footer;