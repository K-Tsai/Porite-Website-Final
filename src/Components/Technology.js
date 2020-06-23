import React, { Component } from 'react';
import PowderMetallurgy from "../pictures/PowderMetallurgy.jpg";
import "./Technology.css";

class Technology extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
          <img 
              alt="PowderMetallurgy"
              src={PowderMetallurgy}
              id="powderMetallurgy"
              className="technology"
            />
            <div className="description">
              <h1 className="techTitle">Powder Metallurgy</h1>
              <p className="techDesc">
                Unlike the processes of classic metallurgy, which always involves 
                the solidification of molten metal, powder metallurgy is based on metal powders. 
                Around 1908 the first self-lubricating parts appeared, followed in 1935 by 
                the manufacturing of the first mechanical parts for the automotive industry. 
                Powder metallurgy, or sintering, makes possible to obtain extremely accurate 
                geometric parts, weighing from a few grams to several kilos, which are very 
                resistant. Sintering is particularly well adapted to the medium and very large 
                parts series.
             </p> 
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Technology;