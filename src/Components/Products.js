import React, { Component } from 'react';
import SeatAdjustment from "../pictures/SeatAdjustment.jpg";
import Steel from "../pictures/Steel.jpg";
import Steering from "../pictures/Steering.jpg";
import Synchronizer from "../pictures/Synchronizer.jpg";
import Transmission from "../pictures/Transmission.jpg";
import GearBox12V from "../pictures/GearBox12V.jpg";
import GearBox22V from "../pictures/GearBox22V.jpg";
import PowerToolParts1 from "../pictures/PowerToolParts1.jpg";
import StainlessSteelParts from "../pictures/StainlessSteelParts.jpg";
import OAParts from "../pictures/OAParts.jpg";
import MagneticParts from "../pictures/MagneticParts.jpg";
import VVT from "../pictures/VVT.jpg";
import VacuumPump from "../pictures/VacuumPump.jpg";
import ElectronicPower from "../pictures/ElectronicPower.jpg";
import ElectronicBrake from "../pictures/ElectronicBrake.jpg";
import "./Products.css"

class Products extends Component {
  render() {
    return (
      <div className="container">
          <h1 className="autoParts">Power Tools</h1>
          <div className ="parts1">
            <div className="col">
              <img 
                alt="Gear Box 12V"
                src={GearBox12V}
                id="12V"
                className="parts"
              />
              <h2 className="productTitle">2 Speed Gear Boxes (12V)</h2>
            </div>
            <div className= "col">
              <img 
                alt="Gear Box 22V"
                src={GearBox22V}
                id="22V"
                className="parts"
              />
              <h2 className="productTitle">2 Speed Gear Boxes (21.6V)</h2>
            </div>
            <div className="col">
              <img 
                alt="Power Tool Parts"
                src={PowerToolParts1}
                id="powerToolParts"
                className="parts"
              />
              <h2 className="productTitle">Power Tool Parts</h2>
            </div>
          </div>
          <h1 className="autoParts">Auto Parts</h1>
          <div className="parts2">
            <div className="col">
              <img 
                alt="Seat Adjustment Parts"
                src={SeatAdjustment}
                id="seatAdjustment"
                className="parts"
              />
              <h2 className="productTitle">Seat Adjustment Parts</h2>
            </div>
            <div className="col">
              <img 
                alt="Steel"
                src={Steel}
                id="steelParts"
                className="parts"
              />
              <h2 className="productTitle">Stainless Steel Parts</h2>
            </div>
            <div className="col">
              <img 
                alt="Steering Parts"
                src={Steering}
                id="steeringParts"
                className="parts"
              />
              <h2 className="productTitle">Steering Wheel Parts</h2>
            </div>
          </div>
          <div className="parts3">
            <div className="col">
              <img 
                alt="Synchronizer"
                src={Synchronizer}
                id="synchronizerParts"
                className="parts"
              />
              <h2 className="productTitle">Synchronizer Hubs</h2>
            </div>
            <div className="col">
              <img 
                alt="Transmission"
                src={Transmission}
                id="transmissionParts"
                className="parts"
              />
              <h2 className="productTitle">Transmission Parts</h2>
            </div>
            <div className="col">
              <img 
                alt="VVT"
                src={VVT}
                id="VVTparts"
                className="parts"
              />
              <h2 className="productTitle">VVT Parts</h2>
            </div>
          </div>
          <div className="parts4">
            <div className="col">
              <img 
                alt="Electronic Brake Parts"
                src={ElectronicBrake}
                id="electronicBrake"
                className="parts"
              />
              <h2 className="productTitle">Electronic Parking Brake Parts (E.P.B.)</h2>
            </div>
            <div className="col">
              <img 
                alt="Electronic Power Steering Parts"
                src={ElectronicPower}
                id="electronicPower"
                className="parts"
              />
              <h2 className="productTitle">Eletronic Power Steering Parts (E.P.S.)</h2>
            </div>
            <div className="col">
              <img 
                alt="Vacuum Pump"
                src={VacuumPump}
                id="vacuumPump"
                className="parts"
              />
              <h2 className="productTitle">Vacuum Pump Coupling</h2>
            </div>
          </div>
          <h1 className="MetalInjection">Metal Injection Molding</h1>
          <div className= "parts5">
            <div className="col">
              <img 
                alt="Stainless Steel Parts"
                src={StainlessSteelParts}
                id="stainlessSteel"
                className="parts"
              />
              <h2 className="productTitle">2 Speed Gear Boxes (12V)</h2>
            </div>
            <div className= "col">
              <img 
                alt="OA Parts"
                src={OAParts}
                id="OA"
                className="parts"
              />
              <h2 className="productTitle">2 Speed Gear Boxes (21.6V)</h2>
            </div>
            <div className="col">
              <img 
                alt="Magnetic Parts"
                src={MagneticParts}
                id="magneticParts"
                className="parts"
              />
              <h2 className="productTitle">Power Tool Parts</h2>
            </div>
          </div>
          <div className="reminder">
            <h1 className="reminderTitle"> 
              Please Visit <a href="http://www.porite.com.tw/en/html/product/index.php?muid=71">Porite Taiwan</a> for more product information.
            </h1>
          </div>
      </div>
    );
  }
}

export default Products;