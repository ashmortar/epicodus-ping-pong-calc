var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var numberOne = parseInt($("#number-one").val());
    var numberTwo = parseInt($("#number-two").val());
    var operator = $("#operator").val();
    var calculator = new Calculator("hot pink");
    var output = calculator.calculate(numberOne, numberTwo, operator);
    $('.calculation').text(output);
  });
});
