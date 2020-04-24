import React, { Component } from 'react';
import "./Contact.css"

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="cform">
          <h1 className="form-title">Request a Quote</h1>
        <form action="action_page.php">
            <label for="name">Name <span className="asterisk">*</span></label>
            <input type="text" id="name" name="name" required/>
            <label for="cname">Company Name <span className="asterisk">*</span></label>
            <input type="text" id="cname" name="cname" required/>
            <label for="tphone">Telephone <span className="asterisk">*</span></label>
            <input type="text" id="tphone" name="tphone" required/>
            <label for="email">Email</label>
            <input type="text" id="email" name="email"/> 
            <label for="material">Material</label>
            <input type="text" id="material" name="material"/> 
            <label for="quantity">Quantity</label>
            <input type="text" id="quantity" name="quantity"/>
            <label for="date">Delivery Date</label>
            <input type="text" id="date" name="date"/>
            <label for="idesc">Item Description</label>
            <textarea id="idesc" name="idesc"></textarea>
          
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;