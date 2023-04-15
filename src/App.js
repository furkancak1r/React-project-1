import React, { Component } from 'react';
import './App.css';
import User_Input from './components/User_Input';
import Navbar from './components/Navbar';
class App extends Component {
  
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <User_Input></User_Input>
      </div>
      
    )
  }
}

export default App;
