import React, { Component } from 'react';
import CalculatorStyle from './style';

class Calculator extends Component {
  state = {
    calc: "Input your cash."
  }
  render() {
    const { calc } = this.state;

    return (
      <CalculatorStyle>
        <div className="form-layout">
          <h2>COIN EXCHANGE</h2>
          <input className="form-control"/>
          <button className="exchange-btn">Exchange</button>
        </div>
        
        <hr/>

        <div className="result-container">
          {calc}
        </div>
      </CalculatorStyle>
    )
  }
}

export default Calculator;