export const fixValueDecimalMath = (value) => {
  return value * 100;
}

export const typeCash = {
  hundredDollar: { 
    value: fixValueDecimalMath(100), 
    type: 'dollar bill' 
  },
  fiftyDollar: { 
    value: fixValueDecimalMath(50), 
    type: 'dollar bill' 
  },
  twentyDollar: { 
    value: fixValueDecimalMath(20), 
    type: 'dollar bill' 
  },
  tenDollar: { 
    value: fixValueDecimalMath(10), 
    type: 'dollar bill' 
  },
  fiveDollar: { 
    value: fixValueDecimalMath(5), 
    type: 'dollar bill' 
  },
  oneDollar: { 
    value: fixValueDecimalMath(1), 
    type: 'dollar bill' 
  },
  quarter: { 
    value: fixValueDecimalMath(0.25), 
    type: 'quarter' 
  },
  dime: { 
    value: fixValueDecimalMath(0.1), 
    type: 'dime' 
  },
  nickel: { 
    value: fixValueDecimalMath(0.05), 
    type: 'nickel' 
  },
  penny: { 
    value: fixValueDecimalMath(0.01), 
    type: 'penny' 
  }
}

export const convertMultiAmount = (type, amount) => {
  let text = type;
  if (amount > 1) {
    if (type == 'penny') {
      text = `pennies`
    } else {
      text = `${text}s`
    }
  }
  return text
}

export const calculatingChange = (value) => {
  const {
    hundredDollar, fiftyDollar, twentyDollar, tenDollar, fiveDollar, oneDollar, quarter, dime, nickel, penny 
  } = typeCash;
  let cash = parseFloat(value) * 100;
  let textCash = `Your change is`;

  [hundredDollar, fiftyDollar, twentyDollar, tenDollar, fiveDollar, oneDollar, quarter, dime, nickel, penny].map((condition) =>{
    if (cash >= condition.value) {
      let textValue = "";
      if (condition.type === 'dollar bill') {
        textValue = `${condition.value / 100} `;
      }

      let amount = parseInt(cash / condition.value);
      cash = cash - (condition.value * amount);

      let cashRemain = ',';
      let cashFinish = '';
      if (cash === 0) {
        cashRemain = '';
        cashFinish = 'and '
      }


      textCash = textCash + ` ${cashFinish}${amount} ${textValue}${convertMultiAmount(condition.type, amount)}${cashRemain}`;
    }
  });
  return textCash
}