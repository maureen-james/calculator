// back end code

var add = function(number1, number2) {
    return number1 + number2;
  };
  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  var multiply = function(number1, number2) {
    return number1 * number2;
  };
  var divide = function(number1, number2) {
    return number1 / number2;
  };
  var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(add(number1, number2));
 
// front end code

$(document).ready(function() {
    $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
    });
});