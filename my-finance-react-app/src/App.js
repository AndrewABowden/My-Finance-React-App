import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Budget from "./Budget.js";

//Home Page displays on normal startup.

//Injecting the <Budget /> component lets us add it into our app.
class App extends Component {
  render() {
    return (
      <div className="App">
      <Budget />
       </div>
    );
  }
}

export default App;
