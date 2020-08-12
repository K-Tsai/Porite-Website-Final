import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import NavigationBar from './Components/NavigationBar.js'
import Products from './Components/Products'
import Home from './Components/Home';
import About from './Components/About';
import Network from './Components/Network';
import Technology from './Components/Technology';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './Components/Footer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <NavigationBar></NavigationBar>
        </div>
        <Switch>
          <Route 
            exact path='/' 
            component={Home}
          />
          <Route 
            path='/about' 
            component={About}
          />
          <Route 
            path='/products' 
            component={Products}
          />
          <Route 
            path='/network' 
            component={Network}
          />
          <Route 
            path='/technology' 
            component={Technology}
          />
          <Route 
            path='/contact' 
            component={Contact}
          />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;