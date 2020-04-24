import React, { Component } from 'react';
import Founder from '../pictures/Founder.jpg';
import "./About.css"
class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <img
            alt="Meaning"
            src={Founder}
            id="poriteFounder"
            className="mx-auto d-block"
          />
          <div className="aboutDescription">
            <p className="history">
              In 1952, Porite began manufacturing and marketing oilless bearings. 
              As a world leader in the machine parts manufacturing industry, Porite
              continues to grow everyday. It boasts the greatest production volume in
              the world. With strong support from customers all over the world and in 
              order to meet expectations from around the globe, Porite began establishing 
              foreign production sites at an early stage. The forerunner is Porite Taiwan 
              Co., Ltd. which was set up in 1968. 
            </p>
            <p className="history">
              Porite has engaged in business for more than 40 years now and has grown into a successful company
              of advanced technology and people. It does not only shoulder production missions but also puts effort
              in building up it's technology development team. The efforts have steadily pursued growth through quality 
              management and flexible business strategies and has become the biggest powder metallurgy manufacturer in 
              South East Asia. 
            </p>
            <p className="history">
              Porite's products are widely used as parts of automobiles, computers, OAs, 3C,
              and A/Vs which are supplied worldwide. As automation and computerization advance in the 21st
              century, greater precision, accuracy and quality for such machinery products will no doubt be 
              demanded. While maintaining a production system that seeks a balance in quality, price and delivery.
              Porite is striving to develop new technology for ever greater quality to the meet the needs of customers.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;