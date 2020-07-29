import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import NavigationBar from './Components/NavigationBar.js'
import Products from './Components/Products'
import Home from './Components/Home';
import About from './Components/About';
import Network from './Components/Network';
import Technology from './Components/Technology';
import Safety from './Components/Safety';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './Components/Footer';
import axios from 'axios';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach (
    (val) => val.length > 0 && (valid = false)
  );
  return valid
}
const validEmailRegex = 
      RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      cname:'',
      telephone:'',
      email:'',
      material:'',
      quantity:'',
      ddate:'',
      description:'',
      mailSent: false,
      error: null,
      errors: {
        name:'',
        email:'',
        telephone: '',
      }
    };
  }
  
 

  handleChange = (key, e) =>{
    e.preventDefault();
    const {name, value} = e.target
    let errors = this.state.errors;
    switch (name) {
      case 'name': 
        errors.name =
         value.length < 5
          ? 'Full Name must be 5 characters long!'
          : '';
        break;
        case 'email':
          errors.email =
            validEmailRegex.test(value)
            ? ''
            :'Email is not valid!';
          break;
          case 'telephone':
            errors.telephone = 
              value.length < 12 
                ? 'telephone must be 12 characters long!'
                : '';
            break;
            default:
              break;
        
    }
    this.setState({errors,[key]: e.target.value})
  }

  

  handleFormSubmit = e => {
    e.preventDefault();
    if(validateForm(this.state.errors)) {
      axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    } else {
      console.error('Invalid Form')
    }
      
  }

  resetForm () {
    this.setState({name: '', cname: '', telephone: '', email: '', material: '', quantity: '', ddate: '', description: '', })
 }

 
  render() {
    return (
      <div className="App" style={{flex: 1}}>
        <NavigationBar></NavigationBar>
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
            path='/safety' 
            component={Safety}
          />
          <Route 
            path='/contact' 
            render={
              (props) => 
              <Contact 
                {...props}
                name={this.state.name}
                cname={this.state.cname}
                telephone={this.state.telephone}
                email={this.state.email}
                material={this.state.material}
                quantity={this.state.quantity}
                description={this.state.description}
                ddate={this.state.ddate}
                changeName= {this.handleChange.bind(this, "name")}
                changeCompany={this.handleChange.bind(this, "cname")}
                changeTelephone={this.handleChange.bind(this, "telephone")} 
                changeEmail= {this.handleChange.bind(this, "email")}
                changeMaterial= {this.handleChange.bind(this, "material")}
                changeQuantity= {this.handleChange.bind(this, "quantity")}
                changeDate= {this.handleChange.bind(this, "ddate")}
                changeDesc= {this.handleChange.bind(this, "description")}
                handleFormSubmit={this.handleFormSubmit}
              />
            }
          />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;