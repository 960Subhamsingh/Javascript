/*
Write a script that shows the sign (+ or -) of the
   product of three real numbers without calculating it.
   Use a sequence of if statements.
*/
// Read the required real numbers.
var Number = Number(window.prompt("User please enter a number", ""));
var Number2 = Number(window.prompt("Now please enter again a number", ""));
var Number3 = Number(window.prompt("OK! One last time please enter a number", ""));


if (firstNumber === 0 || secondNumber === 0 || thirdNumber === 0) {
    console.log("The product is equal to zero.");
}

if (firstNumber > 0 && secondNumber > 0 && thirdNumber > 0) {
    console.log("The sign of the product is + .");
}

if (firstNumber > 0 && secondNumber > 0 && thirdNumber < 0) {
    console.log("The sign of the product is - .");
}

if (firstNumber > 0 && secondNumber < 0 && thirdNumber > 0) {
    console.log("The sign of the product is - .");
}

if (firstNumber > 0 && secondNumber < 0 && thirdNumber < 0) {
    console.log("The sign of the product is + .");
}

if (firstNumber < 0 && secondNumber > 0 && thirdNumber > 0) {
    console.log("The sign of the product is - .");
}

if (firstNumber < 0 && secondNumber > 0 && thirdNumber < 0) {
    console.log("The sign of the product is + .");
}

if (firstNumber < 0 && secondNumber < 0 && thirdNumber > 0) {
    console.log("The sign of the product is + .");
}

if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) {
    console.log("The sign of the product is - .");
}
