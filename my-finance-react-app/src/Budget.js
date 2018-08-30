import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Budget.css';

//income stream table row component
//capitalize Components
class IncomeStream extends Component {
 render() {
   return (
      <tr>
           <td>{this.props.name}</td>
           <td>{this.props.amount}</td>
           <td>{this.props.frequency}</td>
     </tr>
   )
 }
}

class Expense extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
           <td>{this.props.amount}</td>
          
      </tr>
    )
  }
}
//New budget finance app
//split up fields into props and draw them above into income stream
//model income stream as number then conver to dollars later
class Budget extends Component {
  render() {

  //Map over our incoome stream componennt
  //passes our props into this stream through props and spread
  const incomeStreamComponents =  this.props.incomeStreams.map(incomeStreamObject => {
    return (
      <IncomeStream {...incomeStreamObject } />
    );
  });

  //expenses component map to shoot above into income stream
  const expenses = this.props.expenses.map(expenseObject => {
    return (
      <Expense {...expenseObject} />
    );
  });

    return (
      <div className="Budget">
        <h1><b>Budget</b></h1> <hr />
        <div>
        
        </div>
            <table>
                <thead>
                    <td>Name</td>
                    <td>Amount</td>
                    <td>Frequency</td>
                </thead>
                <tbody>
                {incomeStreamComponents}
                </tbody>
                    {/* <tr>
                        <td>Paycheck</td>
                        <td>$2000</td>
                        <td>2</td>
                    </tr> */}
            </table>

<div>
    <h2>{expenses}</h2><hr />
        <table>
            <thead>
             
            </thead>
            <tbody>
       
            </tbody>
        </table>
        </div>
        </div>
    );
  }
}
export default Budget;  