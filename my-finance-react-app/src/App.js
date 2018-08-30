import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Budget from "./Budget.js";
import './Budget.css';

//Home Page displays on normal startup.
const budget = {
  "incomeStreams": [
    { 
      "name": "Paycheck",
      "amount": 2000,
      "frequency": 2,
    },
  ],
"expenses": [
  {
      "name": "Mortgage",
      "amount": 1000,
  },
  { 
    "name": "Internet",
    "amount": 62,
  },
  { 
    "name": "Student Loans",
    "amount": 250,
  },
  { 
    "name": "Credit Card",
    "amount": 200,
  },
  {
    "name": "Food",
    "amount": 700,
  }
]
}


//use spread operator to spread the Budget component out
//Injecting the <Budget /> component lets us add it into our app.
class App extends Component {
  render() {
    return (
      <div className="App">
      <Budget {...budget} />
       </div>
    );
  }
}

export default App;
