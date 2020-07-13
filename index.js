function calculate(numberOne, operant, numberTwo) {
  let numberOneInt = parseInt(numberOne)
  let numberTwoInt = parseInt(numberTwo)
  
  if (numberOne === undefined) {
     numberOneInt = 0;
  }
  if (numberTwo === undefined) {
    numberTwoInt = 0;
  }

    switch (operant) {
      case "*":
        return numberOneInt * numberTwoInt;
        break;

      case "/":
        return numberOneInt / numberTwoInt;
        break;

      case "+":
        return numberOneInt + numberTwoInt;
        break;

      case "-":
        return numberOneInt - numberTwoInt;
        break;

      default:
        return 'We are currently not supporting this ' + operant
        break;
    }
  return result
}


/**
 Export an object with two properties.
 One property is `calculate`. The value will be the calculate function.
 The other property is `features` which contains a string value with a description.
 */
console.log(calculate("4", "&", "5"))
module.exports = {
  calculate,
  features: 'Add, Subtract, division, multiplication.'
}
