import React, { Component } from 'react';
import SeatAdjustment from "../pictures/SeatAdjustment.jpg";
import Steel from "../pictures/Steel.jpg";
import Steering from "../pictures/Steering.jpg";
import Synchronizer from "../pictures/Synchronizer.jpg";
import Transmission from "../pictures/Transmission.jpg";
import VVT from "../pictures/VVT.jpg";
import "./Products.css"

class Products extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="autoParts">Auto Parts</h1>
          <div className="parts1">
            <div className="col">
              <img 
                alt="Seat Adjustment Parts"
                src={SeatAdjustment}
                id="seatAdjustment"
                class="parts"
              />
              <h2>Seat Adjustment Parts</h2>
            </div>
            <div className="col">
              <img 
                alt="Steel"
                src={Steel}
                id="steelParts"
                class="parts"
              />
              <h2>Stainless Steel Parts</h2>
            </div>
            <div className="col">
              <img 
                alt="Steering Parts"
                src={Steering}
                id="steeringParts"
                class="parts"
              />
              <h2>Steering Wheel Parts</h2>
            </div>
          </div>
          <div className="parts2">
            <div className="col">
              <img 
                alt="Synchronizer"
                src={Synchronizer}
                id="synchronizerParts"
                class="parts"
              />
              <h2>Synchronizer Hubs</h2>
            </div>
            <div className="col">
              <img 
                alt="Transmission"
                src={Transmission}
                id="transmissionParts"
                class="parts"
              />
              <h2>Transmission Parts</h2>
            </div>
            <div className="col">
              <img 
                alt="VVT"
                src={VVT}
                id="VVTparts"
                class="parts"
              />
              <h2>Transmission Parts</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;