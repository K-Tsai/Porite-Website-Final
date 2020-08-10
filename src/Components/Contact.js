import React, { Component } from 'react';
import phoneicon from "../pictures/phoneicon.jpg";
import locationicon from "../pictures/locationicon.jpg";
import mailicon from "../pictures/mailicon.jpg";
import "./Contact.css"; 

class Contact extends Component {
  render() {
    return (
      //Designed by @Freepik Link:www.freepik.com
      <div className="container">
        <div className="contacts">
            <div className="col">
              <img 
                alt="Phone Icon"
                src={phoneicon}
                id="phoneIcon"
                className="icons"
              />
              <p className="contactInfo">(248) 597-9988</p>
            </div>
            <div className="col">
              <img 
                alt="Location Icon"
                src={locationicon}
                id="locationIcon"
                className="icons"
              />
              <p className="contactInfo">1295 Combermere Dr, Troy, MI 48083</p>
            </div>
            <div className="col">
              <img 
                alt="Mail Icon"
                src={mailicon}
                id="mailIcon"
                className="icons"
              />
              <p className="contactInfo" id= "botInfo">sales@poriteusa.com</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Contact;