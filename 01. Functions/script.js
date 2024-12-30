"use strict";

/* 
     Functions are fundamental building blocks of JavaScript.
*/

// Function Declaration
function logger() {
    console.log("My name is Ephraim");
}

// Invoking/calling/running the function
logger();

// Function with parameters
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;

    //     returning function value
    return juice;
}

// Passing arguments to a function/Calling function with arguments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/* NOTE: he main difference between a parameter and an argument is that a parameter is a variable that defines the inputs a function can accept, while an argument is the value passed to the function when it is called. In simple words, parameters are placeholders and arguments are the real value.
 */
