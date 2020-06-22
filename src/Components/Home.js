import React from 'react';
import PoriteFrontPage from '../pictures/PoriteFrontPage.jpg';
import AutoParts from '../pictures/AutoParts.jpg';
import MetalInjectionMolding from '../pictures/MetalInjectionMolding.jpg';
import OillessBearingParts from '../pictures/OillessBearingParts.jpg';
import PoriteMeaning from '../pictures/PoriteMeaning.jpg';
import map from '../pictures/map.jpg';
import PoriteProducts from '../pictures/PoriteProducts.jpg';
import {Link} from 'react-router-dom';
import ReactPlayer from "react-player"
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div class="container">
        <div className="row">
          <div className="homePage">
            <img
            alt="Meaning"
            src={PoriteFrontPage} fluid
            id="poriteMeaning"
            class="img-fluid"
          />
          </div>
          
          <h1 className="partsCenter">Products</h1>
          <div className="products">
    
            <div className="col-sm">
              <img 
                alt="Auto Parts"
                src={AutoParts}
                id="autoParts"
                class="products"
              />
              <h2 className="productHeader">Auto Parts</h2>
            </div>
            <div className="col-sm">
              <img 
                alt="Metal Injection"
                src={MetalInjectionMolding}
                id="metalInjection"
                class="products"
              />
              <h2 className="productHeader">Metal Injection Molding</h2>
            </div>
            <div className="col-sm">
              <img 
                alt="Oiless Bearing"
                src={OillessBearingParts}
                id="oillessBearing"
                class="products"
              />
              <h2 className="productHeader">Oilless Bearing Parts</h2>
            </div>
          </div>
          <div className="botLayout">
          <div className="col">
              <div className="row1">
                <h1 id="linkHeader1">Leading Manufacturer</h1>
                <p className="productDesc">
                  A major leader in the manufacturing
                  of sintered mechanical parts.
                </p>
                <Link to= "/network">
                  <li id="link1">Learn more about our company</li>
                </Link>
              </div>
            </div>
            <div className="col">
              <img 
                alt="Porite Meaning"
                src={PoriteMeaning}
                id="poriteMeaning"
                class="products"
              />
            </div>
          </div>
            <div className="botLayout2">
              <div className="col">
                <img 
                  alt="Porite Map"
                  src={map}
                  id="map"
                  class="products"
                />
              </div>
                <div className="col">
                  <div className="row2">
                    <h1 id="linkHeader2">Large Network</h1>
                    <p className="productDesc2">
                    Porite has access to a vast network of experienced individuals. 
                    </p>
                    <Link to= "/network">
                      <li id="link2">Learn more about our network</li>
                    </Link>
                  </div>
                </div>
            </div>
            <div className="botLayout3">
            <div className="col">
              <div className="row3">
                <h1 id="linkHeader3">Vast Industry </h1>
                  <p className="productDesc3">
                  Our presence is seen in the automotive, industrial, 
                  agricultural, and consumer products industry.
                  </p>
                  <Link to= "/products">
                    <li id="link3">Learn more about our products</li>
                  </Link>
              </div>
            </div>
              <div className="col">
              <img 
                alt="Porite Map"
                src={PoriteProducts}
                id="poriteProducts"
                class="products"
              />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;