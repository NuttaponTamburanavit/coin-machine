import { calculatingChange } from '../helpers/cash';
var assert = require('assert');

describe('Calculating cash', function() {
  it("input 1.00 shoud return 'Your change is 1 1 dollar bill' ", function(){
      assert.equal(calculatingChange("1.00"), 'Your change is 1 1 dollar bill');
  });
  it("input .99 shoud return 'Your change is 3 quarters, 2 dimes, and 4 pennies' ", function() {
      assert.equal(calculatingChange(".99"), 'Your change is 3 quarters, 2 dimes, and 4 pennies');
  });
  it("input 124.67 shoud return 'Your change is 1 100 dollar bill, 1 20 dollar bill, 4 1 dollar bills, 2 quarters, 1 dime, 1 nickel, and 2 pennies' ", function() {
      assert.equal(calculatingChange("124.67"), 'Your change is 1 100 dollar bill, 1 20 dollar bill, 4 1 dollar bills, 2 quarters, 1 dime, 1 nickel, and 2 pennies');
  });
});