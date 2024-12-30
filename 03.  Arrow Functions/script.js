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

// Arrow Function
// Simple form
const calcAgeArr = (birthYear) => 2037 - birthYear;

const ageArr = calcAgeArr(1988);
console.log("Age from arrow functions", ageArr);

// Arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Ephraim"));
console.log(yearsUntilRetirement(1980, "Bob"));
