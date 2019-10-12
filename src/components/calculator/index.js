import React, { Component } from 'react';
import CalculatorStyle from './style';

class Calculator extends Component {
  state = {
    inputCash: "",
    returnCash: "Result."
  }

  inputCashChange = (event) => {
    // console.log(event.target.value)
    let inputCash = event.target.value;
    this.setState({ inputCash })
  }

  handleSubmit = () => {
    const { inputCash } = this.state;
    console.log({ inputCash })
  }

  render() {
    const { inputCash, returnCash } = this.state;

    return (
      <CalculatorStyle>
        <div className="form-layout">
          <h2>COIN EXCHANGE</h2>
      
          <input className="form-control" 
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