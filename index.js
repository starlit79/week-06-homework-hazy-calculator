function calculate(numberOne, operant, numberTwo) {
  let numberOneInt = parseInt(numberOne)
  let numberTwoInt = parseInt(numberTwo)
  let result = 0;
  if (numberOne === undefined) {
     numberOneInt = 0;
  }
  if (numberTwo === undefined) {
    numberTwoInt = 0;
  }

    switch (operant) {
      case "*":
        result = numberOneInt * numberTwoInt;
        break;

      case "/":
        result = numberOneInt / numberTwoInt;
        break;

      case "+":
        result = numberOneInt + numberTwoInt;
        break;

      case "-":
        result = numberOneInt - numberTwoInt;
        break;

      default:
        result = 0;
        break;
    }
  return result
}


/**
 Export an object with two properties.
 One property is `calculate`. The value will be the calculate function.
 The other property is `features` which contains a string value with a description.
 */
console.log(calculate("4", "+", "a"))
module.exports = {
  calculate,
  features: 'Add, Subtract, division, multiplication.'
}
