import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


//New budget finance app

class Budget extends Component {
  render() {
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
</div>
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


        Mortgage: $1000 1month<br />
        Internet: $60 1/month<br />
        Weed: $150 1/month<br />
        Student Loans: $250 1/month><br />
        </div>
    );
  }
}

export default Budget;