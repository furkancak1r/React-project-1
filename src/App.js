import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
class App extends Component {
  
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <UserCard></UserCard>
      </div>
      
    )
  }
}

export default App;
