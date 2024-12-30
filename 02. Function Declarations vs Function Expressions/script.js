"use strict";

// Function Declaration
function calcAgeDec(birthYear) {
    return 2037 - birthYear;
}

const ageDec = calcAgeDec(1988);
console.log("Age from function declarations", ageDec);

// Function Expression
const calcAgeExp = function (birthYear) {
    return 2037 - birthYear;
};

const ageExp = calcAgeExp(1988);
console.log("Age from function expressions", ageDec);

/* NOTE: Functions are values. 
Functions can be assigned, copied or declared in any place of the code. If the function is declared as a separate statement in the main code flow, that's called a “Function Declaration”. 
If the function is created as a part of an expression, it's called a “Function Expression”. And expressions produce values.
*/
