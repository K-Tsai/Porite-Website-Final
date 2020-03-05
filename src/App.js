import React from 'react';
import NavigationBar from './Components/NavigationBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Components/Description.js'
import './App.css'
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Description></Description>
    </div>
  );
}

export default App;
