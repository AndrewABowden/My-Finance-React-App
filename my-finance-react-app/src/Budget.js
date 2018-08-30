import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Budget.css';

//income stream table row component
class incomeStream extends Component {
 render() {
   return (
  <tr>
      <td>Paycheck</td>
      <td>$2000</td>
      <td>2</td>
  </tr>
   )
 }
}
//New budget finance app

//model income stream as number then conver to dollars later
class Budget extends Component {
  render() {

    const Budget = {
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
          "amount": 2000,
      },
      { 
        "name": "Paycheck",
        "amount": 2000,
      },
      { 
        "name": "Student Loans",
        "amount": 250,
      },
      { 
        "name": "Credit Card",
        "amount": 200,
      },
    ]
  }
    return (
      <div className="Budget">
        <h1><b>Budget</b></h1> <hr />
        <div>
        Income Stream<br />
        Paycheck $2000 2/month <hr />
        </div>
            <table>
                <thead>
                    <td>Name</td>
                    <td>Amount</td>
                    <td>Frequency</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Paycheck</td>
                        <td>$2000</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>

<div>
    <h2>Expenses:</h2><hr />
        <table>
            <thead>
                <th>Name</th>
                <th>Amount</th>
            </thead>
            <tbody>
                <tr>
                    <td>Mortgage</td>
                    <td>$1000</td>
                </tr>
                <tr>
                    <td>Internet</td>
                    <td>$60</td>
                </tr>
                <tr>
                    <td>Student Loans</td>
                    <td>$250</td>
                </tr>
                <tr>
                    <td>Credit Cards</td>
                    <td>$200</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    );
  }
}
export default Budget;  