import React from 'react';
import PoriteFrontPage from '../pictures/PoriteFrontPage.jpg';
import AutoParts from '../pictures/AutoParts.jpg';
import MetalInjectionMolding from '../pictures/MetalInjectionMolding.jpg';
import OillessBearingParts from '../pictures/OillessBearingParts.jpg';
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div class="container">
        <div className="row">
          <img
            alt="Meaning"
            src={PoriteFrontPage} fluid
            id="poriteMeaning"
            class="img-fluid"
          />
          <p className= 'Intro'>	
            Created in 1952 in Japan by Mr. Tatsunosuke Kikuchi, today chaired by
            Shigeo AOKI, Porite group has become a major actor in the manufacturing
            of sintered mechanical parts, and the world leader in the production of
            micro self-lubricating bushings. Porite USA is a subsidary of Porite.
          </p>
          <div className="col">
            <img 
              alt="Auto Parts"
              src={AutoParts}
              id="autoParts"
              class="products"
            />
            <h2 className="productHeader">Auto Parts</h2>
          </div>
          <div className="col">
            <img 
              alt="Metal Injection"
              src={MetalInjectionMolding}
              id="metalInjection"
              class="products"
            />
            <h2 className="productHeader">Metal Injection Molding</h2>
          </div>
          <div className="col">
            <img 
              alt="Oiless Bearing"
              src={OillessBearingParts}
              id="oillessBearing"
              class="products"
            />
            <h2 className="productHeader">Oilless Bearing Parts</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;