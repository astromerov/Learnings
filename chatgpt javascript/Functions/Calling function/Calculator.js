    /*

    Exercise: Build a Basic Calculator

    Create a simple calculator using functions. Define four functions named add, subtract, multiply, and divide.
    Each function should take two parameters and perform the respective operation.
    For example, the add function should add two numbers.

    After defining the functions, call each of them with different values and display the results using console.log.

    */


    function add(a, b) {
        // Perform addition and return the result
        return a + b;
    }
    
    function subtract(a, b) {
        // Perform subtraction and return the result
        return a - b;
    }
    
    function multiply(a, b) {
        // Perform multiplication and return the result
        return a * b;
    }
    
    function divide(a, b) {
        // Perform division and return the result
        return a / b;
    }
    
    // Call each function with different values and display the results
    console.log("Addition:", add(5, 3));       // Output: 8
    console.log("Subtraction:", subtract(8, 4));  // Output: 4
    console.log("Multiplication:", multiply(6, 2)); // Output: 12
    console.log("Division:", divide(10, 2));    // Output: 5