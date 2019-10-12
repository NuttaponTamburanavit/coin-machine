import styled from 'styled-components';

const CalculatorStyle = styled.div `
  width: 100%;
  min-height: 300px;
  max-width: 600px;
  background: #fff; 

  padding: 20px;
  margin: auto;

  .exchange-btn {
    display: inline-block;
    width: 100%;
    color: #fff;
    background: #95b0ff;

    font-size: 1.4em;
    line-height: 1.4;

    padding: 8px 20px;
    border-radius: 0px;
    transition: .2s;
    cursor: pointer;

    &:hover {
      background: #7598ff;
    }

    &:focus {
      outline: none;
    }
  }

  .result-container {
    font-size: 2em;
    text-align: center;
    padding: 20px 10px;
  }
`;

export default CalculatorStyle;