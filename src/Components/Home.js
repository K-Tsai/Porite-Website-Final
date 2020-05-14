import React from 'react';
import PoriteFrontPage from '../pictures/PoriteFrontPage.jpg';
import AutoParts from '../pictures/AutoParts.jpg';
import MetalInjectionMolding from '../pictures/MetalInjectionMolding.jpg';
import OillessBearingParts from '../pictures/OillessBearingParts.jpg';
import PoriteMeaning from '../pictures/PoriteMeaning.jpg';
import map from '../pictures/map.jpg';
import PoriteProducts from '../pictures/PoriteProducts.jpg';
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
          {/* <p className= 'Intro'>	
            Created in 1952 in Japan by Mr. Tatsunosuke Kikuchi, today chaired by
            Shigeo AOKI, Porite group has become a major actor in the manufacturing
            of sintered mechanical parts, and the world leader in the production of
            bushings, bearings, gears, spacers, and structural components for the automotive, 
            industrial, agricultural, and consumer products industry.
          </p> */}
          <h1 className="partsCenter">Products</h1>
          <div className="products">
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
          <div className="botLayout">
          <div className="col">
              <p className="productDesc">
                Created in 1952 in Japan by Mr. Tatsunosuke Kikuchi, 
                Porite group has become a major actor in the manufacturing
                of sintered mechanical parts.
              </p>
            </div>
            <div className="col">
              <img 
                alt="Porite Meaning"
                src={PoriteMeaning}
                id="PoriteMeaning"
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
                <p className="productDesc2">
                Porite has access to a vast network of experienced individuals
                that gives us the ability to manufacture even the most complex PM parts. 
                </p>
              </div>
            </div>
            <div className="botLayout2">
            <div className="col">
                <p className="productDesc3">
                A wide range of bushings, bearings, gears, spacers, and structural
                components for the automotive, industrial, agricultural, and consumer 
                products industry.
                </p>
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