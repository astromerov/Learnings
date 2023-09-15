/*

What is a function?
It's a block of code. It's block of code that you can call by name whenever you need to perform a specific task

*/

// Definiting a function

function functionName(parameter) {
    // Code to be executed here
    // You can use parameters as inputs
    return result;  // Optionally you can return a value
}

// Example

function addNumbers(a, b) {
    return a + b
}

let result = addNumbers(5, 3);      // Calling the function with arguements 5 and 3
console.log(result);

// Arrow functions - they are used for concise operations
const numbers = (a, b) => a + b;        // Same as the previous example

let resultTwo = addNumbers(5, 3);
console.log(resultTwo);                // Output: 8

// Function expressions - where you can define functions within variables, known as function expressions.
const multiply = function (x, y) {
    return x * y;
}

let resultThree = multiply(4, 6)
console.log(resultThree);

// Higher order functions - functions can be used as arguments or returned by other functions. These are called higher-order functions.

const doOperation = (operation, x, y) => operation (x, y);

const addition = (a, b) => a + b;
const multiplication = (a, b) => a * b;

console.log(doOperation(addition, 4, 3))        // Output: 7
console.log(doOperation(multiplication, 4, 3))      // Output: 12


