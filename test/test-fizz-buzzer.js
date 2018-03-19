// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should divide a number by 3, 5, or 15 and return a phrase based upon the result', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 5, expected: 'buzz'},
      {num: 3, expected: 'fizz'},
      {num: 1, expected: 1},
      {num: -4, expected: -4},
    ];
    // for each value of num being passed into the function, 
    // 'fizzBuzzer" should produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should produce error if input isn\'t a number', function() {
    // range of bad inputs where num is not a number
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]]; 
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});