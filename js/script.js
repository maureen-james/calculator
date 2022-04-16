// // back end code

// var add = function(number1, number2) {
//     return number1 + number2;
//   };
//   var subtract = function(number1, number2) {
//     return number1 - number2;
//   };
//   var multiply = function(number1, number2) {
//     return number1 * number2;
//   };
//   var divide = function(number1, number2) {
//     return number1 / number2;
//   };
//   var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// alert(add(number1, number2));
 
// // front end code

// $(document).ready(function() {
//     $("form#add").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#add1").val());
//     var number2 = parseInt($("#add2").val());
//     var result = add(number1, number2);
//     $("#output").text(result);
//     });
//     $("form#subtract").submit(function(event) {
//       event.preventDefault();
//       var number1 = parseInt($("#subtract1").val());
//       var number2 = parseInt($("#subtract2").val());
//       var result = subtract(number1, number2);
//       $("#output").text(result);
//     });
// });


 //save a reference to our display dom element using an id of display
let display = document.getElementById("display");

//store the button references in an array
//this function gives back a NodeCollection instead of an array so we have to convert it to an array using Array.from().
let buttons = Array.from(document.getElementsByClassName("button"));

//add event listeners for the buttons, we'll map through the buttons array and add a click event listener for each
buttons.map((button) => {
    button.addEventListener("click", (e) => {
        //  e.target.innerText to give back the label of the button that was clicked.
        switch (e.target.innerText) {
            case "C": // when the user hits the "C" button we will clear the display
                display.innerText = "";
                break;
            case "=":
                try {
                    //wrap into a try catch block to handle errors
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                break;
            case "←":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});   