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
                class="icons"
              />
              <p className="contactInfo">(248) 597-9988</p>
            </div>
            <div className="col">
              <img 
                alt="Location Icon"
                src={locationicon}
                id="locationIcon"
                class="icons"
              />
              <p className="contactInfo">1295 Combermere Dr, Troy, MI 48083</p>
            </div>
            <div className="col">
              <img 
                alt="Mail Icon"
                src={mailicon}
                id="mailIcon"
                class="icons"
              />
              <p className="contactInfo">sales@poriteusa.com</p>
            </div>
          </div>
        <div className="cform">
          <h1 className="form-title">Request a Quote</h1>
        <form action="#">
            <label for="name">Name <span className="asterisk">*</span></label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              onChange={this.props.changeName}
              value={this.props.name}
              required
            />
            <label for="cname">Company Name <span className="asterisk">*</span></label>
            <input 
              type="text" 
              id="cname" 
              name="cname"
              onChange={this.props.changeCompany} 
              value={this.props.cname}
              required
            />
            <label for="tphone">Telephone <span className="asterisk">*</span></label>
            <input 
              type="text" 
              id="tphone" 
              name="tphone"
              onChange={this.props.changeTelephone} 
              value={this.props.telephone}
            />
            <label for="email">Email</label>
            <input 
              type="text" 
              id="email" 
              name="email"
              onChange={this.props.changeEmail} 
              value={this.props.email} 
            /> 
            <label for="material">Material</label>
            <input 
              type="text" 
              id="material" 
              name="material"
              onChange={this.props.changeMaterial} 
              value={this.props.material}
            /> 
            <label for="quantity">Quantity</label>
            <input 
              type="text" 
              id="quantity" 
              name="quantity"
              onChange={this.props.changeQuantity}
              value={this.props.quantity}
              />
            <label for="date">Delivery Date</label>
            <input 
              type="text" 
              id="date" 
              name="date"
              onChange={this.props.changeDate}
              value={this.props.ddate}
            />
            <label for="idesc">Item Description</label>
            <textarea 
              id="idesc" 
              name="idesc"
              onChange={this.props.changeDesc}
              value={this.props.description}
            />
          
            <input type="submit" onClick={e => this.props.handleFormSubmit(e)} value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;