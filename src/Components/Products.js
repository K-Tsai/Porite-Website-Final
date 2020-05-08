import React, { Component } from 'react';
import Sidebar from "./Sidebar.js"
import "./Products.css"
class Products extends Component {
  render() {
    return (
      <div id="Products">
        <Sidebar/>
        <div id="page-wrap">
          <h1>Products</h1>
          <h2>Check out the products page with our numerous parts</h2>
        </div>
      </div>
    );
  }
}

export default Products;