import React, { Component } from 'react';
import { calculatingChange } from '../../helpers/cash';

import CalculatorStyle from './style';

class Calculator extends Component {
  state = {
    inputCash: "",
    returnCash: ""
  }

  inputCashChange = (event) => {
    let inputCash = event.target.value;
    this.setState({ inputCash })
  }

  handleSubmit = () => {
    const { inputCash } = this.state;

    if (inputCash === "" || inputCash === "0")
      return

    this.setState({ returnCash: calculatingChange(inputCash) })
  }

  render() {
    const { inputCash, returnCash } = this.state;

    return (
      <CalculatorStyle>
        <div className="form-layout">
          <h2>COIN EXCHANGE</h2>

          <input className="form-control" 
            type="number"
            value={inputCash} 
            onChange={this.inputCashChange} 
            placeholder="Your cash" 
          />

          <button className="exchange-btn" onClick={this.handleSubmit}>
            Exchange
          </button>
        </div>
        
        <hr/>

        <div className="result-container">
          {returnCash}
        </div>
      </CalculatorStyle>
    )
  }
}

export default Calculator;