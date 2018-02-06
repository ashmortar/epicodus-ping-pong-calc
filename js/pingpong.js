function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.calculate = function(numberOne, numberTwo, operator) {
  if (operator === "+" ) {
    console.log(numberOne + " " + operator + " " + numberTwo);
    return numberOne + numberTwo;
  } else if (operator === "-" ) {
    console.log(numberOne + " " + operator + " " + numberTwo);
    return numberOne - numberTwo;
  }  else if (operator === "*" ) {
    console.log(numberOne + " " + operator + " " + numberTwo);
    return numberOne * numberTwo;
  } else if (operator === "/" ) {
    console.log(numberOne + " " + operator + " " + numberTwo);
    return numberOne / numberTwo;
  } else {
    console.log("something went wrong");
  }
};

exports.calculatorModule = Calculator;
